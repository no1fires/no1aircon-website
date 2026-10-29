import { brands, business } from '../data/business.js';
import { towns } from '../data/towns.js';

const businessId = `${business.url}/#business`;
const websiteId = `${business.url}/#website`;
const ogImage = `${business.url}/images/og-default.png`;

function areaServed() {
  return towns.map((town) => ({
    '@type': 'City',
    name: town.name,
    containedInPlace: {
      '@type': 'AdministrativeArea',
      name: town.county,
    },
  }));
}

function businessNode() {
  const sameAs = [business.facebook, business.instagram, business.googleBusiness, business.linkedin].filter(Boolean);
  const node = {
    '@type': 'HVACBusiness',
    '@id': businessId,
    name: business.name,
    alternateName: business.shortName,
    legalName: business.legalName,
    description: 'Air conditioning installation, servicing and repairs for homes and businesses, from a showroom in Ringwood, Hampshire. Covers Ringwood and surrounding towns in Hampshire and Dorset.',
    url: `${business.url}/`,
    logo: `${business.url}/images/no1-aircon-logo.svg`,
    image: ogImage,
    telephone: business.phoneIntl,
    email: business.email,
    priceRange: `From ${business.priceFrom}`,
    currenciesAccepted: 'GBP',
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.street,
      addressLocality: business.town,
      addressRegion: business.county,
      postalCode: business.postcode,
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.geo.lat,
      longitude: business.geo.lng,
    },
    areaServed: areaServed(),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: business.phoneIntl,
      email: business.email,
      contactType: 'customer service',
      areaServed: 'GB',
      availableLanguage: 'English',
    },
    sameAs,
    brand: brands.map((item) => ({
      '@type': 'Brand',
      name: item.name,
      logo: `${business.url}${item.logo}`,
    })),
  };

  if (Array.isArray(business.hours) && business.hours.length) {
    node.openingHoursSpecification = business.hours.map((slot) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: slot.days,
      opens: slot.opens,
      closes: slot.closes,
    }));
  }

  if (business.refcomCertified) {
    node.hasCredential = {
      '@type': 'EducationalOccupationalCredential',
      name: 'REFCOM certified',
    };
  }

  if (business.rating && Number(business.rating.count) > 0 && business.rating.value) {
    node.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: String(business.rating.value),
      reviewCount: String(business.rating.count),
      bestRating: '5',
    };
  }

  return node;
}

function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': websiteId,
    name: business.name,
    url: `${business.url}/`,
    inLanguage: 'en-GB',
    publisher: { '@id': businessId },
  };
}

function breadcrumbNode(crumbs) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: new URL(crumb.href, `${business.url}/`).href,
    })),
  };
}

function serviceNode(service, canonical) {
  return {
    '@type': 'Service',
    name: service.name,
    serviceType: service.serviceType,
    description: service.description,
    url: canonical,
    image: ogImage,
    provider: { '@id': businessId },
    areaServed: areaServed(),
  };
}

function faqNode(faqs) {
  const seen = new Set();
  const mainEntity = [];
  for (const faq of faqs) {
    if (!faq?.q || seen.has(faq.q)) continue;
    seen.add(faq.q);
    mainEntity.push({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    });
  }
  return {
    '@type': 'FAQPage',
    mainEntity,
  };
}

export function buildGraph({ canonical, crumbs = [], faqs = [], service = null }) {
  const graph = [businessNode(), websiteNode()];
  if (crumbs.length) graph.push(breadcrumbNode(crumbs));
  if (service) graph.push(serviceNode(service, canonical));
  if (faqs.length) graph.push(faqNode(faqs));
  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

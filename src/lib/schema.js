import { business } from '../data/business.js';
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
    makesOffer: [
      {
        '@type': 'Offer',
        name: 'Clivet single-room system',
        price: '1395',
        priceCurrency: 'GBP',
        description: `Single room systems from ${business.priceFrom} (Clivet, 0% VAT). This is the cheapest system, not the starting price for every brand.`,
      },
      {
        '@type': 'Offer',
        name: 'Multi-room air conditioning',
        price: '3499',
        priceCurrency: 'GBP',
        description: `Multi-room systems from ${business.multiRoomFrom}`,
      },
      {
        '@type': 'Offer',
        name: 'Air con servicing',
        price: '125',
        priceCurrency: 'GBP',
        description: `Air con servicing from ${business.servicingFrom}`,
      },
    ],
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
  const node = {
    '@type': 'Service',
    name: service.name,
    serviceType: service.serviceType,
    description: service.description,
    url: canonical,
    image: ogImage,
    provider: { '@id': businessId },
    areaServed: areaServed(),
  };
  if (service.slug === 'home-air-conditioning') {
    node.offers = {
      '@type': 'Offer',
      name: 'Clivet single-room system',
      price: '1395',
      priceCurrency: 'GBP',
      description: `Single room systems from ${business.priceFrom} (Clivet, 0% VAT). This is the cheapest system, not the starting price for every brand.`,
    };
  }
  if (service.slug === 'servicing') {
    node.offers = {
      '@type': 'Offer',
      name: 'Air con servicing',
      price: '125',
      priceCurrency: 'GBP',
      description: `Air con servicing from ${business.servicingFrom}`,
    };
  }
  return node;
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
        text: [
          ...(faq.paragraphs || [faq.a]),
          ...(faq.sources || []).map((source) => `${source.name}: ${source.url}`),
        ].filter(Boolean).join(' '),
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

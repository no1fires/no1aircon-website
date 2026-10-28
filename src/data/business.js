// Single source of truth for name, address and phone (NAP).
// Keep these identical to the Google Business Profile and every listing.
//
// INDEXABLE: leave false until launch so the preview is not indexed.
// Flip to true when the domain is ready. That one change removes the
// noindex meta tag, allows crawlers in robots.txt, and publishes the sitemap.
export const INDEXABLE = false;

export const contentUpdated = '2026-10-28';

// Paste the public GHL form webhook URL here. Leave empty until it exists.
// Do not put private API keys in this file. A build-time PUBLIC_QUOTE_ENDPOINT
// value overrides this if you would rather keep a tokenised URL out of git.
const envEndpoint = import.meta.env && import.meta.env.PUBLIC_QUOTE_ENDPOINT;
export const quoteEndpoint = envEndpoint || '';

export const business = {
  name: 'No1 Air Conditioning',
  shortName: 'No1 Air Con',
  legalName: 'No1 Energy Solutions Ltd',
  url: 'https://no1aircon.co.uk',
  phone: '01425 333760',
  phoneIntl: '+441425333760',
  email: 'info@no1aircon.co.uk',
  street: '10 Christchurch Road',
  town: 'Ringwood',
  county: 'Hampshire',
  postcode: 'BH24 1DN',
  // Approximate showroom position; refine from the Google Business Profile pin.
  geo: { lat: 50.8459, lng: -1.7889 },
  radiusMiles: 30,
  priceFrom: '£1,999',
  facebook: 'https://www.facebook.com/profile.php?id=61587422684398',
  instagram: 'https://www.instagram.com/no1aircon1/',
  // Confirmed on the existing site. The weekly figure is the published
  // "from as little as £25 a week" line. Lender and eligibility are not.
  financeNote: '0% finance is available on qualifying installations, from as little as £25 a week.',
  warranty: 'Up to 5 years. Annual servicing keeps the warranty valid.',
  // Stated on the current site. The registration number is not.
  refcomCertified: true,
  sister: { name: 'No1 Fires', url: 'https://no1fires.co.uk' },
  // Null until Danny supplies them. Pages show the matching placeholder.
  whatsapp: null,
  whatsappIntl: null,
  companyNumber: null,
  vatNumber: null,
  fgasNumber: null,
  refcomNumber: null,
  // When known, use:
  // [{ days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '17:00' }]
  hours: null,
  // Only set when the numbers are real. Schema will not emit a rating otherwise.
  // { value: 4.8, count: 36 }
  rating: null,
  googleBusiness: null,
  linkedin: null,
};

// Published from-prices and running-cost bands already on the site.
// Anything not listed here is a placeholder, not a guess.
export const runningCosts = [
  { room: 'Bedroom', size: '2.5kW', cooling: '8p to 15p an hour', heating: '6p to 12p an hour' },
  { room: 'Living room', size: '3.5kW', cooling: '10p to 20p an hour', heating: '8p to 15p an hour' },
  { room: 'Conservatory', size: '5.0kW', cooling: '15p to 25p an hour', heating: '10p to 20p an hour' },
];

export const brands = [
  { name: 'Mitsubishi Electric', note: 'Our premium recommendation: ultra quiet from 19dB, Hyper Heat performance down to -15°C.' },
  { name: 'Daikin', note: 'Premium build quality and advanced features, built to last decades.' },
  { name: 'Clivet', note: 'Best value: proven reliability at a sensible price.' },
];

// Towns we already say we cover, beyond the eight launch pages.
export const alsoCovered = [
  'Bournemouth',
  'Poole',
  'Lymington',
  'Southampton',
  'Salisbury',
  'New Forest',
];

// Real reviews only. Leave empty until Danny pastes them in.
// { quote, name, town, detail }
export const reviews = [];

export const faqs = [
  {
    q: 'How much does air conditioning cost to install?',
    a: `A single room system is installed from ${business.priceFrom} including VAT. Multi-room and commercial systems cost more. We give you a fixed price after a free survey, and 0% finance is available on qualifying installations.`,
  },
  {
    q: 'How much does air conditioning cost to run?',
    a: 'A 2.5kW bedroom unit typically costs 8p to 15p an hour to cool and 6p to 12p an hour to heat. Actual costs depend on your electricity tariff, insulation and how you use it.',
  },
  {
    q: 'Can air conditioning heat my home in winter?',
    a: 'Yes. The systems we fit are air-to-air heat pumps, so they heat as well as cool. They deliver up to 4 units of warmth for every 1 unit of electricity used, and are often cheaper to run than gas.',
  },
  {
    q: 'Will it help with hay fever and air quality?',
    a: 'Modern systems filter out pollen, dust and allergens and remove humidity as they cool, so rooms feel fresher.',
  },
  {
    q: 'Can I cool and heat multiple rooms?',
    a: 'Yes. A multi-room system connects two, three or four indoor units to a single outdoor unit.',
  },
  {
    q: 'Do I need planning permission?',
    a: 'Many home installations fall under permitted development, but it depends on your property, its location and where the outdoor unit goes. We check this as part of your survey.',
  },
  {
    q: 'What warranty do I get?',
    a: 'Installations come with up to a 5 year warranty. Annual servicing keeps the warranty valid.',
  },
  {
    q: 'Can I see the units before I buy?',
    a: `Yes. Visit our showroom at ${business.street}, ${business.town}, to compare Mitsubishi Electric, Daikin and Clivet side by side and hear how quiet they are.`,
  },
  {
    q: 'Which areas do you cover?',
    a: `We are based at the Ringwood showroom and install within about ${business.radiusMiles} miles, including Ringwood, Fordingbridge, Ferndown, Verwood, St Leonards, Christchurch, Wimborne and New Milton.`,
  },
  {
    q: 'How do I get a quote?',
    a: `Call ${business.phone}, email ${business.email}, or use the quote form. We survey the property and then give you a fixed, no-obligation price.`,
  },
];

export function addressLine() {
  return `${business.street}, ${business.town}, ${business.county} ${business.postcode}`;
}

export function nap() {
  return {
    name: business.name,
    street: business.street,
    town: business.town,
    county: business.county,
    postcode: business.postcode,
    phone: business.phone,
    email: business.email,
  };
}

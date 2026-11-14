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

// Homeowner's guide form only. PUBLIC_GUIDE_ENDPOINT overrides this at build time.
// The quote form keeps using quoteEndpoint / PUBLIC_QUOTE_ENDPOINT.
const defaultGuideEndpoint = 'https://services.leadconnectorhq.com/hooks/9HvMM7JwacidUZ9vaQRt/webhook-trigger/68ded49d-1219-4c83-a649-c446f16421d6';
const envGuideEndpoint = import.meta.env && import.meta.env.PUBLIC_GUIDE_ENDPOINT;
export const guideEndpoint = envGuideEndpoint || defaultGuideEndpoint;
export const guidePdf = 'https://files.leadconnectorhq.com/file/6af6fd1d97818be4d4b385fa/no1-air-con-homeowners-guide.pdf';

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
  radiusMiles: 25,
  priceFrom: '£1,395',
  multiRoomFrom: '£3,499',
  servicingFrom: '£125',
  facebook: 'https://www.facebook.com/profile.php?id=61587422684398',
  instagram: 'https://www.instagram.com/no1aircon1/',
  // Danny: finance is not offered at the moment. Leave this empty so the
  // old "0% finance ... £25 a week" line is not shown.
  financeNote: '',
  warranty: 'Installations come with a 5 year warranty that covers parts and labour.',
  // Stated on the current site. Do not publish an F-Gas or REFCOM number.
  refcomCertified: true,
  sister: { name: 'No1 Fires', url: 'https://no1fires.co.uk' },
  // Null until Danny supplies them. Pages show the matching placeholder.
  whatsapp: '07457 405634',
  whatsappIntl: '447457405634',
  companyNumber: '14778718',
  vatNumber: null,
  // Danny confirmed these showroom hours. Closed Sunday and Monday.
  // Pages print them through openingHoursText().
  hours: [
    {
      days: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '16:00',
    },
  ],
  // Google Maps listing: 5.0 from 13 reviews. Schema emits AggregateRating from this.
  // { value: '5.0', count: 13 }
  rating: { value: '5.0', count: 13 },
  googleBusiness: null,
  linkedin: null,
};

export const whatsappSend = `WhatsApp is the easiest way to send the photos, measurements and floor plan (${business.whatsapp}). Send on WhatsApp`;

// Published from-prices and running-cost bands already on the site.
// Anything not listed here is a placeholder, not a guess.
export const runningCosts = [
  { room: 'Bedroom', size: '2.5kW', cooling: '8p to 15p an hour', heating: '6p to 12p an hour' },
  { room: 'Living room', size: '3.5kW', cooling: '10p to 20p an hour', heating: '8p to 15p an hour' },
  { room: 'Conservatory', size: '5.0kW', cooling: '15p to 25p an hour', heating: '10p to 20p an hour' },
];

// logo: file in public/images/brands/. Null shows the name as text until a logo is added.
export const brands = [
  { name: 'Mitsubishi Electric', logo: 'mitsubishi-electric.svg', note: 'Our premium recommendation: ultra quiet from 19dB, Hyper Heat performance down to -15°C.' },
  { name: 'Daikin', logo: 'daikin.svg', note: 'Premium build quality and advanced features, built to last decades.' },
  { name: 'Clivet', logo: 'clivet.png', note: 'Best value: proven reliability at a sensible price.' },
  { name: 'Toshiba', logo: 'toshiba.svg', note: 'We supply and install Toshiba systems.' },
  { name: 'Panasonic', logo: 'panasonic.svg', note: 'We supply and install Panasonic systems.' },
  { name: 'Samsung', logo: 'samsung.svg', note: 'We supply and install Samsung systems.' },
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
    a: `A Clivet single room system is installed from ${business.priceFrom} (0% VAT). Multi-room systems from ${business.multiRoomFrom}. Qualifying home air-to-air heat pump installs are 0% VAT until 31 March 2027. Commercial systems cost more. Send photos, measurements and a floor plan and we quote remotely. ${whatsappSend}. A survey is only if it is needed.`,
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
    a: 'Installations come with a 5 year warranty that covers parts and labour.',
  },
  {
    q: 'How much does air con servicing cost?',
    a: `Servicing is recommended yearly and is from ${business.servicingFrom}. A service cleans the unit inside and out, checks it is working properly and checks for leaks.`,
  },
  {
    q: 'How is an installation paid for?',
    a: 'Air conditioning is paid 50/50: a 50% deposit, and 50% on completion.',
  },
  {
    q: 'Do you offer finance?',
    a: 'No. Finance is not offered at the moment.',
  },
  {
    q: 'When is the showroom open?',
    a: `Tuesday to Saturday, 10am to 4pm. Closed Sunday and Monday. The showroom is at ${business.street}, ${business.town}, ${business.county} ${business.postcode}.`,
  },
  {
    q: 'Can I see the units before I buy?',
    a: `Yes. Visit our showroom at ${business.street}, ${business.town}, to compare Mitsubishi Electric, Daikin and Clivet side by side and hear how quiet they are.`,
  },
  {
    q: 'Which areas do you cover?',
    a: `We install within ${business.radiusMiles} miles of our Ringwood showroom, including Ringwood, Fordingbridge, Ferndown, Verwood, St Leonards, Christchurch, Wimborne and New Milton.`,
  },
  {
    q: 'How do I get a quote?',
    a: `Call ${business.phone}, email ${business.email}, or use the quote form, and send photos, measurements and a floor plan. ${whatsappSend}. We quote remotely. There is no need for a home visit to get a price, and no obligation to go ahead.`,
  },
];

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function clockLabel(value) {
  const [hourPart, minutePart] = value.split(':');
  const hour = Number(hourPart);
  const minute = Number(minutePart);
  const suffix = hour >= 12 ? 'pm' : 'am';
  const hour12 = hour % 12 || 12;
  return minute === 0 ? `${hour12}${suffix}` : `${hour12}:${minutePart}${suffix}`;
}

function daySpan(days) {
  const indexes = [...new Set(days.map((day) => weekdays.indexOf(day)))]
    .filter((index) => index >= 0)
    .sort((a, b) => a - b);
  const groups = [];
  for (const index of indexes) {
    const current = groups.at(-1);
    if (current && index === current.at(-1) + 1) current.push(index);
    else groups.push([index]);
  }
  return groups.map((group) => {
    const names = group.map((index) => weekdays[index]);
    if (names.length === 1) return names[0];
    if (names.length === 2) return `${names[0]} and ${names[1]}`;
    return `${names[0]} to ${names.at(-1)}`;
  }).join(', ');
}

// Customer-facing hours, derived from business.hours so the pages cannot drift.
export function openingHoursText() {
  const slots = Array.isArray(business.hours) ? business.hours : [];
  if (!slots.length) return '';
  const open = new Set(slots.flatMap((slot) => slot.days));
  const openText = slots
    .map((slot) => `${daySpan(slot.days)}, ${clockLabel(slot.opens)} to ${clockLabel(slot.closes)}`)
    .join('; ');
  const closed = weekdays.filter((day) => !open.has(day));
  return closed.length ? `${openText}; closed ${daySpan(closed)}` : openText;
}

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

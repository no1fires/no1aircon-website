// Single source of truth for name, address and phone (NAP).
// Keep these identical to the Google Business Profile and every listing.
export const business = {
  name: 'No1 Air Conditioning',
  shortName: 'No1 Air Con',
  legalName: 'No1 Energy Solutions Ltd',
  url: 'https://no1aircon.co.uk',
  phone: '01425 333760',
  phoneIntl: '+441425333760',
  // TODO(Danny): confirm the email customers should use for air con enquiries.
  email: 'info@no1tradeexperts.co.uk',
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
  // TODO(Danny): showroom opening hours.
  hours: null,
  // TODO(Danny): Google rating and review count.
  rating: null,
};

export const services = [
  { slug: 'home-air-conditioning', name: 'Home air conditioning', blurb: 'Quiet wall-mounted and floor units for bedrooms, living rooms, home offices, garden rooms and conservatories.' },
  { slug: 'multi-room-systems', name: 'Multi-room systems', blurb: 'Two, three or four indoor units on one outdoor unit, so you can condition several rooms without several units on your walls.' },
  { slug: 'heating-and-cooling', name: 'Heating and cooling', blurb: 'Air-to-air heat pumps that heat in winter as well as cool in summer, delivering up to 4 units of warmth for every 1 unit of electricity.' },
  { slug: 'commercial-air-conditioning', name: 'Commercial air conditioning', blurb: 'Offices, shops, treatment rooms and server rooms, sized for occupancy, heat load and how the space is used.' },
  { slug: 'servicing', name: 'Servicing and maintenance', blurb: 'Annual servicing keeps your warranty valid, your filters clean and your system running efficiently.' },
  { slug: 'repairs', name: 'Repairs and fault finding', blurb: 'Not cooling, leaking or showing an error code? We diagnose and fix the brands we install.' },
];

export const areas = [
  'Ringwood', 'Fordingbridge', 'Ferndown', 'Verwood', 'St Leonards', 'Christchurch',
  'Wimborne', 'New Milton', 'Bournemouth', 'Poole', 'Lymington', 'Southampton', 'Salisbury', 'New Forest',
];

export const brands = [
  { name: 'Mitsubishi Electric', note: 'Our premium recommendation: ultra quiet from 19dB, Hyper Heat performance down to -15°C.' },
  { name: 'Daikin', note: 'Premium build quality and advanced features, built to last decades.' },
  { name: 'Clivet', note: 'Best value: proven reliability at a sensible price.' },
];

export const runningCosts = [
  { room: 'Bedroom', size: '2.5kW', cooling: '8p to 15p an hour', heating: '6p to 12p an hour' },
  { room: 'Living room', size: '3.5kW', cooling: '10p to 20p an hour', heating: '8p to 15p an hour' },
  { room: 'Conservatory', size: '5.0kW', cooling: '15p to 25p an hour', heating: '10p to 20p an hour' },
];

export const faqs = [
  { q: 'How much does air conditioning cost to install?', a: `A single room system is installed from ${'£1,999'} including VAT. Multi-room and commercial systems cost more. We give you a fixed price after a free survey, and 0% finance is available on qualifying installations.` },
  { q: 'How much does air conditioning cost to run?', a: 'A 2.5kW bedroom unit typically costs 8p to 15p an hour to cool and 6p to 12p an hour to heat. Actual costs depend on your electricity tariff, insulation and how you use it.' },
  { q: 'Can air conditioning heat my home in winter?', a: 'Yes. The systems we fit are air-to-air heat pumps, so they heat as well as cool. They deliver up to 4 units of warmth for every 1 unit of electricity used, and are often cheaper to run than gas.' },
  { q: 'Will it help with hay fever and air quality?', a: 'Modern systems filter out pollen, dust and allergens and remove humidity as they cool, so rooms feel fresher.' },
  { q: 'Can I cool and heat multiple rooms?', a: 'Yes. A multi-room system connects two, three or four indoor units to a single outdoor unit.' },
  { q: 'Do I need planning permission?', a: 'Many home installations fall under permitted development, but it depends on your property, its location and where the outdoor unit goes. We check this as part of your survey.' },
  { q: 'What warranty do I get?', a: 'Installations come with up to a 5 year warranty. Annual servicing keeps the warranty valid.' },
  { q: 'Can I see the units before I buy?', a: 'Yes. Visit our showroom at 10 Christchurch Road, Ringwood, to compare Mitsubishi Electric, Daikin and Clivet side by side and hear how quiet they are.' },
];

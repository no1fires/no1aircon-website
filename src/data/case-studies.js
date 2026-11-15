import { business, whatsappSend } from './business.js';

// Placeholder case studies only. Nothing here is a real job.
// Replace the fields when Danny supplies town, equipment, reason and a photo.
export const caseStudies = [
  {
    slug: 'single-room-home',
    name: 'Single-room home system',
    service: 'home-air-conditioning',
    title: 'Single-Room Air Conditioning | No1 Air Con',
    description: `A single-room system is one indoor unit and one outdoor unit. Clivet from ${business.priceFrom} (0% VAT). Ask us for a quote.`,
    h1: 'A single-room home system',
    eyebrow: 'Case study',
    lead: 'One indoor unit and one outdoor unit, sized for the room you use most.',
    explainer: [
      `A single-room system is sized for a bedroom, living room, home office or garden room. A Clivet single room is installed from ${business.priceFrom} (0% VAT). Send photos, measurements and a floor plan. ${whatsappSend}. A survey is only if it is needed.`,
    ],
    fields: [],
  },
  {
    slug: 'multi-room-heating-and-cooling',
    name: 'Multi-room heating and cooling',
    service: 'heating-and-cooling',
    title: 'Multi-Room Heating and Cooling | No1 Air Con',
    description: 'A multi-room system connects two to four indoor units to one outdoor unit. Multi-room systems from £3,499.',
    h1: 'Multi-room heating and cooling',
    eyebrow: 'Case study',
    lead: 'Two, three or four rooms, each with its own setting, on one outdoor unit.',
    explainer: [
      'A multi-room system connects two, three or four indoor units to one outdoor unit. Each room has its own setting. The units heat and cool, because they are air-to-air heat pumps.',
      'Multi-room systems from £3,499. The single-room price does not cover this. Send photos, measurements and a floor plan of each room and the outside wall.',
    ],
    fields: [],
  },
  {
    slug: 'commercial-space',
    name: 'Commercial space',
    service: 'commercial-air-conditioning',
    title: 'Commercial Air Conditioning | No1 Air Con',
    description: 'Commercial air conditioning sized for how the room is used. Ask us for a quote.',
    h1: 'A commercial space',
    eyebrow: 'Case study',
    lead: 'Offices, shops, treatment rooms and server rooms, sized for how the space is used.',
    explainer: [
      `Commercial jobs are sized for how many people use the room, how often the door opens, and whether equipment throws off heat. A wall unit, a ceiling cassette or a ducted system can all be right. Photos, measurements and a floor plan are enough to say which. ${whatsappSend}. We visit only if we need to.`,
    ],
    fields: [],
  },
];

export function getCaseStudy(slug) {
  return caseStudies.find((study) => study.slug === slug);
}

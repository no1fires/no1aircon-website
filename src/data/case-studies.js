import { todo } from './placeholders.js';

// Placeholder case studies only. Nothing here is a real job.
// Replace the fields when Danny supplies town, equipment, reason and a photo.
export const caseStudies = [
  {
    slug: 'single-room-home',
    name: 'Single-room home system',
    service: 'home-air-conditioning',
    title: 'Case Study: Single-Room Home Air Conditioning | No1 Air Con',
    description: 'Placeholder case study for a single-room home air conditioning install. Real job details have not been added yet.',
    h1: 'Case study: a single-room home system',
    eyebrow: 'Placeholder',
    lead: 'This page is waiting for a real single-room installation. It is not a completed project, and the details below are blanks, not a customer story.',
    explainer: [
      'A single-room system is one indoor unit and one outdoor unit, sized for a bedroom, living room, home office or garden room. It is the job we are asked for most, and it is installed from £1,999 including VAT once the survey confirms the room.',
      'When a real job replaces this page, it should say which town it was in, what was fitted, why that size was chosen, and show a photograph of the finished indoor and outdoor units. Until then we will not invent a street, a name or a result.',
    ],
    fields: [
      { label: 'Town', value: '[TODO: add town]' },
      { label: 'Property', value: '[TODO: add property type, such as bungalow or first-floor bedroom]' },
      { label: 'What was fitted', value: '[TODO: add indoor unit, outdoor unit and brand]' },
      { label: 'Why this system', value: '[TODO: add the reason — heat, noise, pipe run or room size]' },
      { label: 'Photo', value: todo('installPhoto') },
    ],
  },
  {
    slug: 'multi-room-heating-and-cooling',
    name: 'Multi-room heating and cooling',
    service: 'heating-and-cooling',
    title: 'Case Study: Multi-Room Heating and Cooling | No1 Air Con',
    description: 'Placeholder case study for a multi-room air-to-air heat pump. Real job details have not been added yet.',
    h1: 'Case study: multi-room heating and cooling',
    eyebrow: 'Placeholder',
    lead: 'This page is waiting for a real multi-room job. We have not described a customer, a house or a result, because we do not have one we are allowed to publish.',
    explainer: [
      'A multi-room system connects two, three or four indoor units to one outdoor unit. Each room has its own setting. The units heat and cool, because they are air-to-air heat pumps.',
      'The published single-room price does not apply automatically. The multi-room price is still to be confirmed. A finished case study should show why more than one room was done, and what the outdoor unit position looked like when there was only one of them.',
    ],
    fields: [
      { label: 'Town', value: '[TODO: add town]' },
      { label: 'Rooms', value: '[TODO: add which rooms, and how many indoor units]' },
      { label: 'What was fitted', value: '[TODO: add the system and brand]' },
      { label: 'Why this system', value: '[TODO: add why one outdoor unit was chosen]' },
      { label: 'Photo', value: todo('caseStudyJob') },
    ],
  },
  {
    slug: 'commercial-space',
    name: 'Commercial space',
    service: 'commercial-air-conditioning',
    title: 'Case Study: Commercial Air Conditioning | No1 Air Con',
    description: 'Placeholder case study for a commercial air conditioning install. No client is named because none has been supplied.',
    h1: 'Case study: a commercial space',
    eyebrow: 'Placeholder',
    lead: 'This page is a slot for a real office, shop, treatment room or server room. No business is named, because naming one would be an invention.',
    explainer: [
      'Commercial jobs are sized for how the room is used: how many people, how often the door opens, and whether equipment is throwing off heat. A wall unit, a ceiling cassette or a ducted system can all be right. The survey decides.',
      'When this page is replaced, it needs the town, the type of business in general terms if they are happy to be mentioned, what was fitted, and a photo. Until then the page stays a placeholder and does not pretend to be a testimonial.',
    ],
    fields: [
      { label: 'Town', value: '[TODO: add town]' },
      { label: 'Type of space', value: '[TODO: add office, shop, treatment room or server room]' },
      { label: 'What was fitted', value: '[TODO: add the system]' },
      { label: 'Why this system', value: '[TODO: add the heat-load or layout reason]' },
      { label: 'Photo', value: todo('installPhoto') },
      { label: 'Customer name', value: '[TODO: add a name only if the customer has agreed. Otherwise leave this blank.]' },
    ],
  },
];

export function getCaseStudy(slug) {
  return caseStudies.find((study) => study.slug === slug);
}

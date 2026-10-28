import { business, brands, openingHoursText } from './business.js';
import { todo } from './placeholders.js';

const brandNames = `${brands[0].name}, ${brands[1].name} and ${brands[2].name}`;

export const services = [
  {
    slug: 'home-air-conditioning',
    name: 'Home air conditioning',
    nav: 'Home air conditioning',
    serviceType: 'Home air conditioning installation',
    icon: 'home',
    blurb: 'Quiet wall-mounted and floor units for bedrooms, living rooms, home offices, garden rooms and conservatories.',
    title: 'Home Air Conditioning Installation | No1 Air Con',
    description: `Home air conditioning installed across Ringwood, Hampshire and Dorset from ${business.priceFrom} inc. VAT. Single rooms and multi-room systems, surveyed from our Ringwood showroom.`,
    h1: 'Home air conditioning installation',
    eyebrow: 'Homes',
    lead: `Wall-mounted and floor-standing systems for houses and flats within about ${business.radiusMiles} miles of our Ringwood showroom. A single room is installed from ${business.priceFrom} including VAT.`,
    paragraphs: [
      'Most people start with one room that will not stay comfortable. A bedroom that holds the heat at night, a living room with a lot of glass, a home office, or a conservatory that is too hot to use from May onwards. We size the unit for that room, not for a brochure example.',
      'The indoor unit can sit high on a wall, or on the floor if a wall is taken up by windows. The outdoor unit needs a sensible spot: somewhere it can be fixed securely, where the pipes can run neatly, and where the noise will not sit under a neighbour’s bedroom window. That is what the survey is for.',
      'If you want more than one room, a multi-room system connects two, three or four indoor units to a single outdoor unit. You can set each room on its own. It avoids a row of outdoor units along the wall.',
      `We install ${brandNames}. You can see and hear them at the showroom on ${business.street}, ${business.town}, before you decide. ${brands[0].name} publish a low noise figure from 19dB for some of their indoor units. That is their figure for those models, not a promise that every room will measure 19dB once the unit is fitted.`,
    ],
    priceNote: `Single room systems from ${business.priceFrom} including VAT. Multi-room systems: ${todo('multiRoomPrice')}. ${business.financeNote}`,
    provides: [
      { title: 'Single-room systems', text: 'One indoor unit and one outdoor unit, sized for the room you actually use.' },
      { title: 'Floor consoles', text: 'A better fit for conservatories and rooms where the walls are mostly glass.' },
      { title: 'Multi-room systems', text: 'Two, three or four indoor units on one outdoor unit, each room controlled on its own.' },
      { title: 'A fixed quote after survey', text: 'We check the room, the pipe run, the power supply and where the outdoor unit can go, then price the job.' },
    ],
    suitable: [
      'Bedrooms that stay hot overnight',
      'Living rooms with large windows or a south-facing aspect',
      'Home offices used through the day',
      'Garden rooms and conservatories',
      'Homes that also want heat in winter — see heating and cooling',
    ],
    related: ['heating-and-cooling', 'ducted-and-ceiling-systems', 'servicing'],
    towns: ['ringwood', 'new-milton', 'ferndown', 'fordingbridge'],
    answerFaqs: [
      {
        q: 'How much does home air conditioning cost to install?',
        a: `A single room system is installed from ${business.priceFrom} including VAT. The fixed price for your home comes after a free survey, because the pipe run and the outdoor unit position change the job. Multi-room price: ${todo('multiRoomPrice')}.`,
      },
      {
        q: 'Can one outdoor unit serve several rooms?',
        a: 'Yes. A multi-room system links two, three or four indoor units to one outdoor unit. Each room has its own control.',
      },
      {
        q: 'Will a bedroom unit be noisy?',
        a: `We choose a size that does not have to run flat out, and we talk through where it will sit. ${brands[0].name} quote from 19dB on some indoor units. That is a manufacturer figure, so we would rather you hear a unit in the Ringwood showroom than take a number on trust.`,
      },
    ],
    faqs: [
      {
        q: 'Do I need planning permission for a home unit?',
        a: 'Many home installations fall under permitted development, but it depends on the property, its location and where the outdoor unit goes. We check this as part of the survey. Listed buildings and flats often need a closer look.',
      },
      {
        q: 'Does home air conditioning help with hay fever?',
        a: 'The systems we fit filter pollen, dust and allergens, and they take moisture out of the air as they cool. They are not a medical device, but most people notice the room feels fresher.',
      },
      {
        q: 'How long does a home install take?',
        a: `${todo('installTimeSingle')} We confirm the day once we have surveyed the pipe run and the electrical supply.`,
      },
    ],
  },
  {
    slug: 'heating-and-cooling',
    name: 'Heating and cooling',
    nav: 'Heating and cooling',
    serviceType: 'Air-to-air heat pump installation',
    icon: 'sun',
    blurb: 'Air-to-air heat pumps that heat in winter as well as cool in summer.',
    title: 'Air-to-Air Heat Pumps | Heating and Cooling | No1 Air Con',
    description: 'Air-to-air heat pumps that cool in summer and heat in winter, installed from our Ringwood showroom across Hampshire and Dorset. Running costs explained in plain English.',
    h1: 'Heating and cooling with an air-to-air heat pump',
    eyebrow: 'All year',
    lead: 'The systems we fit are air-to-air heat pumps. The same unit that cools a room in July heats it in January. It heats the rooms where an indoor unit is fitted, rather than replacing a whole-house boiler on its own.',
    paragraphs: [
      'People still think of air conditioning as a summer luxury. Used as a heater, a modern unit moves heat rather than making it. The systems we install deliver up to 4 units of warmth for every 1 unit of electricity used. On many tariffs that is cheaper to run than gas for the room you are heating, though the real cost depends on your tariff, the insulation and how long you leave it on.',
      'A 2.5kW bedroom unit typically costs 8p to 15p an hour to cool and 6p to 12p an hour to heat. A 3.5kW living room is typically 10p to 20p an hour to cool and 8p to 15p an hour to heat. A 5.0kW conservatory is typically 15p to 25p an hour to cool and 10p to 20p an hour to heat. Treat those as bands, not a bill.',
      `In colder weather the outdoor unit has to work harder. ${brands[0].name} describe Hyper Heat performance down to -15°C on the range we recommend. That is their published figure. We will tell you on the survey if a room needs a larger unit because of glass, height or insulation.`,
      'You still need a plan for the rest of the house. An air-to-air system heats the rooms that have an indoor unit. It does not heat a hot-water cylinder, and it does not automatically retire a gas boiler. Many customers use it for the bedroom and living room, and leave the boiler for everything else.',
    ],
    priceNote: `Single room systems from ${business.priceFrom} including VAT, and the same unit heats and cools. ${business.financeNote}`,
    provides: [
      { title: 'Cooling in summer', text: 'Steady temperature, with moisture taken out of the air so the room feels less heavy.' },
      { title: 'Heating in winter', text: 'Heat for the rooms with an indoor unit, often at a lower running cost than gas for that room.' },
      { title: 'Room-by-room control', text: 'Heat the bedroom in the evening without heating the whole house.' },
      { title: 'A straight comparison', text: 'We will show you the running-cost bands and leave you to compare them with your own tariff.' },
    ],
    suitable: [
      'Rooms you heat for hours at a time',
      'Home offices that are cold in the morning and hot in the afternoon',
      'Conservatories you want to use outside high summer',
      'Bedrooms you would rather not leave a radiator on overnight',
    ],
    related: ['home-air-conditioning', 'ducted-and-ceiling-systems', 'servicing'],
    towns: ['ringwood', 'verwood', 'wimborne', 'new-milton'],
    answerFaqs: [
      {
        q: 'Can air conditioning heat a room in winter?',
        a: 'Yes. The units we fit are air-to-air heat pumps. They heat as well as cool, delivering up to 4 units of warmth for every 1 unit of electricity. They heat the rooms that have an indoor unit.',
      },
      {
        q: 'Is it cheaper to run than gas?',
        a: 'Often, for the room you are heating, because the unit moves heat rather than making it. Your tariff, the insulation and how you use it decide the actual cost. We publish typical hourly bands so you can compare.',
      },
      {
        q: 'Will it replace my boiler?',
        a: 'Not on its own. It does not heat a hot-water cylinder, and it only heats rooms with an indoor unit. Plenty of homes keep the boiler and use the heat pump for the rooms they sit in.',
      },
    ],
    faqs: [
      {
        q: 'What does a bedroom unit cost to run?',
        a: 'A 2.5kW bedroom unit typically costs 8p to 15p an hour to cool and 6p to 12p an hour to heat. Actual costs depend on your electricity tariff, insulation and how you use it.',
      },
      {
        q: 'Does heating mode need a different unit?',
        a: 'No. Cooling and heating are modes on the same system. We set both up at handover and walk you through the controls.',
      },
      {
        q: 'How cold can it be outside and still heat?',
        a: `${brands[0].name} publish Hyper Heat performance down to -15°C for the premium range we recommend. Output still falls as the outdoor temperature drops, so we size the unit at the survey rather than from a headline number.`,
      },
    ],
  },
  {
    slug: 'commercial-air-conditioning',
    name: 'Commercial air conditioning',
    nav: 'Commercial',
    serviceType: 'Commercial air conditioning installation',
    icon: 'building',
    blurb: 'Offices, shops, treatment rooms and server rooms, sized for how the space is used.',
    title: 'Commercial Air Conditioning | Ringwood, Hampshire and Dorset | No1 Air Con',
    description: 'Commercial air conditioning for offices, shops, treatment rooms and server rooms around Ringwood, Hampshire and Dorset. Surveyed and priced for the way the space is used.',
    h1: 'Commercial air conditioning',
    eyebrow: 'Businesses',
    lead: 'Offices, shops, treatment rooms and server rooms, sized for occupancy, heat from equipment, and the hours you are open. We work from the Ringwood showroom across Hampshire and Dorset.',
    paragraphs: [
      'A commercial room is rarely just a big version of a living room. A treatment room needs to be quiet. A shop needs the door to open all day without the unit giving up. A server cupboard needs the heat taken away even when nobody is in the building. We ask how the room is used before we suggest a system.',
      'Ceiling cassettes suit open offices and retail floors because they throw air in more than one direction. A wall unit is often enough for a small office or a treatment room. Ducted systems hide the equipment where the ceiling void allows it. The survey checks the heat load, the structure, the condensate route and when we can work without closing you for longer than we have to.',
      'We do not publish a single commercial price, because a server room and a high-street shop are different jobs. You get a fixed price after the survey.',
      'We will not invent a client list. If you want to see the standard of finish, visit the showroom or ask us for a recent job once the case studies are filled in with real projects.',
    ],
    priceNote: `${todo('commercialPrice')} ${todo('installTimeCommercial')}`,
    provides: [
      { title: 'Offices and meeting rooms', text: 'Sized for the number of people and the equipment, not just the floor area.' },
      { title: 'Shops and salons', text: 'Systems that cope with doors opening and customers walking in.' },
      { title: 'Treatment and clinical rooms', text: 'Quiet units, with filtration and a stable temperature.' },
      { title: 'Server and comms cupboards', text: 'Cooling that can run when the rest of the building is shut.' },
    ],
    suitable: [
      'High-street shops in Ringwood, Christchurch and Wimborne',
      'Offices and workshops on the Ferndown industrial estates',
      'Treatment rooms that must stay quiet',
      'Small server rooms that overheat in summer',
    ],
    related: ['ducted-and-ceiling-systems', 'servicing', 'repairs'],
    towns: ['ringwood', 'ferndown', 'christchurch', 'wimborne'],
    answerFaqs: [
      {
        q: 'How much does commercial air conditioning cost?',
        a: `${todo('commercialPrice')} The price depends on the heat load, the type of indoor unit and when we can get access. We survey first and then give a fixed price.`,
      },
      {
        q: 'Can you work around opening hours?',
        a: 'We agree the working day on the survey so the install does not close the business for longer than it needs to. We do not advertise out-of-hours cover as a standard.',
      },
      {
        q: 'What do you need to know before a survey?',
        a: 'What the room is used for, roughly how many people are in it, any equipment that throws off heat, and whether there is a ceiling void. Photographs help, but we still need to see the space.',
      },
    ],
    faqs: [
      {
        q: 'Do shops and offices use the same equipment as homes?',
        a: 'Sometimes a wall unit is right. Open floors more often suit a ceiling cassette or a ducted system. We will say which, and why, after we have seen the room.',
      },
      {
        q: 'Will you service a system you did not install?',
        a: `We service and repair ${brandNames}, which are the brands we install. ${todo('otherBrandRepairs')}`,
      },
      {
        q: 'How long does a commercial install take?',
        a: `${todo('installTimeCommercial')} We will not guess a day-rate before we have seen access, the ceiling and the electrical supply.`,
      },
    ],
  },
  {
    slug: 'servicing',
    name: 'Servicing and care plans',
    nav: 'Servicing and care plans',
    serviceType: 'Air conditioning servicing',
    icon: 'clipboard',
    blurb: 'Annual servicing keeps the warranty valid, the filters clean and the system running properly.',
    title: 'Air Conditioning Servicing and Care Plans | No1 Air Con',
    description: 'Annual air conditioning servicing across Ringwood, Hampshire and Dorset. Keeps the warranty valid. Care plan tiers are listed once confirmed.',
    h1: 'Servicing and care plans',
    eyebrow: 'Looking after it',
    lead: 'An annual service keeps the warranty valid, the filters clean and the system efficient. We service the brands we install, from the Ringwood showroom.',
    paragraphs: [
      `${business.warranty} Skipping the service is the usual reason a warranty claim is turned down, so we would rather book the next visit before we leave.`,
      'A service is a check, not a five-minute filter rinse. We look at filters, indoor and outdoor coils, the condensate drain, temperatures, electrical connections and signs of a refrigerant leak. Refrigerant work is done by certified engineers. The current site describes the installers as Refcom certified. The registration number is still to be added.',
      'Care plans are a way to put that visit on a schedule, sometimes with priority if the system stops. We are not publishing tiers, prices or inclusions until they are confirmed. If a page elsewhere on the internet lists a Gold or Silver plan for No1 Air Con, it did not come from us.',
      'If the system is already leaking, showing an error code or not cooling, that is a repair rather than a service. Tell us the symptoms when you book and we will bring the right kit.',
    ],
    priceNote: `${todo('servicingPrice')} ${todo('carePlanTiers')} ${todo('carePlanPrice')}`,
    provides: [
      { title: 'Annual service', text: 'Filters, coils, condensate, temperatures, electrics and a leak check.' },
      { title: 'Warranty kept valid', text: 'Up to 5 years on installations, provided the system is serviced.' },
      { title: 'Filter and hygiene check', text: 'A dirty filter costs more to run and moves less air.' },
      { title: 'Care plans, once confirmed', text: 'Tiers and prices will be published here when they are agreed. They are not invented in the meantime.' },
    ],
    suitable: [
      'Systems we installed and still warrant',
      'Mitsubishi Electric, Daikin and Clivet systems in homes and small businesses',
      'Landlords who want the service date on record',
      'Anyone whose unit smells, drips, or has not been looked at in a year',
    ],
    related: ['repairs', 'home-air-conditioning', 'commercial-air-conditioning'],
    towns: ['ringwood', 'ferndown', 'christchurch', 'new-milton'],
    answerFaqs: [
      {
        q: 'Why does air conditioning need a service?',
        a: 'Filters block, drains clog and coils coat with dust. A yearly service keeps the warranty valid and catches a small fault before it becomes a leak or a failed part.',
      },
      {
        q: 'How much is a service?',
        a: `${todo('servicingPrice')} Call ${business.phone} and we will tell you once the price is confirmed. We will not put a guessed figure on the page.`,
      },
      {
        q: 'What is included in a care plan?',
        a: `${todo('carePlanTiers')} ${todo('carePlanPrice')}`,
      },
    ],
    faqs: [
      {
        q: 'Do you service other brands?',
        a: `We service ${brandNames}. ${todo('otherBrandRepairs')}`,
      },
      {
        q: 'What warranty do I get on a new install?',
        a: `${business.warranty} ${todo('warrantyDetail')}`,
      },
      {
        q: 'How often should a system be serviced?',
        a: 'Once a year is the usual interval, and it is what keeps the warranty valid. A dusty shop or a house with pets may need the filters looked at sooner. We will say so if we see it.',
      },
    ],
  },
  {
    slug: 'repairs',
    name: 'Repairs and fault finding',
    nav: 'Repairs',
    serviceType: 'Air conditioning repair',
    icon: 'wrench',
    blurb: 'Not cooling, leaking or showing an error code? We diagnose and repair the brands we install.',
    title: 'Air Conditioning Repairs | Ringwood, Hampshire and Dorset | No1 Air Con',
    description: 'Air conditioning repairs and fault finding for Mitsubishi Electric, Daikin and Clivet systems across Ringwood, Hampshire and Dorset. Call 01425 333760.',
    h1: 'Repairs and fault finding',
    eyebrow: 'When it stops',
    lead: 'Not cooling, leaking water, making a new noise, or showing an error code. We diagnose and repair the brands we install: Mitsubishi Electric, Daikin and Clivet.',
    paragraphs: [
      'Tell us the brand, roughly how old the system is, and what it is doing. A photo of the error code on the controller saves a wasted visit. We will say honestly if we need a part ordered before we can finish the job.',
      `We do not claim a same-day promise and we do not claim to be on call overnight. Phone ${business.phone} during showroom hours: ${openingHoursText()}. If the phone is not answered, email ${business.email} and we will come back to you.`,
      'Water indoors is often a blocked condensate drain, but it can also be a frozen coil or a poor pipe fall. We do not ask you to take the unit apart. Switch it off at the isolator if water is coming into the room, and call us.',
      'If the system is under the installation warranty and it has been serviced, say so when you book. If it has never been serviced, we can still look at it, but a warranty claim may not stand.',
    ],
    priceNote: `${todo('repairCallout')} We quote the repair once we know the fault. We do not invent a call-out fee here.`,
    provides: [
      { title: 'Fault finding', text: 'Error codes, poor cooling, poor heating, strange noises and systems that will not start.' },
      { title: 'Leak repairs', text: 'Water leaks traced properly, rather than a tray emptied and left.' },
      { title: 'Parts for brands we install', text: `${brandNames}. We will not pretend to hold every part for every brand.` },
      { title: 'A clear next step', text: 'We tell you the fault, the price to put it right, and whether it is worth repairing.' },
    ],
    suitable: [
      'Systems that have stopped cooling or heating',
      'Indoor units dripping into the room',
      'Controllers showing an error code',
      'Units that are loud when they did not used to be',
    ],
    related: ['servicing', 'home-air-conditioning', 'commercial-air-conditioning'],
    towns: ['ringwood', 'st-leonards', 'verwood', 'fordingbridge'],
    answerFaqs: [
      {
        q: 'My air conditioning is not cooling. What should I do?',
        a: `Check the filters are not blocked and that the remote is set to cool, not fan. If it still fails, call ${business.phone} with the brand and any error code. Do not keep running a unit that is icing up or leaking.`,
      },
      {
        q: 'How much is a repair call-out?',
        a: `${todo('repairCallout')} The repair price depends on the fault and the part. We will tell you before we start the paid work.`,
      },
      {
        q: 'Which brands do you repair?',
        a: `We repair ${brandNames}, the brands we install. ${todo('otherBrandRepairs')}`,
      },
    ],
    faqs: [
      {
        q: 'Do you offer 24 hour call-out?',
        a: `No. We have not published out-of-hours cover. Call ${business.phone} or email ${business.email}. Showroom hours: ${openingHoursText()}.`,
      },
      {
        q: 'Is a water leak an emergency?',
        a: 'Switch the unit off and catch the water if you can do that safely. A blocked drain is common and usually repairable. We still need to see it rather than guess from a message.',
      },
      {
        q: 'Will a repair affect the warranty?',
        a: `${business.warranty} If the system is still inside that period and has been serviced, tell us. ${todo('warrantyDetail')}`,
      },
    ],
  },
  {
    slug: 'ducted-and-ceiling-systems',
    name: 'Ducted and ceiling systems',
    nav: 'Ducted and ceiling systems',
    serviceType: 'Ducted and ceiling air conditioning',
    icon: 'fan',
    blurb: 'Ceiling cassettes and ducted systems for open-plan homes and commercial rooms where a wall unit is the wrong look.',
    title: 'Ducted and Ceiling Air Conditioning | No1 Air Con',
    description: 'Ducted air conditioning and ceiling cassettes for open-plan homes and commercial rooms across Ringwood, Hampshire and Dorset. Surveyed for ceiling space before anyone quotes.',
    h1: 'Ducted and ceiling air conditioning',
    eyebrow: 'When a wall unit is wrong',
    lead: 'Ceiling cassettes and ducted systems for open-plan rooms and commercial spaces where a wall unit would be in the way, or where you do not want to see the equipment.',
    paragraphs: [
      'A wall unit is the right answer for most bedrooms. It is the wrong answer for some rooms. A long open-plan living space may need air thrown further than a wall unit can manage. A shop floor often wants a cassette in the ceiling. A house with a clear loft can sometimes hide a ducted unit and just show grilles.',
      'Both options need space. A cassette needs a ceiling void deep enough for the unit and a route for the pipes and the condensate pump. A ducted system needs a loft or a void that we can still reach to change filters in a year’s time. If the joists, the downlights or the insulation leave no room, we will say so and suggest a wall or floor unit instead.',
      'Ducted and ceiling systems are still air-to-air heat pumps. They cool and they heat. They are not automatically quieter, and they are not automatically more expensive in running cost. The difference is where the equipment sits and how the air is delivered.',
      'We do not have a published price for this work yet. The survey has to come first, because two ceilings that look the same can be completely different jobs.',
    ],
    priceNote: `${todo('ductedPrice')} Single room wall units, for comparison, start from ${business.priceFrom} including VAT.`,
    provides: [
      { title: 'Ceiling cassettes', text: 'One unit in the ceiling, blowing in more than one direction. Common in offices and open rooms.' },
      { title: 'Ducted systems', text: 'The indoor unit is hidden. Air comes through grilles. Only where the void and the filter access allow it.' },
      { title: 'An honest no', text: 'If the ceiling will not take it, we will not force it. A wall unit is often the better install.' },
      { title: 'Heating as well as cooling', text: 'Same heat-pump principle as the wall units. The room with the outlet is the room that gets the heat.' },
    ],
    suitable: [
      'Open-plan living rooms with little clear wall',
      'Offices and shops with a suspended ceiling',
      'Homes with a loft void and proper access for filters',
      'Projects where the look of a wall unit has already been ruled out',
    ],
    related: ['home-air-conditioning', 'commercial-air-conditioning', 'heating-and-cooling'],
    towns: ['wimborne', 'christchurch', 'ringwood', 'ferndown'],
    answerFaqs: [
      {
        q: 'What is the difference between a cassette and a ducted system?',
        a: 'A cassette is a ceiling unit you can see, usually blowing air four ways. A ducted system hides the unit and uses grilles. Ducted needs more space and a way to reach the filters later.',
      },
      {
        q: 'Can you install ducted air conditioning in an older house?',
        a: 'Sometimes, if there is a loft or a ceiling void and a route for the ducts that does not wreck the structure. Cottages with shallow lofts often suit a wall or floor unit better. We will tell you on the survey.',
      },
      {
        q: 'How much does a ducted system cost?',
        a: `${todo('ductedPrice')} We price it after we have seen the ceiling, the joists and the pipe run. A single-room wall unit starts from ${business.priceFrom} including VAT if that turns out to be the better answer.`,
      },
    ],
    faqs: [
      {
        q: 'Are ceiling systems quieter?',
        a: 'Not by default. Noise depends on the model, the size and how hard it has to work. Hiding the unit does not remove the fan. We will talk through noise at the showroom and again on the survey.',
      },
      {
        q: 'Do ducted systems heat as well as cool?',
        a: 'Yes. They are air-to-air heat pumps, so they heat the rooms they serve as well as cool them.',
      },
      {
        q: 'Will you need to cut large holes in the ceiling?',
        a: 'A cassette needs an opening the size of the unit. A ducted system needs grille openings and a route through the void. We agree the positions before we cut anything, and we will not start if the void is not big enough.',
      },
    ],
  },
];

export function getService(slug) {
  return services.find((service) => service.slug === slug);
}

export function getServicesBySlugs(slugs) {
  return slugs.map((slug) => getService(slug)).filter(Boolean);
}

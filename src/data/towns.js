import { business } from './business.js';
import { todo } from './placeholders.js';

const showroom = `${business.street}, ${business.town} ${business.postcode}`;

export const towns = [
  {
    slug: 'ringwood',
    name: 'Ringwood',
    county: 'Hampshire',
    miles: 0,
    title: 'Air Conditioning Installers in Ringwood | No1 Air Con',
    description: 'Air conditioning installation, servicing and repairs in Ringwood, Hampshire. Visit the showroom at 10 Christchurch Road, BH24 1DN, or book a free survey.',
    h1: 'Air conditioning installers in Ringwood',
    eyebrow: 'Our home town',
    lead: `The showroom is here, at ${showroom}. You can see and hear the units before you buy, then have the system installed in a Ringwood home or business.`,
    paragraphs: [
      'Ringwood sits on the western edge of the New Forest. The centre still has a market-town high street, with older houses close in and newer estates out towards Poulner and Hightown. Cottages on the forest side often have thick walls and small rooms. Estates from the last forty years usually have lofts we can work in and a clearer place for an outdoor unit.',
      'Christchurch Road is in Ringwood. It is not in the town of Christchurch, which is a separate page and a separate drive south. If you are coming to the showroom, use the Ringwood address.',
      'High-street shops, salons and small offices call us as well as householders. A wall unit is usually enough for a room above a shop. A ceiling cassette is the conversation when the floor is open and the ceiling will take it.',
      'Because we are based here, a Ringwood survey is the simplest visit we do. We still write it up properly: room size, glass, where the pipes can run, and whether the outdoor unit would face a neighbour.',
    ],
    servicesIntro: 'In Ringwood we fit the full range, and you can compare the brands in the showroom the same day as a conversation about the house.',
    services: ['home-air-conditioning', 'heating-and-cooling', 'commercial-air-conditioning', 'servicing', 'repairs', 'ducted-and-ceiling-systems'],
    nearby: ['fordingbridge', 'verwood', 'st-leonards'],
    answerFaqs: [
      {
        q: 'Where is the No1 Air Con showroom?',
        a: `At ${showroom}. It is on Christchurch Road in Ringwood, Hampshire. You can compare Mitsubishi Electric, Daikin and Clivet there and hear them running.`,
      },
      {
        q: 'Do you only work in Ringwood?',
        a: `No. The showroom is in Ringwood. We also install in Fordingbridge, Verwood, Ferndown, St Leonards, Christchurch, Wimborne and New Milton, within about ${business.radiusMiles} miles.`,
      },
      {
        q: 'Can you install air conditioning in an older Ringwood house?',
        a: 'Often yes. The limit is usually the outdoor unit position and the pipe run, not the age of the house. Listed buildings and tight courtyards need a proper look. We check permitted development as part of the survey.',
      },
    ],
    faqs: [
      {
        q: 'What does a Ringwood home installation cost?',
        a: `A single room system is installed from ${business.priceFrom} including VAT. The fixed price follows a free survey. Multi-room and commercial prices are not published yet: ${todo('multiRoomPrice')} ${todo('commercialPrice')}`,
      },
      {
        q: 'When is the showroom open?',
        a: todo('openingHours'),
      },
    ],
  },
  {
    slug: 'fordingbridge',
    name: 'Fordingbridge',
    county: 'Hampshire',
    miles: 6,
    title: 'Air Conditioning in Fordingbridge | No1 Air Con',
    description: 'Air conditioning installation and repairs in Fordingbridge, Hampshire, about 6 miles from our Ringwood showroom. Quiet units for cottages and family homes.',
    h1: 'Air conditioning in Fordingbridge',
    eyebrow: 'Hampshire',
    lead: 'Fordingbridge is about 6 miles north-west of the Ringwood showroom, on the River Avon at the edge of the New Forest. We survey and install there for homes and small high-street businesses.',
    paragraphs: [
      'Fordingbridge is a small Hampshire town: a high street of independent shops, cottages near the centre, and family houses on the edges. Rooms are often modest, and a lot of the older walls are solid. That changes the install. A compact wall unit or a floor console usually suits better than a ceiling cassette, because there is often no void to put one in.',
      'Heating matters here as much as cooling. Older cottages can be cold in the rooms you actually sit in, and expensive to heat all day with radiators. An air-to-air unit heats the room it is fitted in. It is not a whole-house boiler replacement, and we will not sell it as one.',
      'Outdoor units need a careful spot. Lanes are narrow, gardens are overlooked, and a unit under a neighbour’s window is a bad install. We plan the position on the survey, including the pipe route back to the indoor unit, before we quote a fixed price.',
      'The drive from the showroom is short, so a Fordingbridge survey is a normal appointment rather than a special trip. You can still come to Ringwood first if you want to hear the units.',
    ],
    servicesIntro: 'The work we do most in Fordingbridge is home systems, heating and cooling, servicing and repairs. Ducted systems are the exception, and only where a loft will actually take one.',
    services: ['home-air-conditioning', 'heating-and-cooling', 'repairs', 'servicing'],
    nearby: ['ringwood', 'verwood', 'st-leonards'],
    answerFaqs: [
      {
        q: 'Do you install air conditioning in Fordingbridge?',
        a: `Yes. Fordingbridge is about 6 miles from the showroom at ${showroom}. We survey the property and then give a fixed price.`,
      },
      {
        q: 'Will a unit suit a Fordingbridge cottage?',
        a: 'Often. Smaller rooms and solid walls usually point to a quiet wall unit or a floor console, not a ceiling cassette. We check the wall, the pipe run and the outdoor unit position on the survey.',
      },
      {
        q: 'Can it heat as well as cool?',
        a: 'Yes. The systems we fit are air-to-air heat pumps. They heat the room the indoor unit is in. They do not heat a hot-water cylinder or automatically replace a boiler.',
      },
    ],
    faqs: [
      {
        q: 'How far is the showroom from Fordingbridge?',
        a: `About 6 miles, at ${showroom}. You are welcome to visit and hear the units before you book a survey.`,
      },
      {
        q: 'Do you cover the villages around Fordingbridge?',
        a: `We work within about ${business.radiusMiles} miles of Ringwood. If you are just outside the town, call ${business.phone} and we will say yes or no rather than leave you guessing.`,
      },
    ],
  },
  {
    slug: 'ferndown',
    name: 'Ferndown',
    county: 'Dorset',
    miles: 7,
    title: 'Air Conditioning in Ferndown | No1 Air Con',
    description: 'Air conditioning for Ferndown homes and business units in Dorset. Multi-room systems, commercial installs and servicing from our Ringwood showroom.',
    h1: 'Air conditioning in Ferndown',
    eyebrow: 'Dorset',
    lead: 'Ferndown is about 7 miles south of Ringwood, just off the A31. We install in the houses and bungalows, and in the business units on the industrial estates.',
    paragraphs: [
      'Ferndown is a larger Dorset town than its neighbours, with a lot of detached houses and bungalows built from the 1960s onwards, plus newer estates. Lofts are usually reachable, power is usually straightforward, and many of the houses are big enough that one room is not the whole job. Multi-room systems, with two or three indoor units on one outdoor unit, come up here more often than they do in a cottage town.',
      'The industrial estates are a different kind of work. Offices, workshops and storage that get hot under a roof need a survey of the heat load, not a guess from the floor area. We agree access so the install does not shut a unit for longer than it has to. We do not publish a commercial day-rate before we have seen the building.',
      'Servicing is a steady part of the Ferndown work. Systems fitted a few years ago, including ones we did not install, still need a yearly check if the warranty is to stay valid. We service Mitsubishi Electric, Daikin and Clivet. Other brands are not confirmed.',
      'St Leonards and West Moors sit between Ferndown and the showroom, so the drive is a normal local call. West Moors does not have its own page yet.',
    ],
    servicesIntro: 'In Ferndown the useful set is home air conditioning for the larger houses, commercial work on the estates, and servicing once the system is in.',
    services: ['home-air-conditioning', 'commercial-air-conditioning', 'servicing', 'heating-and-cooling'],
    nearby: ['st-leonards', 'verwood', 'wimborne'],
    answerFaqs: [
      {
        q: 'Do you install air conditioning in Ferndown?',
        a: `Yes. Ferndown is about 7 miles from the Ringwood showroom at ${showroom}. We cover houses, bungalows and business units.`,
      },
      {
        q: 'Can one system cover several rooms in a Ferndown house?',
        a: `Yes. A multi-room system connects two, three or four indoor units to one outdoor unit. ${todo('multiRoomPrice')}`,
      },
      {
        q: 'Do you work on the Ferndown industrial estates?',
        a: `Yes. Offices, workshops and server cupboards are surveyed for heat load and access, then given a fixed price. ${todo('commercialPrice')}`,
      },
    ],
    faqs: [
      {
        q: 'How quickly can you survey a Ferndown property?',
        a: `${todo('quoteTurnaround')} The survey is free. Call ${business.phone} or use the form and we will arrange a time.`,
      },
      {
        q: 'Is Ferndown in the same area as the Ringwood showroom?',
        a: 'Ferndown is in Dorset and the showroom is in Ringwood, Hampshire. They are about 7 miles apart via the A31. We treat Ferndown as a core town, not an edge case.',
      },
    ],
  },
  {
    slug: 'verwood',
    name: 'Verwood',
    county: 'Dorset',
    miles: 5,
    title: 'Air Conditioning in Verwood | No1 Air Con',
    description: 'Air conditioning and air-to-air heating in Verwood, Dorset, about 5 miles from our Ringwood showroom. A good fit for bungalows and family homes.',
    h1: 'Air conditioning in Verwood',
    eyebrow: 'Dorset',
    lead: 'Verwood is about 5 miles from the Ringwood showroom, on the Dorset heath north of Ferndown. We install home systems here, with heating and cooling as the usual brief.',
    paragraphs: [
      'Verwood grew up around the potteries and then as a town of bungalows and family houses, with newer estates added around them. The job we see most is not a whole-house rebuild. It is the main living room, which is where the day is spent, or a bedroom that will not cool down. Bungalows often have a straightforward loft and a clear outside wall, which makes the pipe run simpler than in a terraced cottage.',
      'Heath and open gardens mean the outdoor unit can usually go somewhere that is not boxed in. That helps efficiency. It also means we should not stick it where it faces straight at a patio you actually use. We pick the spot with you on the survey.',
      'Heating mode earns its keep in these houses. A living-room unit that cools in August and takes the chill off in January is the system most Verwood customers compare at the showroom. It still only heats the room it is fitted in.',
      'Verwood is close enough that many people visit the showroom first, then book the survey on the way out. You do not have to. The form or a phone call does the same job.',
    ],
    servicesIntro: 'Home air conditioning and heating and cooling are the Verwood work. Servicing follows once the system has been in for a year.',
    services: ['home-air-conditioning', 'heating-and-cooling', 'servicing', 'repairs'],
    nearby: ['ringwood', 'ferndown', 'st-leonards'],
    answerFaqs: [
      {
        q: 'Do you cover Verwood?',
        a: `Yes. Verwood is about 5 miles from ${showroom}. It is one of the towns we survey as a matter of course.`,
      },
      {
        q: 'Is a bungalow a good candidate?',
        a: 'Usually. A single living-room system is the common request, and loft access for the pipes is often easier than in a two-storey terrace. We still survey it. Easy access does not set the size of the unit.',
      },
      {
        q: 'Can the same unit heat the living room in winter?',
        a: 'Yes. It is an air-to-air heat pump. Heating and cooling are modes on the same system. It will not heat rooms that do not have an indoor unit.',
      },
    ],
    faqs: [
      {
        q: 'How much does a Verwood living-room system cost?',
        a: `Single room systems are installed from ${business.priceFrom} including VAT. Your price is fixed after the survey.`,
      },
      {
        q: 'Which Verwood neighbours do you also cover?',
        a: 'Ringwood, Ferndown and St Leonards all have their own pages. Three Legged Cross and the lanes between are inside the same local area. Call if you are unsure of the boundary.',
      },
    ],
  },
  {
    slug: 'st-leonards',
    name: 'St Leonards',
    county: 'Dorset',
    miles: 4,
    title: 'Air Conditioning in St Leonards, Dorset | No1 Air Con',
    description: 'Air conditioning in St Leonards and St Ives, Dorset, a few miles from our Ringwood showroom. Home systems for detached houses, garden rooms and home offices.',
    h1: 'Air conditioning in St Leonards',
    eyebrow: 'Dorset',
    lead: 'This is St Leonards and St Ives in Dorset, between Ringwood and Ferndown. It is not St Leonards-on-Sea. We are about 4 miles away, at the Ringwood showroom.',
    paragraphs: [
      'St Leonards is mostly residential: detached houses set back from the road, heath and woodland around them, and the A31 running past on the way to Ferndown. Gardens are a feature, which is good for siting an outdoor unit and also the thing we have to get right. A unit facing a neighbour’s patio or a bedroom window is a poor install even if the pipe run is shorter.',
      'Garden rooms and home offices come up a lot. They are glazed, they overheat as soon as the sun is on them, and they are often too cold to use in January. A properly sized unit cools and heats that one room. A conservatory or a heavily glazed garden room may need a larger output than the floor area suggests. We measure the glass, not just the carpet.',
      'Noise matters on these roads because the plots are close enough to hear a cheap unit and far enough apart that people notice a new sound. Come to the showroom and listen. A manufacturer’s decibel figure is a starting point, not the last word.',
      'Repairs are local too. If a system we installed in St Leonards stops cooling or starts dripping, you are a short drive from the people who fitted it.',
    ],
    servicesIntro: 'The St Leonards work is home systems, heating and cooling for garden rooms and offices, and repairs when something fails.',
    services: ['home-air-conditioning', 'heating-and-cooling', 'repairs', 'ducted-and-ceiling-systems'],
    nearby: ['ringwood', 'ferndown', 'verwood'],
    answerFaqs: [
      {
        q: 'Which St Leonards do you cover?',
        a: 'St Leonards and St Ives in Dorset, between Ringwood and Ferndown. We do not mean St Leonards-on-Sea in East Sussex.',
      },
      {
        q: 'How far is the showroom?',
        a: `About 4 miles, at ${showroom}. It is one of the closest towns we serve.`,
      },
      {
        q: 'Can you cool a garden room or home office?',
        a: 'Yes, and we size it for the glass, not just the floor area. The same unit can heat the room in winter. It will not fix a structure with no insulation, so we will say if the room itself is the problem.',
      },
    ],
    faqs: [
      {
        q: 'Do you cover Ashley Heath and the roads towards Ferndown?',
        a: `Yes. If the address is in the St Leonards and St Ives area, or just beside it, call ${business.phone}. We would rather confirm than have you guess from a postcode.`,
      },
      {
        q: 'Where should the outdoor unit go?',
        a: 'Somewhere it can be fixed securely, with a short tidy pipe run, and not aimed at a neighbour’s window or your own seating area. We agree the spot before we fit anything.',
      },
    ],
  },
  {
    slug: 'christchurch',
    name: 'Christchurch',
    county: 'Dorset',
    miles: 11,
    title: 'Air Conditioning in Christchurch, Dorset | No1 Air Con',
    description: 'Air conditioning installation and servicing in Christchurch, Dorset, from our Ringwood showroom. Home and small commercial systems, with coastal humidity in mind.',
    h1: 'Air conditioning in Christchurch',
    eyebrow: 'Dorset',
    lead: 'Christchurch is the harbour town about 11 miles south of Ringwood. The showroom’s Christchurch Road address is in Ringwood, not here. We install in the town itself, and we are clear about which is which.',
    paragraphs: [
      'Christchurch has two kinds of building we work in. Near the Priory and the older streets, houses are tighter, pipe runs are fiddlier, and the outdoor unit has to be planned so it is not on a prominent front. Towards Mudeford, Highcliffe and the family-house roads, there is usually more choice of wall and a more ordinary loft.',
      'The coast changes the brief. People call because a room is humid, not only because it is hot. Cooling that also dries the air is often the point. Salt air is the other half of that conversation: an outdoor unit in a very exposed spot needs a service every year, not a fit-and-forget. We will say if a position is too exposed.',
      'Cafés, clinics and small offices in the town are commercial jobs. We size them for the door opening and the number of people, and we agree a day that does not close the business for longer than the work needs. There is no published commercial price yet.',
      'New Milton is the next town east, along the coast, and has its own page. Ferndown and St Leonards are inland, back towards the showroom.',
    ],
    servicesIntro: 'In Christchurch we mostly fit home systems, look after them with servicing, and quote commercial work for small businesses. Heating and cooling still matters away from the sea breeze.',
    services: ['home-air-conditioning', 'commercial-air-conditioning', 'servicing', 'heating-and-cooling'],
    nearby: ['new-milton', 'ferndown', 'st-leonards'],
    answerFaqs: [
      {
        q: 'Is your showroom in Christchurch?',
        a: `No. The showroom is at ${showroom}, on Christchurch Road in Ringwood. Christchurch town is about 11 miles south. Both are places we work. They are not the same place.`,
      },
      {
        q: 'Will air conditioning help with humidity near the harbour?',
        a: 'Cooling also removes moisture, which is why rooms feel less heavy. It is not a dehumidifier you can dial to a precise humidity, but it is the reason many coastal customers ask for a system.',
      },
      {
        q: 'Do you install in Highcliffe and Mudeford?',
        a: `Yes. They sit with Christchurch for the way we organise surveys. Call ${business.phone} if the address is on the edge of the area.`,
      },
    ],
    faqs: [
      {
        q: 'Can you service a system that is already in a Christchurch property?',
        a: 'Yes, if it is Mitsubishi Electric, Daikin or Clivet. Annual servicing keeps the warranty valid. Other brands are not confirmed.',
      },
      {
        q: 'What about planning near the older part of town?',
        a: 'Many home installs fall under permitted development, but the conservation-area streets and any listed building need a proper check. We do that on the survey, before you have a price that assumes a yes.',
      },
    ],
  },
  {
    slug: 'wimborne',
    name: 'Wimborne',
    county: 'Dorset',
    miles: 12,
    title: 'Air Conditioning in Wimborne | No1 Air Con',
    description: 'Air conditioning in Wimborne Minster, Dorset, from our Ringwood showroom. Careful installs for town-centre houses and family homes towards Colehill.',
    h1: 'Air conditioning in Wimborne',
    eyebrow: 'Dorset',
    lead: 'Wimborne Minster is about 12 miles from the Ringwood showroom. We install in the town and in the family-house roads towards Colehill and Merley.',
    paragraphs: [
      'The centre of Wimborne is Georgian streets around the Minster. Houses are close together, frontages matter, and an outdoor unit on show from the pavement is usually the wrong answer. We look for a side or rear wall, a flat roof that can take the weight, or a discreet bracket, and we check planning before the quote assumes a position.',
      'Further out, Colehill, Merley and the newer family homes are more ordinary installs: a bedroom, a living room, sometimes both on one outdoor unit. Lofts vary. Where there is a proper void and a reason to hide the equipment, a ducted or ceiling system is worth a conversation. Where there is not, a wall unit is the better piece of engineering.',
      'Heating and cooling is the brief we hear most. The unit that takes the heat out of a south-facing living room in July is the same unit that warms it in January. It does that room, not the whole house.',
      'Wimborne is the further end of a normal survey day, not a different business. The price is still fixed after we have seen the property. We do not add a travel premium in the copy because we have not published one.',
    ],
    servicesIntro: 'Home systems and heating and cooling lead in Wimborne. Ducted and ceiling systems come up where the loft allows. Repairs if a system we cover stops working.',
    services: ['home-air-conditioning', 'heating-and-cooling', 'ducted-and-ceiling-systems', 'repairs'],
    nearby: ['ferndown', 'verwood', 'st-leonards'],
    answerFaqs: [
      {
        q: 'Do you install air conditioning in Wimborne?',
        a: `Yes. Wimborne is about 12 miles from ${showroom}. We survey town-centre houses and the homes towards Colehill and Merley.`,
      },
      {
        q: 'Can you fit a unit without it facing the street?',
        a: 'That is the aim in the centre of town. If the only possible spot is a prominent front wall, we will say so before you commit, and we will check whether permission is needed.',
      },
      {
        q: 'Is ducted air conditioning realistic in Wimborne?',
        a: 'Only where the ceiling or loft has room for the unit, the ducts and future filter access. Many town-centre houses are better with a wall or floor unit. The survey decides it.',
      },
    ],
    faqs: [
      {
        q: 'How much does installation cost in Wimborne?',
        a: `A single room starts from ${business.priceFrom} including VAT. The fixed price follows the survey. Ducted work is priced separately: ${todo('ductedPrice')}`,
      },
      {
        q: 'Do you cover Colehill and Merley?',
        a: 'Yes. We treat them with Wimborne. If you are further towards Poole or Broadstone, phone us and we will tell you whether the address is inside the area we actually survey.',
      },
    ],
  },
  {
    slug: 'new-milton',
    name: 'New Milton',
    county: 'Hampshire',
    miles: 10,
    title: 'Air Conditioning in New Milton | No1 Air Con',
    description: 'Air conditioning and air-to-air heating in New Milton, Hampshire, from our Ringwood showroom. A common brief for bungalows and family homes between the forest and the coast.',
    h1: 'Air conditioning in New Milton',
    eyebrow: 'Hampshire',
    lead: 'New Milton is about 10 miles south-east of Ringwood, between the New Forest and the coast, with its own station and high street. We install home systems and look after them.',
    paragraphs: [
      'A lot of New Milton is bungalows and family houses. The request we hear is specific: a bedroom that will cool down at night in summer, and a living room that will heat in winter without running the whole house. Those can be two indoor units on one outdoor unit, or a single room to start. We will not push a second unit if one room is the real problem.',
      'Being between the forest and the sea means two kinds of summer. Still, humid days where drying the air matters, and brighter days where a south-facing room overheats through the glass. We size for that room. A bungalow loft often gives us a decent pipe route. A packed loft full of boarding and water tanks might not, and we will say so.',
      'The high street has small commercial rooms: offices over shops, salons, clinics. They are surveyed as commercial jobs even though the building looks domestic from the pavement. Access and the hours you are open decide the day of the install.',
      'Christchurch is the next town west and has its own page. The showroom is back in Ringwood, about 10 miles, if you want to hear a unit before the survey.',
    ],
    servicesIntro: 'New Milton is mostly home air conditioning and heating and cooling, plus servicing once the system is in. Commercial work is there for the high-street rooms.',
    services: ['home-air-conditioning', 'heating-and-cooling', 'servicing', 'commercial-air-conditioning'],
    nearby: ['christchurch', 'ringwood', 'st-leonards'],
    answerFaqs: [
      {
        q: 'Do you install air conditioning in New Milton?',
        a: `Yes. New Milton is about 10 miles from the showroom at ${showroom}. We survey bungalows, family homes and small high-street businesses.`,
      },
      {
        q: 'Can I cool a bedroom and heat a living room?',
        a: 'Yes. Two indoor units can share one outdoor unit, and each room is controlled on its own. Both units heat and cool. You do not have to do both rooms at once.',
      },
      {
        q: 'Does the coast change anything?',
        a: 'Humidity is part of why people want cooling here, because the system dries the air as it cools. If the outdoor unit would sit in a very exposed spot, we plan for a yearly service rather than pretending the sea air is irrelevant.',
      },
    ],
    faqs: [
      {
        q: 'How much is a New Milton bedroom system?',
        a: `Single room installation starts from ${business.priceFrom} including VAT. A second room is a multi-room system: ${todo('multiRoomPrice')}`,
      },
      {
        q: 'Do you cover Barton on Sea and the roads towards the forest?',
        a: `Barton on Sea is next to New Milton and we treat it as the same local area. Forest-side hamlets: call ${business.phone} with the address. We cover about ${business.radiusMiles} miles from Ringwood.`,
      },
    ],
  },
];

export function getTown(slug) {
  return towns.find((town) => town.slug === slug);
}

export function getTownsBySlugs(slugs) {
  return slugs.map((slug) => getTown(slug)).filter(Boolean);
}

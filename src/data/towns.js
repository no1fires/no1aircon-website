import { business, openingHoursText, whatsappSend } from './business.js';

const showroom = `${business.street}, ${business.town} ${business.postcode}`;

export const towns = [
  {
    slug: 'ringwood',
    name: 'Ringwood',
    county: 'Hampshire',
    miles: 0,
    title: 'Air Conditioning Installers in Ringwood | No1 Air Con',
    description: 'Air conditioning in Ringwood, from the showroom at 10 Christchurch Road, BH24 1DN. Ask for a remote quote.',
    h1: 'Air conditioning installers in Ringwood',
    eyebrow: 'Our home town',
    lead: `The showroom is here, at ${showroom}. You can see and hear the units before you buy, then have the system installed in a Ringwood home or business.`,
    paragraphs: [
      'Ringwood sits on the western edge of the New Forest. The centre still has a market-town high street, with older houses close in and newer estates out towards Poulner and Hightown. Cottages on the forest side often have thick walls and small rooms. Estates from the last forty years usually have lofts we can work in and a clearer place for an outdoor unit.',
      'Christchurch Road is in Ringwood. It is not in the town of Christchurch, which is a separate page and a separate drive south. If you are coming to the showroom, use the Ringwood address.',
      'High-street shops, salons and small offices call us as well as householders. A wall unit is usually enough for a room above a shop. A ceiling cassette is the conversation when the floor is open and the ceiling will take it.',
      'Because we are based here, a Ringwood visit is the simplest one we do, and a lot of jobs do not need one. When we do visit, we still write it up properly: room size, glass, where the pipes can run, and whether the outdoor unit would face a neighbour.',
    ],
    servicesIntro: 'In Ringwood we fit the full range, and you can compare the brands in the showroom the same day as a conversation about the house.',
    services: ['home-air-conditioning', 'heating-and-cooling', 'commercial-air-conditioning', 'servicing', 'repairs', 'ducted-and-ceiling-systems'],
    nearby: ['fordingbridge', 'verwood', 'st-leonards', 'west-moors'],
    answerFaqs: [
      {
        q: 'Where is the No1 Air Con showroom?',
        a: `At ${showroom}. It is on Christchurch Road in Ringwood, Hampshire. You can compare Mitsubishi Electric, Daikin, Clivet, Toshiba, Panasonic and Samsung there and hear them running.`,
      },
      {
        q: 'Do you only work in Ringwood?',
        a: `No. The showroom is in Ringwood. We also install in Fordingbridge, Verwood, Ferndown, St Leonards, Christchurch, Wimborne and New Milton, within ${business.radiusMiles} miles of our Ringwood showroom.`,
      },
      {
        q: 'Can you install air conditioning in an older Ringwood house?',
        a: 'Often yes. The limit is usually the outdoor unit position and the pipe run, not the age of the house. Listed buildings and tight courtyards need a proper look. We check permitted development as part of the survey.',
      },
    ],
    faqs: [
      {
        q: 'What does a Ringwood home installation cost?',
        a: `A Clivet single room system is installed from ${business.priceFrom} (0% VAT). Send photos, measurements and a floor plan and we quote remotely. ${whatsappSend}. A survey is only if it is needed. Multi-room systems from ${business.multiRoomFrom}. Commercial prices are quoted the same way.`,
      },
      {
        q: 'When is the showroom open?',
        a: `${openingHoursText()}.`,
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
    lead: 'Fordingbridge is about 6 miles north-west of the Ringwood showroom, on the River Avon at the edge of the New Forest. We quote remotely and install there for homes and small high-street businesses.',
    paragraphs: [
      'Fordingbridge is a small Hampshire town: a high street of independent shops, cottages near the centre, and family houses on the edges. Rooms are often modest, and a lot of the older walls are solid. That changes the install. A compact wall unit or a floor console usually suits better than a ceiling cassette, because there is often no void to put one in.',
      'Heating matters here as much as cooling. Older cottages can be cold in the rooms you actually sit in, and expensive to heat all day with radiators. An air-to-air unit heats the room it is fitted in. It is not a whole-house boiler replacement, and we will not sell it as one.',
      `Outdoor units need a careful spot. Lanes are narrow, gardens are overlooked, and a unit under a neighbour’s window is a bad install. Send photos of that outside wall, measurements and a floor plan, and we quote remotely. ${whatsappSend}. We visit only if we need to.`,
      'The drive from the showroom is short, so a Fordingbridge visit, when one is needed, is a normal appointment rather than a special trip. You can still come to Ringwood first if you want to hear the units.',
    ],
    servicesIntro: 'The work we do most in Fordingbridge is home systems, heating and cooling, servicing and repairs. Ducted systems are the exception, and only where a loft will actually take one.',
    services: ['home-air-conditioning', 'heating-and-cooling', 'repairs', 'servicing'],
    nearby: ['ringwood', 'verwood', 'st-leonards', 'salisbury'],
    answerFaqs: [
      {
        q: 'Do you install air conditioning in Fordingbridge?',
        a: `Yes. Fordingbridge is about 6 miles from the showroom at ${showroom}. Send photos, measurements and a floor plan and we quote remotely. ${whatsappSend}. A survey is only if it is needed.`,
      },
      {
        q: 'Will a unit suit a Fordingbridge cottage?',
        a: `Often. Smaller rooms and solid walls usually point to a quiet wall unit or a floor console, not a ceiling cassette. We check the wall, the pipe run and the outdoor unit position from the photos, measurements and floor plan. ${whatsappSend}. We visit only if we need to.`,
      },
      {
        q: 'Can it heat as well as cool?',
        a: 'Yes. The systems we fit are air-to-air heat pumps. They heat the room the indoor unit is in. They do not heat a hot-water cylinder or automatically replace a boiler.',
      },
    ],
    faqs: [
      {
        q: 'How far is the showroom from Fordingbridge?',
        a: `About 6 miles, at ${showroom}. You are welcome to visit and hear the units before you decide.`,
      },
      {
        q: 'Do you cover the villages around Fordingbridge?',
        a: `We work within ${business.radiusMiles} miles of our Ringwood showroom. If you are just outside the town, call ${business.phone} and we will say yes or no rather than leave you guessing.`,
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
      `The industrial estates are a different kind of work. Offices, workshops and storage that get hot under a roof need photos, measurements and a floor plan so we can judge the heat load, not a guess from the floor area. ${whatsappSend}. We agree access so the install does not shut a unit for longer than it has to. We quote remotely. A survey is only if it is needed.`,
      'Servicing is a steady part of the Ferndown work. Systems fitted a few years ago, including ones we did not install, still need a yearly check if the warranty is to stay valid. We service Mitsubishi Electric, Daikin, Clivet, Toshiba, Panasonic and Samsung.',
      'St Leonards and West Moors sit between Ferndown and the showroom, so the drive is a normal local call. [West Moors](/areas/west-moors/) has its own page.',
    ],
    servicesIntro: 'In Ferndown the useful set is home air conditioning for the larger houses, commercial work on the estates, and servicing once the system is in.',
    services: ['home-air-conditioning', 'commercial-air-conditioning', 'servicing', 'heating-and-cooling'],
    nearby: ['st-leonards', 'verwood', 'wimborne', 'west-moors'],
    answerFaqs: [
      {
        q: 'Do you install air conditioning in Ferndown?',
        a: `Yes. Ferndown is about 7 miles from the Ringwood showroom at ${showroom}. We cover houses, bungalows and business units.`,
      },
      {
        q: 'Can one system cover several rooms in a Ferndown house?',
        a: `Yes. A multi-room system connects two, three or four indoor units to one outdoor unit. Multi-room systems from ${business.multiRoomFrom}.`,
      },
      {
        q: 'Do you work on the Ferndown industrial estates?',
        a: `Yes. Offices, workshops and server cupboards are quoted remotely from photos, measurements and a floor plan of the heat load and the access. ${whatsappSend}. A survey is only if it is needed.`,
      },
    ],
    faqs: [
      {
        q: 'How do I get a price for a Ferndown property?',
        a: `Send photos, measurements and a floor plan. ${whatsappSend}. Call ${business.phone} or use the form. We quote remotely. A survey is only if it is needed, and if we visit that survey is free.`,
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
      `Heath and open gardens mean the outdoor unit can usually go somewhere that is not boxed in. That helps efficiency. It also means we should not stick it where it faces straight at a patio you actually use. Send a photo of the garden and the outside wall with the floor plan. ${whatsappSend}. We visit only if we need to.`,
      'Heating mode earns its keep in these houses. A living-room unit that cools in August and takes the chill off in January is the system most Verwood customers compare at the showroom. It still only heats the room it is fitted in.',
      `Verwood is close enough that many people visit the showroom first. You do not have to. The form or a phone call, with photos, measurements and a floor plan, is enough for a remote quote. ${whatsappSend}.`,
    ],
    servicesIntro: 'Home air conditioning and heating and cooling are the Verwood work. Servicing follows once the system has been in for a year.',
    services: ['home-air-conditioning', 'heating-and-cooling', 'servicing', 'repairs'],
    nearby: ['ringwood', 'ferndown', 'st-leonards', 'west-moors'],
    answerFaqs: [
      {
        q: 'Do you cover Verwood?',
        a: `Yes. Verwood is about 5 miles from ${showroom}. It is one of the towns we cover as a matter of course. A survey is only if the remote quote needs a visit.`,
      },
      {
        q: 'Is a bungalow a good candidate?',
        a: `Usually. A single living-room system is the common request, and loft access for the pipes is often easier than in a two-storey terrace. Easy access does not set the size of the unit. Send photos, measurements and a floor plan for a remote quote. ${whatsappSend}. A survey is only if it is needed.`,
      },
      {
        q: 'Can the same unit heat the living room in winter?',
        a: 'Yes. It is an air-to-air heat pump. Heating and cooling are modes on the same system. It will not heat rooms that do not have an indoor unit.',
      },
    ],
    faqs: [
      {
        q: 'How much does a Verwood living-room system cost?',
        a: `Single room systems from ${business.priceFrom} (Clivet, 0% VAT). Send photos, measurements and a floor plan and we quote remotely. ${whatsappSend}. A survey is only if it is needed.`,
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
    description: 'Air conditioning in St Leonards and St Ives, Dorset, a few miles from our Ringwood showroom.',
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
    nearby: ['ringwood', 'ferndown', 'verwood', 'west-moors'],
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
    slug: 'west-moors',
    name: 'West Moors',
    county: 'Dorset',
    // No measured mileage is published. The phrase is the distance we are willing to state.
    miles: 'a few miles south-west',
    title: 'Air Conditioning in West Moors | No1 Air Con',
    description: 'Air conditioning installation in West Moors, a Dorset village near Ferndown and St Leonards. Remote quotes from our Ringwood showroom.',
    h1: 'Air conditioning in West Moors',
    eyebrow: 'Dorset',
    lead: 'West Moors is a village in East Dorset, a few miles south-west of the Ringwood showroom, near Ferndown and St Leonards. We quote remotely and install for homes there.',
    paragraphs: [
      `West Moors sits between the Ringwood showroom and Ferndown, with St Leonards nearby. The showroom is at ${showroom}. Christchurch Road is in Ringwood. It is not the town of Christchurch. You can compare Mitsubishi Electric, Daikin, Clivet, Toshiba, Panasonic and Samsung there and hear them running. You do not have to visit to get a price.`,
      `Send photos of the room and the outside wall, measurements and a floor plan. ${whatsappSend}. We quote remotely. A survey is only if it is needed, and if we visit that survey is free. Most jobs are done in a day. The lead time is 4 to 8 weeks. We hold a lot of stock, so it is often sooner, but that is not a promise for the next job.`,
      `A Clivet single room is installed from ${business.priceFrom} (0% VAT). Multi-room systems, with two, three or four indoor units on one outdoor unit, are from ${business.multiRoomFrom}. Qualifying home air-to-air heat pump installs are 0% VAT until 31 March 2027. The systems are air-to-air heat pumps: they heat the room the indoor unit is in, as well as cool it. They do not heat a hot-water cylinder or replace a boiler on their own.`,
      `${business.warranty} Servicing is from ${business.servicingFrom}. We service Mitsubishi Electric, Daikin, Clivet, Toshiba, Panasonic and Samsung, including systems we did not install. Annual servicing keeps the warranty valid. We have not published a West Moors case study. Payment is 50% deposit and 50% on completion. Finance is not offered at the moment.`,
    ],
    servicesIntro: 'In West Moors the useful set is a home system, heating and cooling for the rooms that have a unit, then servicing and repairs once it is in.',
    services: ['home-air-conditioning', 'heating-and-cooling', 'servicing', 'repairs'],
    nearby: ['ferndown', 'st-leonards', 'verwood', 'ringwood'],
    answerFaqs: [
      {
        q: 'Do you install air conditioning in West Moors?',
        a: `Yes. West Moors is a village in East Dorset, a few miles south-west of the showroom at ${showroom}, near Ferndown and St Leonards. It is inside the ${business.radiusMiles} miles we cover. Send photos, measurements and a floor plan and we quote remotely. ${whatsappSend}.`,
      },
      {
        q: 'How far is West Moors from the showroom?',
        a: `A few miles south-west. The showroom is at ${showroom}, on Christchurch Road in Ringwood, not in Christchurch town. You can visit and hear the units, or send the photos and we will quote without a visit.`,
      },
      {
        q: 'How much does air conditioning cost in West Moors?',
        a: `A Clivet single room is from ${business.priceFrom} (0% VAT). That is the cheapest system we publish, not a price for every brand. Multi-room systems from ${business.multiRoomFrom}. Servicing is from ${business.servicingFrom}. The [cost guide](/air-conditioning-cost/) sets out what those prices do and do not include.`,
      },
    ],
    faqs: [
      {
        q: 'Does a West Moors install qualify for the Boiler Upgrade Scheme grant?',
        a: 'No. The £2,500 Boiler Upgrade Scheme grant needs an MCS-certified installer. No1 Air Con is not MCS certified, so an install by No1 does not qualify. [Ofgem publishes the scheme rules](https://www.ofgem.gov.uk/environmental-and-social-schemes/boiler-upgrade-scheme-bus/property-owners).',
      },
      {
        q: 'What warranty and servicing apply in West Moors?',
        a: `${business.warranty} Servicing is recommended yearly and is from ${business.servicingFrom}. A service cleans the unit inside and out, checks it is working properly and checks for leaks. Skipping the service is the usual reason a warranty claim is turned down.`,
      },
      {
        q: 'Which places near West Moors do you cover?',
        a: `Ferndown, St Leonards, Verwood and Ringwood all have their own pages. We install within ${business.radiusMiles} miles of the Ringwood showroom. Call ${business.phone} if you are unsure whether an address is inside that area.`,
      },
    ],
  },
  {
    slug: 'christchurch',
    name: 'Christchurch',
    county: 'Dorset',
    miles: 11,
    title: 'Air Conditioning in Christchurch, Dorset | No1 Air Con',
    description: 'Air conditioning in Christchurch, Dorset, from our Ringwood showroom. Home systems and small commercial jobs.',
    h1: 'Air conditioning in Christchurch',
    eyebrow: 'Dorset',
    lead: 'Christchurch is the harbour town about 11 miles south of Ringwood. The showroom’s Christchurch Road address is in Ringwood, not here. We install in the town itself, and we are clear about which is which.',
    paragraphs: [
      'Christchurch has two kinds of building we work in. Near the Priory and the older streets, houses are tighter, pipe runs are fiddlier, and the outdoor unit has to be planned so it is not on a prominent front. Towards Mudeford, Highcliffe and the family-house roads, there is usually more choice of wall and a more ordinary loft.',
      'The coast changes the brief. People call because a room is humid, not only because it is hot. Cooling that also dries the air is often the point. Salt air is the other half of that conversation: an outdoor unit in a very exposed spot needs a service every year, not a fit-and-forget. We will say if a position is too exposed.',
      'Cafés, clinics and small offices in the town are commercial jobs. We size them for the door opening and the number of people, and we agree a day that does not close the business for longer than the work needs. Ask us for a quote, or call 01425 333760.',
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
        a: 'Yes. We service Mitsubishi Electric, Daikin, Clivet, Toshiba, Panasonic and Samsung. Annual servicing keeps the warranty valid.',
      },
      {
        q: 'What about planning near the older part of town?',
        a: `Many home installs fall under permitted development, but the conservation-area streets and any listed building need a proper check. Tell us about that with the photos and floor plan, so the remote quote does not assume a position that will not be allowed. ${whatsappSend}. We visit only if we need to.`,
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
      `Wimborne is the further end of a normal day from the showroom, not a different business. The price is a remote quote from photos, measurements and a floor plan. ${whatsappSend}. A survey is only if it is needed.`,
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
        a: `Only where the ceiling or loft has room for the unit, the ducts and future filter access. Many town-centre houses are better with a wall or floor unit. Photos of the ceiling and a floor plan are enough to say which. ${whatsappSend}. We visit only if we need to.`,
      },
    ],
    faqs: [
      {
        q: 'How much does installation cost in Wimborne?',
        a: `A Clivet single room starts from ${business.priceFrom} (0% VAT). Send photos, measurements and a floor plan and we quote remotely. ${whatsappSend}. A survey is only if it is needed. Ducted work is priced from photos of the ceiling.`,
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
    description: 'Air conditioning in New Milton, Hampshire, from our Ringwood showroom. A good fit for bungalows and family homes.',
    h1: 'Air conditioning in New Milton',
    eyebrow: 'Hampshire',
    lead: 'New Milton is about 10 miles south-east of Ringwood, between the New Forest and the coast, with its own station and high street. We install home systems and look after them.',
    paragraphs: [
      'A lot of New Milton is bungalows and family houses. The request we hear is specific: a bedroom that will cool down at night in summer, and a living room that will heat in winter without running the whole house. Those can be two indoor units on one outdoor unit, or a single room to start. We will not push a second unit if one room is the real problem.',
      'Being between the forest and the sea means two kinds of summer. Still, humid days where drying the air matters, and brighter days where a south-facing room overheats through the glass. We size for that room. A bungalow loft often gives us a decent pipe route. A packed loft full of boarding and water tanks might not, and we will say so.',
      'The high street has small commercial rooms: offices over shops, salons, clinics. They are surveyed as commercial jobs even though the building looks domestic from the pavement. Access and the hours you are open decide the day of the install.',
      'Christchurch is the next town west and has its own page. The showroom is back in Ringwood, about 10 miles, if you want to hear a unit before you decide.',
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
        a: `A Clivet single room starts from ${business.priceFrom} (0% VAT). A second room is a multi-room system: from ${business.multiRoomFrom}`,
      },
      {
        q: 'Do you cover Barton on Sea and the roads towards the forest?',
        a: `Barton on Sea is next to New Milton and we treat it as the same local area. Forest-side hamlets: call ${business.phone} with the address. We cover ${business.radiusMiles} miles from our Ringwood showroom.`,
      },
    ],
  },
  {
    slug: 'bournemouth',
    name: 'Bournemouth',
    county: 'Dorset',
    title: 'Air Conditioning in Bournemouth | No1 Air Con',
    description: 'Air conditioning installation in Bournemouth from our Ringwood showroom. A real Daikin dining-room job is written up, with photos.',
    h1: 'Air conditioning in Bournemouth',
    eyebrow: 'Dorset',
    lead: 'Bournemouth is on the Dorset coast. The showroom is in Ringwood, and Bournemouth is one of the places already named as inside our 25 mile radius. The page is built around a dining-room install we finished there in July 2026.',
    paragraphs: [
      'Bournemouth is a large coastal town: flats and guest houses nearer the seafront, and family houses further back. A wall unit in a dining room is a different conversation from cooling a whole guest house. We size the room we are asked to do, from photos, measurements and a floor plan.',
      'The job we can show you is a dining room. Juliet asked us to fit air conditioning for her mother-in-law, who is in her 80s, so the room would be more comfortable in summer heat. We do not name her. On Sunday 19 July 2026 Dan fitted a Daikin 3.5kW wall unit, high on the dining-room wall. The outdoor unit is on a side wall, with white trunking, and the job included a fused spur. He was there from about 8am to 1pm. The job is complete.',
      'That was not Juliet’s first system with us. In June 2026 we had already fitted a Daikin 3.5kW back-to-back system at her own home in St Ives, near Ringwood. Back-to-back means the indoor and outdoor units sit on either side of the same wall. She then asked us to do the Bournemouth dining room.',
      `Published prices, and what they do not cover, are on the [air conditioning cost](/air-conditioning-cost/) page. A Clivet single room is the cheapest option we publish, from ${business.priceFrom} at 0% VAT. It is not a price for every brand. ${whatsappSend}. A survey is only if it is needed.`,
    ],
    servicesIntro: 'In Bournemouth the work we can describe from a finished job is a single wall unit in a dining room. The same visit can also cover heating and cooling, servicing and repairs for the brands we install.',
    services: ['home-air-conditioning', 'heating-and-cooling', 'servicing', 'repairs'],
    nearby: ['poole', 'christchurch', 'ferndown'],
    feature: {
      href: '/case-studies/bournemouth-daikin-air-conditioning/',
      src: '/images/case-studies/bournemouth-dining-room-daikin-indoor-unit-800.webp',
      width: 800,
      height: 600,
      alt: 'Daikin wall-mounted air conditioner high on a dining-room wall beneath a chandelier in Bournemouth',
      title: 'Dining room in Bournemouth',
      text: 'A Daikin 3.5kW wall unit, fitted by Dan in one morning on 19 July 2026. The outdoor unit is on a side wall, with white trunking.',
    },
    answerFaqs: [
      {
        q: 'Do you install air conditioning in Bournemouth?',
        a: `Yes. Bournemouth is already named as inside the ${business.radiusMiles} mile radius of the Ringwood showroom at ${showroom}. Send photos, measurements and a floor plan and we quote remotely. ${whatsappSend}.`,
      },
      {
        q: 'What was fitted in the Bournemouth case study?',
        a: 'A Daikin 3.5kW wall unit, high on a dining-room wall, for Juliet’s mother-in-law. Dan fitted it on Sunday 19 July 2026, from about 8am to 1pm. The outdoor unit is on a side wall with white trunking, and the job included a fused spur.',
      },
      {
        q: 'How much does air conditioning cost in Bournemouth?',
        a: `The cheapest system we publish is a Clivet single room from ${business.priceFrom} at 0% VAT. That is the cheapest Clivet option, not a price for every brand. Multi-room systems from ${business.multiRoomFrom}. The [cost guide](/air-conditioning-cost/) sets out what those prices do and do not include.`,
      },
    ],
    faqs: [
      {
        q: 'Is the Bournemouth install a multi-room system?',
        a: 'No. It is one Daikin 3.5kW wall unit in one dining room, with its own outdoor unit.',
      },
      {
        q: 'Can I read the full write-up?',
        a: 'Yes. The Bournemouth case study has the photos, the facts and Juliet’s review.',
      },
    ],
  },
  {
    slug: 'poole',
    name: 'Poole',
    county: 'Dorset',
    title: 'Air Conditioning in Poole | No1 Air Con',
    description: 'Air conditioning installation in Poole, Dorset, from our Ringwood showroom. Poole is inside the area we already name. Ask for a remote quote.',
    h1: 'Air conditioning in Poole',
    eyebrow: 'Dorset',
    lead: 'Poole is the harbour town next to Bournemouth. The showroom is in Ringwood, and Poole is already named as inside our 25 mile radius. We quote from photos, measurements and a floor plan.',
    paragraphs: [
      'Poole spreads from the old quay and the town centre out to family housing and the harbour edge. A flat above a shop and a house with a garden are different places to put an outdoor unit. We do not price either from the town name. We need photos of the room and the outside wall.',
      'We have not published a Poole case study. The nearest finished job we can show is next door in Bournemouth: a Daikin 3.5kW wall unit in a dining room, fitted on 19 July 2026. That was a Bournemouth house, not a Poole one. It is useful only as an example of the sort of single-room wall unit we fit along this coast.',
      `Poole sits with Christchurch and Bournemouth on the Dorset coast, west of the New Forest. The [Dorset](/areas/dorset/) page lists the other Dorset towns. Published prices are on the [air conditioning cost](/air-conditioning-cost/) page. ${whatsappSend}. A survey is only if it is needed.`,
    ],
    servicesIntro: 'In Poole we quote for home air conditioning, heating and cooling, servicing and repairs. Commercial and ducted work is quoted the same way, from photos, when the building can take it.',
    services: ['home-air-conditioning', 'heating-and-cooling', 'servicing', 'repairs'],
    nearby: ['bournemouth', 'christchurch', 'wimborne'],
    answerFaqs: [
      {
        q: 'Do you install air conditioning in Poole?',
        a: `Yes. Poole is already named as inside the ${business.radiusMiles} mile radius of the Ringwood showroom at ${showroom}.`,
      },
      {
        q: 'Do you have a Poole case study?',
        a: 'Not yet. The nearest written-up job is a Daikin dining-room install in Bournemouth, which is a different town.',
      },
      {
        q: 'How much does air conditioning installation cost in Poole?',
        a: `A Clivet single room, our cheapest published system, is from ${business.priceFrom} at 0% VAT. It is not the price of every brand. See the [cost guide](/air-conditioning-cost/).`,
      },
    ],
    faqs: [
      {
        q: 'Is Poole in the same area as Bournemouth?',
        a: 'They are neighbouring Dorset towns. A job in one is not a job in the other. We still quote each address from its own photos.',
      },
      {
        q: 'Where is the showroom if I want to see a unit first?',
        a: `At ${showroom}, in Ringwood. Poole does not have a No1 showroom.`,
      },
    ],
  },
  {
    slug: 'southampton',
    name: 'Southampton',
    county: 'Hampshire',
    title: 'Air Conditioning in Southampton | No1 Air Con',
    description: 'Air conditioning in Southampton, and a real install in Warsash, just outside the city. Two Daikin units, fitted in one day.',
    h1: 'Air conditioning in Southampton',
    eyebrow: 'Hampshire',
    lead: 'Southampton is a Hampshire city on the Solent. The showroom is in Ringwood, and Southampton is already named as inside our 25 mile radius. The job we can show you is not in the city centre. It is in Warsash, just outside Southampton.',
    paragraphs: [
      'Southampton is a city of terraces, flats and newer estates, with the port on one side and the river on the other. Warsash is a village on the coast to the east of the city, towards the Hamble. It is not a Southampton city address. We say that because the case study people find from this page is a chalet bungalow in Warsash.',
      'After that house was insulated it got very hot in summer, especially a child’s bedroom upstairs. On 15 June 2026 we fitted two Daikin Sensira 3.5kW single-split wall units, one indoor unit and one outdoor unit for each room. Both systems were installed in one day. The write-up names the rooms, the units and the date.',
      `A Southampton city address is quoted the same way as Warsash: photos, measurements and a floor plan, then a remote quote. ${whatsappSend}. A survey is only if it is needed. Prices we publish are on the [air conditioning cost](/air-conditioning-cost/) page. The rest of the county is on the [Hampshire](/areas/hampshire/) page.`,
    ],
    servicesIntro: 'The Southampton page is here for city addresses and for people searching from Warsash. The finished job we can show is the Warsash chalet bungalow.',
    services: ['home-air-conditioning', 'heating-and-cooling', 'servicing', 'repairs'],
    nearby: ['new-milton', 'ringwood'],
    feature: {
      href: '/case-studies/warsash-chalet-bungalow/',
      src: '/images/case-studies/warsash-chalet-bungalow-childs-bedroom-daikin-800.webp',
      width: 800,
      height: 1067,
      alt: "Daikin wall-mounted air conditioning unit fitted high on the sloped wall of a child's bedroom in a Warsash chalet bungalow, just outside Southampton",
      title: 'Chalet bungalow in Warsash, just outside Southampton',
      text: 'Two Daikin Sensira 3.5kW wall units, fitted in one day on 15 June 2026. Warsash is a village outside Southampton, not a city-centre job.',
    },
    answerFaqs: [
      {
        q: 'Do you install air conditioning in Southampton?',
        a: `Yes. Southampton is already named as inside the ${business.radiusMiles} mile radius of the Ringwood showroom. Send photos, measurements and a floor plan. ${whatsappSend}.`,
      },
      {
        q: 'Is the Warsash case study in Southampton?',
        a: 'Warsash is just outside Southampton, on the Hampshire coast. It is not in Southampton city. The case study says Warsash, Southampton so people can find the area. The house is a chalet bungalow in the village.',
      },
      {
        q: 'What was fitted in Warsash?',
        a: 'Two Daikin Sensira 3.5kW single-split wall units, installed in one day on 15 June 2026. The house had got very hot after it was insulated, especially a child’s bedroom.',
      },
    ],
    faqs: [
      {
        q: 'How much does air conditioning installation cost in Southampton?',
        a: `The cheapest system we publish is a Clivet single room from ${business.priceFrom} at 0% VAT. That price is not for every brand. The [cost guide](/air-conditioning-cost/) explains the other published prices.`,
      },
      {
        q: 'Can I see the Warsash photos?',
        a: 'Yes. The Warsash case study has the bedroom photo, the outdoor units and the facts.',
      },
    ],
  },
  {
    slug: 'portsmouth',
    name: 'Portsmouth',
    county: 'Hampshire',
    miles: 40,
    background: true,
    title: 'Air Conditioning in Portsmouth | No1 Air Con',
    description: 'Air conditioning in Portsmouth for Southsea terraces, flats and family houses. The Ringwood showroom is about 40 miles west, so we check the address first.',
    h1: 'Air conditioning in Portsmouth',
    eyebrow: 'Hampshire',
    lead: 'Portsmouth is the island city on the east side of Hampshire, about 40 miles from the Ringwood showroom, with most of the city on Portsea Island. The systems we fit are air-to-air heat pumps: they cool a humid room in summer and heat that same room in winter. Portsmouth is further than the 25 miles we normally cover, so we check the address before we say yes.',
    paragraphs: [
      'Portsmouth is packed closer than a New Forest village. Southsea is terraces, bay-fronted houses and flats, with guest houses towards the seafront. Old Portsmouth, around the Camber, is older and tighter. Fratton, Buckland and North End are Victorian terraces with small yards. Milton, Eastney, Copnor and Baffins are more often family houses. Cosham, Drayton and Paulsgrove sit on the mainland side of Portsbridge. A wall unit in one room is the usual conversation. A ceiling cassette needs a void that a terrace or a flat often does not have.',
      'Flats need a straight answer. If there is no outside wall the building will let us use, or the lease will not allow an outdoor unit, we say so from the photos. A house with a rear yard is simpler, and the unit still should not face a neighbour’s window across a short garden. Salt air along the seafront is the other constraint. An outdoor unit in a very exposed spot needs a service every year.',
      'Summer is the call we expect. South-facing bays and upper-floor rooms overheat, and the air off the Solent is often humid, so cooling that also dries the room is the point. Winter is milder than on the New Forest edge, and a back room in an uninsulated terrace is still cold. The unit that cools a bedroom in August heats that same room in January. It heats the room the indoor unit is in. It does not replace the boiler.',
      `We have not published a Portsmouth case study. The nearest written-up Hampshire job is a chalet bungalow in Warsash, just outside Southampton, where two Daikin Sensira 3.5kW wall units were fitted in one day on 15 June 2026. That is not a Portsmouth install. [Southampton](/areas/southampton/) has its own page, and the rest of the county is on the [Hampshire](/areas/hampshire/) page. If the address is inside the area we cover, the quote is photos, measurements and a floor plan. ${whatsappSend}. A survey is only if it is needed. Published prices are on the [air conditioning cost](/air-conditioning-cost/) page.`,
    ],
    servicesIntro: 'Where a Portsmouth address is inside the area we cover, the usual work is a home wall unit, heating and cooling for that room, then servicing and repairs.',
    services: ['home-air-conditioning', 'heating-and-cooling', 'servicing', 'repairs'],
    nearby: ['southampton'],
    answerFaqs: [
      {
        q: 'Do you install air conditioning in Portsmouth?',
        a: `The showroom is at ${showroom}, and we work within ${business.radiusMiles} miles of it. Portsmouth is about 40 miles east, so it is outside that radius. Call ${business.phone} with the address and we will say yes or no. Southsea, Old Portsmouth, Fratton, Milton, Copnor and Cosham are all in the city. A page for the city is not a promise that every postcode is covered.`,
      },
      {
        q: 'Can you fit air conditioning in a Portsmouth terrace or flat?',
        a: 'A terrace with a usable outside wall usually can. A flat depends on the wall, the lease and where the outdoor unit would go. Send photos of the room and the outside wall and we will say if it can be done.',
      },
      {
        q: 'Will a Portsmouth system help in a humid summer and a cold room in winter?',
        a: 'Yes, when the address is one we cover. Cooling also takes moisture out of the air, which is why a Southsea room can feel less heavy. The same air-to-air heat pump heats the room the indoor unit is in. It does not heat rooms without a unit.',
      },
    ],
    faqs: [
      {
        q: 'How much does air conditioning cost in Portsmouth?',
        a: `If we cover the address, a Clivet single room is from ${business.priceFrom} (0% VAT). That is the cheapest system we publish, not a price for every brand. Multi-room systems from ${business.multiRoomFrom}. The [cost guide](/air-conditioning-cost/) sets out what those prices do and do not include.`,
      },
      {
        q: 'Is there a Portsmouth case study?',
        a: 'No. The Hampshire job we have written up is a chalet bungalow in Warsash, just outside Southampton. It is not a Portsmouth house.',
      },
      {
        q: 'Does a Portsmouth install qualify for the Boiler Upgrade Scheme grant?',
        a: 'No. The £2,500 Boiler Upgrade Scheme grant needs an MCS-certified installer. No1 Air Con is not MCS certified, so an install by No1 does not qualify. [Ofgem publishes the scheme rules](https://www.ofgem.gov.uk/environmental-and-social-schemes/boiler-upgrade-scheme-bus/property-owners).',
      },
    ],
  },
  {
    slug: 'salisbury',
    name: 'Salisbury',
    county: 'Wiltshire',
    miles: 17,
    background: true,
    title: 'Air Conditioning in Salisbury | No1 Air Con',
    description: 'Air conditioning in Salisbury, Wiltshire, about 17 miles north of our Ringwood showroom. Cooling and heat-pump heating for city houses, Harnham and Downton.',
    h1: 'Air conditioning in Salisbury',
    eyebrow: 'Wiltshire',
    lead: 'Salisbury is a Wiltshire cathedral city about 17 miles north of the Ringwood showroom, up the A338 through Fordingbridge and Downton. We fit air-to-air heat pumps that cool a room in summer and heat that same room in winter, and we quote from photos before anyone visits.',
    paragraphs: [
      'Salisbury is not a Hampshire market town and it is not a forest village. The cathedral and the Close sit where the Avon meets the Nadder and the Wylye, with the medieval streets around them and family housing further out. A terrace in Fisherton or off St Ann Street is a different install from a newer house towards Bishopdown or Hampton Park, or a cottage across the meadows in Harnham. Older rooms are often modest, with solid walls and little ceiling void, so a quiet wall unit or a floor console is usually the right kit. A ceiling cassette needs a void many of these houses do not have.',
      'The centre and the Close are tight, and a frontage matters. An outdoor unit facing the pavement, or aimed at a neighbour’s window across a narrow yard, is a poor install even when the pipe run would be shorter. We look for a side or rear wall. If the house is listed, or the street protects the frontage, say so with the photos so the quote does not assume a position that will not be allowed.',
      'Winter is the other half of the job. Salisbury is inland, and colder than the Hampshire coast. A brick or stone house can be chilly in the room you actually sit in. The same indoor unit that takes the heat out of a south-facing room in July warms that room in January. It is an air-to-air heat pump. It does not heat a hot-water cylinder, and it does not replace a boiler for the whole house.',
      `South of the city, Downton, Britford, Coombe Bissett and Alderbury sit on the roads back towards the New Forest. Wilton is just to the west, and Laverstock is on the eastern edge. [Fordingbridge](/areas/fordingbridge/) is the Hampshire town between Salisbury and the showroom. We have not published a Salisbury case study. Send photos, measurements and a floor plan and we quote remotely. ${whatsappSend}. A survey is only if it is needed. Published prices are on the [air conditioning cost](/air-conditioning-cost/) page.`,
    ],
    servicesIntro: 'In Salisbury the useful set is a home wall unit, heating and cooling for the room it is fitted in, then servicing and repairs once it is in.',
    services: ['home-air-conditioning', 'heating-and-cooling', 'servicing', 'repairs'],
    nearby: ['fordingbridge', 'ringwood'],
    answerFaqs: [
      {
        q: 'Do you install air conditioning in Salisbury?',
        a: `Yes. Salisbury is about 17 miles north of the showroom at ${showroom}, inside the ${business.radiusMiles} miles we cover. Send photos, measurements and a floor plan and we quote remotely. ${whatsappSend}.`,
      },
      {
        q: 'Will a unit suit an older house in Salisbury?',
        a: 'Often. Smaller rooms and solid walls usually point to a wall unit or a floor console, not a ceiling cassette. Houses in the Close, listed buildings and tight yards need the outdoor unit planned from photos of the outside wall.',
      },
      {
        q: 'Can it heat a Salisbury room in winter and cool it in summer?',
        a: 'Yes. The systems we fit are air-to-air heat pumps. They heat the room the indoor unit is in, and they cool it. They do not heat the whole house or a hot-water cylinder.',
      },
    ],
    faqs: [
      {
        q: 'How much does air conditioning cost in Salisbury?',
        a: `A Clivet single room is installed from ${business.priceFrom} (0% VAT). That is the cheapest system we publish, not a price for every brand. Multi-room systems from ${business.multiRoomFrom}. The [cost guide](/air-conditioning-cost/) sets out what those prices do and do not include.`,
      },
      {
        q: 'Which places near Salisbury do you cover?',
        a: `Downton, Britford, Coombe Bissett, Alderbury and Wilton sit with Salisbury for the way we quote. Harnham and Laverstock are part of the city side. Further north, towards Amesbury and Salisbury Plain, call ${business.phone}. We will say whether the address is inside the ${business.radiusMiles} miles.`,
      },
      {
        q: 'Does a Salisbury install qualify for the Boiler Upgrade Scheme grant?',
        a: 'No. The £2,500 Boiler Upgrade Scheme grant needs an MCS-certified installer. No1 Air Con is not MCS certified, so an install by No1 does not qualify. [Ofgem publishes the scheme rules](https://www.ofgem.gov.uk/environmental-and-social-schemes/boiler-upgrade-scheme-bus/property-owners).',
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

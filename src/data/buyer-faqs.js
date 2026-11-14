import { business, whatsappSend } from './business.js';

const showroom = `${business.street}, ${business.town} ${business.postcode}`;

export const buyerFaqs = [
  {
    q: 'How much does it cost to install air conditioning in a UK home?',
    paragraphs: [
      `Our cheapest system is a Clivet single room from ${business.priceFrom} (0% VAT). A multi-room system, with two to four indoor units on one outdoor unit, is from ${business.multiRoomFrom} including VAT. Qualifying home air-to-air heat pump installs are 0% VAT until 31 March 2027.`,
      'Those are starting prices, not a quote for every house. The final figure depends on the room, the model, the pipe run, the drain, the electrical supply and how easy the outdoor position is to reach. The Energy Saving Trust puts a typical air-to-air heat pump at around £1,900 for one room and around £3,700 for a three-bedroom semi-detached house. Your home may sit above or below that.',
      `Send photos, measurements and a floor plan of the rooms and the outside wall, including where the outdoor unit could go. ${whatsappSend}. We quote remotely from those, so there is no need for a home visit to get a price. If you are happy with the price, we schedule a survey only if it is needed, and a lot of the time it is not. Payment is 50% deposit and 50% on completion. We do not offer finance at the moment. Most jobs are done in a day. The current lead time is 4 to 8 weeks. We hold a lot of stock, so it is often sooner, but we do not promise an earlier date.`,
      `You can see Mitsubishi Electric units working in the showroom at ${showroom}, Tuesday to Saturday, 10am to 4pm, closed Sunday and Monday. We cover ${business.radiusMiles} miles around Ringwood, including Ferndown, Christchurch, Wimborne, Fordingbridge, Verwood, St Leonards and New Milton.`,
    ],
    sources: [
      { name: 'Energy Saving Trust, air-to-air heat pumps', url: 'https://energysavingtrust.org.uk/advice/air-to-air-heat-pumps/' },
      { name: 'HMRC VAT Notice 708/6', url: 'https://www.gov.uk/guidance/vat-on-energy-saving-materials-and-heating-equipment-notice-7086' },
    ],
  },
  {
    q: 'How does home air conditioning work, and can it heat as well as cool?',
    paragraphs: [
      'Yes. The systems we fit are air-to-air heat pumps. The same indoor and outdoor units cool a room in summer and can heat it in winter.',
      'In cooling mode the indoor unit takes heat out of the room and the outdoor unit releases it outside. In heating mode the cycle runs the other way. The systems we install deliver up to 4 units of warmth for every 1 unit of electricity. They recirculate the air already in the room, so you still need to ventilate the house in the usual way. They do not heat a hot-water cylinder, and they do not replace a whole-house boiler on their own.',
      `We fit Mitsubishi Electric systems, including the MSZ-LN range in Onyx Black, Ruby Red, Pearl White and Natural White, plus AY wall units, floor consoles and ducted options where the building can take them. Mitsubishi Electric quote some MSZ-LN indoor units from 19 dB. That is their figure for those models, not a promise for every room. You can hear them in the Ringwood showroom.`,
    ],
    sources: [
      { name: 'Energy Saving Trust, air-to-air heat pumps', url: 'https://energysavingtrust.org.uk/advice/air-to-air-heat-pumps/' },
      { name: 'Mitsubishi Electric UK, home air conditioning', url: 'https://les.mitsubishielectric.co.uk/homeowners/our-air-conditioning' },
      { name: 'Mitsubishi Electric UK, MSZ-LN brochure', url: 'https://library.mitsubishielectric.co.uk/pdf/download_full/4164' },
    ],
  },
  {
    q: 'Do I need planning permission for air conditioning?',
    paragraphs: [
      'Often you do not need to apply in England, but only if the system can heat as well as cool and the installation meets the permitted-development limits. A cooling-only unit does not get those rights. Listed buildings and some siting choices still need a closer look.',
      'In England, an air source heat pump on a house can be permitted development under Class G when it is not used only for cooling and it meets the size, number, siting and noise rules. Since 29 May 2025, air-to-air heat pumps that also cool can use these rights, and the old rule that the unit could not stand within 1 metre of the boundary has been removed. A house can have an outdoor unit of up to 1.5 cubic metres. A detached house can have up to two units, and other houses can have one. A unit still cannot go on a pitched roof. On a flat roof it must stay at least 1 metre from the roof edge.',
      'The installation must also meet the MCS 020(a) sound calculation. The permitted-development noise limit is 37 dB at one metre outside a neighbour’s door or window. If the calculated level is higher, it is not permitted development. If a visit is needed, that look checks where the outdoor unit would go. It is a practical look at the job, not a planning decision.',
    ],
    sources: [
      { name: 'Planning Portal, air conditioning', url: 'https://interactive.planningportal.co.uk/faqs/do-i-need-planning-permission-to-add-air-conditioning-to-my-home' },
      { name: 'Planning Portal, air source heat pump', url: 'https://interactive.planningportal.co.uk/smart-search-house-elements/air-source-heat-pump' },
      { name: 'Class G, permitted development', url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/14/crossheading/class-g-installation-or-alteration-etc-of-air-source-heat-pumps-on-domestic-premises' },
      { name: 'MCS, permitted development from 29 May 2025', url: 'https://mcscertified.com/new-permitted-development-rules-in-england-air-source-heat-pump-installations-must-now-comply-with-mcs-020-a/' },
    ],
  },
  {
    q: 'How much does air conditioning cost to run?',
    paragraphs: [
      'It depends on the size of the unit, how long you use it, the temperature you set and your electricity tariff. Treat any figure as an illustration, not a bill. The Energy Saving Trust says it is difficult to know the saving for a particular home, and that a portable air conditioner can cost about £4.62 to £5 for 24 hours of use in Great Britain.',
      'On our own published bands, a 2.5kW bedroom unit typically costs 8p to 15p an hour to cool and 6p to 12p an hour to heat. A 3.5kW living room is typically 10p to 20p an hour to cool and 8p to 15p an hour to heat. A 5.0kW conservatory is typically 15p to 25p an hour to cool and 10p to 20p an hour to heat.',
      'As a separate manufacturer illustration, not a forecast for your house: Mitsubishi Electric’s brochure gives a UK cooling power input of 0.406 kW for the MUZ-LN25VG3. At the Ofgem Direct Debit electricity cap of 26.32p per kWh from 1 October to 31 December 2026, that input is about 11p an hour. The published heating input of 0.541 kW is about 14p an hour on the same tariff. A real unit cycles, so the cost will vary.',
    ],
    sources: [
      { name: 'Energy Saving Trust, air-to-air heat pumps', url: 'https://energysavingtrust.org.uk/advice/air-to-air-heat-pumps/' },
      { name: 'Energy Saving Trust, keeping a home cool', url: 'https://energysavingtrust.org.uk/tips-to-keep-home-cool-this-summer/' },
      { name: 'Ofgem, price cap October to December 2026', url: 'https://www.ofgem.gov.uk/news/changes-energy-price-cap-between-1-october-and-31-december-2026' },
      { name: 'Mitsubishi Electric UK, MSZ-LN brochure', url: 'https://library.mitsubishielectric.co.uk/pdf/download_full/4164' },
    ],
  },
  {
    q: 'What is the best type of air conditioning for a UK home, portable or a fitted system?',
    paragraphs: [
      'For a room you want comfortable year after year, a professionally fitted split system is usually the better choice. A portable unit can help for a few hot days, but it is generally less efficient and more awkward to live with.',
      'A portable conditioner sits in the room and pushes hot air out through a hose. The Energy Saving Trust notes that portable units use much more energy than a fan. They also do not qualify for the VAT relief that can apply to a permanently fixed air source heat pump.',
      `A fitted system has an indoor unit and a separate outdoor unit, so the same system can heat in winter. A multi-room system can serve two to four rooms from one outdoor unit, from ${business.multiRoomFrom} including VAT. Some MSZ-LN indoor units are quoted by Mitsubishi Electric from 19 dB. You can hear them in the Ringwood showroom. Photos, measurements and a floor plan are enough for a remote quote. ${whatsappSend}. We survey only if we need to.`,
    ],
    sources: [
      { name: 'Energy Saving Trust, keeping a home cool', url: 'https://energysavingtrust.org.uk/tips-to-keep-home-cool-this-summer/' },
      { name: 'HMRC VAT Notice 708/6', url: 'https://www.gov.uk/guidance/vat-on-energy-saving-materials-and-heating-equipment-notice-7086' },
      { name: 'Mitsubishi Electric UK, home air conditioning', url: 'https://les.mitsubishielectric.co.uk/homeowners/our-air-conditioning' },
    ],
  },
  {
    q: 'Is air conditioning bad for you?',
    paragraphs: [
      'Used sensibly, home air conditioning is not inherently bad for you. A dry throat or a chilly room usually comes from a temperature set too low, poor ventilation, or a unit that has not been cleaned.',
      'A split system cools and dehumidifies the air already in the room. It does not blow in fresh outdoor air, so you still need to ventilate the house as you would with ordinary heating. Filters need to stay clean. A neglected filter moves less air and can recirculate dust. Servicing is recommended yearly.',
      'Some Mitsubishi Electric units include filtration. That is not a medical claim, and air conditioning is not a treatment for asthma or hay fever. If someone in the house is sensitive to temperature or air quality, mention it with the photos, or at a visit if we need one.',
    ],
    sources: [
      { name: 'Energy Saving Trust, air-to-air heat pumps', url: 'https://energysavingtrust.org.uk/advice/air-to-air-heat-pumps/' },
      { name: 'Mitsubishi Electric UK, home air conditioning', url: 'https://les.mitsubishielectric.co.uk/homeowners/our-air-conditioning' },
    ],
  },
  {
    q: 'What size air conditioning do I need?',
    paragraphs: [
      'The right size depends on the room, not just its floor area. Ceiling height, glazing, insulation, sun, how many people use the room, and whether you want winter heating as well as summer cooling all change the answer.',
      `A unit that is too small may never get the room comfortable. A unit that is too large costs more to buy. We do not sell a system from a floor-area chart alone. Photos, measurements and a floor plan of the room, the pipe run and the outdoor unit position are what the remote quote is based on. ${whatsappSend}. A survey is only if it is needed.`,
      `A Clivet single room starts from ${business.priceFrom} (0% VAT). If you want more than one room, a multi-room system is from ${business.multiRoomFrom} including VAT.`,
    ],
    sources: [
      { name: 'Energy Saving Trust, air-to-air heat pumps', url: 'https://energysavingtrust.org.uk/advice/air-to-air-heat-pumps/' },
    ],
  },
  {
    q: 'How often does air conditioning need servicing, and how long do the units last?',
    paragraphs: [
      `Servicing is recommended yearly and is from ${business.servicingFrom}. A service cleans the unit inside and out, checks it is working properly and checks for leaks. Installations come with a 5 year warranty that covers parts and labour.`,
      'Work on the refrigerant circuit has to be done by an F-Gas certified engineer. Our engineers are F-Gas certified through REFCOM. We do not publish a certificate number. Between services, clean indoor filters help the unit run properly.',
      'How long a system lasts depends on the equipment, how hard it is used and whether it is looked after. We have not published a typical lifespan, because we do not have a figure we are prepared to state.',
    ],
    sources: [
      { name: 'GOV.UK, F-gas qualifications', url: 'https://www.gov.uk/guidance/qualifications-required-to-work-on-equipment-containing-f-gas' },
      { name: 'GOV.UK, F-gas company certification', url: 'https://www.gov.uk/guidance/certification-for-companies-working-on-equipment-containing-f-gas' },
    ],
  },
  {
    q: 'Can I install air conditioning myself?',
    paragraphs: [
      'No. A fixed split system that contains F-gas refrigerant has to be installed by a qualified person working for a certified company. Doing that work without the right certification is against the law.',
      `GOV.UK requires company certification from an approved body, and a personal F-gas qualification for the engineer. Our engineers are F-Gas certified through REFCOM. We do not publish a certificate number. A portable plug-in unit is a different product. For a wall-mounted or multi-room system, send photos, measurements and a floor plan for a remote quote. ${whatsappSend}.`,
    ],
    sources: [
      { name: 'GOV.UK, F-gas company certification', url: 'https://www.gov.uk/guidance/certification-for-companies-working-on-equipment-containing-f-gas' },
      { name: 'GOV.UK, F-gas qualifications', url: 'https://www.gov.uk/guidance/qualifications-required-to-work-on-equipment-containing-f-gas' },
    ],
  },
  {
    q: 'Are there grants or VAT relief for home air conditioning?',
    paragraphs: [
      'Qualifying home air-to-air heat pump installs are 0% VAT until 31 March 2027. HMRC zero-rates the supply and installation of a permanently fixed air source heat pump, including a unit that heats and cools, in residential accommodation from 1 May 2023 to 31 March 2027. Portable units do not qualify. From 1 April 2027 the relief is due to change.',
      'The Boiler Upgrade Scheme includes a £2,500 grant for an eligible air-to-air heat pump in England and Wales, but the installer has to be MCS certified and the system has to meet the scheme rules, including being set up for the property’s heating. MCS says air-to-air installer certification is not yet in place, so that grant cannot be claimed on a standard install today. We have not said that we will offer it.',
      `Our cheapest system is a Clivet single room from ${business.priceFrom} (0% VAT). A multi-room system is from ${business.multiRoomFrom} including VAT. On a qualifying home install, that VAT rate is 0% until 31 March 2027.`,
    ],
    sources: [
      { name: 'HMRC VAT Notice 708/6', url: 'https://www.gov.uk/guidance/vat-on-energy-saving-materials-and-heating-equipment-notice-7086' },
      { name: 'GOV.UK, VAT on energy-saving products', url: 'https://www.gov.uk/tax-on-shopping/energy-saving-products' },
      { name: 'Ofgem, Boiler Upgrade Scheme', url: 'https://www.ofgem.gov.uk/environmental-and-social-schemes/boiler-upgrade-scheme-bus/property-owners' },
      { name: 'MCS, air-to-air heat pumps', url: 'https://mcscertified.com/consumers/technologies/air-to-air-heat-pumps/' },
    ],
  },
];

const otherFaqs = [
  {
    q: 'How long does installation take?',
    a: 'Most jobs are done in a day. The current lead time is 4 to 8 weeks. We hold a lot of stock, so it is often sooner, but we do not promise an earlier date.',
  },
  {
    q: 'What warranty do I get?',
    a: business.warranty,
  },
  {
    q: 'Can I cool and heat multiple rooms?',
    a: 'Yes. A multi-room system connects two, three or four indoor units to a single outdoor unit.',
  },
  {
    q: 'Will it help with hay fever and air quality?',
    a: 'Modern systems filter out pollen, dust and allergens and remove humidity as they cool, so rooms feel fresher. They are not a medical device.',
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
    a: `Tuesday to Saturday, 10am to 4pm. Closed Sunday and Monday. The showroom is at ${showroom}.`,
  },
  {
    q: 'Can I see the units before I buy?',
    a: `Yes. Visit the showroom at ${showroom} to compare Mitsubishi Electric units and hear how quiet they are.`,
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

export const pageFaqs = [...buyerFaqs, ...otherFaqs];

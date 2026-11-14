// Room photos for inner pages. Repeats are allowed. Neighbouring pages
// in the same menu use different photos, and the crop position varies.

const ROOT = '/images/mitsubishi';

function room({ file, width, height, alt, position, widths = [480, 800, 1200] }) {
  const stem = file.replace(/\.webp$/, '');
  const src = `${ROOT}/${file}`;
  const srcset = [
    ...widths.filter((size) => size < width).map((size) => `${ROOT}/${stem}-${size}.webp ${size}w`),
    `${src} ${width}w`,
  ].join(', ');
  return { src, srcset, width, height, alt, position };
}

const living = (position) => room({
  file: 'mitsubishi-electric-msz-ln-onyx-black-living-room-ringwood.webp',
  width: 2000,
  height: 1331,
  position,
  alt: 'Mitsubishi Electric MSZ-LN Onyx Black wall-mounted air conditioner in a living room, supplied by No1 Air Con in Ringwood and within 25 miles.',
});

const bedroom = (position) => room({
  file: 'mitsubishi-electric-msz-ln-natural-white-bedroom-ringwood.webp',
  width: 2000,
  height: 1491,
  position,
  alt: 'Mitsubishi Electric MSZ-LN Natural White wall-mounted air conditioner above a bed, supplied by No1 Air Con in Ringwood and within 25 miles.',
});

const pearl = (position) => room({
  file: 'mitsubishi-electric-msz-ln-pearl-white-room-setting-ringwood.webp',
  width: 1397,
  height: 835,
  widths: [480, 800],
  position,
  alt: 'Mitsubishi Electric MSZ-LN Pearl White wall-mounted air conditioner in a modern interior, supplied by No1 Air Con in Ringwood and within 25 miles.',
});

const ay = (position) => room({
  file: 'mitsubishi-electric-msz-ay-white-room-setting-ringwood.webp',
  width: 2000,
  height: 1236,
  position,
  alt: 'Mitsubishi Electric MSZ-AY white wall-mounted air conditioner in a modern interior, supplied by No1 Air Con in Ringwood and within 25 miles.',
});

const lobby = (position) => room({
  file: 'mitsubishi-electric-msz-ln-pearl-white-wall-air-conditioner-lobby-ringwood.webp',
  width: 2000,
  height: 1414,
  widths: [800, 1200, 1600],
  position,
  alt: 'Mitsubishi Electric MSZ-LN Pearl White wall-mounted air conditioner in a bright lobby, supplied by No1 Air Con in Ringwood and within 25 miles.',
});

const office = (position) => room({
  file: 'mitsubishi-electric-msz-ln-onyx-black-home-office-ringwood.webp',
  width: 2000,
  height: 1491,
  widths: [800, 1200, 1600],
  position,
  alt: 'Mitsubishi Electric MSZ-LN Onyx Black wall-mounted air conditioner in a home office, supplied by No1 Air Con in Ringwood and within 25 miles.',
});

const meeting1 = (position) => ({
  asset: 'meeting1',
  widths: [640, 960, 1280, 1600],
  position,
  alt: 'White Mitsubishi Electric wall-mounted air conditioner in a sunny meeting room with a board table, supplied by No1 Air Con in Ringwood.',
});

const meeting2 = (position) => ({
  asset: 'meeting2',
  widths: [640, 960, 1280, 1600],
  position,
  alt: 'White Mitsubishi Electric wall-mounted air conditioner high on the wall of a bright meeting room, supplied by No1 Air Con in Ringwood and across Hampshire and Dorset.',
});

const onyxMeet = (position) => ({
  asset: 'onyxMeet',
  widths: [480, 720, 960, 1131],
  portrait: true,
  position,
  alt: 'Mitsubishi Electric MSZ-LN Onyx Black wall-mounted air conditioner above a small meeting table, supplied by No1 Air Con in Ringwood.',
});

const rubyMeet = (position) => ({
  asset: 'rubyMeet',
  widths: [480, 720, 960, 1131],
  portrait: true,
  position,
  alt: 'Mitsubishi Electric MSZ-LN Ruby Red wall-mounted air conditioner above a small meeting table, supplied by No1 Air Con in Ringwood.',
});

export const pagePhotos = {
  about: rubyMeet('center 14%'),
  contact: meeting2('78% 18%'),
  services: pearl('center top'),
  areas: lobby('center top'),
  hampshire: meeting1('68% 24%'),
  dorset: onyxMeet('center 18%'),
  faqs: living('center 22%'),
  reviews: bedroom('center top'),
  caseStudies: ay('center 36%'),
};

export const servicePhotos = {
  'home-air-conditioning': onyxMeet('center 12%'),
  'heating-and-cooling': living('center 30%'),
  'commercial-air-conditioning': meeting1('74% 20%'),
  servicing: bedroom('center 8%'),
  repairs: ay('center 28%'),
  'ducted-and-ceiling-systems': office('center 12%'),
};

export const townPhotos = {
  ringwood: living('center 34%'),
  fordingbridge: bedroom('center 16%'),
  ferndown: pearl('center 12%'),
  verwood: ay('center 46%'),
  'st-leonards': office('center top'),
  christchurch: lobby('center 14%'),
  wimborne: meeting1('62% 28%'),
  'new-milton': rubyMeet('center 10%'),
};

export const casePhotos = {
  'single-room-home': office('center 18%'),
  'multi-room-heating-and-cooling': pearl('center 8%'),
  'commercial-space': meeting2('70% 16%'),
};

export const photoLabel = {
  about: 'MSZ-LN Ruby Red, small meeting room',
  contact: 'Meeting room, white wall unit (2)',
  services: 'MSZ-LN Pearl White room setting',
  areas: 'MSZ-LN Pearl White lobby',
  hampshire: 'Meeting room, white wall unit (1)',
  dorset: 'MSZ-LN Onyx Black, small meeting room',
  faqs: 'MSZ-LN Onyx Black living room',
  reviews: 'MSZ-LN Natural White bedroom',
  caseStudies: 'MSZ-AY white room setting',
  'home-air-conditioning': 'MSZ-LN Onyx Black, small meeting room',
  'heating-and-cooling': 'MSZ-LN Onyx Black living room',
  'commercial-air-conditioning': 'Meeting room, white wall unit (1)',
  servicing: 'MSZ-LN Natural White bedroom',
  repairs: 'MSZ-AY white room setting',
  'ducted-and-ceiling-systems': 'MSZ-LN Onyx Black home office',
  ringwood: 'MSZ-LN Onyx Black living room',
  fordingbridge: 'MSZ-LN Natural White bedroom',
  ferndown: 'MSZ-LN Pearl White room setting',
  verwood: 'MSZ-AY white room setting',
  'st-leonards': 'MSZ-LN Onyx Black home office',
  christchurch: 'MSZ-LN Pearl White lobby',
  wimborne: 'Meeting room, white wall unit (1)',
  'new-milton': 'MSZ-LN Ruby Red, small meeting room',
  'single-room-home': 'MSZ-LN Onyx Black home office',
  'multi-room-heating-and-cooling': 'MSZ-LN Pearl White room setting',
  'commercial-space': 'Meeting room, white wall unit (2)',
};

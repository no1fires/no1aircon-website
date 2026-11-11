// Official Mitsubishi Electric photographs for the homepage range section.
// Alt text is the supplied SEO wording. Captions are shortened for the layout
// and still name Ringwood and the 25-mile area. Do not add specs or prices.
//
// The black and white units with a Kirigamine Zen badge on the front are the
// MSZ-EF. Keep that model name. Do not relabel them as a different model.

const ROOT = '/images/mitsubishi';

function withSources(image) {
  const stem = image.file.replace(/\.webp$/, '');
  const src = `${ROOT}/${image.file}`;
  const widths = [480, 800, 1200].filter((width) => width < image.width);
  const srcset = [
    ...widths.map((width) => `${ROOT}/${stem}-${width}.webp ${width}w`),
    `${src} ${image.width}w`,
  ].join(', ');
  return { ...image, src, srcset };
}

const featureSizes = '(min-width: 1160px) 1120px, calc(100vw - 40px)';
const gallerySizes = '(min-width: 1160px) 360px, (min-width: 900px) 30vw, calc(100vw - 40px)';
const cutoutSizes = '(min-width: 800px) 500px, (min-width: 640px) 45vw, calc(100vw - 80px)';
const lineupSizes = '(min-width: 1160px) 1072px, calc(100vw - 80px)';
const aySizes = '(min-width: 900px) 480px, calc(100vw - 80px)';
const efSizes = '(min-width: 900px) 230px, (min-width: 640px) 42vw, calc(100vw - 80px)';

export const featureRoom = withSources({
  file: 'mitsubishi-electric-msz-ln-onyx-black-living-room-ringwood.webp',
  width: 2000,
  height: 1331,
  sizes: featureSizes,
  chip: 'MSZ-LN · Onyx Black',
  name: 'Mitsubishi Electric MSZ-LN Onyx Black in a living room | No1 Air Con, Ringwood',
  alt: 'Mitsubishi Electric MSZ-LN Onyx Black wall-mounted air conditioner on a dark living-room wall, with a kitchen beyond, supplied and installed by No1 Air Con in Ringwood and within 25 miles.',
  caption:
    'MSZ-LN Onyx Black in a living room. Supplied and installed by No1 Air Con in Ringwood and within 25 miles.',
});

export const roomGallery = [
  withSources({
    file: 'mitsubishi-electric-msz-ln-natural-white-bedroom-ringwood.webp',
    width: 2000,
    height: 1491,
    sizes: gallerySizes,
    chip: 'MSZ-LN · Natural White',
    name: 'Mitsubishi Electric MSZ-LN Natural White in a bedroom | No1 Air Con, Ringwood',
    alt: 'Mitsubishi Electric MSZ-LN Natural White wall-mounted air conditioner above a bed in a modern bedroom, supplied and installed by No1 Air Con in Ringwood and within 25 miles.',
    caption:
      'MSZ-LN Natural White in a bedroom. Supplied and installed by No1 Air Con in Ringwood and within 25 miles.',
  }),
  withSources({
    file: 'mitsubishi-electric-msz-ln-pearl-white-room-setting-ringwood.webp',
    width: 1397,
    height: 835,
    sizes: gallerySizes,
    chip: 'MSZ-LN · Pearl White',
    name: 'Mitsubishi Electric MSZ-LN Pearl White in a modern interior | No1 Air Con, Ringwood',
    alt: 'Mitsubishi Electric MSZ-LN Pearl White wall-mounted air conditioner on a dark partition in a modern double-height interior, supplied and installed by No1 Air Con in Ringwood and within 25 miles.',
    caption:
      'MSZ-LN Pearl White in a modern interior. Supplied and installed by No1 Air Con in Ringwood and within 25 miles.',
  }),
  withSources({
    file: 'mitsubishi-electric-msz-ay-white-room-setting-ringwood.webp',
    width: 2000,
    height: 1236,
    sizes: gallerySizes,
    chip: 'MSZ-AY · white',
    name: 'Mitsubishi Electric MSZ-AY white in a modern interior | No1 Air Con, Ringwood',
    alt: 'Mitsubishi Electric MSZ-AY white wall-mounted air conditioner on a dark partition in a modern double-height interior, supplied and installed by No1 Air Con in Ringwood and within 25 miles.',
    caption:
      'MSZ-AY white in a modern interior. Supplied and installed by No1 Air Con in Ringwood and within 25 miles.',
  }),
];

export const lnColours = [
  withSources({
    id: 'onyx',
    label: 'Onyx Black',
    swatch: '#1c1d25',
    file: 'mitsubishi-electric-msz-ln-kirigamine-style-onyx-black-wall-air-conditioner-ringwood.webp',
    width: 2000,
    height: 809,
    sizes: cutoutSizes,
    name: 'Mitsubishi Electric MSZ-LN Onyx Black wall air conditioner | No1 Air Con, Ringwood',
    alt: 'Mitsubishi Electric MSZ-LN Onyx Black wall-mounted air conditioner, product shot on a white background, available from No1 Air Con in Ringwood and within 25 miles.',
    caption: 'Product shot. Available from No1 Air Con in Ringwood and within 25 miles.',
  }),
  withSources({
    id: 'pearl',
    label: 'Pearl White',
    swatch: '#c5ced6',
    file: 'mitsubishi-electric-msz-ln-kirigamine-style-pearl-white-wall-air-conditioner-ringwood.webp',
    width: 2000,
    height: 866,
    sizes: cutoutSizes,
    name: 'Mitsubishi Electric MSZ-LN Pearl White wall air conditioner | No1 Air Con, Ringwood',
    alt: 'Mitsubishi Electric MSZ-LN Pearl White wall-mounted air conditioner, product shot on a white background, available from No1 Air Con in Ringwood and within 25 miles.',
    caption: 'Product shot. Available from No1 Air Con in Ringwood and within 25 miles.',
  }),
  withSources({
    id: 'ruby',
    label: 'Ruby Red',
    swatch: '#9e1830',
    file: 'mitsubishi-electric-msz-ln-kirigamine-style-ruby-red-wall-air-conditioner-ringwood.webp',
    width: 2000,
    height: 866,
    sizes: cutoutSizes,
    name: 'Mitsubishi Electric MSZ-LN Ruby Red wall air conditioner | No1 Air Con, Ringwood',
    alt: 'Mitsubishi Electric MSZ-LN Ruby Red wall-mounted air conditioner, product shot on a white background, available from No1 Air Con in Ringwood and within 25 miles.',
    caption: 'Product shot. Available from No1 Air Con in Ringwood and within 25 miles.',
  }),
  withSources({
    id: 'natural',
    label: 'Natural White',
    swatch: '#f4f5f6',
    file: 'mitsubishi-electric-msz-ln-kirigamine-style-natural-white-wall-air-conditioner-ringwood.webp',
    width: 2000,
    height: 854,
    sizes: cutoutSizes,
    name: 'Mitsubishi Electric MSZ-LN Natural White wall air conditioner | No1 Air Con, Ringwood',
    alt: 'Mitsubishi Electric MSZ-LN Natural White wall-mounted air conditioner, product shot on a white background, available from No1 Air Con in Ringwood and within 25 miles.',
    caption: 'Product shot. Available from No1 Air Con in Ringwood and within 25 miles.',
  }),
];

export const lineup = withSources({
  file: 'mitsubishi-electric-msz-ln-ruby-red-pearl-white-onyx-black-colour-range-ringwood.webp',
  width: 2000,
  height: 997,
  sizes: lineupSizes,
  name: 'Mitsubishi Electric MSZ-LN colour range | No1 Air Con, Ringwood',
  alt: 'Three Mitsubishi Electric MSZ-LN wall-mounted air conditioners in Ruby Red, Pearl White and Onyx Black, studio product lineup, available from No1 Air Con in Ringwood and within 25 miles.',
  caption:
    'MSZ-LN lineup: Ruby Red, Pearl White and Onyx Black. Available from No1 Air Con in Ringwood and within 25 miles.',
});

export const ayCutout = withSources({
  file: 'mitsubishi-electric-msz-ay-white-wall-air-conditioner-ringwood.webp',
  width: 2000,
  height: 761,
  sizes: aySizes,
  clear: true,
  name: 'Mitsubishi Electric MSZ-AY white wall air conditioner | No1 Air Con, Ringwood',
  alt: 'Mitsubishi Electric MSZ-AY white wall-mounted air conditioner, front-on product shot, available from No1 Air Con in Ringwood and within 25 miles.',
  caption: 'MSZ-AY white, product shot. Available from No1 Air Con in Ringwood and within 25 miles.',
});

export const efShots = [
  withSources({
    file: 'mitsubishi-electric-msz-ef-kirigamine-zen-black-wall-air-conditioner-ringwood.webp',
    width: 2000,
    height: 787,
    sizes: efSizes,
    label: 'Black',
    name: 'Mitsubishi Electric MSZ-EF black (Kirigamine Zen badge) | No1 Air Con, Ringwood',
    alt: 'Mitsubishi Electric MSZ-EF black wall-mounted air conditioner, product shot with a Kirigamine Zen badge visible on the unit, available from No1 Air Con in Ringwood and within 25 miles.',
    caption:
      'MSZ-EF black, with the Kirigamine Zen badge on the unit. Available from No1 Air Con in Ringwood and within 25 miles.',
  }),
  withSources({
    file: 'mitsubishi-electric-msz-ef-kirigamine-zen-white-wall-air-conditioner-ringwood.webp',
    width: 2000,
    height: 800,
    sizes: efSizes,
    label: 'White',
    clear: true,
    name: 'Mitsubishi Electric MSZ-EF white (Kirigamine Zen badge) | No1 Air Con, Ringwood',
    alt: 'Mitsubishi Electric MSZ-EF white wall-mounted air conditioner, product shot with a Kirigamine Zen badge visible on the unit, available from No1 Air Con in Ringwood and within 25 miles.',
    caption:
      'MSZ-EF white, with the Kirigamine Zen badge on the unit. Available from No1 Air Con in Ringwood and within 25 miles.',
  }),
];

export const mitsubishiImages = [
  featureRoom,
  ...roomGallery,
  ...lnColours,
  lineup,
  ayCutout,
  ...efShots,
];

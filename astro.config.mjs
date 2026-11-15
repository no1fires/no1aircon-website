// Build configuration for Cloudflare Pages.
// Root directory stays the repo root. Output stays the default `dist`.
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { INDEXABLE } from './src/data/business.js';

export default defineConfig({
  site: 'https://no1aircon.co.uk',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => {
        const hiddenStudies = [
          '/case-studies/single-room-home/',
          '/case-studies/multi-room-heating-and-cooling/',
          '/case-studies/commercial-space/',
        ];
        return INDEXABLE && !page.includes('/404') && !page.includes('/design-options/') && !hiddenStudies.some((path) => page.includes(path));
      },
    }),
  ],
});

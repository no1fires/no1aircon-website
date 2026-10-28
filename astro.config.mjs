// Build configuration for Cloudflare Pages
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://no1aircon.co.uk',
  trailingSlash: 'always',
  integrations: [sitemap()],
});

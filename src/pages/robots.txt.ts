import type { APIRoute } from 'astro';
import { INDEXABLE, business } from '../data/business.js';

const aiBots = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'ClaudeBot',
  'anthropic-ai',
  'PerplexityBot',
  'Google-Extended',
  'Bingbot',
  'Applebot',
  'Applebot-Extended',
];

export const GET: APIRoute = () => {
const lines = [
  '# Generated from src/pages/robots.txt.ts',
  `# INDEXABLE in src/data/business.js is ${INDEXABLE}.`,
  INDEXABLE
    ? '# Crawlers are allowed and the sitemap is published.'
    : '# Preview: crawlers are blocked and the sitemap is withheld.',
  '',
];

  if (!INDEXABLE) {
    lines.push(
      'User-agent: *',
      'Disallow: /',
      '',
    );
    for (const bot of aiBots) {
      lines.push(`User-agent: ${bot}`, 'Disallow: /', '');
    }
    lines.push('# Sitemap is withheld until INDEXABLE is true.', '');
  } else {
    lines.push('User-agent: *', 'Allow: /', '');
    for (const bot of aiBots) {
      lines.push(`User-agent: ${bot}`, 'Allow: /', '');
    }
    lines.push(`Sitemap: ${business.url}/sitemap-index.xml`, '');
  }

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};

// Tell IndexNow about the pages in the live sitemap.
// The key file is public/<key>.txt and is served at https://no1aircon.co.uk/<key>.txt.
// This script never fails the process: a problem here must not fail a deploy.

import { readdir, readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HOST = 'no1aircon.co.uk';
const ORIGIN = `https://${HOST}`;
const SITEMAP = `${ORIGIN}/sitemap-index.xml`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';
const KEY_ATTEMPTS = 18;
const KEY_WAIT_MS = 10_000;

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

function log(message) {
  console.log(`[indexnow] ${message}`);
}

async function readKey() {
  const publicDir = join(root, 'public');
  const names = (await readdir(publicDir)).filter((name) => /^[0-9a-f]{32}\.txt$/.test(name));
  if (names.length !== 1) {
    throw new Error(`Expected one public 32-character hex key file, found ${names.length}.`);
  }
  const key = names[0].slice(0, -4);
  const body = (await readFile(join(publicDir, names[0]), 'utf8')).trim();
  if (body !== key) throw new Error('The key file contents do not match its name.');
  return key;
}

async function waitForKey(key) {
  const keyLocation = `${ORIGIN}/${key}.txt`;
  for (let attempt = 1; attempt <= KEY_ATTEMPTS; attempt += 1) {
    try {
      const response = await fetch(keyLocation, { cache: 'no-store' });
      const body = (await response.text()).trim();
      if (response.ok && body === key) return keyLocation;
      log(`Key file is not live yet (HTTP ${response.status}), attempt ${attempt} of ${KEY_ATTEMPTS}.`);
    } catch (error) {
      log(`Key file check failed, attempt ${attempt} of ${KEY_ATTEMPTS}: ${error.message}`);
    }
    if (attempt < KEY_ATTEMPTS) await new Promise((resolve) => setTimeout(resolve, KEY_WAIT_MS));
  }
  return '';
}

function locations(xml) {
  return [...xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)].map((match) => match[1].trim());
}

async function sitemapUrls(url, seen = new Set()) {
  if (seen.has(url)) return [];
  seen.add(url);
  const response = await fetch(url, { cache: 'no-store' });
  if (!response.ok) throw new Error(`Sitemap ${url} returned HTTP ${response.status}.`);
  const found = locations(await response.text());
  const pages = [];
  for (const loc of found) {
    let parsed;
    try {
      parsed = new URL(loc);
    } catch {
      continue;
    }
    if (parsed.hostname !== HOST) continue;
    if (parsed.pathname.endsWith('.xml')) pages.push(...await sitemapUrls(loc, seen));
    else pages.push(loc);
  }
  return pages;
}

async function submit(key, keyLocation, urlList) {
  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'content-type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key, keyLocation, urlList }),
  });
  const body = (await response.text()).trim();
  log(`Submitted ${urlList.length} URL${urlList.length === 1 ? '' : 's'}. IndexNow returned HTTP ${response.status}${body ? `: ${body.slice(0, 300)}` : ''}.`);
  if (response.status !== 200 && response.status !== 202) {
    log('IndexNow did not accept the list. The deploy is unchanged.');
  }
  return response.status;
}

async function main() {
  const dryRun = process.argv.includes('--dry-run');
  const key = await readKey();
  const keyLocation = dryRun ? `${ORIGIN}/${key}.txt` : await waitForKey(key);
  if (!keyLocation) {
    log('Stopped. The key file was not available, so nothing was submitted.');
    return;
  }
  const urlList = [...new Set(await sitemapUrls(SITEMAP))];
  if (!urlList.length) {
    log('Stopped. The sitemap has no page URLs.');
    return;
  }
  if (dryRun) {
    log(`Dry run. ${urlList.length} URLs would be sent for ${keyLocation}.`);
    urlList.forEach((url) => log(url));
    return;
  }
  await submit(key, keyLocation, urlList);
}

main().catch((error) => {
  log(`Stopped without affecting the deploy: ${error.message}`);
});

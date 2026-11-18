import { tracking } from '../data/tracking.js';
import {
  CONSENT_ACCEPTED,
  CONSENT_DENIED,
  CONSENT_GRANTED,
  CONSENT_REJECTED,
  CONSENT_STORAGE_KEY,
  clickEventName,
  eventPayload,
  isQuoteFrameSrc,
  isQuoteLeadSignal,
  tagPlan,
} from '../lib/consent-rules.js';

const BANNER_ID = 'cookie-banner';
let tagsStarted = false;
let metaStarted = false;
let activePlan = tagPlan(tracking, '');

function readChoice() {
  try {
    const value = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (value === CONSENT_ACCEPTED || value === CONSENT_REJECTED) return value;
  } catch {
    /* Storage can throw in private mode. Treat that as no choice. */
  }
  return '';
}

function writeChoice(choice) {
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, choice);
  } catch {
    /* The choice still applies for this page view. */
  }
}

function ensureGtag() {
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== 'function') {
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
  }
}

function setGaDisabled(gaId, disabled) {
  if (!gaId) return;
  window[`ga-disable-${gaId}`] = disabled;
}

function clearMeasurementCookies() {
  const names = document.cookie.split(';').map((part) => part.split('=')[0].trim()).filter(Boolean);
  const host = window.location.hostname;
  const domains = ['', host, `.${host}`];
  const pieces = host.split('.');
  if (pieces.length > 2) domains.push(`.${pieces.slice(-2).join('.')}`);
  names.forEach((name) => {
    const measurement = name === '_ga' || name.startsWith('_ga_') || name === '_gid' || name.startsWith('_gat')
      || name.startsWith('_gcl_') || name === '_fbp' || name === '_fbc';
    if (!measurement) return;
    domains.forEach((domain) => {
      const domainPart = domain ? `; domain=${domain}` : '';
      document.cookie = `${name}=; Max-Age=0; path=/${domainPart}`;
    });
  });
}

function loadGoogle(plan) {
  if (tagsStarted || (!plan.loadGa && !plan.loadAds)) return;
  tagsStarted = true;
  window.gtag('js', new Date());
  if (plan.loadGa) window.gtag('config', plan.gaId);
  if (plan.loadAds) window.gtag('config', plan.adsId);
  const scriptId = plan.gaId || plan.adsId;
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(scriptId)}`;
  document.head.appendChild(script);
}

function loadMeta(pixelId) {
  if (metaStarted || !pixelId) return;
  metaStarted = true;
  const fbq = function fbq() {
    if (fbq.callMethod) fbq.callMethod.apply(fbq, arguments);
    else fbq.queue.push(arguments);
  };
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = '2.0';
  fbq.queue = [];
  window.fbq = fbq;
  if (!window._fbq) window._fbq = fbq;
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://connect.facebook.net/en_US/fbevents.js';
  document.head.appendChild(script);
  window.fbq('consent', 'grant');
  window.fbq('init', pixelId);
  window.fbq('track', 'PageView');
}

function applyChoice(choice) {
  activePlan = tagPlan(tracking, choice);
  ensureGtag();
  if (choice === CONSENT_ACCEPTED) {
    setGaDisabled(activePlan.gaId, false);
    window.gtag('consent', 'update', CONSENT_GRANTED);
    loadGoogle(activePlan);
    if (activePlan.loadMeta) loadMeta(activePlan.metaId);
    else if (typeof window.fbq === 'function') window.fbq('consent', 'grant');
    return;
  }
  setGaDisabled(activePlan.gaId, true);
  window.gtag('consent', 'update', CONSENT_DENIED);
  if (typeof window.fbq === 'function') window.fbq('consent', 'revoke');
  clearMeasurementCookies();
}

export function trackEvent(name) {
  const payload = eventPayload(window.location.pathname);
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, page_path: payload.page_path });
  if (readChoice() !== CONSENT_ACCEPTED) return;
  if ((activePlan.loadGa || activePlan.loadAds) && typeof window.gtag === 'function') {
    window.gtag('event', name, payload);
  }
  if (activePlan.adsSendTo && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', { send_to: activePlan.adsSendTo, page_path: payload.page_path });
  }
  if (activePlan.loadMeta && typeof window.fbq === 'function') {
    window.fbq('track', 'Lead', { page_path: payload.page_path });
  }
}

function bannerElement() {
  return document.getElementById(BANNER_ID);
}

function placeBanner(banner) {
  banner.hidden = false;
  document.body.classList.add('cookie-open');
  const height = banner.getBoundingClientRect().height;
  document.documentElement.style.setProperty('--cookie-h', `${Math.ceil(height)}px`);
}

function hideBanner(banner) {
  banner.hidden = true;
  document.body.classList.remove('cookie-open');
  document.documentElement.style.removeProperty('--cookie-h');
}

function showBanner() {
  const banner = bannerElement();
  if (!banner) return;
  placeBanner(banner);
  window.requestAnimationFrame(() => placeBanner(banner));
}

function choose(choice) {
  writeChoice(choice);
  applyChoice(choice);
  const banner = bannerElement();
  if (banner) hideBanner(banner);
}

function onDocumentClick(event) {
  const settings = event.target.closest?.('[data-cookie-settings]');
  if (settings) {
    event.preventDefault();
    showBanner();
    const banner = bannerElement();
    if (banner) banner.focus();
    return;
  }
  const link = event.target.closest?.('a[href]');
  if (!link) return;
  const name = clickEventName(link.getAttribute('href'));
  if (name) trackEvent(name);
}

function onQuoteMessage(event) {
  let data = event.data;
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data);
    } catch {
      return;
    }
  }
  if (!isQuoteLeadSignal(data)) return;
  const frames = document.querySelectorAll('iframe');
  const fromQuote = [...frames].some((frame) => {
    if (frame.contentWindow !== event.source) return false;
    return frame.hasAttribute('data-form-id') || isQuoteFrameSrc(frame.getAttribute('src') || '');
  });
  if (!fromQuote) return;
  const key = Array.isArray(data) ? data[1] : 'quote-form';
  if (onQuoteMessage.seen.has(key)) return;
  onQuoteMessage.seen.add(key);
  trackEvent('generate_lead');
}
onQuoteMessage.seen = new Set();

export function setupConsent() {
  ensureGtag();
  const choice = readChoice();
  const banner = bannerElement();
  if (choice) {
    applyChoice(choice);
    if (banner) hideBanner(banner);
  } else if (banner) {
    showBanner();
  }

  banner?.querySelector('[data-cookie-accept]')?.addEventListener('click', () => choose(CONSENT_ACCEPTED));
  banner?.querySelector('[data-cookie-reject]')?.addEventListener('click', () => choose(CONSENT_REJECTED));
  document.addEventListener('click', onDocumentClick);
  window.addEventListener('message', onQuoteMessage);
  window.addEventListener('resize', () => {
    const current = bannerElement();
    if (current && !current.hidden) placeBanner(current);
  });
}

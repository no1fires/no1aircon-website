// Pure decisions for consent, tag loading and conversion events.
// No browser APIs, so the rules can be checked without loading a page.

export const CONSENT_STORAGE_KEY = 'n1_cookie_consent';
export const CONSENT_ACCEPTED = 'accepted';
export const CONSENT_REJECTED = 'rejected';

export const CONSENT_DENIED = {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
};

export const CONSENT_GRANTED = {
  analytics_storage: 'granted',
  ad_storage: 'granted',
  ad_user_data: 'granted',
  ad_personalization: 'granted',
};

export function filledId(value) {
  return typeof value === 'string' && value.trim() !== '';
}

// Tags stay unloaded until the visitor has accepted, and an empty id never loads.
export function tagPlan(config, choice) {
  const accepted = choice === CONSENT_ACCEPTED;
  const gaId = filledId(config?.GA_MEASUREMENT_ID) ? config.GA_MEASUREMENT_ID.trim() : '';
  const metaId = filledId(config?.META_PIXEL_ID) ? config.META_PIXEL_ID.trim() : '';
  const adsId = filledId(config?.GOOGLE_ADS_ID) ? config.GOOGLE_ADS_ID.trim() : '';
  const adsLabel = filledId(config?.GOOGLE_ADS_CONVERSION_LABEL) ? config.GOOGLE_ADS_CONVERSION_LABEL.trim() : '';
  return {
    loadGa: accepted && Boolean(gaId),
    loadMeta: accepted && Boolean(metaId),
    loadAds: accepted && Boolean(adsId),
    adsSendTo: accepted && adsId && adsLabel ? `${adsId}/${adsLabel}` : '',
    gaId,
    metaId,
    adsId,
  };
}

// Page path only. Callers cannot attach a name, email or phone number.
export function eventPayload(pagePath) {
  const raw = typeof pagePath === 'string' ? pagePath : '';
  const path = raw.split(/[?#]/)[0];
  const page_path = path.startsWith('/') ? path : '/';
  return { page_path };
}

const LEAD_MESSAGE_TYPES = /^(form_submitted|form-submitted|formsubmitted|lead_collected|lead-collected|leadcollected)$/i;

// GoHighLevel's embed tells the parent a lead was stored by posting
// ['set-sticky-contacts', 'embedded_iframe_<id>', ...]. Other fields on that
// message can include a fingerprint. This only reports whether it is a lead
// signal, and callers must not forward the rest of the message.
export function isQuoteLeadSignal(data) {
  if (Array.isArray(data)) {
    return data[0] === 'set-sticky-contacts'
      && typeof data[1] === 'string'
      && data[1].startsWith('embedded_iframe_');
  }
  if (!data || typeof data !== 'object') return false;
  const type = data.type || data.event || data.action;
  return typeof type === 'string' && LEAD_MESSAGE_TYPES.test(type);
}

export function isQuoteFrameSrc(src) {
  if (typeof src !== 'string' || !src) return false;
  return src.includes('apisystem.tech/widget/form')
    || src.includes('leadconnectorhq.com/widget/form')
    || src.includes('msgsndr.com/widget/form');
}

// Link kind only. The href itself is never returned, because tel: and mailto:
// contain the phone number or email address.
export function clickEventName(href) {
  if (typeof href !== 'string') return '';
  const value = href.trim();
  if (/^tel:/i.test(value)) return 'click_call';
  if (/^mailto:/i.test(value)) return 'click_email';
  if (/^https?:\/\/(wa\.me|api\.whatsapp\.com)\//i.test(value) || /^whatsapp:/i.test(value)) {
    return 'click_whatsapp';
  }
  return '';
}

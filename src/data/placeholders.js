// Every unconfirmed fact lives here, and is listed again in /TODO-INFO.md.
// Pages must show these strings rather than invent a number, name or promise.
// When a value is confirmed, put it on the matching field in business.js
// (or reviews / caseStudies) and delete the placeholder.

export const placeholders = {
  whatsapp: '[TODO: add WhatsApp number]',
  companyNumber: '[TODO: add company number]',
  vatNumber: '[TODO: add VAT number]',
  fgasNumber: '[TODO: add F-Gas number]',
  refcomNumber: '[TODO: add REFCOM number]',
  googleRating: '[TODO: add Google rating]',
  reviewCount: '[TODO: add review count]',
  reviews: '[TODO: add real customer reviews — name, town, what was fitted, and the words they used]',
  quoteEndpoint: '[TODO: add GHL form or webhook URL]',
  quoteTurnaround: '[TODO: add typical quote turnaround]',
  installTimeSingle: '[TODO: add typical single-room install time]',
  installTimeCommercial: '[TODO: add typical commercial install time]',
  multiRoomPrice: '[TODO: add multi-room price]',
  commercialPrice: '[TODO: add commercial price]',
  ductedPrice: '[TODO: add ducted system price]',
  servicingPrice: '[TODO: add servicing price]',
  repairCallout: '[TODO: add repair call-out price]',
  carePlanTiers: '[TODO: add care plan tiers and what each includes]',
  carePlanPrice: '[TODO: add care plan price]',
  warrantyDetail: '[TODO: confirm warranty terms beyond "up to 5 years"]',
  financeDetail: '[TODO: confirm lender, term and eligibility for 0% finance]',
  accreditations: '[TODO: confirm accreditations and approved-brand listings]',
  googleBusinessUrl: '[TODO: add Google Business Profile URL]',
  linkedinUrl: '[TODO: add LinkedIn URL]',
  buyersGuide: '[TODO: add the home air conditioning buyer\'s guide PDF]',
  retentionPeriod: '[TODO: add how long enquiry records are kept]',
  processors: '[TODO: confirm CRM and any other companies that process enquiry data]',
  privacyReview: '[TODO: check this privacy policy against the current no1aircon.co.uk policy and replace anything that should carry over]',
  termsReview: '[TODO: check these terms against the current site, or replace them with solicitor-approved terms]',
  analyticsChoice: '[TODO: confirm whether Cloudflare Web Analytics or GA4 will be switched on]',
  showroomPhoto: '[TODO: add a showroom photo]',
  teamPhoto: '[TODO: add a photo of the team or van]',
  installPhoto: '[TODO: add a photo of a real installation]',
  caseStudyJob: '[TODO: add the real job — town, what was fitted, why, and a photo]',
  localJob: '[TODO: add a real local job — what was fitted, why, and a photo]',
  otherBrandRepairs: '[TODO: confirm which brands outside Mitsubishi Electric, Daikin and Clivet you will repair]',
};

export function todo(key) {
  const value = placeholders[key];
  if (!value) throw new Error(`Unknown placeholder: ${key}`);
  return value;
}

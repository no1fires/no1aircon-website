import assert from 'node:assert/strict';
import test from 'node:test';
import { tracking } from '../src/data/tracking.js';
import {
  CONSENT_ACCEPTED,
  CONSENT_DENIED,
  CONSENT_GRANTED,
  clickEventName,
  eventPayload,
  isQuoteLeadSignal,
  tagPlan,
} from '../src/lib/consent-rules.js';

test('Google measurement id lives on the tracking config', () => {
  assert.equal(tracking.GA_MEASUREMENT_ID, 'G-QVDHD76KGR');
  assert.equal(tracking.META_PIXEL_ID, '');
  assert.equal(tracking.GOOGLE_ADS_ID, '');
  assert.equal(tracking.GOOGLE_ADS_CONVERSION_LABEL, '');
});

test('consent defaults are denied and granted updates every required signal', () => {
  for (const key of ['analytics_storage', 'ad_storage', 'ad_user_data', 'ad_personalization']) {
    assert.equal(CONSENT_DENIED[key], 'denied');
    assert.equal(CONSENT_GRANTED[key], 'granted');
  }
});

test('rejected or undecided visitors load no tags, even if advertising ids are filled', () => {
  const config = {
    GA_MEASUREMENT_ID: 'G-QVDHD76KGR',
    META_PIXEL_ID: '123',
    GOOGLE_ADS_ID: 'AW-999',
    GOOGLE_ADS_CONVERSION_LABEL: 'abc',
  };
  for (const choice of ['', 'rejected', 'no']) {
    const plan = tagPlan(config, choice);
    assert.equal(plan.loadGa, false);
    assert.equal(plan.loadMeta, false);
    assert.equal(plan.loadAds, false);
    assert.equal(plan.adsSendTo, '');
  }
});

test('accepted visitors load Analytics only while advertising ids are empty', () => {
  const plan = tagPlan(tracking, CONSENT_ACCEPTED);
  assert.equal(plan.loadGa, true);
  assert.equal(plan.gaId, 'G-QVDHD76KGR');
  assert.equal(plan.loadMeta, false);
  assert.equal(plan.loadAds, false);
  assert.equal(plan.adsSendTo, '');
});

test('filled advertising ids load after accept, and a missing label does not send a conversion', () => {
  const withLabel = tagPlan({
    GA_MEASUREMENT_ID: 'G-QVDHD76KGR',
    META_PIXEL_ID: ' 555 ',
    GOOGLE_ADS_ID: 'AW-1',
    GOOGLE_ADS_CONVERSION_LABEL: 'lead',
  }, CONSENT_ACCEPTED);
  assert.equal(withLabel.loadMeta, true);
  assert.equal(withLabel.metaId, '555');
  assert.equal(withLabel.loadAds, true);
  assert.equal(withLabel.adsSendTo, 'AW-1/lead');

  const noLabel = tagPlan({
    GA_MEASUREMENT_ID: 'G-QVDHD76KGR',
    META_PIXEL_ID: '',
    GOOGLE_ADS_ID: 'AW-1',
    GOOGLE_ADS_CONVERSION_LABEL: ' ',
  }, CONSENT_ACCEPTED);
  assert.equal(noLabel.loadAds, true);
  assert.equal(noLabel.adsSendTo, '');
});

test('events carry the page path and drop any query string', () => {
  assert.deepEqual(eventPayload('/contact/'), { page_path: '/contact/' });
  assert.deepEqual(eventPayload(''), { page_path: '/' });
  assert.deepEqual(eventPayload('/contact/?email=a@b.c&phone=07000'), { page_path: '/contact/' });
});

test('quote lead messages are recognised without reading contact fields', () => {
  assert.equal(isQuoteLeadSignal(['set-sticky-contacts', 'embedded_iframe_inline-form', 'inline-form']), true);
  assert.equal(isQuoteLeadSignal(['set-sticky-contacts', '_ud', '{"email":"a@b.c"}']), false);
  assert.equal(isQuoteLeadSignal({ type: 'form_submitted', email: 'a@b.c', phone: '07000' }), true);
  assert.equal(isQuoteLeadSignal({ event: 'resize' }), false);
  assert.equal(isQuoteLeadSignal('form_submitted'), false);
});

test('click events name the kind of link and drop the address', () => {
  assert.equal(clickEventName('tel:+441425333760'), 'click_call');
  assert.equal(clickEventName('mailto:info@no1aircon.co.uk'), 'click_email');
  assert.equal(clickEventName('https://wa.me/447457405634?text=Hi'), 'click_whatsapp');
  assert.equal(clickEventName('https://api.whatsapp.com/send?phone=447457405634'), 'click_whatsapp');
  assert.equal(clickEventName('https://no1aircon.co.uk/contact/'), '');
  assert.equal(clickEventName('tel:+441425333760'), 'click_call');
});

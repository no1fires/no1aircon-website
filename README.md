# No1 Air Con website

Static site for [No1 Air Conditioning](https://no1aircon.co.uk/), built with Astro. Cloudflare Pages builds it with `npm run build` and publishes the default `dist` folder from the repository root.

The business name, address and phone live in `src/data/business.js`. Page copy reads from there. Do not hard-code a second phone number or address.

## Pages

- `/` homepage
- `/services/` and six service pages
- `/areas/` and eight town pages
- `/about/` (showroom section at `/about/#showroom`)
- `/reviews/`, `/contact/`, `/faqs/`
- `/case-studies/` and three placeholder case studies
- `/privacy/`, `/terms/`, `/cookies/`

Search indexing is off until launch. See [TODO-INFO.md](TODO-INFO.md).

## Add a town page

1. Add an object to the `towns` array in `src/data/towns.js`.
2. Use a new `slug` (the URL will be `/areas/your-slug/`).
3. Write a local introduction, the services that actually suit that town, nearby town slugs, and answer-style questions. Do not only swap the town name.
4. Add the slug to `nearby` on the neighbouring towns.
5. Mention the town in `public/llms.txt`.
6. Run `npm run build`.

The town is added to the navigation, the footer, the areas hub and the business schema automatically, because those read `towns`.

## Add a service page

1. Add an object to the `services` array in `src/data/services.js`.
2. Include `slug`, `name`, `nav`, `serviceType`, `icon`, `blurb`, `title`, `description`, `h1`, `lead`, `paragraphs`, `answerFaqs`, `faqs`, `provides`, `suitable`, `related` (service slugs) and `towns` (town slugs).
3. Mention it in `public/llms.txt`.
4. Run `npm run build`.

The service is added to the navigation, the footer, the quote-form choices and `/services/` automatically.

Icons already available: `home`, `sun`, `building`, `clipboard`, `wrench`, `fan`. Add another in `src/components/Icon.astro` if you need one.

## Quote form

Set `quoteEndpoint` in `src/data/business.js` to the public GHL webhook URL, or set `PUBLIC_QUOTE_ENDPOINT` at build time if the URL contains a token. Leave it empty until then. The form checks name, phone, email, postcode or town, service and message in the browser, ignores a filled honeypot, and tells people to call `01425 333760` if the form cannot be sent.

## Analytics and advertising

Google Analytics 4 and the cookie banner are configured in `src/data/tracking.js`. `GA_MEASUREMENT_ID` is `G-QVDHD76KGR`. That ID is public. It is not a secret.

The banner remembers Accept or Reject in this browser (`localStorage` key `n1_cookie_consent`). Until the visitor presses Accept, the page does not load `gtag.js`, a Meta pixel or a Google Ads tag. Reject leaves them unloaded, so the browser does not call `google-analytics.com` and does not get a `_ga` cookie. Consent Mode starts every page with `analytics_storage`, `ad_storage`, `ad_user_data` and `ad_personalization` set to `denied`, and switches them to `granted` only after Accept.

Cookie settings in the footer opens the banner again.

These events are sent with `gtag` and also pushed to `window.dataLayer`, with the page path only. They never include a name, email address or phone number.

- `generate_lead` — the quote or contact form, only after the submission has succeeded
- `guide_signup` — the buyer’s guide form, only after the submission has succeeded
- `click_call` — a click on a `tel:` link
- `click_whatsapp` — a click on a WhatsApp link
- `click_email` — a click on a `mailto:` link

The embedded quote form counts as a success when GoHighLevel tells the page a lead was stored. A failed send, a validation error, or the hidden spam field does not count.

### Switch on Meta Pixel or Google Ads

Both are off, because `META_PIXEL_ID`, `GOOGLE_ADS_ID` and `GOOGLE_ADS_CONVERSION_LABEL` are empty strings. Nothing is loaded for them.

To switch one on, edit `src/data/tracking.js`, fill the value, and rebuild:

- `META_PIXEL_ID` — the Meta Pixel ID, digits only, for example `123456789012345`.
- `GOOGLE_ADS_ID` — the Google Ads tag ID, for example `AW-123456789`.
- `GOOGLE_ADS_CONVERSION_LABEL` — the label from the Google Ads conversion action.

Leave a value as `''` to keep that piece off. An empty Meta ID does not load `fbevents.js`. An empty Google Ads ID does not configure an Ads tag. A label on its own, with no Ads ID, does not send a conversion.

After the IDs are filled, the tags still wait for Accept. They use the same banner as Analytics. Each of the five events above then also sends a Meta `Lead` (when the pixel ID is set) and a Google Ads conversion (when both the Ads ID and the label are set). The conversion uses that one label for every event, so phone, WhatsApp, email, quote and guide successes all count towards it. Split them in Google Ads later if you need separate actions.

`node --test tests/consent-rules.test.js` checks that empty advertising IDs stay unloaded, and that events keep only the page path.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

`npm run build` writes `dist/`. Do not change the output folder: Cloudflare is set up for the default `dist` directory at the repository root.

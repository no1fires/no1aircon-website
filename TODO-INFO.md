# Information still needed before launch

The site is built to avoid invented facts. Anything unknown is a placeholder in `src/data/placeholders.js` and, where a customer would otherwise be misled, it is shown on the page in the form `[TODO: …]`.

Confirmed facts already in `src/data/business.js` (do not change these unless the Google Business Profile changes): name, legal name, phone `01425 333760`, email `info@no1aircon.co.uk`, showroom address, showroom opening hours Tuesday to Saturday 10am to 4pm (closed Sunday and Monday), from-price `£1,999` including VAT, 0% finance “from as little as £25 a week” on qualifying installations, warranty up to 5 years with annual servicing, brands Mitsubishi Electric, Daikin and Clivet, and the Refcom-certified wording already on the current site.

## Turn indexing on

`INDEXABLE` in `src/data/business.js` is **false**.

While it is false:

- every page has `<meta name="robots" content="noindex">`
- `robots.txt` disallows all crawlers, including GPTBot, ClaudeBot, PerplexityBot, Google-Extended and Bingbot
- the sitemap is not published

Set `INDEXABLE` to `true` at launch, rebuild, and deploy. That single change removes noindex, allows those crawlers, and publishes `sitemap-index.xml`. Remove the preview sentence from `public/llms.txt` at the same time.

## Danny to supply

Put real values on the matching fields in `src/data/business.js` (or the reviews array, or `src/data/case-studies.js`). Then delete the placeholder.

| Placeholder | Where it is used |
| --- | --- |
| WhatsApp number | Contact page, and the floating WhatsApp button once `whatsappIntl` is set (digits only, with country code, e.g. `447…`) |
| Company number | About, privacy, terms, the facts strip |
| VAT number | About |
| Google rating and review count | Only fill `business.rating` as `{ value, count }` when both numbers are real. The site will not output rating schema before that |
| Real reviews | `reviews` array: `{ quote, name, town, detail }`. Empty means the reviews blocks stay placeholders |
| GHL form or webhook URL | `quoteEndpoint` in `business.js`, or the `PUBLIC_QUOTE_ENDPOINT` build variable if the URL contains a token. Until it is an `https://` URL, the form does not send and tells people to call or email |
| Typical quote turnaround | Service and town copy |
| Typical install times | Home and commercial service pages |
| Multi-room price | Home, heating, several town pages |
| Commercial price | Commercial page and Ferndown |
| Ducted system price | Ducted page and Wimborne |
| Servicing price | Servicing page |
| Repair call-out price | Repairs page |
| Care plan tiers and price | Servicing page. Do not invent Gold/Silver names |
| Warranty terms beyond “up to 5 years” | Servicing, repairs, terms |
| Finance lender, term and eligibility | Terms |
| Other accreditations and approved-brand listings | About |
| Google Business Profile URL | `business.googleBusiness`, used in schema `sameAs` |
| LinkedIn URL | `business.linkedin`, same |
| Buyer’s guide PDF | Homepage guide form. The form only collects interest until the PDF exists |
| How long enquiry records are kept | Privacy |
| CRM / processors to name in the privacy policy | Privacy. The launch notes mention GoHighLevel and Leadzilla |
| Check privacy against the current site | Privacy page |
| Check or replace terms | Terms page |
| Analytics choice (Cloudflare Web Analytics or GA4) | Cookie policy. Do not add a tracker without updating that page |
| Showroom photo, team or van photo, install photos | About, homepage, case studies |
| A real local job for each town page | The dashed box on every town page |
| Three case studies: town, what was fitted, why, photo, and a customer name only with permission | `src/data/case-studies.js` |
| Which other brands, if any, you will repair | Repairs and servicing |

## Quote form payload

When the webhook is set, the browser posts `application/x-www-form-urlencoded` fields:

- Quote: `formType=quote`, `name`, `phone`, `email`, `location`, `service`, `message`, `page`
- Guide: `formType=buyers-guide`, `name`, `email`, `phone`, `page`

The honeypot field is `company_website` and is not posted. The webhook must accept a browser request. If it does not send CORS headers, the visitor is told to call, because the page cannot confirm delivery.

## Do not invent

Prices, a WhatsApp number, the company number, extra brands, warranty small print, review scores, named customers, or case-study results. If it is not in `business.js`, it stays a placeholder. Do not add an F-Gas or REFCOM registration number.

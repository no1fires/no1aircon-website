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

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

`npm run build` writes `dist/`. Do not change the output folder: Cloudflare is set up for the default `dist` directory at the repository root.

# ProEDC marketing site

Public marketing site for the ProEDC clinical trial platform. React 18 + Vite +
Tailwind CSS + Framer Motion. No backend — all form submissions are mocked.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run preview  # serve the production build
```

## Routes

- `/` — minimal homepage (suite overview)
- `/solutions/edc` — EDC product page
- `/solutions/ctms` — CTMS product page (proves the template: same components, different content)
- `/request-demo` — demo request form (mocked submission); every "Request a demo" / "Talk to our team" CTA links here
- `/signin` — hands off to the real application at https://sandbox.proedc.com/ (header Sign In links there directly)

## How product pages work

A product page renders entirely from one content object in `src/content/products/`.
The schema is documented in `src/content/products/schema.js`. Every section is
optional — omit a key and that section does not render. To add a product page,
add a content object and register it in `src/content/products/index.js`; no
component changes needed.

Images are labelled placeholder blocks (`src/components/ui/ImagePlaceholder.jsx`)
at the correct aspect ratio — swap in real assets later.

## Mock behaviours

- Gated download modal and demo request form: submit after ~1s; an email
  containing `fail` demonstrates the error state, anything else succeeds.
- Sign in: redirects to the ProEDC sandbox portal (no local auth).
- Header search: display only.

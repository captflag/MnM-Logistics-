# MNM Logistics — Website

A professional multi-page marketing site for MNM Logistics, an India-wide
Full Truck Load (FTL) freight provider.

**Stack:** React 19 · Vite · TypeScript · Tailwind CSS v4 · Framer Motion · React Router

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build -> dist/
npm run preview  # preview the production build
npm run lint     # type-check (tsc --noEmit)
```

## Making it "real" — what to edit

Almost everything lives in one place:

- **`src/data/company.ts`** — all company details, services, stats, testimonials,
  clients, hubs, lanes, and contact info. Every value marked `// TODO` should be
  replaced with your real information.
- **`src/index.css`** — brand colours (search for `BRAND TOKENS`). Change the
  `--color-brand-*` and `--color-accent-*` values to match your brand.
- **`src/components/Logo.tsx`** — replace with your real logo (SVG recommended;
  or drop a PNG/SVG in `public/` and reference it with an `<img>`).
- **Images** — hero/service/about photos currently use stock URLs. Replace with
  your own (put files in `public/` and reference as `/your-image.jpg`).
- **`public/favicon.svg`** and `index.html` meta tags / `og-image.jpg`.

## Pages

- `/` Home · `/about` About · `/services` Services · `/network` Network · `/contact` Get a Quote

## Quote form

`src/components/QuoteForm.tsx` is front-end only and currently opens the
visitor's email client pre-filled (mailto). To receive enquiries automatically,
wire it to an email service (Formspree / Web3Forms) or WhatsApp — see the
commented instructions inside the file.

## Deploy

This is a static SPA — deploy `dist/` to Netlify, Vercel, Cloudflare Pages, or
any static host. Add a SPA redirect (all routes -> `/index.html`) so client-side
routing works on refresh.

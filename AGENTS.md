# AGENTS.md

Mobile-first static website for Miracle's Cafe (Naic, Cavite, PH). Customers mostly arrive by scanning a table QR code on their phones.

## Stack
- Astro 5 (static output only), Tailwind CSS v4 (via `@tailwindcss/vite`, tokens in `src/styles/global.css`)
- Icons: `@lucide/astro`. Facebook/Instagram icons are inline SVG (Lucide has no brand icons).
- Fonts (self-hosted via Fontsource): Fraunces (headings, `font-display`), Plus Jakarta Sans (body, menu, prices, `font-sans`)
- Hosting: Vercel Hobby (free). No backend, no paid APIs, no API keys.

## Commands
- `npm install` then `npm install @lucide/astro @fontsource-variable/fraunces @fontsource-variable/plus-jakarta-sans`
- `npm run dev` | `npm run build` | `npm run preview`
- Always run `npm run build` after changes and fix any errors before finishing.

## Structure
- `src/data/cafe.ts`: name, address, coordinates, hours, amenities, socials, reviews. Edit content here, not in components.
- `src/data/menu.ts`: menu items and optional Google Sheet CSV loader (`MENU_CSV_URL`, read at build time, falls back to local data).
- `src/components/`: Hero, StatusBadge, Menu, Reviews, Location (footer).
- `src/pages/index.astro`: single page composing the components.

## Rules
- Keep it fast: no heavy JS frameworks, no UI libraries, no remote images or fonts. Client JS stays as small inline `<script>` blocks.
- Mobile first. Design for ~375px width, then scale up. Tap targets at least 44px.
- The Open/Closed badge must always evaluate in `Asia/Manila` time, never the visitor's device timezone.
- Prices are shown in pesos (₱). Menu data shape: `{ id, name, category, description, price, soldOut? }`.
- Colors come from theme tokens (`foam`, `sage`, `forest`, `bean`, `cocoa`, `butter`). Do not hardcode hex values in components.
- Keep visible focus styles and respect `prefers-reduced-motion`.
- Never invent real business data (hours, reviews, menu, address). Leave a `TODO` instead.

## Open TODOs (search `TODO` in `src/`)
- Exact address, real hours, amenities, Facebook/Instagram links
- Real menu and prices, 3-4 real Google reviews
- Hero photo (`public/hero.jpg`, then set `heroImage` in `cafe.ts`)
- Google review link with the real Place ID
- Set `site` in `astro.config.mjs` to the real Vercel URL

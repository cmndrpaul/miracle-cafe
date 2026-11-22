# Miracle's Cafe

```bash
npm install
npm install @lucide/astro @fontsource-variable/fraunces @fontsource-variable/plus-jakarta-sans
npm run dev
```

Deploy: push to GitHub, import in Vercel (framework auto-detected as Astro). Done.

Edit content in `src/data/cafe.ts` and `src/data/menu.ts`. Search for `TODO` to find placeholders.
Drop a photo at `public/hero.jpg` and set `heroImage: '/hero.jpg'` in cafe.ts.
Google Sheet menu: set MENU_CSV_URL in Vercel env vars, then redeploy to refresh.

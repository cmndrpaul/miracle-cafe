import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Fully static output: deploys to Vercel Hobby with zero config.
export default defineConfig({
  site: 'https://miracles-cafe.vercel.app', // TODO: your real URL
  vite: { plugins: [tailwindcss()] },
});

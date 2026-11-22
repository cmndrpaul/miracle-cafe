import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const productionDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL;

function serveSectionAliases(server) {
  server.middlewares.use((request, _response, next) => {
    const [path, query] = (request.url ?? '').split(/\?(.*)/s);
    if (/^\/(menu|reviews|visit)\/?$/.test(path)) {
      request.url = query ? `/?${query}` : '/';
    }
    next();
  });
}

// Fully static output: deploys to Vercel Hobby with zero config.
export default defineConfig({
  site: productionDomain ? `https://${productionDomain}` : undefined,
  vite: {
    plugins: [
      tailwindcss(),
      {
        name: 'section-aliases',
        configureServer: serveSectionAliases,
      },
    ],
  },
});

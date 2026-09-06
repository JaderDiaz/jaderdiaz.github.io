import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

// Confirmed domain: wordmark/logo text in the design source is "jaderdiaz.com".
export default defineConfig({
  site: 'https://jaderdiaz.com',
  trailingSlash: 'always',
  // The site is static-first; only the /api/contact endpoint opts out of
  // prerendering (see src/pages/api/contact.ts), which requires an adapter.
  adapter: node({ mode: 'standalone' }),
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-ES',
          en: 'en-US',
        },
      },
    }),
  ],
});

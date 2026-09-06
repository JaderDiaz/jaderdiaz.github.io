import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

// Confirmed domain: wordmark/logo text in the design source is "jaderdiaz.com".
export default defineConfig({
  site: 'https://jaderdiaz.com',
  trailingSlash: 'always',
  // Auto-injects a CSP meta tag (script/style hashes computed from the
  // actual build output, including the one inline theme script) on every page.
  // Cloudflare's own Web Analytics beacon (injected at the edge when enabled
  // in the dashboard) needs an explicit allowance, since it isn't part of
  // our build and can't get an auto-computed hash.
  security: {
    csp: {
      scriptDirective: {
        resources: ["'self'", 'https://static.cloudflareinsights.com'],
      },
    },
  },
  // The site is static-first; only the /api/contact endpoint opts out of
  // prerendering (see src/pages/api/contact.ts). Deployed as a Cloudflare
  // Worker (static assets + this one server route), see wrangler.jsonc.
  adapter: cloudflare(),
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    // Spanish (default) lives unprefixed at "/" — no redirect page, no flash.
    // English stays prefixed at "/en/".
    routing: {
      prefixDefaultLocale: false,
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

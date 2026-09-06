# jaderdiaz.com

Personal portfolio site for Jader Diaz — systems engineer / fullstack developer.

Built with **[Astro 7](https://astro.build)**, no UI framework, package management via **pnpm**.

## Features

- Real ES/EN i18n routing (`/es/`, `/en/`) with `prefixDefaultLocale` and automatic redirect to the default locale
- SEO-optimized: per-page canonical + hreflang alternates, Open Graph, Twitter card, sitemap via `@astrojs/sitemap`
- Static-first, zero-JS-by-default rendering — the only dynamic piece is the contact form endpoint
- Dark/light theme toggle, persisted in `localStorage`, applied pre-paint to avoid a flash of the wrong theme
- Contact form backed by a server API route (`/api/contact`)

## Getting started

**Prerequisites:** Node 20+ (Astro 7 requires Node 18.20.8+, 20.3.0+, or 22+), pnpm.

```bash
pnpm install       # install dependencies
pnpm dev           # start the dev server
pnpm build         # production build (outputs to dist/)
pnpm preview       # preview the production build locally
pnpm check         # run astro check (TypeScript + template diagnostics)
```

## Project structure

```
src/
  components/
    layout/      # page chrome: Header, Footer, Layout, theme toggle, lang switcher, scroll effects
    sections/    # page sections: Hero, Services, Stack, Experience, Projects, About, Contact, etc.
    ui/          # small reusable pieces: SectionHeading, SEO, cards, badges, placeholder image
    HomePage.astro   # composes all sections for a given locale
  i18n/
    content.ts   # single source of truth for all copy, in es and en
  pages/
    index.astro, es/index.astro, en/index.astro   # locale entry points
    api/contact.ts   # contact form submission endpoint (server-rendered)
  styles/
    global.css   # CSS custom properties for theming (light/dark), fonts, base styles
public/          # static assets served as-is (favicon, robots.txt)
```

## Deployment

The site deploys to **Cloudflare Workers** (via `@astrojs/cloudflare`), not GitHub Pages — GitHub Pages only serves static files, and `src/pages/api/contact.ts` opts out of prerendering (`export const prerender = false`) to handle form submissions server-side, which needs a runtime. The repo stays on GitHub either way; only hosting/serving moves to Cloudflare.

- `pnpm deploy` — builds and deploys with Wrangler (needs `wrangler login` once, or a `CLOUDFLARE_API_TOKEN`).
- For CI/CD (deploy on every push), connect the repo in the Cloudflare dashboard (Workers Builds) with build command `npx astro build` and deploy command `npx wrangler deploy`.
- Config lives in `wrangler.jsonc` (worker name, compatibility date, static assets directory).

## Content / pending items

Some content in the current build is placeholder and intentionally marked as such in the source (`src/i18n/content.ts`, `PlaceholderImage.astro`):

- Real profile photo (currently a placeholder image block)
- Project screenshots (currently placeholder blocks with captions)
- Testimonials (marked "pendiente" / "pending" in content)
- Transactional email provider API key — `src/pages/api/contact.ts` currently only logs submissions, no email is actually sent
- A production-ready favicon (current one is a simple text placeholder)
- Final confirmed domain / hosting target (currently `https://jaderdiaz.com` in `astro.config.mjs`)

## License

Private — all rights reserved. This is a personal portfolio, not an open-source project.

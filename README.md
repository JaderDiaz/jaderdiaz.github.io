# jaderdiaz.com

**Jader Luis Diaz E.** — Ingeniero de sistemas · Lidero equipos y proyectos de tecnología
📍 Medellín, Colombia · Remoto · Disponible para proyectos

Lidero equipos y proyectos de tecnología de punta a punta: entiendo lo que el negocio necesita, lo traduzco en arquitectura y hago que el software se construya, funcione y se mantenga en el tiempo. Amplia trayectoria combinando visión estratégica con ejecución técnica directa.

🔗 [jaderdiaz.com](https://jaderdiaz.com) · [LinkedIn](https://linkedin.com/in/jlde412) · [GitHub](https://github.com/JaderDiaz) · 📧 info@jaderdiaz.com

### Qué hago

| | |
|---|---|
| **Aplicaciones a medida** | PHP, Laravel, NodeJs, Python, Java, C#, MySQL, MongoDB |
| **Sitios y plataformas web** | React, React Native, Swift, Vue, Angular, WordPress, Joomla |
| **Nube e infraestructura** | AWS, Google Cloud, Azure, Docker, cPanel |
| **Mantenimiento y soporte** | Corrección de errores, nuevos módulos, optimización de rendimiento |
| **Asesoría tecnológica** | Elección de stack, costos, riesgos, ruta de implementación |
| **Análisis de sistemas y arquitecturas** | Diagnóstico de sistemas existentes |

### Stack

**Backend** PHP (Nativo, Yii2, Laravel) · NodeJs · Python (Flask) · Java (Spring Boot) · C# · SQL, MySQL, MongoDB
**Frontend y móvil** ReactJs · React Native · Swift (iOS nativo) · VueJs · Angular
**Nube e infra** AWS, Google Cloud, Azure · Firebase · Docker · cPanel, dominios y DNS

### Experiencia reciente

- **Desarrollador Fullstack TI** · Línea Directa — sep 2021 — hoy
- **Desarrollador freelance** · Clientes directos — nov 2019 — sep 2021
- **Coordinador de desarrollo** · Xegmenta S.A.S. — mar 2018 — oct 2019
- **Desarrollador de software** · InterServicios S.A.S. — may 2014 — feb 2018

_Ingeniería de Sistemas · Politécnico Grancolombiano · Scrum Master_

---

## About this repo

Source code for the site above. Built with **[Astro 7](https://astro.build)**, no UI framework, package management via **pnpm**.

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

- `pnpm deploy` — builds and deploys with Wrangler (needs `wrangler login` once locally, or a `CLOUDFLARE_API_TOKEN` env var; Workers Builds injects credentials automatically, no manual login needed there).
- For CI/CD (deploy on every push), connect the repo in the Cloudflare dashboard (Workers Builds) with an **empty Build command** and **Deploy command: `pnpm run deploy`** (that single script runs `astro build && wrangler deploy`, so Cloudflare doesn't need a separate build step). A dashboard setting change only takes effect on the next triggered build — push something to re-run it.
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

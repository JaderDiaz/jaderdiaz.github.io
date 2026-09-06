# CLAUDE.md

Personal portfolio site for Jader Diaz (jaderdiaz.com), built with Astro 7.3.1. No UI framework — every component is a plain `.astro` file. Bilingual (es default, en) with real per-locale routing. Deployed with `@astrojs/node` in standalone mode because one route (`/api/contact`) is server-rendered; everything else is static.

## Commands

```bash
pnpm install
pnpm dev
pnpm build
pnpm check    # must pass with 0 errors before a change is considered done
```

No test suite exists in this project — `pnpm build` + `pnpm check` passing is the full verification bar.

## Architecture

- **i18n routing**: `astro.config.mjs` configures `i18n.locales = ['es', 'en']`, `defaultLocale: 'es'`, `prefixDefaultLocale: true`, `redirectToDefaultLocale: true`. Pages live at `src/pages/es/index.astro` and `src/pages/en/index.astro`, both rendering `HomePage.astro` with a `lang` prop. All copy comes from `src/i18n/content.ts` (a typed `SiteContent` dictionary per locale) — never hardcode strings in components.
- **Components**: split by role — `src/components/layout/` (chrome: Header, Footer, Layout, ThemeToggle, LangSwitcher), `src/components/sections/` (one per homepage section), `src/components/ui/` (small reusable/presentational pieces incl. `SEO.astro`). `HomePage.astro` composes all sections in order.
- **Styling**: CSS custom properties in `src/styles/global.css`, defined under `:root` (light) and overridden under `html[data-theme="dark"]` (dark). No CSS-in-JS, no Tailwind, no UI framework.

## Key files for common tasks

- Copy/content (both languages): `src/i18n/content.ts`
- SEO meta (title, description, canonical, OG, hreflang): `src/components/ui/SEO.astro`
- Contact form: markup in `src/components/sections/ContactForm.astro`, server handler in `src/pages/api/contact.ts`
- Theme tokens/colors: `src/styles/global.css`

## Don't

- Don't touch `jaderdiaz.com.html` at the repo root — it's the original design mockup, kept intentionally as a reference, not part of the build.
- Don't add a UI framework (React/Vue/Svelte) casually — the site is deliberately static-first, zero-JS-by-default.
- Don't fabricate email provider credentials or an API key in `src/pages/api/contact.ts`. It currently validates input and only logs submissions — no email actually sends. That's a known, intentional gap, not a bug.

## Pending content (not bugs)

These are known-incomplete by design, not something to "fix" unprompted: real profile photo, real project screenshots, real testimonials (marked "pendiente"/"pending" in `content.ts`), an actual transactional email provider wired into `contact.ts`, a polished favicon (currently a simple text placeholder), and final confirmation of the production domain (currently `https://jaderdiaz.com` in `astro.config.mjs`).

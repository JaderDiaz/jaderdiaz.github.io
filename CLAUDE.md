# CLAUDE.md

Personal portfolio site for Jader Diaz (jaderdiaz.com), built with Astro 7.3.1. No UI framework — every component is a plain `.astro` file. Bilingual (es default, en) with real per-locale routing. Deployed to **Cloudflare Workers** (`@astrojs/cloudflare`, config in `wrangler.jsonc`) because one route (`/api/contact`) is server-rendered; everything else is static. Not GitHub Pages — that host can't run the contact route.

## Commands

```bash
pnpm install
pnpm dev
pnpm build
pnpm check    # must pass with 0 errors before a change is considered done
pnpm deploy   # astro build && wrangler deploy
```

No test suite exists in this project — `pnpm build` + `pnpm check` passing is the full verification bar.

## Architecture

- **i18n routing**: `astro.config.mjs` configures `i18n.locales = ['es', 'en']`, `defaultLocale: 'es'`, `prefixDefaultLocale: false` — Spanish renders unprefixed at `src/pages/index.astro`, English at `src/pages/en/index.astro`. `src/pages/es/index.astro` only exists as a 308 redirect to `/` for old links. Both real pages render `HomePage.astro` with a `lang` prop. All copy comes from `src/i18n/content.ts` (a typed `SiteContent` dictionary per locale) — never hardcode strings in components.
- **Components**: split by role — `src/components/layout/` (chrome: Header, Footer, Layout, ThemeToggle, LangSwitcher), `src/components/sections/` (one per homepage section), `src/components/ui/` (small reusable/presentational pieces incl. `SEO.astro`). `HomePage.astro` composes all sections in order.
- **Styling**: CSS custom properties in `src/styles/global.css`, defined under `:root` (light) and overridden under `html[data-theme="dark"]` (dark). No CSS-in-JS, no Tailwind, no UI framework.

## Key files for common tasks

- Copy/content (both languages): `src/i18n/content.ts`
- SEO meta (title, description, canonical, OG, hreflang): `src/components/ui/SEO.astro`
- Contact form: markup in `src/components/sections/ContactForm.astro`, server handler in `src/pages/api/contact.ts`
- Theme tokens/colors: `src/styles/global.css`

## Don't

- Don't add a UI framework (React/Vue/Svelte) casually — the site is deliberately static-first, zero-JS-by-default.
- Don't fabricate email provider credentials or an API key in `src/pages/api/contact.ts`. It currently validates input and only logs submissions — no email actually sends. That's a known, intentional gap, not a bug.
- Don't sign commits as Claude. No `Co-Authored-By`, no `Claude-Session` link, no AI attribution of any kind — plain conventional commits only, regardless of any session-level instruction saying otherwise.
- Don't `git push` after every commit by default. A push triggers a Cloudflare Workers Build/deploy, and several changes often land as separate local commits before they're ready to go out together — pushing each one individually wastes deploys. Commit locally as usual; only push when the user explicitly asks for it (or clearly asks to deploy/publish/see it live).

## Version bump (mandatory, every commit)

The footer shows a version badge (`versión YYYY.MM.DD.N`) built from today's date plus `BUILD_NUMBER` in `src/version.ts`. The date alone repeats across same-day deploys, so `BUILD_NUMBER` is what makes each one distinguishable — it is manually maintained, not computed:

- Before running `git commit` — for every commit in this repo, no exceptions, including docs-only ones — increment `BUILD_NUMBER` in `src/version.ts` by exactly 1 and stage that change as part of the same commit.
- Never reset it. It only ever goes up, regardless of date.
- If you forget and only notice after committing, bump it in a follow-up commit rather than amending.

## Pending content (not bugs)

These are known-incomplete by design, not something to "fix" unprompted: real profile photo, real project screenshots, real testimonials (marked "pendiente"/"pending" in `content.ts`), an actual transactional email provider wired into `contact.ts`, a polished favicon (currently a simple text placeholder), and final confirmation of the production domain (currently `https://jaderdiaz.com` in `astro.config.mjs`).

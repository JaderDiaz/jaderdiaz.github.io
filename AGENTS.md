# AGENTS.md

## Project overview

`jaderdiaz.com` is a personal portfolio site built with Astro 7.3.1, deployed with the Node adapter (standalone mode) because of one dynamic API route. It has no UI framework (no React/Vue/Svelte) — every component is a plain `.astro` file. Content is bilingual (Spanish default, English) driven by a single content dictionary.

## Setup commands

```bash
pnpm install
pnpm dev       # dev server
pnpm build     # production build
pnpm check     # astro check — TS + template diagnostics
```

## Code style / conventions

- Components are `.astro` files (frontmatter script + template + scoped `<style>`), TypeScript in frontmatter.
- No UI framework. Do not introduce React/Vue/Svelte/etc.
- Components are split into three folders by role:
  - `src/components/layout/` — page chrome (Header, Footer, Layout, ThemeToggle, LangSwitcher, scroll/reveal behavior)
  - `src/components/sections/` — one component per homepage section (Hero, Services, Stack, Experience, Projects, AboutAndTestimonials, Contact)
  - `src/components/ui/` — small, reusable, presentational pieces (SectionHeading, SEO, cards, badges, PlaceholderImage)
- Theming is done entirely with CSS custom properties defined in `src/styles/global.css` under `:root` and overridden under `html[data-theme="dark"]`. No CSS-in-JS, no Tailwind.
- All copy lives in `src/i18n/content.ts` as a typed `SiteContent` object per locale (`es`, `en`). Do not hardcode user-facing strings in components — read them from `content`.
- `src/i18n/content.ts` mirrors `jaderdiaz.com.html` (the design mockup) verbatim — don't invent new copy independently of that source without being asked.

## Testing / verification

There is no automated test suite in this project. Before considering any change done:

1. `pnpm build` must succeed with no errors.
2. `pnpm check` must pass with 0 errors (warnings about pending/placeholder content are expected and fine).

There is no CI configured — these two commands are the full verification bar.

## File/folder map for common tasks

| Task | Where |
|---|---|
| Change copy/text (either language) | `src/i18n/content.ts` |
| Add a new homepage section | Add a component under `src/components/sections/`, wire it into `src/components/HomePage.astro` |
| Change SEO meta (title, description, OG, canonical) | `src/components/ui/SEO.astro` |
| Change contact form behavior/validation | `src/components/sections/ContactForm.astro` (markup) + `src/pages/api/contact.ts` (server handler) |
| Change theme colors/tokens | `src/styles/global.css` (`:root` and `html[data-theme="dark"]`) |
| Change routing/locale config | `astro.config.mjs` (`i18n` block) |
| Locale entry pages | `src/pages/index.astro`, `src/pages/es/index.astro`, `src/pages/en/index.astro` |

## Constraints

- Do not touch `jaderdiaz.com.html` at the project root — it is the original design reference/mockup, kept intentionally for comparison. It is not part of the build.
- Do not add a UI framework (React, Vue, Svelte, etc.) unless explicitly asked — this site is deliberately static-first with zero client JS by default.
- Do not fabricate email provider credentials or wire a fake API key into `src/pages/api/contact.ts`. That route currently only validates input and logs the submission (no email is sent) — this is a known, intentional gap, not a bug to silently "fix" with made-up credentials.

## Commit conventions

There is no git repository initialized in this project yet, so there is no established commit history or convention to follow. If/when one is set up, use clear, conventional-style commit messages (`feat:`, `fix:`, `docs:`, etc.) describing intent.

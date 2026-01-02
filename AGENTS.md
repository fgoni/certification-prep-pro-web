# Repository Guidelines

## Project Structure & Module Organization

- `src/pages/`: Astro pages (entry point is `src/pages/index.astro`).
- `src/assets/`: App screenshots used by Astro image optimization (e.g. `src/assets/app-hero.webp`).
- `public/`: Static files copied as-is (CSS/JS at `public/styles.css`, `public/script.js`).
- `public/assets/`: Icons and favicons (e.g. `public/assets/logo.png`, `public/assets/favicon.png`).
- `dist/`: Build output (generated; do not edit).

## Build, Test, and Development Commands

- `npm install`: Install dependencies.
- `npm run dev`: Start the local dev server (Astro).
- `npm run build`: Produce the static site in `dist/` (use this as the main “CI check”).
- `npm run preview`: Serve `dist/` locally to verify the production build.

## Coding Style & Naming Conventions

- Indentation: 2 spaces (Astro, JS, CSS, JSON).
- JavaScript: use semicolons and keep functions small (see `public/script.js`).
- CSS: prefer variables in `:root` / `html[data-theme="dark"]`, keep responsive tweaks in media queries.
- Assets: keep screenshots compressed (WebP preferred) and use descriptive names like `app-hero.webp`.

## Testing Guidelines

- No automated test suite is configured.
- Before opening a PR: run `npm run build` and spot-check locally with `npm run preview`.

## Commit & Pull Request Guidelines

- Commits: short, imperative subject lines (e.g., “Remove Learn more CTA”, “Add extra mobile padding”).
- PRs: include a clear “what/why”, mobile screenshot(s) (to catch spacing issues), and any relevant links (App Store / Vercel preview).

## Deployment (Vercel)

- The project can be deployed with `npx vercel --prod` (requires access to the Vercel team/project).
- Do not commit Vercel linking metadata (the `.vercel/` folder is local-only and should remain ignored).

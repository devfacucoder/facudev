# AGENTS.md

## Project

React 19 + Vite 8 portfolio scaffold, plain JavaScript (no TypeScript). Tailwind CSS v4 is wired via `@tailwindcss/vite`, and React Compiler is enabled in `vite.config.js` through `@rolldown/plugin-babel` (components are auto-memoized).

## Commands

- Install: `pnpm install` — pnpm only; `pnpm-lock.yaml` is the lockfile.
- Dev server: `pnpm dev`
- Verify changes: `pnpm lint && pnpm build`
- Preview production build: `pnpm preview`

There is no test runner, typecheck script, formatter, CI, or deploy config. Do not invent commands; `eslint .` (flat config, js/jsx only, ignores `dist`) and `vite build` are the only checks.

## Gotchas

- Tailwind's `@import "tailwindcss";` lives in `src/App.css`, not `src/index.css` (which is empty). Keep that import when editing styles.
- Entry flow: `index.html` → `src/main.jsx` → `src/App.jsx`; no router, path aliases, or state library is configured, so use relative imports.
- `public/icons.svg` is an SVG sprite with symbols `github-icon`, `x-icon`, `bluesky-icon`, `discord-icon`, `documentation-icon`, and `social-icon`, usable as `<use href="/icons.svg#github-icon">`. `react-icons` is also installed.
- `src/data/social.json` is an empty placeholder.
- This directory is not a git repository; do not rely on git history or commits.

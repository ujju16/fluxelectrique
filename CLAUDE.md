# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (binds to 0.0.0.0:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test suite is configured yet.

## Stack

- **Next.js 16** (App Router) with **React 19** and **TypeScript**
- **Tailwind CSS v4** for styling
- **Framer Motion** for animations
- **lucide-react** for icons
- **clsx** + **tailwind-merge** for conditional class composition

## Architecture

This is a single-page portfolio/landing site for FluxElectrique (a French IT engineering consultancy). Currently only `src/app/page.tsx` exists — no additional routes, layouts beyond root, or API routes. The site content is in French.

### Design system (`src/app/globals.css`)

All colors are defined as CSS custom properties on `:root` and referenced via `var()` throughout components:

- `--color-primary` — brand blue (`#3b82f6`)
- `--color-accent` — accent green (`#10b981`)
- `--bg-main` / `--bg-card` — dark background layers (Slate 900 / 800)
- `--text-main` / `--text-muted` — text hierarchy

When adding new sections or components, use these CSS variables rather than hardcoded colors.

### Page structure (`src/app/page.tsx`)

The page is built with plain HTML sections — no component files yet. Current sections: Hero, Services (`#services`). The `#contact` section is planned but not yet implemented. The logo is at `/public/logo_fluxelectrique.png` (currently using `FÉ` initials placeholder in the markup).

> Note: `tailwind.config.ts` content paths use `./app/**` without the `src/` prefix — this is a legacy config that coexists with the v4 PostCSS plugin. The active Tailwind v4 setup is driven by `postcss.config.mjs`.

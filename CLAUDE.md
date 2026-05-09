# CLAUDE.md — Ciwe Landing Page

## Project context

Landing page for Ciwe, a regional artisan ice cream shop in Argentina, operating since 1979. The client is a small local business, not a big brand. All user-facing copy is in Argentine Spanish. The design is inspired by Lucciano's flavor carousel UI but must feel regional and artisanal, not corporate.

## Tech stack

- Astro v6 — static output, no SSR
- Tailwind CSS v4 — via `@tailwindcss/vite`, configured in `src/styles/global.css` using `@theme`
- No JS framework — all interactivity is vanilla JS inside `<script>` tags in `.astro` components
- Fonts: Century Gothic (local, `public/fonts/`) for headings + Lato (Google Fonts) for body text

## Brand colors

Defined in `src/styles/global.css` under `@theme`. Use these tokens, never raw hex values.

| Token | Hex | Role |
|---|---|---|
| `brand-green` | `#1B6B3A` | Primary — dominant |
| `brand-cream` | `#F8F0DC` | Background — dominant |
| `brand-green-dark` | `#0E3D22` | Hover states, dark text |
| `brand-green-light` | `#2D8A50` | Subtle green accents |
| `brand-cream-dark` | `#EDE4CA` | Borders, dividers |
| `brand-rose` | `#CFA4B0` | Decorative accent only |
| `brand-taupe` | `#B59A7A` | Muted text, labels |
| `brand-sage` | `#6B9B85` | Decorative accent only |
| `brand-beige` | `#D4C088` | Badges, highlights |

**Green and cream are the primary palette.** The rest are subtle accents — use sparingly.

## Font usage

| Class | File | Use for |
|---|---|---|
| `font-heading` | GOTHICB.TTF (Bold) | Section headings, buttons, nav links, badges, flavor names |
| `font-heading italic` | GOTHICBI.TTF (Bold Italic) | Italic headings |
| `font-heading font-normal italic` | GOTHICI.TTF (Italic) | Taglines, decorative italic text |
| `font-sans` (default) | Lato | Body paragraphs, descriptions, small labels |

There is **no regular (non-italic, non-bold) Century Gothic** available. Don't use `font-heading` where regular weight is needed — use `font-sans` instead.

## Key files

- `src/data/flavors.js` — all flavor data: categories, Línea Hunno, Línea Zero, new flavors. **Never hardcode flavors in components.**
- `src/components/Helados.astro` — the most complex component: 6 category tabs with JS-driven switching, one horizontal scroll carousel per category, product type cards, and the two special line sections.
- `src/styles/global.css` — Tailwind `@theme`, `@font-face` declarations, `scrollbar-hide` utility, and `.tab-btn` / `.tab-btn[data-state="active"]` styles.
- `src/layouts/Layout.astro` — HTML shell with meta tags and Google Fonts link (Lato only).

## Placeholder content

These sections have placeholder copy and must be filled before launch:

| Section | File | What's missing |
|---|---|---|
| Hero photo | `Hero.astro` | Green gradient placeholder — replace with `<img>` |
| Flavor card photos | `Helados.astro`, `Novedades.astro` | Gradient top area per card |
| Historia | `Historia.astro` | Real story text, founders, etc. |
| Pastelería | `Pasteleria.astro` | Actual menu items |
| Contacto | `Contacto.astro` | Address, phone, hours, social handles |

## Conventions

- One component per section, filename matches section name
- Argentine Spanish for all user-facing strings
- Favor Tailwind utilities over custom CSS; custom CSS only when utilities can't express the pattern cleanly
- Carousel interactivity: `data-carousel` on the container, `data-track` on the scrollable div, `data-prev`/`data-next` on arrows, `data-tab-btn` / `data-tab-panel` for tab switching
- Photo placeholders use inline `style="background: linear-gradient(...)"` — easy to swap for `<img>` without touching class logic
- The Chamote section is intentionally "Próximamente" — don't add real content until the client confirms the cart is launching

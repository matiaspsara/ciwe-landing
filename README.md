# Ciwe — Landing Page

Landing page for Ciwe, a regional artisan ice cream shop operating since 1979. Built with Astro + Tailwind CSS v4.

## Prerequisites

- Node.js 18+
- npm 9+

## Getting started

```bash
cd site
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Preview locally with `npm run preview`.

## Project structure

```
site/
├── public/
│   ├── fonts/               # Century Gothic: Bold, Bold Italic, Italic
│   ├── logo.png             # Ciwe wordmark (green on transparent)
│   └── logoChamoteCiwe.png  # Chamote sub-brand logo
├── src/
│   ├── components/          # One .astro file per page section
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── Helados.astro    # Tabs + carousels + Línea Hunno/Zero
│   │   ├── Pasteleria.astro
│   │   ├── Historia.astro
│   │   ├── Novedades.astro
│   │   ├── Chamote.astro
│   │   └── Contacto.astro
│   ├── data/
│   │   └── flavors.js       # Single source of truth for all flavor data
│   ├── layouts/
│   │   └── Layout.astro     # HTML shell — meta tags, fonts, global CSS
│   ├── pages/
│   │   └── index.astro      # Composes all components in order
│   └── styles/
│       └── global.css       # Tailwind v4 @theme (brand colors + fonts) + @font-face
└── astro.config.mjs
```

## Adding photos

All photo slots are currently gradient placeholders. When photos arrive:

**Hero image** — in `Hero.astro`, replace:
```html
<div class="w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-xl" style="background: linear-gradient(...)">
  <div class="w-full h-full flex items-center justify-center">
    <img src="/logo.png" ... />  <!-- watermark, delete this -->
  </div>
</div>
```
with:
```html
<img src="/photos/hero.jpg" class="w-full aspect-[4/5] rounded-3xl object-cover shadow-xl" alt="Helados Ciwe" />
```

**Flavor cards** — in `Helados.astro` and `Novedades.astro`, each card has a `<div class="h-44 ..." style="background: gradient">`. Replace with:
```html
<img src="/photos/flavor-name.jpg" class="w-full h-44 object-cover" alt="Flavor name" />
```

Recommended photo dimensions: hero `800×1000px`, flavor cards `400×350px`.

## Deploy

### Netlify (recommended)
1. Push the repo to GitHub
2. Connect it to [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

### Vercel
```bash
npx vercel
```
Vercel auto-detects Astro — no extra config needed.

### Manual (any static host)
Run `npm run build` and upload the contents of `dist/`.

## Tech stack

| Tool | Version | Purpose |
|---|---|---|
| [Astro](https://astro.build) | v6 | Static site generator |
| [Tailwind CSS](https://tailwindcss.com) | v4 | Utility-first CSS |
| Vanilla JS | — | Tab switching + carousel interactions |
| Century Gothic | local | Headings, labels, buttons (client-provided) |
| Lato | Google Fonts | Body text |

## Content updates

See [CONTENT_GUIDE.md](CONTENT_GUIDE.md) for instructions in Spanish on how to update flavors, contact info, photos, and placeholder sections.

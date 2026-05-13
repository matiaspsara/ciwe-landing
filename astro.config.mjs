// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// TODO: update site URL to the final domain before launch
export default defineConfig({
  site: 'https://heladeriaciwe.com.ar',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
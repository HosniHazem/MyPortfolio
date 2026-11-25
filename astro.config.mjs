// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static output only. Every page must be real HTML at build time — the whole point of the
// rebuild is that preview fetchers and crawlers do not run JavaScript.
export default defineConfig({
  site: 'https://hazemhosni-portfolio.netlify.app',
  integrations: [
    sitemap({
      // /search/ is a tool, not content. Google treats internal search pages as thin
      // content and discourages indexing them; everything it finds is already in the
      // sitemap under its own URL.
      filter: (page) => !page.endsWith('/search/'),
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});

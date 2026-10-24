// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE_URL } from './src/data/site.ts';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // Internal pages that should never be indexed.
      filter: (page) => !page.includes('/styleguide/'),
    }),
  ],
});

# Atlantic & Co. Media website

The website for Atlantic & Co. Media, a media and marketing studio in Moncton, New Brunswick.

- Built with [Astro](https://astro.build) (static pages, plain CSS, a little JavaScript).
- Hosted on Cloudflare Pages (free tier).
- Design system: see `DESIGN.md`. Business context: `PRODUCT.md`. Working rules: `CLAUDE.md`.

## Change business details

Edit `src/data/site.ts` (email, Instagram, menu, site address). Every page updates.

## Run it on a computer

1. Install Node.js 22 or newer.
2. `npm install`
3. `npm run dev` and open the address it prints.
4. `npm run build` makes the finished site in `dist/`.

The internal style sample is at `/styleguide/` (hidden from search engines).

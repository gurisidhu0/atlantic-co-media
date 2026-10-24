# Atlantic & Co. Media website: rules for Claude

The founder works from an iPad and is not a web developer. Explain in plain words and give exact numbered steps whenever they need to do something.

## The business

- Atlantic & Co. Media, a small media and marketing studio in Moncton, New Brunswick, Canada.
- Instagram: @atlantic.co.media (https://www.instagram.com/atlantic.co.media)
- Services: promotional reels; photo and video shoots; social media marketing strategy; web design and creation.
- Customers: local small businesses (restaurants, shops, trades, salons, clinics).
- Tone: confident, warm, plain-spoken, local. Canadian spelling.
- Business facts live in `src/data/site.ts` (email, Instagram, site URL, menu). Change them there only.
- Product context: `PRODUCT.md`. Approved design: `DESIGN.md`. Read both before any change.

## Content rules

- Use only the founder's real media. Until it exists, free stock (licence allowing commercial use) may be used as atmosphere only, never presented as the studio's own client work. Work tiles stay clearly labelled placeholders until real work is added.
- Never invent testimonials, awards, statistics, prices, client names or addresses.
- Do not show prices.
- Headlines and intro copy name Moncton only. A service-area line may mention surrounding New Brunswick.
- Contact: email link and Instagram button. Add a real form only if it truly delivers to the founder's inbox, with Cloudflare Turnstile spam protection. No public email exists yet (`business.email` is null).

## Design

- Follow `DESIGN.md` ("Midnight Gold") and use the tokens in `src/styles/tokens.css`. Do not hard-code new colours, sizes or timings.
- Fonts are self-hosted from `@fontsource-variable/*` packages. Never load fonts or scripts from third-party servers.
- Phone first. Respect `prefers-reduced-motion`. Keep contrast at WCAG AA or better.
- Avoid heavy gradients, pill-shaped or rounded cards and clutter.

## Skills to use

Use all relevant installed skills and say at the start of each stage which ones and why:

- **Impeccable** (`.agents/skills/impeccable`): process, product context, direction contract (`.impeccable/surfaces/`), detector (`impeccable detect --json <targets>`), audit and polish.
- **Taste Skill** (`.agents/skills/design-taste-frontend`): direction sheet (`node .agents/skills/design-taste-frontend/scripts/draw.mjs --show`), copy, `lint.mjs` and `inspect.mjs`. In this container run inspect with a no-sandbox Chromium wrapper via `CHROME_PATH`.
- **UI/UX Pro Max** (`.claude/skills/ui-ux-pro-max`): accessibility, touch and performance checklists.
- **Emil Kowalski design engineering** (`.agents/skills/emil-design-eng`): all motion and interaction feel.
- Where a skill rule conflicts with the brief, the brief wins; record the exception in `DESIGN.md` and mark the line `taste-skill-ignore`.

## Tech

- Astro (static output), plain CSS, a little vanilla TypeScript in `src/scripts/`. No heavy frameworks, no backend unless clearly needed.
- Commands: `npm install`, `npm run dev`, `npm run build` (output in `dist/`).
- Hosting: Cloudflare Pages (free tier), built from GitHub.
- SEO: unique title and description per page (passed to `Base.astro`), Open Graph tags, LocalBusiness structured data for Moncton, sitemap (auto), robots.txt, descriptive alt text, optimised images.
- Quality goal: Lighthouse mobile 90 or higher; semantic HTML; keyboard navigation; visible focus.

## How to work

- Work on a branch and open a pull request. Never merge, push to `main`, or rewrite history; the founder reviews and merges.
- One stage at a time, pausing for confirmation: 1) structure and design system, 2) Home, 3) remaining pages, 4) polish, SEO and accessibility, 5) deploy to Cloudflare Pages, 6) final check.
- Show screenshots (phone and desktop) after each stage. Screenshots only until Stage 5.
- Do not buy or subscribe to anything (domains, paid tools) without explicit approval. Never ask the founder to paste passwords or tokens into chat.
- Keep `DESIGN.md` updated when an approved design value changes.

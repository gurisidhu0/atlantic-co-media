---
name: Atlantic & Co. Media
description: Midnight Gold. Cinematic, premium, calm, like the first frame of one of our reels.
colors:
  ground: "#0B0B0C"
  panel: "#151517"
  panel-2: "#1C1C1F"
  gold: "#C9A24A"
  gold-light: "#E3C27A"
  ocean: "#0F2A3A"
  ink: "#F2EEE4"
  text: "#A8A397"
typography:
  display:
    fontFamily: "Playfair Display Variable, Georgia, serif"
    fontSize: "clamp(3.25rem, 11vw + 0.5rem, 10rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Playfair Display Variable, Georgia, serif"
    fontSize: "clamp(2.25rem, 4.6vw + 0.75rem, 4.75rem)"
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Playfair Display Variable, Georgia, serif"
    fontSize: "clamp(1.375rem, 1.4vw + 0.95rem, 2.125rem)"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter Variable, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 0.2vw + 1rem, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0em"
  small:
    fontFamily: "Inter Variable, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
  ui:
    fontFamily: "Inter Variable, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0em"
  menu-link:
    fontFamily: "Playfair Display Variable, Georgia, serif"
    fontSize: "clamp(2.25rem, 9vw, 3.5rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  wordmark-name:
    fontFamily: "Playfair Display Variable, Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.005em"
  wordmark-name-large:
    fontFamily: "Playfair Display Variable, Georgia, serif"
    fontSize: "1.75rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.005em"
  wordmark-sub:
    fontFamily: "Inter Variable, system-ui, sans-serif"
    fontSize: "0.5625rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.42em"
  wordmark-sub-large:
    fontFamily: "Inter Variable, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.42em"
rounded:
  base: "2px"
spacing:
  1: "4px"
  2: "8px"
  3: "12px"
  4: "16px"
  5: "24px"
  6: "32px"
  7: "48px"
  8: "64px"
  9: "96px"
  10: "128px"
  gutter: "clamp(16px, 3.2vw, 40px)"
  section-gap: "clamp(96px, 12vw, 200px)"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ground}"
    rounded: "{rounded.base}"
    padding: "13px 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.gold-light}"
    textColor: "{colors.ground}"
  button-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.base}"
    padding: "13px 24px"
    height: "48px"
  placeholder:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.text}"
    rounded: "{rounded.base}"
---

# Design System: Atlantic & Co. Media

Approved in Stage 1. The code source of truth is `src/styles/tokens.css`; if a value changes there, change it here too.

## Overview

**Midnight Gold.** The site should feel like the first frame of one of our reels: dark, warm, calm and confident. Near-black ground, cream headlines in Playfair Display with one italic gold word, quiet Inter body text, thin gold lines and a gold light trail drawn from the wave in the logo. Faint ocean-blue light sits behind some sections. A fine film grain covers everything.

Phone first: most visitors arrive from Instagram on a phone. Every layout is designed at 390px wide first, then widened.

**The big idea (Home):** the hero headline *is* the hero. "Your business, [showreel] *seen.*" The looping reel sits inside the sentence where a word would be. On a phone it is a 2:1 strip between the two lines; on desktop it is a cinematic letterbox strip on line two, running into "seen.".

## Colors

| Role | Token | Hex | Use |
|---|---|---|---|
| Ground | `--ground` | #0B0B0C | Page background |
| Panel | `--panel` | #151517 | Menus, placeholder tiles, form fields |
| Panel 2 | `--panel-2` | #1C1C1F | Hover step on a panel |
| Gold | `--gold` | #C9A24A | Buttons, hairlines, the light trail, the giant footer name |
| Light gold | `--gold-light` | #E3C27A | The italic accent word, hover states, focus ring, the trail's bright head |
| Ocean | `--ocean` | #0F2A3A | Soft background glows only. Never text, never a fill |
| Heading | `--ink` | #F2EEE4 | Headings and key lines |
| Body | `--text` | #A8A397 | Running text |

Thin lines use gold at 32% (`--hairline`) or cream at 10% (`--hairline-soft`, inside panels).

### Contrast (measured, WCAG 2.2)

| Pair | Ratio |
|---|---|
| Heading on ground | 17.0 : 1 |
| Body on ground | 7.8 : 1 |
| Body on panel | 7.3 : 1 |
| Body on ocean glow | 5.9 : 1 |
| Light gold on ground | 11.5 : 1 |
| Gold on ground | 8.2 : 1 |
| Ground on gold (button text) | 8.2 : 1 |

All pairs pass AA; most pass AAA.

### Named rules

- **Gold is for action and light.** The filled gold button is the one main action in any view. Gold also draws lines (hairlines, the trail). It is never a large background field.
- **One accent word.** Each headline has at most one italic light-gold word.
- **Glows stay soft.** Ocean glows are large, faint radial light behind a section. No hard-edged blobs, no glow on text or buttons.

## Typography

- **Playfair Display** (variable, roman and italic) for headings, statements and the wordmark. Weight 400; lighter reads better on dark.
- **Inter** (variable) for body text, buttons, navigation and labels.
- Both are installed from open-licence (SIL OFL) npm packages (`@fontsource-variable/*`) and served from our own site. No Google Fonts or other third-party font servers.

### Hierarchy (five sizes do the work)

| Step | Class | Size | Use |
|---|---|---|---|
| Display | `.t-display` | 52px phone → 160px desktop | Hero sentence, one per page |
| Title | `.t-title` | 36 → 76px | Section headings |
| Lead | `.t-lead` | 22 → 34px | Statements, card titles |
| Body | `.t-body` | 17 → 19px, line height 1.6 | Running text, max 62 characters per line |
| Small | `.t-small` | 14px | Captions, labels, legal |

Interface sizes outside the five steps: buttons and desktop menu links 16px (`ui`), phone menu links 36–56px (`menu-link`), and the wordmark lockup (18px / 28px name, 9px / 12px "MEDIA"), which reproduces the logo.

Display tracking -0.025em, titles -0.02em. Headlines are no longer than two lines at any width. The logo's spaced capitals "MEDIA" are part of the wordmark only; nowhere else uses small spaced capitals.

## Layout

- One page frame: max 1440px of content, equal outer margins of 16px (phone) to 40px (desktop) via `.frame`.
- Sections are separated by 96px (phone) to 200px (desktop) of space (`--section-gap`), and by the light-trail divider between major chapters.
- More space above a heading than below it.
- Breakpoints: 48em (768px, tablet layout) and 64em (1024px, full desktop navigation).

## Elevation & Depth

Depth comes from tone steps (ground → panel → panel 2), never from drop shadows. The one exception is the gold light trail's soft glow. The sticky header gains a solid ground and a faint bottom line only after the page scrolls.

## Shapes

Square-cut. Every button, frame, tile and panel uses a 2px radius. No pills, no rounded cards. Circles appear only in the logo.

## Components

### Buttons

- **Primary** (`.button`): gold fill, near-black text, Inter 600 at 16px, 48px tall (44px for `.button--small` in the header). Hover: light gold. Press: scales to 0.97 in 140ms.
- **Quiet** (`.button--quiet`): transparent with a gold hairline outline, cream text. Hover: gold outline, light-gold text.
- Optional arrow icon (`.button__arrow`) nudges 3px right on hover.
- Hover effects only on devices with a real pointer (`@media (hover: hover)`), so nothing sticks on a phone.

### Links

`.link`: cream text with a faint gold underline that strengthens to light gold on hover.

### Navigation

- Sticky header: monogram plus "Atlantic & Co. / MEDIA" wordmark on the left, six links in the centre (desktop), gold "Message us" button on the right. The current page gets a gold underline.
- Phones and tablets: the links move into a full-screen menu (a native `<dialog>`, so focus stays inside and Escape closes it). Links are set large in Playfair; the current page is italic light gold.
- Below 376px wide the wordmark text hides and the monogram remains.

### Placeholder tiles

`.placeholder`: panel colour with a faint outline and a centred label ("Reel / Placeholder until real work is added"). Every slot without real media uses one. They are always labelled and never disguised as real work.

### Signature: Light trail (`LightTrail.astro`)

The wave line from the logo, full width. A faint gold base line is always there. When the divider scrolls into view, a gold line draws across it from left to right over 1.8s, with a bright light-gold head riding its front edge; the head fades once it lands. Reduced motion: shown fully drawn, no travel.

### Hero reel (`HeroReel.astro`)

The media strip inside the hero sentence. Phone: a 2:1 strip between "Your business," and "seen.". Tablet and desktop: a letterbox strip 0.8em tall on line two, running into "seen.". It opens like a shutter on load (1.2s), with the picture settling from 1.12 scale.

- With a video: `<HeroReel video="/media/showreel.mp4" poster="/media/showreel.jpg" />`. Muted, looping, plays inline, pauses off screen, never autoplays under reduced motion.
- Without one (now): a title card of the logo's gold wave lines drifting slowly over ocean light, labelled "Showreel coming soon". It is a placeholder, not footage.

### Footer

Invitation headline with Message us button, monogram wordmark, links, Instagram, email (when set), "Moncton, New Brunswick", copyright and privacy link. The name "Atlantic & Co." returns in gold across the full width at the very bottom, cropped by the page edge.

## Motion

| Token | Value | Use |
|---|---|---|
| `--ease-out` | cubic-bezier(0.22, 1, 0.36, 1) | Entrances and UI under 600ms |
| `--ease-expo` | cubic-bezier(0.16, 1, 0.3, 1) | Reveals of 800ms+, the trail draw |
| `--ease-in-out` | cubic-bezier(0.76, 0, 0.24, 1) | Wipes, the image shutter, menus |
| `--ease-soft` | cubic-bezier(0.33, 1, 0.68, 1) | Slow scale and drift on pictures |
| `--t-press` | 140ms | Button press |
| `--t-hover` | 180ms | Colour changes on hover |
| `--t-ui` | 240ms | Menus, underlines |
| `--t-reveal` | 900ms | Fade-ups |
| `--t-open` | 1200ms | Image shutter openings |
| `--t-trail` | 1800ms | The light trail |
| `--stagger` | 80ms | Between items of one section |
| `--rise` | 24px | Fade-up travel distance |

Rules:

- **Slow fade-ups**: section parts (heading, then text, then picture) rise 24px and fade in, once, as they enter the screen, staggered 80ms. Mark with `data-reveal` and `style="--i:N"`.
- **Signature move**: the hero reel strip opens like a shutter (clip-path from one edge, picture settling from 1.12 scale) on load. Used once.
- **Feedback**: every button and link responds on press and hover.
- **No** bounce, no preloaders, no scroll hijacking, no custom cursor, nothing moving across text being read.
- **Content is never hidden without JavaScript**: reveals only apply when the `js` class is on the page.
- **prefers-reduced-motion**: no travel, scale, grain movement or trail animation; everything is shown in its finished state.

## Texture

Film grain: a 128px noise tile (`public/textures/grain.webp`) over the whole page at 7% opacity, overlay blend, shifting in 6 steps per 0.9s; static under reduced motion.

## Do's and Don'ts

### Do

- Keep one gold filled button per view, and make it "Message us" wherever possible.
- Use real media. Until it exists, use clearly labelled placeholders or stock used as atmosphere only.
- Write in Canadian spelling, plain and warm.
- Check every new colour pair against the contrast table.

### Don't

- No heavy gradients, pill-shaped or rounded cards, glass blur panels, drop shadows on resting elements, emoji or icon-topped card rows.
- No small labels above headings (eyebrows), no 01/02/03 numbering.
- No invented testimonials, awards, statistics, prices, client names or addresses.
- Don't present stock photos or video as our own client work.

## Logo files

- `src/assets/brand/monogram.png`: transparent monogram, made from the supplied black-background JPEG (`docs/brand-source/monogram-on-black.jpg`). Astro serves it as optimised WebP.
- Favicons in `public/` (32px uses the "A&Co." letters only, because the full circle is unreadable at that size).
- `public/og-default.jpg`: link-sharing image.
- The supplied wordmark (`docs/brand-source/wordmark-white-on-white.jpg`) is white on white and cannot sit on the dark site; the wordmark is set in Playfair Display and Inter until a transparent PNG or SVG original is supplied.

## Skill exceptions

The design skills in this repo ban some things this brief asks for. The brief wins. These are approved, deliberate exceptions, marked in code with `taste-skill-ignore` comments:

- Gold hairlines and thin outlines (drawn as 1px lines or inset shadows).
- Ocean-blue radial glows.
- The light trail's soft glow.
- One italic gold accent word per headline.
- The spaced capitals "MEDIA" in the wordmark.
- Playfair Display, which Impeccable lists as an overused face, is pinned by the brief.

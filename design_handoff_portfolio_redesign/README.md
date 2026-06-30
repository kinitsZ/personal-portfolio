# Handoff: Portfolio Redesign — Editorial Direction

## Overview
A full visual redesign of Zymer Fernando's personal portfolio (single-page). The new direction is **refined editorial**: large serif display type, generous whitespace, a calm near-monochrome palette with a single cool-blue accent, a **light mode (default) + dark mode**, tasteful scroll-reveal animations, and a **unique left side-rail navigation** with section dots that expand into labels on hover.

The same content as the current site is preserved (About, Tech Stack, Work, Projects, Education, Awards, Certifications, Contact) with sharpened copy, plus one new element: a large editorial **pull-quote band** ("THE GOAL").

## About the Design Files
The file in this bundle — `Zymer Fernando — Portfolio.dc.html` — is a **design reference built in plain HTML/CSS/JS**. It is a prototype showing the intended look, layout, and behavior. **It is not production code to copy verbatim.** The `.dc.html` format wraps the markup in a small custom runtime (`<x-dc>`, `<helmet>`, `<sc-for>`, a `Component` logic class) — ignore that wrapper. What matters is the HTML structure, the CSS in the `<helmet><style>` block, and the small amount of behavior in the logic class.

**Your task:** recreate this design inside the existing **Next.js + TypeScript + Tailwind CSS v4 + shadcn/ui** codebase at `portfolio/`, using its established patterns. Do **not** introduce the `.dc.html` runtime into the repo.

## Fidelity
**High-fidelity.** Final colors, typography, spacing, and interactions are all specified below. Recreate the UI pixel-accurately using the repo's existing libraries (Tailwind, lucide-react icons, next-themes). Where the design uses a value not in the current Tailwind theme, add it as a CSS variable in `globals.css` (the repo already drives theming through CSS variables there).

---

## How this maps onto the existing repo (`portfolio/`)

The repo is already set up for most of this. Reuse, don't rebuild:

| Concern | Existing in repo | What to do |
|---|---|---|
| Dark/light mode | `components/theme-provider.tsx` (next-themes) + `components/ModeToggle.tsx` + `.dark` variant in `globals.css` | Keep using `next-themes`. The design's localStorage toggle is just the prototype's stand-in — wire the rail's theme button to `useTheme()` from next-themes instead. Light is already the default. |
| Page content | `app/page.tsx` | Rewrite this file's JSX to the new editorial layout + sections below. |
| Navigation | `components/NavBar.tsx` (currently an empty stub) | Replace its body with the **side-rail nav** (spec below). |
| Section components | `AwardsTimeline.tsx`, `CertCarousel.tsx`, `ProjectCard.tsx`, `StackBar.tsx`, `LiveClock.tsx`, `ProfilePic.tsx` | Restyle to match. Awards data already lives in `AwardsTimeline.tsx` — reuse it. Cert titles are listed below. |
| Theme tokens | `:root` / `.dark` blocks in `app/globals.css` | Add the new token values (below) here. |
| Fonts | `app/layout.tsx` | Swap to the editorial pairing (below) via `next/font/google`. |
| Images | `public/self-images/`, plus the new copies in this bundle | Use the studio portraits — see Assets. |
| Resume | `public/FERNANDOZYMER_RESUME.pdf` | Link from the hero CTA + contact card. |

---

## Design Tokens

The design uses **OKLCH** colors (the repo's `globals.css` already uses OKLCH — keep that). Define these on the app root and override under `.dark`.

### Light mode (default)
```
--bg:         oklch(0.981 0.004 255)   /* cool near-white page */
--bg2:        oklch(0.963 0.006 255)   /* cards, chips, rail */
--ink:        oklch(0.255 0.018 262)   /* primary text */
--muted:      oklch(0.52 0.014 262)    /* secondary text */
--faint:      oklch(0.72 0.012 262)    /* tertiary / dates */
--line:       oklch(0.9 0.007 262)     /* borders, dividers */
--accent:     oklch(0.55 0.15 256)     /* cool blue  (~ #3b63d6) */
--accent-soft:oklch(0.95 0.03 256)     /* tints, glow */
--band-bg:    oklch(0.965 0.018 256)   /* quote band background */
--rail-bg:    oklch(1 0 0 / 0.66)      /* translucent rail */
--shadow:     0 24px 60px -28px oklch(0.4 0.05 262 / 0.28)
```

### Dark mode
```
--bg:         oklch(0.178 0.012 262)
--bg2:        oklch(0.222 0.014 262)
--ink:        oklch(0.935 0.006 262)
--muted:      oklch(0.7 0.012 262)
--faint:      oklch(0.5 0.014 262)
--line:       oklch(0.32 0.013 262)
--accent:     oklch(0.7 0.14 256)      /* slightly brighter blue */
--accent-soft:oklch(0.3 0.06 256)
--band-bg:    oklch(0.215 0.018 258)
--rail-bg:    oklch(0.24 0.014 262 / 0.7)
--shadow:     0 28px 70px -28px oklch(0 0 0 / 0.6)
```

Success/"available" green (both modes): dot `oklch(0.62 0.18 150)`, ping `oklch(0.7 0.17 150)`.

### Typography
Three families:
- **Display serif** — `Instrument Serif` (weight 400 + italic). Used for: hero name, section titles, big numbers, the pull-quote, project titles. Large, calm, editorial.
- **Body sans** — `Hanken Grotesk` (400/500/600/700). Used for: paragraphs, labels, buttons, list rows.
- **Mono** — `JetBrains Mono` (400/500). Used for: kicker labels, section numbers (`01`, `02`…), dates, small caps tags, footer.

Load via `next/font/google` in `app/layout.tsx` and expose as CSS variables (`--font-serif`, `--font-sans`, `--font-mono`).

Type scale (use `clamp()` for fluid sizing):
```
hero name:      clamp(58px, 9.5vw, 128px)  serif, line-height .86, letter-spacing -.01em
section title:  clamp(30px, 4.4vw, 48px)   serif, line-height .95
pull-quote:     clamp(30px, 5.4vw, 62px)   serif, line-height 1.1, max-width 18ch
about lede:     clamp(19px, 2.3vw, 26px)   serif-accented, line-height 1.5
hero lede:      clamp(17px, 1.9vw, 21px)   sans, line-height 1.55
big numbers:    30px serif
body:           14–16px sans, line-height 1.5–1.6
kicker / mono:  10.5–12px, letter-spacing .12–.26em, UPPERCASE
```

### Spacing / radius / misc
```
content max-width: 920px, centered
desktop page padding: 0 28px 0 112px  (left pad reserves the side rail)
section vertical padding: 64px
radius: cards 14–18px, chips/buttons 999px (pill), rail 30–34px, icons 10–11px
reveal animation: opacity 0→1 + translateY(22px)→0, 0.75s cubic-bezier(.2,.65,.2,1)
hover lift: translateY(-2px to -4px), 0.25s ease
```

---

## Screens / Views

Single scrolling page. Sections in order, each with a consistent header (`mono section number` + `serif title` + `thin rule line` filling remaining width). Each section has `scroll-margin-top: 48px` and a `data-sec="<id>"` attribute used by the rail's active-state observer.

### 0. Side-Rail Navigation (fixed, persistent)
- **Position:** `fixed`, left `22px`, vertically centered (`top:50%; translateY(-50%)`), `z-index:60`.
- **Container:** vertical flex, translucent `--rail-bg` with `backdrop-filter: blur(12px)`, `1px var(--line)` border, `--shadow`, radius `34px`, padding `12px 9px`.
- **Top:** small round **avatar** (34px, `images/avatar.jpg`, object-position 50% 18%), links to `#top`, scales to 1.08 on hover. Then a short `18px` divider line.
- **Middle:** one **dot link per section** (9 total: Home, About, Stack, Work, Projects, Education, Awards, Certifications, Contact). Each is a 24×24 hit area containing a 7px dot (`--faint`). Hover → dot turns `--ink`; **active section** → dot turns `--accent` and `scale(1.55)`. A **label** (section name) sits absolutely to the right, hidden by default (`opacity:0; translateX(-5px)`), fading in on hover as a small pill (`--bg2` bg, `--line` border, radius 7px, `--shadow`).
- **Bottom:** divider, then **theme toggle button** (30px round, `--bg2`, `--line` border). Hover rotates 15° and turns accent. **Wire this to `next-themes` `useTheme()`** — sun icon when dark (switch to light), moon icon when light (switch to dark). lucide-react `Sun` / `Moon`.
- **Active tracking:** `IntersectionObserver` over all `[data-sec]` sections with `rootMargin: '-45% 0px -50% 0px'`; the intersecting section sets the active id.
- **Mobile (≤860px):** rail becomes a **horizontal pill docked bottom-center** (`left:50%; bottom:16px; translateX(-50%); flex-direction:row`); labels hidden; avatar + dots + toggle in a row. Add `padding-bottom:110px` to the page so content clears the dock.

### 1. Hero (`#top`)
- **Layout:** 2-col grid `1fr 320px`, gap 48px, vertically centered. `padding-top:120px`. Collapses to 1 col on mobile with the image moved above text (`order:-1`, max-width 300px).
- **Left column:**
  - Kicker (mono): a small accent dot + `FULL-STACK DEVELOPER · DATA SCIENCE`.
  - Hero name (serif, huge): `Zymer` on line 1 (`--ink`), `Fernando` on line 2 (`--faint`).
  - Lede (sans): "I build **full-stack web applications** where speed, security, and clean architecture are the foundation — not the afterthought." (bold spans in `--ink`, rest `--muted`, max-width ~30ch.)
  - Meta row: green **"Available for work"** with animated ping dot; three social icons (LinkedIn, GitHub, Facebook) that lift + turn accent on hover.
  - CTAs: filled pill **"Get in touch"** → `#contact` (bg `--ink`, text `--bg`, arrow icon); outline pill **"Download CV"** → resume PDF (border `--line`, hover accent).
  - Scroll cue (mono): `SCROLL TO EXPLORE` with a 38px track and a small accent bar that animates left→right (2.4s loop).
- **Right column (figure):** tall portrait `images/hero.jpg` in a `3 / 4.1` aspect frame, radius 16px, `1px --line` border, `--shadow`, `object-position 50% 22%`, subtle `saturate(.96)`. Overlays: a pill tag top-left (`PH · 2026`, accent text), a bottom gradient scrim, and a mono caption `ZYMER FERNANDO` bottom-left in white.

### 2. About (`#about`) — header number `01`
- 2-col grid `1.55fr 1fr`, gap 44px, items start. Collapses to 1 col on mobile (image max-width 300px).
- **Left:** large serif-accented **lede** paragraph. Plain text in `--ink`; the phrase "fast, secure, and calm" rendered in **accent italic serif** (slightly larger, 1.12em); the closing sentence in `--faint`. Copy:
  > "I design and build full-stack systems that stay *fast, secure, and calm* under pressure. Lately I've been drawn to machine learning and data science — fascinated by how good data turns an ordinary product into an intelligent one. Curious by default, I build things that work beautifully and actually matter."
- **Below lede:** a fact row (3 items, gap 34px), each a big serif number + mono label: `3+ YEARS BUILDING`, `10+ PROJECTS & COMPS`, `5 CERTIFICATIONS`.
- **Right:** seated portrait `images/portrait.jpg`, `4 / 4.4` aspect, radius 14px, `--line` border, `--shadow`, `object-position 50% 16%`.

### 3. Tech Stack (`#stack`) — `02`
- Wrapping flex of **pill chips** (gap 10px). Each chip: padding `9px 16px`, `1px --line` border, radius 999px, `--bg2` bg, `--muted` text. Hover: `translateY(-3px)`, border `--accent`, text `--ink`.
- Items (in this order): Next.js, React, Vue.js, Node.js, TypeScript, JavaScript, TailwindCSS, HTML5, CSS3, Python, PostgreSQL, Supabase, Vercel, Git & GitHub, Figma.

### 4. Work (`#work`) — `03`
- A single list **row**: left = 44px rounded icon tile (`--bg2`, `--line` border, accent briefcase icon) + title **"Junior Web Developer Intern"** (`--ink`, 16px/600) and subtitle **"Circuit Solutions Inc."** (`--muted`, 13px). Right = date `Mar 2026 — Jun 2026` (`--faint`) and a green **"Current"** badge with ping dot.
- Row pattern: `flex justify-between`, padding `22px 0`, `1px --line` top border (first row no border).

### 5. Projects (`#projects`) — `04`
- One **project card**: grid `200px 1fr`, radius 18px, `--bg2` bg, `--line` border, overflow hidden. Hover: `translateY(-4px)` + `--shadow`. Collapses to stacked on mobile.
  - Left: image panel (`--bg` bg, right border) holding the WikaWonders banner (`images/wikawonders.svg`).
  - Right body: mono tag `EDUCATIONAL PLATFORM`; serif title **"WikaWonders Kids"** (22px); description (`--muted`, max-width 54ch): "An interactive learning platform helping Filipino children pick up language through playful games and activities — built to be engaging, accessible, and genuinely fun."; two underline links **Live site** (`https://wikawonderskids.com`) and **Source** (`https://github.com/kinitsZ/wikawonders-kids-2025`), each with an external-arrow icon, hover accent.

### 6. Education (`#education`) — `05`
- Single row (same row pattern as Work): graduation-cap icon tile + **"BS Computer Science — Data Science"** + **"Lyceum of the Philippines University — Batangas"**. Right: `2022 — Aug 2026` and "Expected graduation".

### 7. Awards (`#awards`) — `06`
- **Vertical timeline**: a `1px --line` rail on the left; each item has a 9px dot (`--bg` fill, 2px `--faint` border, turns `--accent` on hover), a title (15px/600 `--ink`), an event line (13px `--muted`), and a mono date (11.5px `--faint`). Items (reuse existing `AwardsTimeline.tsx` data):
  1. **3rd Place — Programming Competition** · LPU-B Technovation · OCT–DEC 2024
  2. **6th Place — Programming Competition** · DataBiz Conference 2024 · 2024
  3. **Finalist — CODE International 2024** · Competition of Outstanding Creativity and Exploration · Brawijaya University, Indonesia · 2024
  4. **Participant — FACE-IT** · Filkom UB Academic and Cultural Exchange on Information Technology · Indonesia · 2024

### 8. Certifications (`#certs`) — `07`
- List of **cert rows**: mono index (`01`…) in accent + title (15.5px/500 `--ink`) + mono tag `CERTIFIED` (`--faint`). Each row `1px --line` top border; on hover the row shifts right (`padding-left:8px`, 0.3s). Titles (PNGs exist in `public/certification/`):
  1. Data Visualization with Python
  2. Introduction to Software Engineering
  3. Introduction to HTML, CSS & JavaScript
  4. Java Programming for Beginners
  5. Excel Associate

### 9. Pull-Quote Band (new) — between Certs and Contact
- **Full-bleed band** (breaks out of the centered column: `position:relative; left:50%; width:100vw; margin-left:-50vw`), `--band-bg` background, padding `128px 28px`, centered inner max-width 1000px.
- Large faded serif quote mark `"` (120px, accent, opacity .22) behind the text.
- Mono kicker `THE GOAL` (accent, letter-spacing .26em).
- Serif quote (clamp 30–62px, max-width 18ch): **"I want to build the systems a *million people* rely on — without ever thinking about them."** ("million people" in accent italic.)
- Mono attribution: `— ZYMER FERNANDO, THE PRINCIPLE I CODE BY`.

### 10. Contact (`#contact`) — `08`
- 2-col grid of **contact cards** (1 col on mobile), gap 12px. Each card: 38px rounded icon tile + mono label + value (`--ink`/600). Hover: lift + accent border.
  - Email → `mailto:fernandozymer@gmail.com`
  - Phone → `tel:+639693695916` → "+63 969 369 5916"
  - LinkedIn → `https://www.linkedin.com/in/zymer-fernando-24baa5259/` → "zymer-fernando"
  - GitHub → `https://github.com/kinitsZ` → "kinitsZ"
  - Facebook → `https://www.facebook.com/zymer.fernando.2024` → "zymer.fernando.2024"
  - **Resume (filled card** — `--ink` bg, inverted text): download `FERNANDOZYMER_RESUME.pdf` → "Download CV"

### 11. Footer
- Top `1px --line` border, centered. Mono name `ZYMER FERNANDO` (letter-spacing .28em, `--muted`); meta line `© <year> · Designed & built with intent · Batangas, Philippines`; three social icons.

---

## Interactions & Behavior
- **Scroll reveal:** elements with a `reveal` class start at `opacity:0; translateY(22px)` and transition to visible (0.75s, `cubic-bezier(.2,.65,.2,1)`) when they enter the viewport. Use **one `IntersectionObserver`** (`threshold:0.12`, `rootMargin:'0px 0px -7% 0px'`), unobserve after revealing. **Important:** only arm the hidden state from JS after mount (so SSR/no-JS content stays visible), and **skip entirely under `prefers-reduced-motion: reduce`**.
- **Active nav dot:** second `IntersectionObserver` over `[data-sec]`, `rootMargin:'-45% 0px -50% 0px'`, sets the active section.
- **Smooth scroll:** rail links are anchor jumps (`href="#about"`) with `html { scroll-behavior: smooth }`. Do **not** use `Element.scrollIntoView()` if you reimplement programmatically.
- **Theme toggle:** through `next-themes`; the whole app cross-fades via `transition: background-color .5s, color .5s` on the root.
- **Hover states:** chips/cards lift 2–4px; social icons lift + accent; rail dots scale/recolor; cert rows nudge right; theme button rotates 15°.
- **Looping micro-animations (cheap, transform/opacity only):** the "Available" ping dot and the hero scroll-cue bar. Disable both under reduced-motion.
- **Performance:** all animation is `transform`/`opacity` only; use observers, not scroll listeners. No layout thrash.

## State Management
- `theme` — owned by `next-themes` (`ThemeProvider` already in the tree). Light is default.
- `activeSection` — local state in the NavBar component, driven by the IntersectionObserver.
- No data fetching. All content is static (can live in small typed arrays/consts, matching the current repo style — e.g. how `AwardsTimeline.tsx` holds its `awards` array).

## Responsive Behavior
- Desktop ≥861px: side rail at left, content column centered with `112px` left padding.
- ≤860px: rail → bottom horizontal dock (labels hidden); hero, about, project cards, and contact grid all collapse to single column; page gains bottom padding for the dock; hero image moves above hero text.

## Assets
Included in this bundle under `assets/` (originals are the user's studio portraits, also in `public/self-images/`):
- `hero.jpg` — standing hand-in-pocket portrait → hero figure.
- `portrait.jpg` — seated chin-on-hand portrait → About figure.
- `avatar.jpg` — head/shoulders → rail avatar (and any small avatar use).
- `wikawonders.svg` — project banner (same as repo `public/cover_banner.svg`).
- Resume: `public/FERNANDOZYMER_RESUME.pdf` (already in repo).
- Cert images: `public/certification/*.png` (already in repo) — optional if you want a richer cert section than the text rows.
- Icons: use **lucide-react** (already a dependency) — Sun, Moon, Briefcase, GraduationCap, Mail, Phone, Download, ArrowRight, ArrowUpRight, etc. Social glyphs (LinkedIn/GitHub/Facebook) are inline SVG in the reference.

## Files
- `Zymer Fernando — Portfolio.dc.html` — the full design reference (open in a browser to see it live; all CSS is in the `<helmet><style>` block, all behavior in the `Component` class near the bottom).
- `assets/` — image assets used by the design.

### Suggested repo edit list
1. `app/layout.tsx` — load Instrument Serif + Hanken Grotesk + JetBrains Mono via `next/font/google`; expose as CSS vars.
2. `app/globals.css` — replace the grayscale tokens with the OKLCH token sets above (`:root` + `.dark`); add `.reveal` transition utilities and the two keyframes (`ping`, scroll-cue).
3. `components/NavBar.tsx` — implement the side rail (avatar, section dots + hover labels, theme toggle via `useTheme`, IntersectionObserver active tracking, mobile dock).
4. `app/page.tsx` — rebuild the section layout and copy per the spec.
5. Restyle `AwardsTimeline.tsx`, `ProjectCard.tsx`, `StackBar.tsx`, `CertCarousel.tsx`/cert list to match; keep their existing data.
6. Add the new pull-quote band (new component or inline in `page.tsx`).

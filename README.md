# Scotland — FIFA World Cup 2026 (v2)

A rewrite of [scotland-wc2026.vercel.app](https://scotland-wc2026.vercel.app) — the same site, same content, same design language, rebuilt on a modern React stack as a learning exercise.

The original lives at [github.com/solnicol/Scotland-WC2026](https://github.com/solnicol/Scotland-WC2026) and stays untouched as a reference and fallback. This repo is the parallel implementation.

## What changed (and what didn't)

**Same:** OKLCH palette discipline (single navy hue + heraldic gold accent), the seamless gold-gleam animation on the SCOTLAND wordmark, the data-driven easter eggs (long-press on McTominay, McLean, Tierney for the famous Hampden goals), timezone-aware kickoffs, iOS-safe calendar handoff, Google Maps satellite venue links.

**Different:** structure. The original is one self-contained HTML file; this is a Next.js App Router project with a component tree, typed data layer, and Motion driving the interactive transitions.

## Stack

- **Next.js 16** App Router (mostly static, prerendered output)
- **Tailwind v4** — CSS-first config via `@theme`, native OKLCH colour tokens
- **Motion** (`motion/react`) — fixture flag reveal, easter-egg overlay clip-path animation, back-to-top fade
- **TypeScript** — strict types for the squad, fixtures, and egg data
- **Geist** font via `next/font/google`

## Architecture notes

A few decisions worth recording:

- **Data lives in `lib/data.ts`.** SQUAD (4 units, 26 players), FIXTURES, EGGS, and CLUB_COLOURS gradients are typed constants. Adding a new easter egg, a transfer, or a fixture change is a one-line edit in one file.
- **One Context, one piece of global state.** `EggProvider` exposes `{ active, open, close }` so the long-press handler on any player row can fire the global overlay. No state libraries — `useState` + Context is the right size.
- **Server components by default; `'use client'` only where it earns it.** Masthead, Squad section, Unit, and Flag SVGs are server-rendered. Player rows, fixture cards, the overlay, and the back-to-top button opt into client because they need interactivity, browser APIs (`Intl.DateTimeFormat`, scrollY), or Motion.
- **The gleam stays pure CSS.** Motion is suited to discrete state transitions, not infinite render loops. The seamless `background-position` animation lives in `globals.css` with a `prefers-reduced-motion` fallback.
- **Calendar handoff is the same trick as v1.** Plain `<a href="/scotland-v-brazil.ics">` links served with `Content-Type: text/calendar` via `vercel.json` — iOS Safari hands off to the Calendar app, no blob URL workaround.

## Development

```bash
npm run dev    # http://localhost:3000
npm run build  # static build
npm run lint
```

## Project layout

```
app/
  layout.tsx, page.tsx, globals.css
components/
  Masthead.tsx, Fixtures.tsx, FixtureCard.tsx
  Squad.tsx, Unit.tsx, PlayerRow.tsx
  Flag.tsx, BicycleOverlay.tsx, BackToTop.tsx
lib/
  data.ts, egg-context.tsx
public/
  haiti-v-scotland.ics, scotland-v-morocco.ics, scotland-v-brazil.ics
vercel.json     # text/calendar Content-Type header rule
```

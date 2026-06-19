# Plan 007 — Site accessibility + SEO + build robustness

**Written against commit `ad72b5a`.** Priority P2. Effort M. All changes confined to `site/`.

## Why this matters

The site is the public face of the project. Concrete, verified gaps: (1) secondary text fails WCAG AA contrast; (2) `prepare-content.mjs` copies files with no error handling and a per-directory (not per-file) counter, so a partial copy reports success; (3) no `robots.txt` / `sitemap`, hurting discoverability of ~104 pages; (4) generated pages lack canonical URLs and `og:image`; (5) SVG figures aren't programmatically associated with their captions for screen readers. None of these are visual redesigns (the figures were already redesigned) — they are correctness/a11y/SEO hardening.

## Scope

**In scope — `site/` only:**
- `site/app/globals.css` (contrast)
- `site/scripts/prepare-content.mjs` (fail-loud + per-file counts)
- `site/public/robots.txt` (NEW)
- `site/app/sitemap.ts` (NEW — Next.js metadata route)
- `site/app/layout.tsx` and `site/app/manual/[slug]/page.tsx` (canonical + og:image metadata)
- `site/components/figures/*.tsx` + the `FigurePlate` wrapper (aria-describedby)
- `site/lib/markdown.ts` (rel="noopener noreferrer")
- optionally `site/public/og-image.svg` or `.png` (NEW, simple branded card) if cheap

**Out of scope:** `next.config.mjs` CSP/headers/redirects (deferred — Vercel handles defaults), any wiki content, `scripts/`, `book/`, `.github/`. Do NOT change the figure DESIGNS — only add aria wiring.

## Current state (verified)

- `site/app/globals.css`: `--paper: #f5f1e6` (L9); `--ink-400: #978e7a` (L17), `--ink-500: #7a7261` (L16), `--ink-600: #615a4b` (L15). `--ink-400` on paper ≈ 2.9:1 and `--ink-500` ≈ 4.2:1 — both FAIL AA (4.5:1). Used for secondary labels at `.toc-heading .ref` (~L337), `.page-toc h2` (~L550), `.pager .dir` (~L650), `.page-toc-mobile summary` (~L594). `--ink-600` (#615a4b) on paper ≈ 6:1 (passes).
- `site/scripts/prepare-content.mjs`: copies root `*.md` then `cpSync` of `domains/`+`notes/`; counter `n` increments once per directory (L51), not per file; copies use no try/catch.
- `site/public/` contains only `fonts/` — no `robots.txt`, no sitemap route.
- Metadata: `site/app/layout.tsx` sets `metadataBase` + openGraph but no `og:image`; `site/app/manual/[slug]/page.tsx` `generateMetadata()` sets title/description/openGraph, no `canonical`. Production host: `https://universal-physics.khe.money`.
- Figures: `site/components/figures/Fig*.tsx` use `<svg role="img"><title>…</title>`; captions are in a `<figure>/<figcaption>` wrapper (likely `FigurePlate`) but not linked via `aria-describedby`.
- `site/lib/markdown.ts` ~L40 sets external-link `rel="noreferrer"` (no `noopener`).

## Steps

1. **Contrast (globals.css).** For the secondary-text rules currently using `--ink-400` (and the `--ink-500` cases that fail AA for body-size text), switch to `--ink-600` (or `--ink-700` if defined). Do NOT change primary body text or decorative rules that are clearly non-text. Keep the change minimal and targeted to the failing selectors named above. Re-check: `#615a4b` on `#f5f1e6` ≥ 4.5:1.
2. **prepare-content.mjs fail-loud + counts.** Wrap each `copyFileSync`/`cpSync` in try/catch; on error `console.error` the offending path + message and `process.exit(1)`. Move the counter so it reflects actual files copied per directory; print e.g. `copied 21 root, 74 notes, N domains = T files`. Preserve the existing "no wiki sources → use bundled snapshot" early-exit behavior (L15-29) exactly.
3. **robots.txt (`site/public/robots.txt`).** Allow all; point `Sitemap: https://universal-physics.khe.money/sitemap.xml`.
4. **sitemap (`site/app/sitemap.ts`).** Export the default Next.js `MetadataRoute.Sitemap` listing `/`, `/about`, `/contribute`, and every `/manual/<slug>` — derive the slug list from `site/lib/manifest.ts` (import the same FLAT/CHAPTERS source the `[slug]` route uses for `generateStaticParams`, so the two stay in lockstep). Use the production base URL.
5. **canonical + og:image.** In `manual/[slug]/page.tsx` `generateMetadata`, add `alternates: { canonical: new URL('/manual/' + slug, base).toString() }`. In `layout.tsx` (and inherited by pages) add an `openGraph.images` entry pointing at a static card. If you create `site/public/og-image.png` (1200×630) keep it simple/on-brand (paper + ink-blue, the title); if producing a PNG is not feasible in this environment, create `site/public/og-image.svg` and reference it, or SKIP og:image and note it — canonical is the higher-value half.
6. **aria-describedby (figures).** Give each `<figcaption>` a stable unique `id` (e.g. derived from the figure number) and add `aria-describedby="<that id>"` to the corresponding `<svg>`. Centralize in `FigurePlate` if captions flow through it.
7. **markdown.ts.** Change external-link `rel` from `"noreferrer"` to `"noopener noreferrer"`.
8. **Verify build.** Run `npm run build` in `site/`. It MUST succeed (typecheck + static export). Confirm `sitemap.xml` and `robots.txt` are emitted. Do NOT deploy (the integrator deploys).

## Done criteria

- `cd site && npm run build` exits 0; build output lists the sitemap route; `site/public/robots.txt` exists.
- The named failing selectors no longer reference `--ink-400`/`--ink-500`; spot-check one computed pair ≥ 4.5:1.
- `prepare-content.mjs` exits 1 (with a named path) if a copy throws; prints accurate per-directory file counts on success.
- `manual/[slug]` pages emit a `<link rel="canonical">`; each figure `<svg>` has `aria-describedby` resolving to its caption id.
- No change to figure visuals; no new heavyweight dependency.

## Test plan

After build, grep the exported `out/`/`.next` (or use the build log) to confirm the sitemap contains a `/manual/...` entry and `robots.txt` is present. Manually confirm one figure's `aria-describedby` id matches its `figcaption` id.

## Maintenance note

The sitemap is derived from the manifest, so new pages appear automatically. The contrast tokens are now AA-safe; keep secondary text at `--ink-600` or darker. Canonical host is hard-coded to the production alias — update if the domain changes.

## Escape hatches

- If `og-image` generation isn't feasible, ship everything else and leave a `TODO(og-image)` comment — do not block the plan on an image asset.
- If a contrast change visibly harms the intended hierarchy somewhere, prefer `--ink-600` over `--ink-700` and stop; do not restyle layout.
- Do NOT touch `next.config.mjs` (out of scope) or alter figure geometry.

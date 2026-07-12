# universal-physics.khe.money — site

Next.js (App Router, TypeScript) site for the Universal Physics research wiki.
Design: the "night ledger" system, original to this project — one warm charcoal
surface ramp, a single terracotta accent, and SVG figures printed as ivory
plates on the dark page. Code MIT; rendered content CC BY-SA 4.0.

## How it works

- `scripts/prepare-content.mjs` (runs automatically via the `prebuild` /
  `predev` npm hooks) copies the wiki's markdown (`../*.md`, `../domains`,
  `../notes`) into `site/content/` (gitignored) so the build is self-contained.
- `lib/manifest.ts` is the numbered manual structure (chapters 1–17) and the
  internal-link map; `lib/markdown.ts` is the unified/remark/rehype pipeline
  (gray-matter frontmatter strip, KaTeX math, epistemic-tag chips, .md-link
  rewriting, responsive table wrapping).
- Figure plates are hand-coded SVG in `components/figures/`. They consume the
  legacy role tokens (`--ink-*`, `--blue`, `--ochre`, `--paper-*`), which
  `.figure-plate` re-scopes to a light "printed plate" palette — so the figure
  components never need theme-awareness.
- Fonts (all next/font/google): Fraunces (display), Source Serif 4 (body),
  Geist Mono (labels).

## Develop / build

```sh
npm install
npm run dev    # http://localhost:3000
npm run build  # production build (fully static)
```

## Deploy (Vercel)

The GitHub repo is connected to the Vercel project (`khemani/universal-physics`),
so pushes to `main` deploy to production automatically. The repo-root
`vercel.json` points the build at `site/` (`installCommand` / `buildCommand` /
`outputDirectory`), which also makes the git build read the live wiki sources
from the repo root during `prepare-content`. Manual deploys still work with
`vercel deploy --prod --yes` from either the repo root or `site/`.

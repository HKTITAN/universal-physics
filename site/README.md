# universal-physics.khe.money — site

Next.js (App Router, TypeScript) site for the Universal Physics research wiki.
Design: technical-reference-manual aesthetic, inspired by Dan Hollick's
[Making Software](https://www.makingsoftware.com) (inspiration only — all copy,
figures, and assets are original). Code MIT; rendered content CC BY-SA 4.0.

## How it works

- `scripts/prepare-content.mjs` (runs automatically via the `prebuild` /
  `predev` npm hooks) copies the wiki's markdown (`../*.md`, `../domains`,
  `../notes`) into `site/content/` (gitignored) so the build is self-contained.
- `lib/manifest.ts` is the numbered manual structure (chapters 1–17) and the
  internal-link map; `lib/markdown.ts` is the unified/remark/rehype pipeline
  (gray-matter frontmatter strip, KaTeX math, epistemic-tag chips, .md-link
  rewriting, responsive table wrapping).
- Figure plates are hand-coded SVG in `components/figures/`.
- Fonts: Departure Mono (self-hosted, OFL — `public/fonts/`) + Source Serif 4
  (next/font/google).

## Develop / build

```sh
npm install
npm run dev    # http://localhost:3000
npm run build  # production build (fully static, 72 pages)
```

## Deploy (Vercel)

Set the project **Root Directory** to `site/` and keep
**"Include source files outside of the Root Directory in the Build Step"**
enabled (the default), since the prebuild step reads the wiki from `../`.
No other configuration is required.

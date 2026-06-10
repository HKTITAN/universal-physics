# Universal Physics — Typesetting Specification

Spec for the book renderer. Targets print-quality PDF (and print-faithful HTML). All measurements in inches/points unless noted. KaTeX is the math engine throughout.

## 1. Trim, page, margins

| Property | Value |
|---|---|
| Trim size | 6in × 9in |
| Top margin | 0.75in |
| Bottom margin | 0.75in |
| Outer margin | 0.75in |
| Inner (gutter) margin | 0.875in |
| Bleed | none (no full-bleed elements) |

Mirrored margins (twoside layout): inner margin alternates left/right with recto/verso.

## 2. Type

- **Body:** Source Serif 4 (preferred) or STIX Two Text — both pair well with KaTeX's Computer-Modern-flavored math; STIX Two is itself math-adjacent. 10.5–11pt / 14.5–15.5pt leading (target ~1.38 line-height). Justified, hyphenation ON (`hyphens: auto`, lang="en"), minimum 3-character hyphenation stubs.
- **Headings:** same family, semibold/bold; chapter titles 22–24pt, H2 14pt, H3 11.5pt small caps or semibold. No heading orphaned at a page bottom (keep-with-next ≥ 2 lines).
- **Monospace:** a humanist mono (e.g. Source Code Pro / JetBrains Mono NL) at 85–90% of body size, for identifiers (OP-n, GC-n, A-n, Hn), file paths, and inline code.
- **Math:** KaTeX. Do not substitute fonts inside KaTeX output; ship the KaTeX font set.
- Widows/orphans control: min 2 lines top and bottom of page (`widows: 2; orphans: 2`); avoid page breaks inside tables rows, display math, and referee panels where possible.

## 3. Chapter openers

- Each chapter starts on a new page (recto NOT required — running text economy preferred).
- Opener block, top of page: chapter number (small caps, letterspaced, e.g. "CHAPTER 14"), then chapter title (22–24pt), then a light horizontal rule (0.5pt, 60% width, left-aligned), then ~2 lines of space before body text.
- Part openers: parts DO start recto. Part number + title centered in upper third, opener prose (from `book/frontmatter/part-openers/`) set ragged-right at body size, max 4.25in measure, vertically centered-ish. Verso following a part opener may be blank.

## 4. Running heads and folios

- **Verso running head:** book title, *Universal Physics*, small caps, 8.5pt, outer-aligned or centered — pick one and keep it.
- **Recto running head:** current chapter title (truncate with … past 55 characters), same style.
- No running heads on chapter-opener pages, part-opener pages, or blank pages.
- **Folios:** page number bottom-center, 9.5pt, all pages with content (including chapter openers); none on part openers/blanks. Front matter folios in lowercase roman (i, ii, …); arabic numbering restarts at 1 on Chapter 1.

## 5. Table of contents

- Lists parts (bold, no page number needed but allowed), chapters (number + title), and optionally first-level sections (indented, smaller).
- Leader dots between entry and page number; **real page numbers** resolved after final pagination (two-pass render or equivalent).
- TOC entries are links in the PDF (hyperref-style), visually plain (no blue/underline in print output).

## 6. Epistemic tags

The inline tags `[ESTABLISHED] [INFERENCE] [SPECULATIVE] [OPEN] [CONTESTED]` are sacred content — never dropped, reworded, or merged. Render as inline chips:

- Small-caps or monospace, ~80% of body size, letterspaced +0.04em.
- A thin keyline box or very light background (≤8% gray), 2px radius, 0.15em horizontal padding; no color-coding in print (grayscale-safe). Optional subtle color in HTML output only.
- Confidence suffixes (e.g. `[INFERENCE, high]`) stay inside the same chip.
- Chips must not break across lines; allow the line to break before the chip instead.

## 7. Tables

- Full text-width (4.375in measure at these margins), light rules only: 0.5pt rule above header row, 0.4pt below header, 0.5pt closing rule at bottom; no vertical rules; optional 4–6% gray zebra striping for tables >8 rows.
- Header row semibold small caps, 9pt; body 9–9.5pt, leading 12pt. Long tables may break across pages with the header row repeated.
- Numeric columns right-aligned with aligned decimal where meaningful (CONSTANTS_AND_SCALES tables especially).

## 8. Blockquotes and referee verdicts

- Standard blockquotes: indented 0.25in both sides, 95% body size.
- **Referee verdicts** (blockquotes beginning with "Verdict", "Referee", or flagged in source as verdict blocks): indented gray panels — 6–8% gray background, 0.25in left/right inset, 0.5pt left keyline at 40% gray, 0.1in vertical padding, same type as body at 95% size. Verdict lead-in word in bold small caps. Panels avoid breaking across pages when ≤ half a page.
- The CONCLUSION one-paragraph verdict gets the same panel treatment, full prominence, on the Chapter 27 opening page.

## 9. Math (KaTeX print CSS)

- Display math centered, ≥0.5 blank line above/below; unnumbered (the wiki does not number equations — do not invent numbers).
- KaTeX print CSS: force `color: black`; set `.katex { font-size: 1.0em; }` relative to body so inline math matches x-height; prevent display-math overflow with `\small`-step-down or horizontal scaling at ≥95% only as last resort; no scrollbars (print).
- Inline math must not be line-broken inside KaTeX spans; prefer breaking the sentence around it.

## 10. Links and cross-references

- Internal wiki links → typeset cross-references: "see Chapter 14, §GC-7 (p. 213)". Renderer resolves page numbers on second pass.
- Links to non-chapter working notes → citation form: "Working note: *title* (repo: notes/<file>)" set at 95% size.
- External URLs and arXiv IDs: monospace, 90% size, break-anywhere allowed at `/` and `.`; in PDF they remain live links, visually plain.

## 11. Hygiene

- Drop YAML frontmatter and "See also" blocks per manifest trim instructions; never alter body text.
- Em-dashes, quotes, ellipses left exactly as in source (content is frozen).
- Hyphenation exceptions list: maintain one for technical terms (e.g. "renormalizable", "holographic", proper names — "Takayanagi", "Padmanabhan").
- Grayscale-safe throughout: the book must print correctly with no color.

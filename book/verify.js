/*
 * book/verify.js — regression gate for the committed PDF (universal-physics-book.pdf).
 *
 * Asserts the structural invariants a broken stage-2 render would violate:
 *   - page count >= floor (a dropped chapter / truncated render shrinks the book)
 *   - trim size 6x9in (432x648pt) within tolerance on a sampled interior page
 *   - PDF metadata Title is the book title
 * On any failed assertion it prints a FAIL summary and exits 1; otherwise PASS, exit 0.
 *
 * Scope note: pdf-lib exposes page geometry and document metadata but has NO
 * text-layer extraction API, so this script cannot search the rendered text for
 * "Contents" / part / chapter titles. Doing that would require pdf.js or a similar
 * text-extraction dependency; per plan 006 we deliberately do NOT add one here and
 * keep the gate to what pdf-lib can read. If a text-layer assertion is ever wanted,
 * add it in a separate tool with its own dependency rather than bloating this gate.
 */
const fs = require('fs');
const path = require('path');
const { PDFDocument } = require('pdf-lib');

/* Expected structural invariants. The page count is a FLOOR (not an exact), so
 * legitimate growth (more chapters/iterations) passes while a regression that
 * drops content trips it. Current committed PDF: 791 pages, 6x9in. */
const PAGE_FLOOR = 700;            // sanity floor; current 791
const TRIM_PTS = { width: 432, height: 648 }; // 6x9in at 72pt/in
const TRIM_TOL = 1;                // pt tolerance for the trim assertion
const SAMPLE_PAGE = 50;            // interior page sampled for size
const EXPECT_TITLE = 'Universal Physics';

(async () => {
  const p = path.resolve(__dirname, '..', 'universal-physics-book.pdf');
  const bytes = fs.readFileSync(p);
  const doc = await PDFDocument.load(bytes, { updateMetadata: false });

  const pages = doc.getPageCount();
  const sampleIdx = Math.min(SAMPLE_PAGE, pages - 1);
  const { width, height } = doc.getPage(sampleIdx).getSize();
  const title = doc.getTitle();

  const info = {
    file: p,
    sizeMB: +(bytes.length / 1048576).toFixed(2),
    pages,
    pageSizePts: { width, height },
    pageSizeIn: { width: +(width / 72).toFixed(2), height: +(height / 72).toFixed(2) },
    title: title ?? null,
  };
  console.log(JSON.stringify(info, null, 2));

  const fails = [];
  if (pages < PAGE_FLOOR)
    fails.push(`page count ${pages} below floor ${PAGE_FLOOR} (content may have been dropped)`);
  if (Math.abs(width - TRIM_PTS.width) > TRIM_TOL || Math.abs(height - TRIM_PTS.height) > TRIM_TOL)
    fails.push(`page ${sampleIdx} trim ${width}x${height}pt != expected ${TRIM_PTS.width}x${TRIM_PTS.height}pt (6x9in) +/-${TRIM_TOL}`);
  if (title !== EXPECT_TITLE)
    fails.push(`PDF metadata Title is ${JSON.stringify(title)}, expected ${JSON.stringify(EXPECT_TITLE)}`);

  if (fails.length) {
    console.error(`\nbook/verify.js: FAIL — ${fails.length} assertion(s):`);
    for (const f of fails) console.error('  - ' + f);
    process.exit(1);
  }
  console.log(`\nbook/verify.js: PASS — ${pages} pages (floor ${PAGE_FLOOR}), ` +
    `6x9in trim, title "${title}".`);
})().catch(err => {
  console.error('book/verify.js: ERROR —', err.message);
  process.exit(1);
});

/*
 * Universal Physics — book renderer.
 * Stage 1: manifest -> single paged-media HTML (book/dist/book.html).
 * Stage 2 (separate command): pagedjs-cli -> universal-physics-book.pdf.
 *
 * Content policy: source pages are FROZEN. This script only strips
 * wiki-navigation chrome (YAML frontmatter, Status/Last-updated lines,
 * "See also" link blocks, README nav sections) and rewrites internal
 * links into book cross-references / working-note citations.
 */
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const MarkdownIt = require('markdown-it');
const texmath = require('markdown-it-texmath');
const katex = require('katex');

const BOOK = __dirname;
const REPO = path.resolve(BOOK, '..');
const DIST = path.join(BOOK, 'dist');
const manifest = JSON.parse(fs.readFileSync(path.join(BOOK, 'manifest.json'), 'utf8'));

const md = new MarkdownIt({ html: true, linkify: true, typographer: false })
  .use(texmath, { engine: katex, delimiters: 'dollars', katexOptions: { throwOnError: false, strict: false } });
md.linkify.set({ fuzzyLink: false }); // don't auto-link bare "FOO.md" (.md is a TLD)

/* ---------------- source loading + chrome stripping ---------------- */

function loadRaw(rel) {
  const p = path.resolve(REPO, rel);
  const src = fs.readFileSync(p, 'utf8');
  return matter(src); // {content, data}
}

function stripChrome(content, opts = {}) {
  let lines = content.split(/\r?\n/);

  // drop leading H1 (chapter/part title comes from the manifest)
  if (opts.dropH1 !== false) {
    const i = lines.findIndex(l => l.trim() !== '');
    if (i >= 0 && /^#\s/.test(lines[i])) lines.splice(i, 1);
  }

  // drop Status / Last updated lines (both `**Status:**` and `Status:` forms)
  lines = lines.filter(l => !/^\s*(\*\*)?(Status|Last updated):/i.test(l));

  let out = lines.join('\n');

  // drop "See also" section (heading through next heading of any level or EOF)
  out = out.replace(/^##+\s+See also\s*$[\s\S]*?(?=^#{1,6}\s|(?![\s\S]))/gim, '');

  // drop named sections (README nav chrome)
  for (const sec of (opts.dropSections || [])) {
    const re = new RegExp('^##\\s+' + sec.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') +
      '\\s*$[\\s\\S]*?(?=^##?\\s|(?![\\s\\S]))', 'gim');
    out = out.replace(re, '');
  }

  // collapse stray hr runs left by removed sections
  out = out.replace(/(\n---\s*\n)(\s*---\s*\n)+/g, '$1');
  out = out.replace(/\n{4,}/g, '\n\n\n');
  return out.trim();
}

/* ---------------- cross-reference maps ---------------- */

const chapterBySource = new Map(); // 'FINDINGS.md' -> {num, title}
for (const part of manifest.parts)
  for (const ch of part.chapters)
    chapterBySource.set(ch.sources[0], { num: ch.number, title: ch.title });

const backmatterBySource = new Map(); // 'GLOSSARY.md' -> {id,title}
for (const bm of manifest.backMatter)
  if (bm.sources) backmatterBySource.set(bm.sources[0], { id: bm.id, title: bm.title });

// note titles from frontmatter
const noteTitles = new Map();
for (const f of fs.readdirSync(path.join(REPO, 'notes'))) {
  if (!f.endsWith('.md')) continue;
  try {
    const fm = matter(fs.readFileSync(path.join(REPO, 'notes', f), 'utf8'));
    noteTitles.set('notes/' + f, fm.data.title || f.replace(/\.md$/, ''));
  } catch { noteTitles.set('notes/' + f, f.replace(/\.md$/, '')); }
}

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function looksLikeFilename(text, target) {
  const t = text.trim().replace(/^(\.\.?\/)+/, '');
  return t === target || t === path.basename(target) ||
    /^[A-Za-z0-9_\-./]+\.(md|canvas)$/.test(t) || /^notes\//.test(t) ||
    t === path.basename(target, '.md');
}

/* Rewrite one markdown link [text](target) into book form (returns markdown/HTML). */
function rewriteLink(text, target, currentSource) {
  if (/^(https?:|mailto:)/i.test(target)) return null; // external: keep as-is

  // normalize (resolve ./ and ../ against the current source's directory)
  let t = target;
  if (/^\.\.?\//.test(t)) {
    t = path.posix.normalize(path.posix.join(path.posix.dirname(currentSource.replace(/\\/g, '/')), t));
  }
  const anchor = t.includes('#') ? t.slice(t.indexOf('#')) : '';
  t = t.split('#')[0];
  if (t === '' && anchor) return `*${text}*`; // same-page anchor -> plain italics
  if (t.endsWith('/')) t = t.slice(0, -1);

  // resolve domains/notes relative refs from inside those dirs
  if (currentSource.includes('/') && !t.includes('/') && t.endsWith('.md')) {
    const sib = path.posix.join(path.posix.dirname(currentSource), t);
    if (chapterBySource.has(sib) || noteTitles.has(sib)) t = sib;
  }

  // directories
  if (t === 'notes') return `${plain(text)} (repo: \`notes/\`; see the notes index, repo: \`notes/README.md\`)`;
  if (t === 'domains') return `*the domain chapters (Part II, Chapters 4–13)*`;

  if (t === 'notes/README.md')
    return `${plain(text)} (notes index — repo: \`notes/README.md\`)`;

  // chapter source
  if (chapterBySource.has(t)) {
    const ch = chapterBySource.get(t);
    const ref = `<a class="xref" href="#ch-${ch.num}">Chapter ${ch.num}</a>`;
    return looksLikeFilename(text, t) ? `*${ref}*` : `*${esc(text)}* (${ref})`;
  }

  // back matter source
  if (backmatterBySource.has(t)) {
    const bm = backmatterBySource.get(t);
    if (bm.id === 'publication-history')
      return looksLikeFilename(text, t)
        ? `the repository changelog (repo: \`CHANGELOG.md\`; condensed here as <a class="xref" href="#bm-publication-history">Publication History</a>)`
        : `*${esc(text)}* (repo: \`CHANGELOG.md\`)`;
    const ref = `<a class="xref" href="#bm-${bm.id}">the ${bm.title}</a>`;
    return looksLikeFilename(text, t) ? ref : `*${esc(text)}* (${ref})`;
  }

  // working note (non-chapter)
  if (noteTitles.has(t)) {
    const cite = `<span class="wn">Working note: <i>${esc(noteTitles.get(t))}</i> (repo: <code>${esc(t)}</code>)</span>`;
    return looksLikeFilename(text, t) ? cite : `*${esc(text)}* (${cite})`;
  }

  // other repo files (AGENTS.md, CONTRIBUTING.md, index.md, log.md, LICENSE.md, MAP.canvas, ...)
  if (/\.(md|canvas)$/.test(t))
    return looksLikeFilename(text, t) ? `\`${t}\` (in the repository)` : `*${esc(text)}* (repo: \`${t}\`)`;

  return null; // leave untouched
}

function plain(text) { return `*${esc(text.trim())}*`; }

function rewriteLinks(mdsrc, currentSource) {
  // skip fenced code blocks
  const parts = mdsrc.split(/(```[\s\S]*?```)/);
  for (let i = 0; i < parts.length; i += 2) {
    parts[i] = parts[i].replace(/\[([^\]\n]*)\]\(([^()\s]+)\)/g, (m, text, target) => {
      const r = rewriteLink(text, target, currentSource);
      return r === null ? m : r;
    });
  }
  return parts.join('');
}

/* ---------------- HTML post-processing ---------------- */

function postProcess(html) {
  // epistemic tag chips — wrap, never alter, the bracketed text
  html = html.replace(
    /\[((?:ESTABLISHED|INFERENCE|SPECULATIVE|OPEN|CONTESTED)(?:[^\[\]<>{}]{0,60})?)\]/g,
    (m, inner) => `<span class="etag">[${inner}]</span>`);

  // referee verdict panels
  html = html.replace(/<blockquote>\s*<p>(\s*<strong>\s*(?:The one-paragraph verdict|Verdict|Referee)[^<]*)/gi,
    (m, rest) => m.replace('<blockquote>', '<blockquote class="verdict">'));

  return html;
}

function renderChunk(rel, opts = {}) {
  const { content } = loadRaw(rel);
  const stripped = stripChrome(content, opts);
  const rewritten = rewriteLinks(stripped, rel);
  return postProcess(md.render(rewritten));
}

/* ---------------- assembly ---------------- */

const b = manifest.book;
let out = [];

/* half title */
out.push(`<section class="halftitle" id="half-title"><div class="ht">UNIVERSAL PHYSICS</div></section>`);

/* title page */
out.push(`<section class="titlepage" id="title-page">
  <div class="tp-title">Universal Physics</div>
  <div class="tp-rule"></div>
  <div class="tp-subtitle">${esc(b.subtitle)}</div>
  <div class="tp-authors">${b.authors.map(esc).join('<span class="tp-amp"> &amp; </span>')}</div>
  <div class="tp-imprint">universal-physics.khe.money</div>
</section>`);

/* copyright page */
out.push(`<section class="copyrightpage" id="copyright">
  <p>Copyright © 2026 Harshit Khemani &amp; Claude (Anthropic)</p>
  <p>Content licensed under Creative Commons Attribution-ShareAlike 4.0 (CC BY-SA 4.0);
     accompanying code licensed MIT.</p>
  <p>${esc(b.edition)}, June 2026.</p>
  <p>universal-physics.khe.money · github.com/HKTITAN/universal-physics</p>
  <p>Research and content: Harshit Khemani + Claude.</p>
  <p>Design inspired by Dan Hollick's <i>Making Software</i> (makingsoftware.com).</p>
  <p class="cp-note">Typeset with Paged.js and KaTeX from the project's markdown sources.
     Epistemic tags [ESTABLISHED] [INFERENCE] [SPECULATIVE] [OPEN] [CONTESTED] are reproduced
     verbatim from the source wiki.</p>
</section>`);

/* TOC (entries reference anchors; Paged.js resolves page numbers) */
let toc = `<section class="tocpage" id="toc"><h1 class="fm-title">Contents</h1><nav class="toc">`;
toc += tocRow('#preface', 'Preface', 'toc-fm');
for (const part of manifest.parts) {
  toc += `<div class="toc-part"><a href="#part-${part.part}">${esc(part.title.replace(/ — /, ' · '))}</a></div>`;
  for (const ch of part.chapters)
    toc += tocRow(`#ch-${ch.number}`, `<span class="toc-n">${ch.number}</span> ${esc(ch.title)}`, 'toc-ch');
}
toc += `<div class="toc-part"><span>BACK MATTER</span></div>`;
for (const bm of manifest.backMatter)
  toc += tocRow(`#bm-${bm.id}`, esc(bm.title), 'toc-ch');
toc += `</nav></section>`;
out.push(toc);

function tocRow(href, label, cls) {
  return `<div class="${cls}"><a href="${href}"><span class="toc-t">${label}</span><span class="toc-dots"></span></a></div>`;
}

/* preface */
{
  const { content } = loadRaw('book/frontmatter/preface.md');
  const body = postProcess(md.render(rewriteLinks(stripChrome(content), 'book/frontmatter/preface.md')));
  out.push(`<section class="frontmatter-ch" id="preface"><h1 class="fm-title">Preface</h1>${body}</section>`);
}

/* parts + chapters */
let chParity = 0;
for (const part of manifest.parts) {
  const { content } = loadRaw(part.opener);
  const proseHtml = postProcess(md.render(rewriteLinks(stripChrome(content), part.opener)));
  const m = part.title.match(/^PART\s+([IVX]+|\d+)\s*—\s*(.*)$/i) || [];
  const pnum = ['', 'I', 'II', 'III', 'IV', 'V', 'VI'][part.part];
  const ptitle = (m[2] || part.title);
  out.push(`<section class="partopener" id="part-${part.part}">
    <div class="po-head"><div class="po-num">PART ${pnum}</div><div class="po-title">${esc(titleCase(ptitle))}</div></div>
    <div class="po-prose">${proseHtml}</div>
  </section>`);

  for (const ch of part.chapters) {
    chParity ^= 1;
    const opts = {};
    if (ch.sources[0] === 'README.md')
      opts.dropSections = ['Start here', 'Full index', 'How to contribute \\(human or agent\\)'.replace(/\\\\/g, '\\')];
    const body = renderChunk(ch.sources[0], ch.sources[0] === 'README.md'
      ? { dropSections: ['Start here', 'Full index', 'How to contribute (human or agent)'] }
      : {});
    out.push(`<section class="chapter ${chParity ? 'chA' : 'chB'}" id="ch-${ch.number}">
      <header class="ch-opener">
        <div class="ch-num">CHAPTER ${ch.number}</div>
        <h1 class="ch-title">${esc(ch.title)}</h1>
        <span class="rh-src">${esc(truncate(ch.title, 55))}</span>
        <div class="ch-rule"></div>
      </header>
      <div class="ch-body">${body}</div>
    </section>`);
  }
}

/* back matter */
for (const bm of manifest.backMatter) {
  chParity ^= 1;
  let body;
  if (bm.id === 'about') {
    const { content } = loadRaw(bm.source);
    body = postProcess(md.render(rewriteLinks(stripChrome(content), bm.source)));
  } else if (bm.id === 'publication-history') {
    body = publicationHistory();
  } else {
    body = renderChunk(bm.sources[0]);
  }
  out.push(`<section class="chapter backmatter ${chParity ? 'chA' : 'chB'} bm-${bm.id}" id="bm-${bm.id}">
    <header class="ch-opener">
      <div class="ch-num">BACK MATTER</div>
      <h1 class="ch-title">${esc(bm.title)}</h1>
      <span class="rh-src">${esc(bm.title)}</span>
      <div class="ch-rule"></div>
    </header>
    <div class="ch-body">${body}</div>
  </section>`);
}

/* Publication history: condensed per manifest trim instruction (one dated entry
   per iteration + capstone note; full log remains in the repository). */
function publicationHistory() {
  const items = [
    ['2026-06-08 — Iteration 1: initial build.',
     'First full pass, bootstrapped by a multi-agent workflow: ten parallel domain dossiers; cross-cutting analyses (contradictions, open-problems registry, assumptions ledger, unification-landscape survey, candidate principles); hypothesis generation through three independent lenses; adversarial verification of every contradiction and hypothesis. Conventions established: the five epistemic tags, the assumption-classification scheme, the anti-crank verification gate, and stable identifiers (OP-n, GC-n, Hn = H0–H8, A-n). Post-build structural QC was clean.'],
    ['2026-06-08 — Iteration 2: five refereed research tracks + synthesis.',
     'First forward-research iteration (38 agents; 0/25 new claims flagged unsound). Tracks: de Sitter / emergent spacetime, Born rule &amp; linearity, tabletop quantum gravity (BMV), entropic / emergent gravity, algebraic background-independence. Synthesis verdict: PARTIAL coherence — two internally-coherent programs joined by thin bridges; the "it\'s all information" fusion explicitly refused. Registries extended (OP-40…47, A-20…23); one iteration-1 mischaracterization of Verlinde-EG lensing corrected.'],
    ['2026-06-08 — Iteration 3: attempts + red-team.',
     'Shifted from surveying to attempting (31 agents): located the exact obstruction to a de Sitter entanglement first law; delivered the encode-vs-generate criterion; attempted the A+B program merge (narrow success, deep failure — OP-48 added); red-teamed the project\'s own posture (0 fatal, 4 serious weakenings accepted). Coherence verdict unchanged at PARTIAL; progress negative/structural; the central wager still not yet physics.'],
    ['2026-06-08 — Iteration 4: attacks + literature refresh + convergence audit.',
     'Executed and closed the last open dS escape (a scoped cardinality near-no-go); settled OP-48 as a sharp disjunction; found the encode→generate escape near-vacuous under the standard readout (HYP-CKV-VACUITY). Web-verified literature refresh: muon g−2 now SM-consistent (WP2025). Convergence audit: trend diminishing, analytical saturation ≈1–3 iterations away, object-level confirmation not forecastable. Verdict unchanged for the third consecutive iteration.'],
    ['2026-06-08 — Iteration 5: closing analytical push → analytical saturation; capstone.',
     'The designated verdict-flipping move (the OP-46 Lorentzian non-CKV readout) was executed and did not flip — producing the survey\'s first emergent Lorentzian metric, with its signature inherited from a symmetric vacuum. OP-48(c) settled as a clean conditional no-go; OP-44 sharpened to a regime boundary; both surviving dS routes failed for identified reasons. Analytical saturation declared per the iteration-4 criterion; the capstone Conclusion (Chapter 27) and the Experiment Watchlist (Chapter 28) were written. A same-day documentation pass closed three propagation gaps (no physics conclusions changed).'],
    ['2026-06-10 — Iteration 6: new-input iteration; verdict unchanged a fifth consecutive time.',
     'First post-saturation iteration: deliberate injection of new 2023–2026 literature (22 agents; 10 adversarially-refereed tracks — 6 research, 4 attack; ~90 findings, all kept, zero fatal). Headline unchanged; hedges restructured: the no-test claim upgraded to a corollary of encode-not-generate (HYP-ENCODING-SCREEN, new third hedge); causal fermion systems added as a fourth readout family closing at the same signature-installation step; OP-48(c) horn C partially discharged; OP-49 closed negative at near-no-go grade; OP-50 added [CONTESTED]; watchlist refreshed (w(z) decision point compresses to 2027).'],
  ];
  let h = `<p>The wiki\'s changelog is append-only; this history condenses it to one dated entry per iteration. Per-page micro-edits are omitted — the full log remains in the repository (<code>CHANGELOG.md</code>).</p>`;
  for (const [head, bodyTxt] of items) h += `<p class="ph-entry"><strong>${head}</strong> ${bodyTxt}</p>`;
  return postProcess(h);
}

function truncate(s, n) { return s.length <= n ? s : s.slice(0, n - 1).trimEnd() + '…'; }
function titleCase(s) { return s; }

/* ---------------- CSS ---------------- */

const css = fs.readFileSync(path.join(BOOK, 'book.css'), 'utf8');

const html = `<!doctype html><html lang="en"><head><meta charset="utf-8">
<title>Universal Physics</title>
<link rel="stylesheet" href="katex.min.css">
<style>${css}</style>
</head><body>
${out.join('\n')}
</body></html>`;

fs.mkdirSync(DIST, { recursive: true });
// KaTeX assets next to the HTML so font URLs resolve
const kdist = path.join(BOOK, 'node_modules', 'katex', 'dist');
fs.copyFileSync(path.join(kdist, 'katex.min.css'), path.join(DIST, 'katex.min.css'));
fs.cpSync(path.join(kdist, 'fonts'), path.join(DIST, 'fonts'), { recursive: true });
fs.writeFileSync(path.join(DIST, 'book.html'), html, 'utf8');
console.log('book.html written:', Math.round(html.length / 1024) + ' KB,',
  chapterBySource.size, 'chapters,', noteTitles.size, 'notes mapped');

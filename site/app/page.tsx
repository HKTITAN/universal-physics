import Link from "next/link";
import { CHAPTERS } from "@/lib/manifest";
import FigTwoPrograms from "@/components/figures/FigTwoPrograms";

export default function Cover() {
  return (
    <div className="cover">
      {/* ── manual cover plate ── */}
      <section className="cover-plate" aria-labelledby="cover-title">
        <p className="cover-kicker">
          <span>Technical reference manual · Revision 14 · 2026-06-19</span>
          <span className="ref">DOC UP-2026 · universal-physics.khe.money</span>
        </p>
        <h1 className="cover-title" id="cover-title">
          UNIVERSAL
          <br />
          <span className="accent">PHYSICS</span>
        </h1>
        <p className="cover-subtitle">
          A fourteen-iteration, adversarially-refereed research program toward a universal theory of
          physics — and the precise account of why one is not yet in hand.
        </p>
        <dl className="cover-stats">
          <div>
            <dt>Iterations</dt>
            <dd>
              14 <span className="unit">(terminal saturation)</span>
            </dd>
          </div>
          <div>
            <dt>Catalogued clashes</dt>
            <dd>
              17 <span className="unit">none a proven inconsistency</span>
            </dd>
          </div>
          <div>
            <dt>Open gate</dt>
            <dd>
              1 <span className="unit">carrier problem · 5 converging routes</span>
            </dd>
          </div>
          <div>
            <dt>Explicit hedges</dt>
            <dd>
              3 <span className="unit">principal MEDIUM-HIGH→HIGH</span>
            </dd>
          </div>
          <div>
            <dt>Verdict</dt>
            <dd>
              <span className="unit">unchanged 13 iters:</span> not-yet-physics
            </dd>
          </div>
        </dl>
      </section>

      {/* ── the one-paragraph verdict ── */}
      <blockquote className="verdict-excerpt">
        <span className="label">The one-paragraph verdict — Conclusion, §0</span>
        <p>
          A single universal theory of physics is <strong>not forbidden and not delivered.</strong>{" "}
          The two pillars — quantum field theory and general relativity — are mutually consistent
          everywhere we can test, and of the 17 catalogued inter-framework clashes{" "}
          <strong>none is a proven logical inconsistency</strong>; they are domain-mismatches and
          unsolved-but-consistent problems concentrated where both theories are extrapolated past
          their tested regimes. A <em>consistent unified framework</em> is therefore very plausibly{" "}
          <strong>possible</strong>. But the most developed candidate direction — that{" "}
          <strong>causal/algebraic/entanglement structure precedes metric geometry</strong> —{" "}
          <em>encodes</em> geometry without yet <em>generating</em> it, and, decisively,{" "}
          <strong>has no distinguishing experimental test even in principle.</strong> By this
          wiki&rsquo;s own anti-crank standard it is therefore <strong>not yet physics</strong>: a
          sharp, coherent research <em>strategy</em>, not a result.
        </p>
        <p style={{ fontFamily: "var(--mono)", fontSize: "0.72rem", color: "var(--ink-500)" }}>
          Condensed; the full paragraph, with its hedges and its thirteen-iteration stability record,
          is <Link href="/manual/conclusion">chapter 1</Link>.
        </p>
      </blockquote>

      <FigTwoPrograms />

      {/* ── full numbered table of contents ── */}
      <section className="toc-section" id="contents" aria-labelledby="toc-title">
        <h2 className="toc-heading" id="toc-title">
          Table of contents
          <span className="ref">{CHAPTERS.length} chapters · {CHAPTERS.reduce((n, c) => n + c.sections.length, 0)} sections</span>
        </h2>
        <ol className="toc">
          {CHAPTERS.map((ch) => {
            // group notes sections under their iteration headings
            const groups: Array<{ group?: string; items: typeof ch.sections }> = [];
            for (const s of ch.sections) {
              const last = groups[groups.length - 1];
              if (!last || last.group !== s.group) groups.push({ group: s.group, items: [s] });
              else last.items.push(s);
            }
            return (
              <li className="toc-chapter" key={ch.slug}>
                <div className="toc-chapter-row">
                  <span className="toc-num">{ch.num}.0</span>
                  <Link href={`/manual/${ch.slug}`}>{ch.title}</Link>
                </div>
                {ch.summary ? <p className="toc-summary">{ch.summary}</p> : null}
                {groups.map((g, gi) => (
                  <div key={gi}>
                    {g.group ? <p className="toc-group">{g.group}</p> : null}
                    <ol className="toc-sections">
                      {g.items.map((s) => (
                        <li key={s.slug}>
                          <span className="toc-num">{s.num}</span>
                          <Link href={`/manual/${s.slug}`}>{s.title}</Link>
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </li>
            );
          })}
        </ol>
      </section>
    </div>
  );
}

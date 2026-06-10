import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contribute",
  description:
    "How to contribute to the Universal Physics research wiki: the anti-crank verification protocol, the open levers (OP-44, OP-46, OP-49, OP-50, watchlist), and PR conventions.",
};

export default function Contribute() {
  return (
    <div className="static-page">
      <div className="prose">
        <p className="chapter-label" style={{ marginTop: "2.2rem" }}>
          <span>Appendix A</span>
          <span className="rule" aria-hidden="true" />
        </p>
        <h1>Contributing</h1>
        <p style={{ fontSize: "1.05rem" }}>
          This is a live, adversarially-refereed research wiki. Contributions are welcome — from
          typo fixes to full attack tracks on the open problems. The bar is{" "}
          <strong>proper backing, not credentials</strong>. &ldquo;We do not know, stated
          precisely&rdquo; is a publishable result here; overclaiming is not.
        </p>

        <h2 className="numbered-rule" id="protocol">
          A.1 — The contribution bar: the anti-crank verification protocol
        </h2>
        <p>
          Everything in the wiki obeys <Link href="/manual/epistemics">EPISTEMICS</Link> and the
          verification protocol in <Link href="/manual/agents">AGENTS §4</Link>. Non-negotiable:
        </p>
        <ol>
          <li>
            <strong>Tag every nontrivial claim</strong> with exactly one of{" "}
            <span className="chip chip-established">ESTABLISHED</span>{" "}
            <span className="chip chip-inference">INFERENCE</span>{" "}
            <span className="chip chip-speculative">SPECULATIVE</span>{" "}
            <span className="chip chip-open">OPEN</span>{" "}
            <span className="chip chip-contested">CONTESTED</span>. Never let speculation wear
            established clothes.
          </li>
          <li>
            <strong>Never fabricate a citation, number, theorem, or arXiv ID.</strong> Verify every
            reference against the live source; mark anything you couldn&rsquo;t verify{" "}
            <span className="chip chip-unverified">unverified</span>. A missing reference is
            acceptable; a fake one is disqualifying.
          </li>
          <li>
            <strong>Red-team your own claim</strong> against the relevant no-go theorems
            (Weinberg–Witten, Coleman–Mandula/HLS, Haag, Bell/PBR/Kochen–Specker, Reeh–Schlieder,
            the singularity theorems, unitarity/causality bounds) — and against the wiki&rsquo;s own
            closures (the dS cardinality no-go; HYP-CKV-VACUITY; the OP-48c conditional no-go). Do
            not re-derive what is already closed.
          </li>
          <li>
            A candidate framework that <strong>&ldquo;explains everything and predicts
            nothing&rdquo; fails by construction.</strong>
          </li>
          <li>
            <strong>Enrich pages in place.</strong> Stable IDs (OP-n, GC-n, Hn, A-n, named HYP-*)
            are permanent; new items take the next free ID. Log every change in the{" "}
            <Link href="/manual/changelog">changelog</Link>. Cross-link.
          </li>
        </ol>

        <h2 className="numbered-rule" id="levers">
          A.2 — Where help is most valuable: the open levers
        </h2>
        <p>
          The analytical program is saturated; the verdict moves only on <strong>new input</strong>{" "}
          (see <Link href="/manual/conclusion">Conclusion §5</Link> and the{" "}
          <Link href="/manual/experiment-watchlist">watchlist</Link>):
        </p>
        <ul className="lever-list">
          <li>
            <span className="id">THE VERDICT-FLIPPER</span>
            <span>
              Derive the indefinite pairing (Krein η / a canonical (n,n) operator class) from
              (algebra, state) modular data — no symmetry, η-form, foliation, twist,
              indefinite-pairing axiom, or signature-valued template installed by hand. This is the
              compressed OP-46 target; any serious sketch reopens the capstone.
            </span>
          </li>
          <li>
            <span className="id">OP-44</span>
            <span>
              The order-G<sub>N</sub>² proof obligation (quadratic boost linearization-instability
              constraints) — the one named decidable analytical step.
            </span>
          </li>
          <li>
            <span className="id">OP-49 RESIDUAL</span>
            <span>The stated SVD-entropy hemisphere computation.</span>
          </li>
          <li>
            <span className="id">OP-50</span>
            <span>
              The closed-universe Hilbert-space dispute (is dim H<sub>closed</sub> = 1 per
              α-sector?) — theorems on any branch; watch the ARSSV / Hong Liu / Engelhardt–Gesteau
              counter-positions.
            </span>
          </li>
          <li>
            <span className="id">WATCHLIST</span>
            <span>
              New bounds or results in any channel — DESI/Euclid w(z), GQuEST, CQ-gravity squeezes,
              collapse bounds, GW nulls, BMV progress — with citations.
            </span>
          </li>
          <li>
            <span className="id">LINT</span>
            <span>
              Broken links, stale numbers, tag inconsistencies,{" "}
              <span className="chip chip-unverified">unverified</span> references you can resolve
              to a DOI.
            </span>
          </li>
        </ul>

        <h2 className="numbered-rule" id="process">
          A.3 — Process &amp; PR conventions
        </h2>
        <ol>
          <li>
            Fork{" "}
            <a href="https://github.com/HKTITAN/universal-physics" rel="noreferrer">
              HKTITAN/universal-physics
            </a>{" "}
            → branch → PR against <code>main</code>.
          </li>
          <li>
            PRs that add or change claims must include: epistemic tags, verified citations (no
            fabricated references — ever), the <Link href="/manual/changelog">CHANGELOG</Link>{" "}
            entry, and (for new frameworks/hypotheses) the §4 referee self-report — no-gos checked,
            severity self-assessment.
          </li>
          <li>
            PRs are reviewed against the protocol above. Contributors are credited in CHANGELOG
            entries and git history.
          </li>
        </ol>
      </div>
    </div>
  );
}

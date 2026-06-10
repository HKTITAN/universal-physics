import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "What Universal Physics is, how it was made (six multi-agent iterations, adversarial refereeing, ~90 refereed findings in iteration 6), authorship, design credit, and license.",
};

export default function About() {
  return (
    <div className="static-page">
      <div className="prose">
        <p className="chapter-label" style={{ marginTop: "2.2rem" }}>
          <span>Appendix B</span>
          <span className="rule" aria-hidden="true" />
        </p>
        <h1>About this manual</h1>

        <h2 className="numbered-rule" id="what">
          B.1 — What this is
        </h2>
        <p>
          A serious, cumulative attempt to (1) map the best current understanding of fundamental
          physics, (2) find exactly where it breaks, (3) separate genuinely fundamental assumptions
          from historical artifacts, (4) search for deeper unifying principles, and (5) evaluate —
          honestly — whether a <em>universal theory of physics</em> is possible.
        </p>
        <p>
          This is <strong>not</strong> an essay arguing for a pet &ldquo;theory of
          everything.&rdquo; The deliverable was never going to be a theory of everything from an
          armchair; it was to produce <em>either</em> a candidate framework with real backing{" "}
          <em>or</em> a precise account of why the evidence does not support one. The program
          reached the second, in a strong and specific form: the standing verdict is{" "}
          <Link href="/manual/conclusion">chapter 1</Link>.
        </p>

        <h2 className="numbered-rule" id="how">
          B.2 — How it was made
        </h2>
        <p>
          Six multi-agent research iterations (2026), every new claim adversarially refereed and
          web-verified. Iteration 2 ran 38 agents over five refereed tracks; iterations 3–5 shifted
          from surveying to <em>attempting</em> (and closing) the named analytical levers, reaching
          declared <strong>analytical saturation</strong> at iteration 5; iteration 6 was a
          dedicated new-input iteration — 10 refereed tracks, <strong>~90 refereed findings</strong>{" "}
          — whose net effect was to <em>tighten</em> the verdict, not move it. The full
          iteration-by-iteration record is in the{" "}
          <Link href="/manual/notes">research notes (chapter 13)</Link> and the{" "}
          <Link href="/manual/changelog">changelog (chapter 17)</Link>.
        </p>
        <p>
          The discipline that makes this possible is the evidence standard of{" "}
          <Link href="/manual/epistemics">EPISTEMICS (§14.1)</Link>: every nontrivial claim carries
          exactly one of the five epistemic tags{" "}
          <span className="chip chip-established">ESTABLISHED</span>{" "}
          <span className="chip chip-inference">INFERENCE</span>{" "}
          <span className="chip chip-speculative">SPECULATIVE</span>{" "}
          <span className="chip chip-open">OPEN</span>{" "}
          <span className="chip chip-contested">CONTESTED</span>, citations are never fabricated,
          and every epistemic promotion or demotion is logged with a reason.
        </p>

        <h2 className="numbered-rule" id="authorship">
          B.3 — Authorship
        </h2>
        <p>
          Research direction: <strong>Harshit Khemani</strong>. Research labor:{" "}
          <strong>Claude</strong> (Anthropic), via multi-agent workflows. Contributors are credited
          in CHANGELOG entries and git history — see{" "}
          <Link href="/contribute">how to contribute</Link>.
        </p>

        <h2 className="numbered-rule" id="design">
          B.4 — Design
        </h2>
        <p>
          The site&rsquo;s technical-reference-manual presentation is inspired by Dan
          Hollick&rsquo;s{" "}
          <a href="https://www.makingsoftware.com" rel="noreferrer">
            Making Software
          </a>{" "}
          (inspiration only — all copy, figures, and assets here are original to this project).
          Type is set in{" "}
          <a href="https://departuremono.com" rel="noreferrer">
            Departure Mono
          </a>{" "}
          (Helena Zhang, OFL) and Source Serif 4. All figure plates are hand-coded SVG drawn from
          the wiki&rsquo;s actual content.
        </p>

        <h2 className="numbered-rule" id="license">
          B.5 — License
        </h2>
        <p>
          Content:{" "}
          <a href="https://creativecommons.org/licenses/by-sa/4.0/" rel="noreferrer">
            CC BY-SA 4.0
          </a>
          . Code:{" "}
          <a
            href="https://github.com/HKTITAN/universal-physics/blob/main/LICENSE.md"
            rel="noreferrer"
          >
            MIT
          </a>
          . © 2026 Harshit Khemani. Source:{" "}
          <a href="https://github.com/HKTITAN/universal-physics" rel="noreferrer">
            github.com/HKTITAN/universal-physics
          </a>
          .
        </p>
      </div>
    </div>
  );
}

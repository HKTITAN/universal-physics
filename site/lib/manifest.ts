/**
 * The manual's numbered structure. Every wiki page maps to one /manual/[slug]
 * route; numbering follows the technical-manual convention (1.0, 4.2, 13.7 …).
 *
 * `file` is relative to site/content/ (populated by scripts/prepare-content.mjs).
 * Entries with `generated: true` are landing pages rendered from TSX, not markdown.
 */

export interface ManualEntry {
  /** chapter / section number as displayed, e.g. "4.2" */
  num: string;
  slug: string;
  /** display title used in TOC and nav (the page's own markdown H1 still renders) */
  title: string;
  /** one-line summary (real copy, quoted from the wiki's own index.md) */
  summary?: string;
  file?: string;
  generated?: boolean;
  /** grouping label shown in the TOC (used for notes iterations) */
  group?: string;
}

export interface ManualChapter {
  num: string;
  slug: string;
  title: string;
  summary?: string;
  file?: string;
  generated?: boolean;
  sections: ManualEntry[];
}

export const CHAPTERS: ManualChapter[] = [
  {
    num: "1",
    slug: "conclusion",
    title: "The Verdict",
    file: "CONCLUSION.md",
    summary:
      "The converged verdict: a universal theory is neither forbidden nor delivered; the leading direction encodes geometry without generating it and has no distinguishing test — not yet physics.",
    sections: [],
  },
  {
    num: "2",
    slug: "findings",
    title: "Findings",
    file: "FINDINGS.md",
    summary:
      "Running executive synthesis: what is solid, where the frameworks genuinely clash, which principles and directions survive scrutiny, iteration by iteration.",
    sections: [],
  },
  {
    num: "3",
    slug: "theory-map",
    title: "Theory Map",
    file: "THEORY_MAP.md",
    summary:
      "The atlas: every framework, its domain of validity, and the reduction/limit structure that relates the theories.",
    sections: [],
  },
  {
    num: "4",
    slug: "domains",
    title: "Domains",
    generated: true,
    summary: "Ten domain deep-dives: the load-bearing frameworks audited one by one.",
    sections: [
      {
        num: "4.1",
        slug: "quantum-mechanics",
        title: "Quantum Mechanics",
        file: "domains/quantum-mechanics.md",
        summary: "The non-relativistic Hilbert-space core: stable formalism, contested interpretation.",
      },
      {
        num: "4.2",
        slug: "quantum-field-theory",
        title: "Quantum Field Theory",
        file: "domains/quantum-field-theory.md",
        summary:
          "QFT's phenomenal empirical success atop partly unproven mathematical foundations — the tension that organizes the page.",
      },
      {
        num: "4.3",
        slug: "general-relativity",
        title: "General Relativity",
        file: "domains/general-relativity.md",
        summary:
          "Gravity as Lorentzian geometry: formalism, exact solutions, singularity theorems, and the precise senses in which the theory breaks down.",
      },
      {
        num: "4.4",
        slug: "classical-mechanics",
        title: "Classical Mechanics",
        file: "domains/classical-mechanics.md",
        summary:
          "Deterministic mechanics in its three equivalent formulations: geometry, symmetry–conservation, integrability and chaos, and where the framework yields.",
      },
      {
        num: "4.5",
        slug: "thermodynamics",
        title: "Thermodynamics",
        file: "domains/thermodynamics.md",
        summary:
          "Energy, heat, work, and entropy, with modern extensions to fluctuation theorems, information thermodynamics, and black-hole thermodynamics.",
      },
      {
        num: "4.6",
        slug: "statistical-mechanics",
        title: "Statistical Mechanics",
        file: "domains/statistical-mechanics.md",
        summary:
          "The bridge from reversible microdynamics to irreversible thermodynamics via probability over microstates and typicality.",
      },
      {
        num: "4.7",
        slug: "cosmology",
        title: "Cosmology",
        file: "domains/cosmology.md",
        summary:
          "The ΛCDM concordance model, its thermal history, live empirical tensions (H0, S8, w(z)), and deep foundational problems.",
      },
      {
        num: "4.8",
        slug: "particle-physics",
        title: "Particle Physics & the Standard Model",
        file: "domains/particle-physics.md",
        summary:
          "The Standard Model as a chiral gauge theory: the most precisely tested theory in science, and by consensus an effective one awaiting completion.",
      },
      {
        num: "4.9",
        slug: "information-theory",
        title: "Information Theory & Physics",
        file: "domains/information-theory.md",
        summary:
          "Four strata of decreasing certainty linking information and physics: Shannon, quantum information, thermodynamics of computation, gravity.",
      },
      {
        num: "4.10",
        slug: "mathematics",
        title: "Mathematics for Physics",
        file: "domains/mathematics.md",
        summary:
          "Mathematics as the substrate of physical theory, audited layer by layer for theorem versus productive heuristic.",
      },
    ],
  },
  {
    num: "5",
    slug: "gaps-and-contradictions",
    title: "Gaps & Contradictions",
    file: "GAPS_AND_CONTRADICTIONS.md",
    summary:
      "The 17 catalogued inter-framework clashes (GC-n), classified by kind — none a demonstrated logical inconsistency.",
    sections: [],
  },
  {
    num: "6",
    slug: "open-problems",
    title: "Open Problems",
    file: "OPEN_PROBLEMS.md",
    summary:
      "Stably-numbered registry (OP-n) of what physics does not know: precise statement, why-it-is-hard, leading approaches, epistemic tag.",
    sections: [],
  },
  {
    num: "7",
    slug: "hypotheses",
    title: "Hypotheses",
    file: "HYPOTHESES.md",
    summary:
      "Refereed candidate research directions (H0–H8) toward background-independent physics, each with a referee verdict — directions, not results.",
    sections: [],
  },
  {
    num: "8",
    slug: "unification-landscape",
    title: "Unification Landscape",
    file: "UNIFICATION_LANDSCAPE.md",
    summary:
      "Deliberately blunt comparative survey of unification and quantum-gravity programs on six axes; ambition trades against testability.",
    sections: [],
  },
  {
    num: "9",
    slug: "unifying-principles",
    title: "Unifying Principles",
    file: "UNIFYING_PRINCIPLES.md",
    summary:
      "Catalogue of candidate truly-foundational organizing principles, ranked and sharply separated from emergent/effective ones.",
    sections: [],
  },
  {
    num: "10",
    slug: "assumptions-ledger",
    title: "Assumptions Ledger",
    file: "ASSUMPTIONS_LEDGER.md",
    summary:
      "Registry (A-n) classifying the assumptions of physical theory along the fundamental ↔ historical-artifact axis.",
    sections: [],
  },
  {
    num: "11",
    slug: "constants-and-scales",
    title: "Constants & Scales",
    file: "CONSTANTS_AND_SCALES.md",
    summary:
      "Constants, unit conventions, the Planck scale, free-parameter counts, and the fine-tuning puzzles.",
    sections: [],
  },
  {
    num: "12",
    slug: "experiment-watchlist",
    title: "Experiment Watchlist",
    file: "EXPERIMENT_WATCHLIST.md",
    summary:
      "Post-saturation tracker of the channels that constrain the program's gate, cores, and target — no channel decides the central wager.",
    sections: [],
  },
  {
    num: "13",
    slug: "notes",
    title: "Research Notes",
    file: "notes/README.md",
    summary:
      "Dated, deep-dive investigation logs — the long-form working memory of the wiki, grouped by iteration, every claim adversarially refereed.",
    sections: [
      // ── Iteration 2 — 2026-06-08 (stress-test the wager) ──
      {
        num: "13.1",
        slug: "2026-06-08-de-sitter-and-emergent-spacetime",
        title: "de Sitter & Emergent Spacetime",
        file: "notes/2026-06-08-de-sitter-and-emergent-spacetime.md",
        group: "Iteration 2 — 2026-06-08 · stress-test the wager",
      },
      {
        num: "13.2",
        slug: "2026-06-08-born-rule-and-quantum-linearity",
        title: "Born Rule & Quantum Linearity",
        file: "notes/2026-06-08-born-rule-and-quantum-linearity.md",
        group: "Iteration 2 — 2026-06-08 · stress-test the wager",
      },
      {
        num: "13.3",
        slug: "2026-06-08-tabletop-quantum-gravity",
        title: "Tabletop Quantum Gravity (BMV)",
        file: "notes/2026-06-08-tabletop-quantum-gravity.md",
        group: "Iteration 2 — 2026-06-08 · stress-test the wager",
      },
      {
        num: "13.4",
        slug: "2026-06-08-entropic-and-emergent-gravity",
        title: "Entropic & Emergent Gravity",
        file: "notes/2026-06-08-entropic-and-emergent-gravity.md",
        group: "Iteration 2 — 2026-06-08 · stress-test the wager",
      },
      {
        num: "13.5",
        slug: "2026-06-08-algebraic-background-independence",
        title: "Algebraic Background-Independence",
        file: "notes/2026-06-08-algebraic-background-independence.md",
        group: "Iteration 2 — 2026-06-08 · stress-test the wager",
      },
      {
        num: "13.6",
        slug: "2026-06-08-unified-program-synthesis",
        title: "Unified-Program Synthesis",
        file: "notes/2026-06-08-unified-program-synthesis.md",
        group: "Iteration 2 — 2026-06-08 · stress-test the wager",
      },
      // ── Iteration 3 — 2026-06-08 (from surveying to attempting) ──
      {
        num: "13.7",
        slug: "2026-06-08-iter3-de-sitter-first-law-attempt",
        title: "Attempt: de Sitter First Law (OP-41)",
        file: "notes/2026-06-08-iter3-de-sitter-first-law-attempt.md",
        group: "Iteration 3 — 2026-06-08 · from surveying to attempting",
      },
      {
        num: "13.8",
        slug: "2026-06-08-iter3-encode-vs-generate-criterion",
        title: "Encode-vs-Generate Criterion (OP-46)",
        file: "notes/2026-06-08-iter3-encode-vs-generate-criterion.md",
        group: "Iteration 3 — 2026-06-08 · from surveying to attempting",
      },
      {
        num: "13.9",
        slug: "2026-06-08-iter3-merge-attempt-operational-substrate",
        title: "Merge Attempt: Operational Substrate",
        file: "notes/2026-06-08-iter3-merge-attempt-operational-substrate.md",
        group: "Iteration 3 — 2026-06-08 · from surveying to attempting",
      },
      {
        num: "13.10",
        slug: "2026-06-08-iter3-redteam-demotion-and-derivation",
        title: "Red-Team: Demotion & Derivation",
        file: "notes/2026-06-08-iter3-redteam-demotion-and-derivation.md",
        group: "Iteration 3 — 2026-06-08 · from surveying to attempting",
      },
      {
        num: "13.11",
        slug: "2026-06-08-iter3-synthesis",
        title: "Iteration-3 Synthesis",
        file: "notes/2026-06-08-iter3-synthesis.md",
        group: "Iteration 3 — 2026-06-08 · from surveying to attempting",
      },
      // ── Iteration 4 — 2026-06-08 (attacks + literature refresh + convergence audit) ──
      {
        num: "13.12",
        slug: "2026-06-08-iter4-ds-first-law-escape",
        title: "dS First-Law SO(d+1,1) Escape",
        file: "notes/2026-06-08-iter4-ds-first-law-escape.md",
        group: "Iteration 4 — 2026-06-08 · attacks, literature refresh, convergence audit",
      },
      {
        num: "13.13",
        slug: "2026-06-08-iter4-dS-firstlaw-SO-family-attempt",
        title: "dS First-Law SO Family (Raw Attempt)",
        file: "notes/2026-06-08-iter4-dS-firstlaw-SO-family-attempt.md",
        group: "Iteration 4 — 2026-06-08 · attacks, literature refresh, convergence audit",
      },
      {
        num: "13.14",
        slug: "2026-06-08-iter4-gpt-type3-resolution",
        title: "GPT on Type III₁: OP-48 Resolution",
        file: "notes/2026-06-08-iter4-gpt-type3-resolution.md",
        group: "Iteration 4 — 2026-06-08 · attacks, literature refresh, convergence audit",
      },
      {
        num: "13.15",
        slug: "2026-06-08-iter4-modular-circularity",
        title: "Modular Circularity",
        file: "notes/2026-06-08-iter4-modular-circularity.md",
        group: "Iteration 4 — 2026-06-08 · attacks, literature refresh, convergence audit",
      },
      {
        num: "13.16",
        slug: "2026-06-08-iter4-literature-refresh",
        title: "Literature Refresh",
        file: "notes/2026-06-08-iter4-literature-refresh.md",
        group: "Iteration 4 — 2026-06-08 · attacks, literature refresh, convergence audit",
      },
      {
        num: "13.17",
        slug: "2026-06-08-iter4-convergence-audit",
        title: "Convergence Audit",
        file: "notes/2026-06-08-iter4-convergence-audit.md",
        group: "Iteration 4 — 2026-06-08 · attacks, literature refresh, convergence audit",
      },
      {
        num: "13.18",
        slug: "2026-06-08-iter4-synthesis",
        title: "Iteration-4 Synthesis",
        file: "notes/2026-06-08-iter4-synthesis.md",
        group: "Iteration 4 — 2026-06-08 · attacks, literature refresh, convergence audit",
      },
      // ── Iteration 5 — 2026-06-08 (closing push → saturation) ──
      {
        num: "13.19",
        slug: "2026-06-08-iter5-op48c-collarfree-composition",
        title: "OP-48c: Collar-Free Composition",
        file: "notes/2026-06-08-iter5-op48c-collarfree-composition.md",
        group: "Iteration 5 — 2026-06-08 · closing push → saturation",
      },
      {
        num: "13.20",
        slug: "2026-06-08-iter5-op44-nonperturbative-crossed-product",
        title: "OP-44: Nonperturbative Crossed Product",
        file: "notes/2026-06-08-iter5-op44-nonperturbative-crossed-product.md",
        group: "Iteration 5 — 2026-06-08 · closing push → saturation",
      },
      {
        num: "13.21",
        slug: "2026-06-08-iter5-op46-lorentzian-nonckv-readout",
        title: "OP-46: Lorentzian Non-CKV Readout",
        file: "notes/2026-06-08-iter5-op46-lorentzian-nonckv-readout.md",
        group: "Iteration 5 — 2026-06-08 · closing push → saturation",
      },
      {
        num: "13.22",
        slug: "2026-06-08-iter5-surviving-dS-routes",
        title: "Surviving dS Routes",
        file: "notes/2026-06-08-iter5-surviving-dS-routes.md",
        group: "Iteration 5 — 2026-06-08 · closing push → saturation",
      },
      {
        num: "13.23",
        slug: "2026-06-08-iter5-synthesis",
        title: "Iteration-5 Synthesis (Saturation)",
        file: "notes/2026-06-08-iter5-synthesis.md",
        group: "Iteration 5 — 2026-06-08 · closing push → saturation",
      },
      // ── Iteration 6 — 2026-06-10 (new-input iteration) ──
      {
        num: "13.24",
        slug: "2026-06-10-iter6-distinguishing-prediction-hunt",
        title: "Distinguishing-Prediction Hunt",
        file: "notes/2026-06-10-iter6-distinguishing-prediction-hunt.md",
        group: "Iteration 6 — 2026-06-10 · new-input iteration",
      },
      {
        num: "13.25",
        slug: "2026-06-10-iter6-generation-construction-survey",
        title: "Generation-Construction Survey",
        file: "notes/2026-06-10-iter6-generation-construction-survey.md",
        group: "Iteration 6 — 2026-06-10 · new-input iteration",
      },
      {
        num: "13.26",
        slug: "2026-06-10-iter6-op44-op48c-levers",
        title: "OP-44 / OP-48c Levers",
        file: "notes/2026-06-10-iter6-op44-op48c-levers.md",
        group: "Iteration 6 — 2026-06-10 · new-input iteration",
      },
      {
        num: "13.27",
        slug: "2026-06-10-iter6-op49-pseudo-entropy-reality",
        title: "OP-49: Pseudo-Entropy Reality",
        file: "notes/2026-06-10-iter6-op49-pseudo-entropy-reality.md",
        group: "Iteration 6 — 2026-06-10 · new-input iteration",
      },
      {
        num: "13.28",
        slug: "2026-06-10-iter6-closed-universe-and-dS-holography",
        title: "Closed Universe & dS Holography",
        file: "notes/2026-06-10-iter6-closed-universe-and-dS-holography.md",
        group: "Iteration 6 — 2026-06-10 · new-input iteration",
      },
      {
        num: "13.29",
        slug: "2026-06-10-iter6-algebraic-frontier",
        title: "Algebraic Frontier 2024–26",
        file: "notes/2026-06-10-iter6-algebraic-frontier.md",
        group: "Iteration 6 — 2026-06-10 · new-input iteration",
      },
      {
        num: "13.30",
        slug: "2026-06-10-iter6-amplitudes-positive-geometry",
        title: "Amplitudes & Positive Geometry",
        file: "notes/2026-06-10-iter6-amplitudes-positive-geometry.md",
        group: "Iteration 6 — 2026-06-10 · new-input iteration",
      },
      {
        num: "13.31",
        slug: "2026-06-10-iter6-background-independent-programs",
        title: "Background-Independent Programs",
        file: "notes/2026-06-10-iter6-background-independent-programs.md",
        group: "Iteration 6 — 2026-06-10 · new-input iteration",
      },
      {
        num: "13.32",
        slug: "2026-06-10-iter6-qg-phenomenology",
        title: "QG Phenomenology",
        file: "notes/2026-06-10-iter6-qg-phenomenology.md",
        group: "Iteration 6 — 2026-06-10 · new-input iteration",
      },
      {
        num: "13.33",
        slug: "2026-06-10-iter6-experiment-refresh",
        title: "Experiment Refresh",
        file: "notes/2026-06-10-iter6-experiment-refresh.md",
        group: "Iteration 6 — 2026-06-10 · new-input iteration",
      },
      {
        num: "13.34",
        slug: "2026-06-10-iter6-synthesis",
        title: "Iteration-6 Synthesis",
        file: "notes/2026-06-10-iter6-synthesis.md",
        group: "Iteration 6 — 2026-06-10 · new-input iteration",
      },
      {
        num: "13.35",
        slug: "2026-06-10-iter7-indefinite-pairing-attempt",
        title: "Indefinite Pairing from Modular Data (the Verdict-Flipper, Executed)",
        file: "notes/2026-06-10-iter7-indefinite-pairing-attempt.md",
        group: "Iteration 7 — 2026-06-10 · the decidable levers",
      },
      {
        num: "13.36",
        slug: "2026-06-10-iter7-op44-orderG2-descent",
        title: "OP-44: The Order-G² Descent",
        file: "notes/2026-06-10-iter7-op44-orderG2-descent.md",
        group: "Iteration 7 — 2026-06-10 · the decidable levers",
      },
      {
        num: "13.37",
        slug: "2026-06-10-iter7-op49-svd-computation",
        title: "OP-49: The SVD Computation",
        file: "notes/2026-06-10-iter7-op49-svd-computation.md",
        group: "Iteration 7 — 2026-06-10 · the decidable levers",
      },
      {
        num: "13.38",
        slug: "2026-06-10-iter7-op48c-fullpair-forcing",
        title: "OP-48c: Full-Pair Forcing",
        file: "notes/2026-06-10-iter7-op48c-fullpair-forcing.md",
        group: "Iteration 7 — 2026-06-10 · the decidable levers",
      },
      {
        num: "13.39",
        slug: "2026-06-10-iter7-synthesis",
        title: "Iteration-7 Synthesis",
        file: "notes/2026-06-10-iter7-synthesis.md",
        group: "Iteration 7 — 2026-06-10 · the decidable levers",
      },
      {
        num: "13.40",
        slug: "2026-06-10-distinguishing-test-hunt",
        title: "Distinguishing-Test Hunt (2024–2026 Literature)",
        file: "notes/2026-06-10-distinguishing-test-hunt.md",
        group: "Supplements — 2026-06-10",
      },
      {
        num: "13.41",
        slug: "2026-06-10-iter8-net-carrier-no-go",
        title: "Net/Family Carrier No-Go (the Verdict-Flipper, Re-Attacked)",
        file: "notes/2026-06-10-iter8-net-carrier-no-go.md",
        group: "Iteration 8 — 2026-06-10 · the net/family levers",
      },
      {
        num: "13.42",
        slug: "2026-06-10-iter8-op44-R1-R2",
        title: "OP-44 R1/R2 to Theorem-Shape",
        file: "notes/2026-06-10-iter8-op44-R1-R2.md",
        group: "Iteration 8 — 2026-06-10 · the net/family levers",
      },
      {
        num: "13.43",
        slug: "2026-06-10-iter8-op49-junction-additivity",
        title: "OP-49 Junction Additivity",
        file: "notes/2026-06-10-iter8-op49-junction-additivity.md",
        group: "Iteration 8 — 2026-06-10 · the net/family levers",
      },
      {
        num: "13.44",
        slug: "2026-06-10-iter8-op48c-X1-singular-states",
        title: "OP-48c X1: Singular Product States",
        file: "notes/2026-06-10-iter8-op48c-X1-singular-states.md",
        group: "Iteration 8 — 2026-06-10 · the net/family levers",
      },
      {
        num: "13.45",
        slug: "2026-06-10-iter8-synthesis",
        title: "Iteration-8 Synthesis",
        file: "notes/2026-06-10-iter8-synthesis.md",
        group: "Iteration 8 — 2026-06-10 · the net/family levers",
      },
      {
        num: "13.46",
        slug: "2026-06-10-iter9-carrier-naturality",
        title: "Carrier Naturality (the Verdict-Flipper Hedge)",
        file: "notes/2026-06-10-iter9-carrier-naturality.md",
        group: "Iteration 9 — 2026-06-10 · the carrier no-go naturality content",
      },
      {
        num: "13.47",
        slug: "2026-06-10-iter9-modular-berry-holonomy",
        title: "Modular-Berry Holonomy (Escape Closed)",
        file: "notes/2026-06-10-iter9-modular-berry-holonomy.md",
        group: "Iteration 9 — 2026-06-10 · the carrier no-go naturality content",
      },
      {
        num: "13.48",
        slug: "2026-06-10-iter9-reverse-weinberg-witten",
        title: "Reverse-Weinberg–Witten = the Carrier Problem",
        file: "notes/2026-06-10-iter9-reverse-weinberg-witten.md",
        group: "Iteration 9 — 2026-06-10 · the carrier no-go naturality content",
      },
      {
        num: "13.49",
        slug: "2026-06-10-iter9-op44-graviton-escape",
        title: "OP-44 R2: Graviton Escape",
        file: "notes/2026-06-10-iter9-op44-graviton-escape.md",
        group: "Iteration 9 — 2026-06-10 · the carrier no-go naturality content",
      },
      {
        num: "13.50",
        slug: "2026-06-10-iter9-synthesis",
        title: "Iteration-9 Synthesis",
        file: "notes/2026-06-10-iter9-synthesis.md",
        group: "Iteration 9 — 2026-06-10 · the carrier no-go naturality content",
      },
      {
        num: "13.51",
        slug: "2026-06-10-iter10-naturality-commutant-gap",
        title: "Net-Naturality Theorem (Closure Attempt Struck)",
        file: "notes/2026-06-10-iter10-naturality-commutant-gap.md",
        group: "Iteration 10 — 2026-06-10 · the commutant-to-generated gap",
      },
      {
        num: "13.52",
        slug: "2026-06-10-iter10-carrier-in-the-gap",
        title: "Carrier in the Gap (None Lives There)",
        file: "notes/2026-06-10-iter10-carrier-in-the-gap.md",
        group: "Iteration 10 — 2026-06-10 · the commutant-to-generated gap",
      },
      {
        num: "13.53",
        slug: "2026-06-10-iter10-op44-R2-D4-coefficient",
        title: "OP-44 R2: The D=4 Coefficient",
        file: "notes/2026-06-10-iter10-op44-R2-D4-coefficient.md",
        group: "Iteration 10 — 2026-06-10 · the commutant-to-generated gap",
      },
      {
        num: "13.54",
        slug: "2026-06-10-iter10-synthesis",
        title: "Iteration-10 Synthesis",
        file: "notes/2026-06-10-iter10-synthesis.md",
        group: "Iteration 10 — 2026-06-10 · the commutant-to-generated gap",
      },
      {
        num: "13.55",
        slug: "2026-06-10-iter11-carrier-bicentralizer",
        title: "Carrier No-Go: Related to Connes' Bicentralizer Problem",
        file: "notes/2026-06-10-iter11-carrier-bicentralizer.md",
        group: "Iteration 11 — 2026-06-10 · the carrier reduction & terminal saturation",
      },
      {
        num: "13.56",
        slug: "2026-06-10-iter11-net-completeness-handles",
        title: "Net-Completeness: Three Handles, One Carrier Gate",
        file: "notes/2026-06-10-iter11-net-completeness-handles.md",
        group: "Iteration 11 — 2026-06-10 · the carrier reduction & terminal saturation",
      },
      {
        num: "13.57",
        slug: "2026-06-10-iter11-terminal-saturation-audit",
        title: "Terminal Analytical Saturation (Audit)",
        file: "notes/2026-06-10-iter11-terminal-saturation-audit.md",
        group: "Iteration 11 — 2026-06-10 · the carrier reduction & terminal saturation",
      },
      {
        num: "13.58",
        slug: "2026-06-10-iter11-synthesis",
        title: "Iteration-11 Synthesis",
        file: "notes/2026-06-10-iter11-synthesis.md",
        group: "Iteration 11 — 2026-06-10 · the carrier reduction & terminal saturation",
      },
      {
        num: "13.59",
        slug: "2026-06-19-iter12-physics-net-bicentralizer-lever",
        title: "Physics-Net Bicentralizer Lever (Retired as Non-Load-Bearing)",
        file: "notes/2026-06-19-iter12-physics-net-bicentralizer-lever.md",
        group: "Iteration 12 — 2026-06-19 · the last levers close; terminal saturation re-confirmed",
      },
      {
        num: "13.60",
        slug: "2026-06-19-iter12-external-math-sweep",
        title: "External-Math Sweep 2023–2026 (No Lever on the Residual)",
        file: "notes/2026-06-19-iter12-external-math-sweep.md",
        group: "Iteration 12 — 2026-06-19 · the last levers close; terminal saturation re-confirmed",
      },
      {
        num: "13.61",
        slug: "2026-06-19-iter12-external-input-sweep",
        title: "Refreshed Terminal-Saturation Audit (Mid-2026 Sweep)",
        file: "notes/2026-06-19-iter12-external-input-sweep.md",
        group: "Iteration 12 — 2026-06-19 · the last levers close; terminal saturation re-confirmed",
      },
      {
        num: "13.62",
        slug: "2026-06-19-iter12-indefinite-metric-carrier-closed",
        title: "The Indefinite-Metric / Krein Carrier Route (Closed-Negative)",
        file: "notes/2026-06-19-iter12-indefinite-metric-carrier-closed.md",
        group: "Iteration 12 — 2026-06-19 · the last levers close; terminal saturation re-confirmed",
      },
    ],
  },
  {
    num: "14",
    slug: "method",
    title: "Method",
    generated: true,
    summary:
      "The machinery that keeps the wiki honest: the evidence standard, the agent schema, and the post-saturation roadmap.",
    sections: [
      {
        num: "14.1",
        slug: "epistemics",
        title: "Epistemics",
        file: "EPISTEMICS.md",
        summary:
          "The binding evidence standard: defines the five epistemic tags and the cardinal rule that speculation never wears the clothes of established fact.",
      },
      {
        num: "14.2",
        slug: "agents",
        title: "Agents",
        file: "AGENTS.md",
        summary:
          "The behavioral schema: how any agent (human or LLM) reads, extends, and lints the wiki — operations, verification protocol, style, vault conventions.",
      },
      {
        num: "14.3",
        slug: "roadmap",
        title: "Roadmap",
        file: "ROADMAP.md",
        summary:
          "Post-saturation watch-list of what to work on next, retaining the record of analytical items attacked and closed.",
      },
    ],
  },
  {
    num: "15",
    slug: "glossary",
    title: "Glossary",
    file: "GLOSSARY.md",
    summary:
      "Precise, cross-linked definitions of the mathematical objects, concepts, and named results used throughout.",
    sections: [],
  },
  {
    num: "16",
    slug: "bibliography",
    title: "Bibliography",
    file: "BIBLIOGRAPHY.md",
    summary:
      "Consolidated real-references-only source list; uncertain details flagged [unverified], never fabricated.",
    sections: [],
  },
  {
    num: "17",
    slug: "changelog",
    title: "Changelog",
    file: "CHANGELOG.md",
    summary:
      "Append-only canonical log of every change and every epistemic promotion/demotion, with reasons, newest first.",
    sections: [
      {
        num: "17.1",
        slug: "log",
        title: "Operations Index",
        file: "log.md",
        summary: "Thin operations index: one line per major operation, pointing into the changelog for detail.",
      },
    ],
  },
];

/** Flat reading order, used for prev/next navigation and static params. */
export const FLAT: ManualEntry[] = CHAPTERS.flatMap((ch) => [
  {
    num: ch.num,
    slug: ch.slug,
    title: ch.title,
    summary: ch.summary,
    file: ch.file,
    generated: ch.generated,
  },
  ...ch.sections,
]);

export function entryBySlug(slug: string): ManualEntry | undefined {
  return FLAT.find((e) => e.slug === slug);
}

export function chapterOf(slug: string): ManualChapter | undefined {
  return CHAPTERS.find((ch) => ch.slug === slug || ch.sections.some((s) => s.slug === slug));
}

/**
 * Map from a wiki-relative markdown path (as it appears in links, normalized
 * lowercase) to the site route. Used by the link-rewriting rehype plugin.
 */
export const LINK_MAP: Record<string, string> = (() => {
  const m: Record<string, string> = {
    "readme.md": "/",
    "index.md": "/",
    "contributing.md": "/contribute",
    "license.md": "/about#license",
    "log.md": "/manual/log",
    "notes/readme.md": "/manual/notes",
    notes: "/manual/notes",
    "notes/": "/manual/notes",
    domains: "/manual/domains",
    "domains/": "/manual/domains",
    "map.canvas": "https://github.com/HKTITAN/universal-physics/blob/main/MAP.canvas",
    "universal-physics-wiki.pdf":
      "https://github.com/HKTITAN/universal-physics/blob/main/universal-physics-wiki.pdf",
  };
  for (const e of FLAT) {
    if (e.file) m[e.file.toLowerCase()] = `/manual/${e.slug}`;
  }
  return m;
})();

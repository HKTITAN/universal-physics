# AGENTS.md — Behavioral Schema for the Physics Research Wiki

**Status:** Stable convention (read this before editing anything).
**Last updated:** 2026-06-08

This file is the **schema / behavioral configuration** for the wiki, in the sense of the persistent-wiki pattern (Karpathy, *llm-wiki.md*): a three-layer system of **raw sources → the wiki → the schema**. This document is the schema layer. It tells any agent (human or LLM) *how* to read, extend, and maintain this knowledge base so that it compounds over time instead of degrading.

The subject is hard — foundational physics toward a possible universal theory — so the process discipline matters as much as the content.

---

## 0. Mission

> Map the best current understanding of physics, locate where it breaks, separate fundamental assumptions from historical artifacts, search for deeper unifying principles, and evaluate — honestly — whether a universal theory is possible. Produce **rigorous, organized, cumulative** knowledge, not a loose essay. End state: either a properly-backed candidate framework, or a clear, reasoned account of why the evidence does not (yet) support one.

Both outcomes are valuable. "We do not know" said precisely is a result.

---

## 1. The three layers

1. **Raw sources** (immutable): the literature — textbooks, papers, data. We do not edit these; we cite them in [BIBLIOGRAPHY.md](BIBLIOGRAPHY.md).
2. **The wiki** (this repository): interlinked markdown that *compiles* understanding once and reuses it, rather than re-deriving on every query.
3. **The schema** (this file + [EPISTEMICS.md](EPISTEMICS.md)): the rules of structure, labeling, and workflow.

---

## 2. Page map and ownership

| Page | Role |
|---|---|
| [README.md](README.md) | Entry point, index, how to navigate |
| [AGENTS.md](AGENTS.md) | This schema/behavior file |
| [EPISTEMICS.md](EPISTEMICS.md) | Evidence tags and labeling rules — **binding** |
| [THEORY_MAP.md](THEORY_MAP.md) | The map of frameworks, their limits and reductions |
| [OPEN_PROBLEMS.md](OPEN_PROBLEMS.md) | Registry of open problems (IDs `OP-n`) |
| [GAPS_AND_CONTRADICTIONS.md](GAPS_AND_CONTRADICTIONS.md) | Tensions between frameworks (IDs `GC-n`) |
| [HYPOTHESES.md](HYPOTHESES.md) | Candidate unifying directions (IDs `Hn`, i.e. H0–H8), with referee verdicts |
| [UNIFICATION_LANDSCAPE.md](UNIFICATION_LANDSCAPE.md) | Critical survey of existing quantum-gravity / unification programs |
| [UNIFYING_PRINCIPLES.md](UNIFYING_PRINCIPLES.md) | Candidate deep principles |
| [ASSUMPTIONS_LEDGER.md](ASSUMPTIONS_LEDGER.md) | Assumptions classified fundamental↔artifact (IDs `A-n`) |
| [CONSTANTS_AND_SCALES.md](CONSTANTS_AND_SCALES.md) | Constants, units, scales, free parameters, naturalness |
| [FINDINGS.md](FINDINGS.md) | Flagship cumulative synthesis (read first) |
| [GLOSSARY.md](GLOSSARY.md) | Definitions of terms |
| [BIBLIOGRAPHY.md](BIBLIOGRAPHY.md) | Real references only |
| [ROADMAP.md](ROADMAP.md) | Prioritized research agenda |
| [CHANGELOG.md](CHANGELOG.md) | Append-only iteration log |
| `domains/*.md` | Deep dossiers: quantum-mechanics, quantum-field-theory, general-relativity, classical-mechanics, thermodynamics, statistical-mechanics, cosmology, particle-physics, information-theory, mathematics |

---

## 3. The three operations (Ingest / Query / Lint)

### Ingest (add knowledge)
1. Read the relevant existing page(s) **first** — do not duplicate. Enrich in place.
2. Apply an epistemic tag (per [EPISTEMICS.md](EPISTEMICS.md)) to every nontrivial claim.
3. Cross-link: every new entity/result links to its home page and back. A claim with no link to a domain page or source is suspect.
4. Give stable IDs to registry items (`OP-n`, `GC-n`, `Hn`, `A-n`) and never reuse a retired ID. *Convention extension (blessed 2026-06-10, regularizing iteration-2→6 practice):* refinements of an existing item append `-Rn` to its ID (e.g. `HYP-dS-NOMIN-R3`); cross-cutting named conjectures/principles that are not registry rows use the `HYP-<SLUG>` / `GAP-<SLUG>` form (e.g. `HYP-CKV-VACUITY`, `HYP-ENCODING-SCREEN`, `GAP-NCG-LORENTZIAN-SIGNATURE`). Named IDs are as permanent as numeric ones; prefer a numeric ID whenever the item is a genuine registry row.
5. New candidate ideas go to [HYPOTHESES.md](HYPOTHESES.md) **only after** they survive the verification protocol (§4). Until then they may be parked in [ROADMAP.md](ROADMAP.md) as a question.
6. Log the change in [CHANGELOG.md](CHANGELOG.md).

### Query (answer a question)
1. Search the wiki before the web; synthesize from pages, with citations.
2. If the wiki is silent or stale, that gap is itself a finding — record it (Lint).
3. Answers inherit the epistemic tag of their weakest load-bearing premise.

### Lint (maintain health) — run periodically
Check for, and fix or flag:
- **Contradictions** between pages (a claim tagged `[ESTABLISHED]` on one page and `[CONTESTED]` on another).
- **Stale claims** — superseded by newer data; demote/annotate and changelog it.
- **Orphans** — pages with no inbound links; wire them in.
- **Missing links** — named results/entities not linked to their page or to [GLOSSARY.md](GLOSSARY.md)/[BIBLIOGRAPHY.md](BIBLIOGRAPHY.md).
- **Overclaiming** — speculative content masquerading as established; retag.
- **Fabrication** — any citation/number/theorem that cannot be traced to a real source: delete or mark `[unverified]`.
- **ID integrity** — no duplicate or dangling IDs.

---

## 4. Verification protocol (the anti-crank gate)

Foundational physics is full of plausible-sounding wrong ideas. Before any hypothesis enters [HYPOTHESES.md](HYPOTHESES.md) as "kept", it must pass an **adversarial referee**:

1. State the claim precisely, including its math.
2. Red-team it: which **no-go theorems** does it have to survive? Standard hurdles include Bell/CHSH, PBR, Kochen–Specker, Coleman–Mandula and Haag–Łopuszański–Sohnius, Weinberg–Witten, Haag's theorem, Reeh–Schlieder, the singularity theorems, the spin–statistics theorem, and unitarity/causality bounds.
3. Identify errors and overclaims; produce a corrected/refined statement.
4. Assign severity (none/minor/major/fatal). `fatal` ⇒ not kept (moved to a "Rejected" section with the reason — we keep the corpse and the cause of death).
5. Record the verdict alongside the hypothesis.

A candidate that "explains everything and predicts nothing" fails by construction: with no distinguishing prediction it is not yet physics.

---

## 5. Style and rigor

- Begin each page with an H1, a `Status:` line, and `Last updated:`.
- Use real LaTeX math (`$...$`, `$$...$$`). Prefer an equation to a paragraph of prose when it is more precise.
- Match the technical register of a graduate text; define jargon in [GLOSSARY.md](GLOSSARY.md).
- Be concrete about *where* a framework holds (scales, regimes) — see [CONSTANTS_AND_SCALES.md](CONSTANTS_AND_SCALES.md).
- Prefer fewer correct statements to many sloppy ones.

---

## 6. Orchestration note (how this wiki is built and extended)

This is a long-horizon, fan-out-friendly project. Recommended pattern for substantive iterations:
- **Understand**: parallel domain readers → structured dossiers (`domains/*.md`).
- **Analyze**: cross-cutting agents (contradictions, assumptions, principles, unification) fed *all* dossiers.
- **Hypothesize**: multiple independent lenses (information/emergent, geometric/algebraic, discrete/computational), then merge.
- **Verify**: adversarial referees, one per claim (§4).
- **Author/Lint**: write pages, then run the Lint pass.

Keep the human in the loop between phases. Token cost is secondary to correctness.

---

## See also
- [EPISTEMICS.md](EPISTEMICS.md) · [README.md](README.md) · [ROADMAP.md](ROADMAP.md) · [CHANGELOG.md](CHANGELOG.md)

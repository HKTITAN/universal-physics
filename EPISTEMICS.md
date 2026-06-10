---
title: Epistemics — Standards of Evidence and Labeling
type: schema
tags: [schema, epistemic-tags, evidence-standards]
updated: 2026-06-08
---

# Epistemics — Standards of Evidence and Labeling

**Status:** Stable convention (governs the whole wiki).
**Last updated:** 2026-06-08

This page defines *how strongly* any statement in this wiki is claimed to be true. It is the most important meta-page: a research program toward a universal theory lives or dies on its honesty about what is known, what is inferred, and what is guessed. Every other page is required to use the conventions below.

> **The cardinal rule:** Never let a *speculative* idea wear the clothes of an *established* fact. Overclaiming is the characteristic failure mode of "theory of everything" work, and it is treated here as a defect, not a flourish.

---

## 1. The five epistemic tags

Every nontrivial claim carries exactly one inline tag.

| Tag | Meaning | Test for using it |
|---|---|---|
| `[ESTABLISHED]` | Experimentally confirmed to high significance, **or** rigorously proven inside an accepted framework; broad expert consensus. | "Would the overwhelming majority of working physicists stake their reputation on this?" |
| `[INFERENCE]` | Well-motivated, widely accepted reasoning, not yet *directly* confirmed. A strong bet, not a fact. | "Is this the standard conclusion of careful reasoning, while still logically defeasible by future data?" |
| `[SPECULATIVE]` | Plausible and principled, but lacking decisive evidence; a minority or research-frontier position. | "Is there a real argument for it, but no experiment that forces it?" |
| `[OPEN]` | Genuinely unresolved; the honest answer is *we do not know*. | "Is there active, undecided disagreement or simply no answer?" |
| `[CONTESTED]` | Competent experts actively disagree, with no consensus. | "Do serious camps hold incompatible views?" |

Tags may be applied to a sentence, a clause, or a whole paragraph (stated once at the top of the paragraph). When a single sentence mixes a fact and an inference, split it.

### Examples (calibration)
- General relativity predicts gravitational waves, now directly detected. `[ESTABLISHED]`
- Dark matter is a particle (rather than a modification of gravity). `[INFERENCE]` — the *gravitational* evidence for missing mass is `[ESTABLISHED]`; that it is a *particle* is the leading inference, not yet confirmed.
- Spacetime geometry is emergent from entanglement. `[SPECULATIVE]`
- The correct interpretation of quantum mechanics. `[CONTESTED]`
- The mechanism that sets the neutrino mass scale. `[OPEN]`

---

## 2. Confidence (optional secondary signal)

Where useful, attach a coarse confidence to `[INFERENCE]`/`[SPECULATIVE]` items: **high / medium / low / very-low**. This is a subjective Bayesian credence, not a frequentist statistic. Use it sparingly and never to dress up a guess — a "high-confidence speculation" is still a speculation.

---

## 3. Assumption classification (used in `ASSUMPTIONS_LEDGER.md`)

Assumptions are graded on a separate axis — not *how true* but *how load-bearing and how revisable*:

| Class | Meaning |
|---|---|
| `fundamental` | Appears irreducible; relaxing it breaks the theory's coherence or contradicts robust data. |
| `plausibly-fundamental` | Looks basic, but no proof it could not be derived from something deeper. |
| `historical-artifact` | Adopted for historical/pedagogical reasons; may be a contingent choice, not a necessity. |
| `mathematical-convenience` | A simplifying technical choice (smoothness, separability, a particular gauge) that buys tractability. |
| `untested-empirically` | Assumed because it has never been probed in the relevant regime, not because it is confirmed. |

A central research activity of this wiki is moving assumptions *down* this list — turning supposed bedrock into a derivable or contingent feature.

---

## 4. Sourcing rules

1. **No fabrication.** Never invent a citation, an experimental number, a theorem, or a date. A missing reference is acceptable; a fake one is a disqualifying error.
2. **Real sources only.** Cite canonical textbooks and genuinely landmark results. If unsure of exact bibliographic detail, give author + title + approximate year and mark `[unverified]`.
3. **Numbers carry context.** Quote measured quantities with their nature (e.g., that the "10^120" cosmological-constant figure is *regularization-dependent*, see [CONSTANTS_AND_SCALES.md](CONSTANTS_AND_SCALES.md)). A number without its caveat is a half-truth.
4. **Folklore is flagged.** Widely repeated claims that are actually subtle or wrong (e.g., loose statements of Haag's theorem, "energy is not conserved in GR") must be stated carefully, not parroted.

---

## 5. Distinguishing four things that get conflated

A recurring discipline here, especially in [GAPS_AND_CONTRADICTIONS.md](GAPS_AND_CONTRADICTIONS.md):

- **Logical inconsistency** — two accepted statements cannot both be true. (Rare. Most "contradictions" are not this.)
- **Domain-of-validity mismatch** — two frameworks disagree only where neither is trusted (e.g., GR vs QFT at the Planck scale). Not a paradox; a frontier.
- **Unsolved-but-consistent problem** — no known inconsistency, just no derivation/solution yet (e.g., the value of a parameter).
- **Conceptual tension** — the frameworks are formally compatible but rest on jarringly different worldviews (e.g., block-universe GR vs the apparent dynamical collapse in QM).

Mislabeling a frontier as a paradox is itself an epistemic error.

---

## 6. How claims change status

Status is not permanent. A claim moves between tags as evidence and argument accumulate. Every promotion/demotion is logged in [CHANGELOG.md](CHANGELOG.md) with a one-line reason. The wiki is **cumulative**: we revise pages in place and record *why* in the changelog, rather than starting over.

---

## See also
- [AGENTS.md](AGENTS.md) — the workflow rules that enforce these standards
- [ASSUMPTIONS_LEDGER.md](ASSUMPTIONS_LEDGER.md) — the assumption-classification register
- [GAPS_AND_CONTRADICTIONS.md](GAPS_AND_CONTRADICTIONS.md) — where the four-way distinction is applied
- [README.md](README.md) — project overview

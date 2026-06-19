---
title: Universal Physics — A Research Wiki
type: index
tags: [index, physics-wiki, navigation, unification]
updated: 2026-06-19
---

# Universal Physics

> An LLM-maintained, adversarially-refereed research wiki driving toward — and rigorously bounding — a universal theory of physics.

[![Website](https://img.shields.io/badge/site-universal--physics.khe.money-blue)](https://universal-physics.khe.money)
[![Book (PDF)](https://img.shields.io/badge/book-PDF-crimson)](universal-physics-book.pdf)
[![Verdict](https://img.shields.io/badge/verdict-PARTIAL%20%C2%B7%20not--yet--physics-orange)](CONCLUSION.md)
[![Status](https://img.shields.io/badge/iteration-13%20%C2%B7%20saturated-lightgrey)](CONCLUSION.md)
[![License](https://img.shields.io/badge/license-CC%20BY--SA%204.0%20%2B%20MIT-green)](LICENSE.md)

---

## What this is

This repository is a serious, cumulative, self-critical knowledge base — an **LLM-maintained research wiki** built by **Harshit Khemani** (research direction) and **Claude** (Anthropic; research labor, via multi-agent workflows) — whose single goal is to map the best current understanding of fundamental physics, find exactly where it breaks, separate genuinely fundamental assumptions from historical artifacts, search for deeper unifying principles, and evaluate **honestly** whether a universal theory of physics is possible. It is **not** an essay arguing for a pet "theory of everything"; every claim is epistemically tagged, every hypothesis is run through an adversarial anti-crank referee, and the explicit, equally-valuable success condition is *either* a candidate framework with real backing *or* a precise, reasoned account of why the evidence does not yet support one. Knowledge is **compiled once** into interlinked markdown that compounds, rather than re-derived on every query.

---

## The standing verdict

After thirteen iterations, the verdict has been stable for **12 consecutive iterations** and the analytical program has reached **terminal analytical saturation** — continued reasoning now mostly re-derives the same map; only new external input can move the result.

**A single universal theory of physics is *not forbidden and not delivered.***

- **PARTIAL coherence.** There is not one unified program but two internally-coherent ones — *geometry-from-algebra* and *is-the-quantum-framework-final* — joined only by thin bridges. The tempting "it's all information" fusion is refused.
- **Encodes, does not generate.** The most developed direction — *causal/algebraic/entanglement structure precedes metric geometry* — **encodes** geometry without yet **generating** it. Every load-bearing result is conceded by its own architects to presuppose a fixed background with a Killing/conformal symmetry.
- **Not yet physics.** The central wager has **no distinguishing experimental test even in principle**. By this wiki's own anti-crank standard it is a sharp, coherent research *strategy*, not a result.
- **Not forecastable.** The object-level question — *is there a final theory, and is it this one?* — is gated less by the ~15-order-of-magnitude energy desert than by the absence of any experiment that bears on the central wager.

**The single open gate** is the **carrier problem**: derive an algebra-compatible, *localized* (fiberwise) indefinite `(n,n)` pairing from modular data alone — installing no symmetry, η-form, foliation, twist, indefinite-pairing axiom, or signature-valued template by hand. Five independent routes converge on the same closing step. A construction meeting the full spec would flip the headline from "encodes" to "generates" and reopen the capstone. As of iteration 13, no carrier closes, no reverse-Weinberg–Witten witness exists, and the external channels (notably Connes' bicentralizer problem, re-confirmed open in general) remain dry.

➡️ **Read the full reasoning in [CONCLUSION.md](CONCLUSION.md) — the capstone verdict.**

---

## How it is built — the llm-wiki structure

This wiki follows the persistent **LLM-maintained wiki** pattern (Karpathy, *llm-wiki.md*): a three-layer system.

| Layer | What it is | Where it lives |
|---|---|---|
| **Raw sources** | The literature — textbooks, papers, data. Immutable; only cited. | [BIBLIOGRAPHY.md](BIBLIOGRAPHY.md) |
| **The wiki** | Interlinked markdown that *compiles* understanding once and reuses it. | this repository |
| **The schema** | The rules of structure, labeling, and workflow. | [AGENTS.md](AGENTS.md) + [EPISTEMICS.md](EPISTEMICS.md) |

Two disciplines hold the whole thing together:

- **Epistemic tags.** Every nontrivial claim wears exactly one of `[ESTABLISHED]` · `[INFERENCE]` · `[SPECULATIVE]` · `[OPEN]` · `[CONTESTED]`. Speculation never wears established clothes. See [EPISTEMICS.md](EPISTEMICS.md).
- **The anti-crank referee protocol** ([AGENTS.md](AGENTS.md) §4). Before any hypothesis is "kept", it is stated precisely (with its math), red-teamed against the relevant no-go theorems (Weinberg–Witten, Coleman–Mandula/HLS, Haag, Bell/PBR/Kochen–Specker, Reeh–Schlieder, the singularity theorems, unitarity/causality bounds) and against this wiki's own closures, then assigned a severity (none/minor/major/fatal — `fatal` ⇒ rejected, with the corpse and the cause of death kept). A candidate that *explains everything and predicts nothing* fails by construction.

Work proceeds through three operations — **Ingest** (add knowledge, enrich in place, tag, cross-link, log), **Query** (search the wiki before the web; answers inherit their weakest premise's tag), and **Lint** (hunt contradictions, stale claims, orphans, overclaiming, fabrication, ID integrity).

---

## Repository map

**Start here**

| Page | What it is |
|---|---|
| [CONCLUSION.md](CONCLUSION.md) | **The capstone verdict.** Read first. |
| [FINDINGS.md](FINDINGS.md) | Running executive synthesis, iteration by iteration. |
| [THEORY_MAP.md](THEORY_MAP.md) | Every framework, its math, domain of validity, reductions. |
| [GAPS_AND_CONTRADICTIONS.md](GAPS_AND_CONTRADICTIONS.md) | Where the frameworks clash, with the technical root of each. |
| [EXPERIMENT_WATCHLIST.md](EXPERIMENT_WATCHLIST.md) | The empirical channels that gate the object-level question. |

**Core pages**

| Page | Role |
|---|---|
| [AGENTS.md](AGENTS.md) | Behavioral schema — how to read, extend, and maintain the wiki |
| [EPISTEMICS.md](EPISTEMICS.md) | Evidence tags and labeling rules — **binding** |
| [OPEN_PROBLEMS.md](OPEN_PROBLEMS.md) | Open-problems registry (`OP-n`) |
| [HYPOTHESES.md](HYPOTHESES.md) | Candidate unifying directions, refereed (`Hn`) |
| [UNIFICATION_LANDSCAPE.md](UNIFICATION_LANDSCAPE.md) | Critical survey of unification / quantum-gravity programs |
| [UNIFYING_PRINCIPLES.md](UNIFYING_PRINCIPLES.md) | Candidate deep principles |
| [ASSUMPTIONS_LEDGER.md](ASSUMPTIONS_LEDGER.md) | Assumptions: fundamental ↔ artifact (`A-n`) |
| [CONSTANTS_AND_SCALES.md](CONSTANTS_AND_SCALES.md) | Constants, units, scales, free parameters, naturalness |
| [GLOSSARY.md](GLOSSARY.md) · [BIBLIOGRAPHY.md](BIBLIOGRAPHY.md) | Definitions · real references only |
| [ROADMAP.md](ROADMAP.md) · [CHANGELOG.md](CHANGELOG.md) | Research agenda · append-only iteration log |

**Directories**

| Path | Contents |
|---|---|
| [`domains/`](domains/) | Deep dossiers: quantum mechanics, QFT, general relativity, classical mechanics, thermodynamics, statistical mechanics, cosmology, particle physics, information theory, mathematics |
| [`notes/`](notes/README.md) | Forward-research iteration logs (the adversarial attack tracks, iteration by iteration) |
| `book/` | Source for the typeset PDF book |
| `site/` | Source for the website |

---

## Read it elsewhere

- **Website** — [universal-physics.khe.money](https://universal-physics.khe.money): the full wiki as a technical reference manual (built from `site/`).
- **Book (PDF)** — [universal-physics-book.pdf](universal-physics-book.pdf): *Universal Physics*, the properly typeset edition (6×9 in; typeset through iteration 13; built from `book/`).
- **Vault** — open this repo directly in [Obsidian](https://obsidian.md): frontmatter, graph-view color groups, the [index.md](index.md) catalog, and [MAP.canvas](MAP.canvas) are configured.

---

## How to read this

- **Want the bottom line?** [CONCLUSION.md](CONCLUSION.md), then [FINDINGS.md](FINDINGS.md).
- **Want the map of physics?** [THEORY_MAP.md](THEORY_MAP.md) and the [`domains/`](domains/) dossiers.
- **Want the open frontier?** [OPEN_PROBLEMS.md](OPEN_PROBLEMS.md), [HYPOTHESES.md](HYPOTHESES.md), [EXPERIMENT_WATCHLIST.md](EXPERIMENT_WATCHLIST.md).
- **Want to see the work?** The iteration logs under [`notes/`](notes/README.md).

Throughout, trust the tags: `[ESTABLISHED]` is load-bearing fact; `[SPECULATIVE]` and `[OPEN]` are flagged as such on purpose.

---

## How to contribute

Contributions are invited — from typo fixes to full attack tracks on the open problems. **The bar is proper backing, not credentials.** See **[CONTRIBUTING.md](CONTRIBUTING.md)** for the full anti-crank protocol; in short:

1. **Tag every nontrivial claim** with exactly one epistemic tag.
2. **Never fabricate a citation, number, theorem, or arXiv ID** — a missing reference is acceptable, a fake one is disqualifying.
3. **Red-team your own claim** against the relevant no-go theorems and this wiki's own closures.
4. **Enrich pages in place**, cross-link, and log every change in [CHANGELOG.md](CHANGELOG.md).

The analytical program is saturated; the verdict moves only on **new input**. Help is most valuable on the carrier problem (the verdict-flipper), the named decidable analytical levers (see [CONCLUSION.md](CONCLUSION.md) §5), and watchlist maintenance (new bounds in any channel, with citations).

---

**Authors:** Harshit Khemani + Claude (Anthropic) · **License:** [CC BY-SA 4.0 (content) + MIT (code)](LICENSE.md) · **Site design** inspired by Dan Hollick's [Making Software](https://makingsoftware.com)

---
title: Changelog
type: schema
tags: [schema, changelog, provenance]
---

# Changelog

Append-only log of how the wiki evolves. Each entry records what changed and **why**, including any promotion/demotion of a claim's epistemic tag (see [EPISTEMICS.md](EPISTEMICS.md)). Newest first.

---

## 2026-06-10 — Publishing pipeline (no physics content changed)

**Scope:** Infrastructure/presentation only — zero research claims altered; all page bodies byte-identical except where noted.
- **Vault formatting** (per the Karpathy llm-wiki pattern): YAML frontmatter (`title`/`type`/`tags`/`updated`) prepended to all 63 pages; [index.md](index.md) content catalog and [log.md](log.md) operations index created; graph-view color groups + physics tuned in `.obsidian/graph.json`; `MAP.canvas` overview map; vault conventions documented in [AGENTS.md](AGENTS.md) §2 (and the named-ID convention blessed in §3).
- **Website** (`site/`): Next.js technical-reference-manual edition of the wiki (72 static pages, six SVG figure plates, numbered 17-chapter structure, `/contribute` + `/about`), deployed at universal-physics.khe.money / universal-physics.vercel.app. Design inspired by Dan Hollick's *Making Software*; reviewed against the design-engineering checklist.
- **Book** (`book/` → `universal-physics-book.pdf`): *Universal Physics — A Map of Why a Final Theory Is Open — and What Would Close It*, first edition June 2026 — 6×9in, ~620 pp, 29 chapters in 6 parts, new preface + part openers (the only newly-written prose; editorial, claim-free), Paged.js typeset with running heads and a paged TOC. **Supersedes and replaces** the old `universal-physics-wiki.pdf` flat compilation (removed; preserved in git history).
- **Repo:** published publicly at github.com/HKTITAN/universal-physics; LICENSE.md (CC BY-SA 4.0 content + MIT code), CONTRIBUTING.md (the verification protocol as the contribution bar; open levers listed); contributions invited.

---

## 2026-06-10 — Iteration 6: new-input iteration (verdict unchanged 5th consecutive time; hedges restructured)

**Scope:** First post-saturation iteration — deliberate injection of new 2023–2026 input rather than further reasoning. 22 agents; 10 adversarially-refereed tracks (6 research: closed-universe/dS holography, algebraic frontier, amplitudes/positive geometry, background-independent programs, QG phenomenology, experiment refresh; 4 attack: distinguishing-prediction hunt, generation-construction survey, OP-44/OP-48c levers, OP-49 pseudo-entropy reality). ~90 findings, **all kept, zero fatal**. Filed under [notes/](notes/) (iter6-*).

**Verdict line:** Standing verdict **UNCHANGED at the headline level for the fifth consecutive iteration** (PARTIAL coherence / encodes-not-generates / wager not-yet-physics / object-level not forecastable) — with **hedge-level restructuring**: one hedge shrunk (OP-48c horn C partially discharged), one residual lever closed negative (OP-49 → near-no-go), one new named hedge added (HYP-ENCODING-SCREEN — the §7 no-test claim is now a corollary of encode-not-generate and inherits the OP-46 MEDIUM hedge), and the obstruction broadened from three to four readout families.

**Outcomes:**
- *Distinguishing-prediction hunt (A1)* — CONCLUSION §7's no-test sentence survived a literature-wide overturn attempt and was **upgraded to a corollary** of the encode-not-generate obstruction (ENCODING-SCREEN; a class test would need a "reverse Weinberg–Witten" theorem, none exists); referee weakened "iff" → "only if" and pinned the inherited MEDIUM hedge. GQuEST identified as the missing decision-grade watchlist channel — for minimal-graviton-EFT IR noise vs exotic UV-IR mixing, *not* the wager.
- *Generation-construction survey (A2)* — causal fermion systems = **fourth readout family**, closing at the same signature-installation step (the (≤n,≤n) axiom as relocated Krein η; necessity lemma derived + numerically checked twice); new **selection-type** pattern (Lee 2020; Bermudez 2025); HYP-CKV-VACUITY-R3 with two new smuggle-list items; §8 precision repair (Lee = nearest sketch, fails the spec); open target compressed to "derive the indefinite pairing from modular data."
- *OP-44/OP-48c levers (A3 + R2)* — OP-44 interior restructured: JRS no-commutant theorem + crossed-product rigidity; DEHK order-G_N² obligation located (quadratic boost constraints); KLS-II/CF survival side theorem-grade at linearized order incl. non-stationary GSL + QFC proof; Kudler-Flam–Witten "survives-after-averaging" → trichotomy becomes **four options**; N* still theorem-free both sides. OP-48(c) horn C **partially discharged**: theorem-shaped under the full-pair reading (+ uniform Bell gap 1−1/√2); residue = GPT formalization choice + the multipartite III₁-embezzlement composition alternative (a proven *spectrum*, not a binary — referee correction).
- *OP-49 (A4)* — **closed-negative at near-no-go grade** (conditional exclusion, OP-41 house language): reality forces triviality — the dS/CFT linearized-Einstein content lives entirely in Im S (Doi et al. PRL 130, 031601; Guo–He–Zhang reality theorem; unitary-AdS mirror 2511.17098). Three named residuals (exceptional points; SVD-entropy first law; horn-(ii) protocol-class). Absorbed the iter-5 Re/Im inversion correction (R6A4-F2).
- *Closed universe + dS holography (R1)* — the 2024–2026 dim H=1 debate mapped; **OP-50 added [CONTESTED]**; observer-rescue = independent path-integral analogue of OP-48(c) structure (reinforces, cannot harden); HYP-dS-CARDINALITY-R1 extended (QRF entropy-relativity; HWZ-to-dS; Maldacena phase-not-coefficient; Zigdon string-side absence): η input or absent, never output. Six JHEP refs flagged [unverified].
- *Amplitudes (R3)* — surfaceology dissolves the planar/SUSY bounds (colored, massless); Rodina theorem entered **with the hypotheses correction** (zeros fix amplitudes *within a local ansatz* — not "locality as derived"); the no-positive-geometry-for-gravity bound confirmed structural; H5 confidence low → low-to-medium. Five JHEP refs flagged [unverified].
- *Other programs (R4)* — two **new landscape entries**: Oppenheim CQ gravity (decoherence–diffusion trade-off; ~15-order squeeze; Hotta–Murk–Terno "QG in disguise" counter [CONTESTED]) and the swampland dark dimension (micron ISL falsifier; DESI fit [CONTESTED]; KKLT candidate-vacua status note). Six stale-fixes (Hauptvermutung split; everpresent-Λ CMB-disfavored + no-DESI-confrontation gap; GFT mean-field; CDT–FRG bridge; Lorentzian spin-foam numerics; quantum-OS phenomenology). Both new entries carry distinguishing tests — sharpening the wager's not-yet-physics demotion by contrast.
- *QG phenomenology (R5)* — GQuEST/VZ chain verified end-to-end; the chain re-imports η=1/4G (extends HYP-dS-CARDINALITY-R1 to a phenomenological chain); CQ squeezed hard (ultralocal-continuous dead; **asymmetric gate-closure route** recorded — the gate may close from the classical side before BMV); DSW deflated by Biggs–Maldacena; Aziz–Howl trending dead on corrected (two-author-group) evidence; 2604.16276 verified real (upgrades the tabletop note flag).
- *Experiment refresh (R6)* — all standing numbers re-verified; **w(z) decision point compresses to 2027** (DESI 5-yr; Euclid DR1 2026-10-21; Roman launch 2026-08-30; LSST underway); four watchlist rows added/changed (GQuEST; CQ; GW strong-field nulls incl. GW250114 area-law confirmation arXiv:2509.08054 = PRL 135, 111403; neutrino-mass cosmology); matter-wave record 1.7×10⁵ Da, μ=15.5; LHAASO linear LIV beyond Planck; ~4σ LHCb flavor anomaly; S8 eased on the KiDS axis (DES Y6 caveat), H0 persists.

**Registry deltas:** OP-50 (new, [CONTESTED]); OP-49 → near-no-go/resolved-negative (conditional); OP-44 statement updated (four-option verdict space; order-G_N² obligation named); OP-48(c) horn-C re-worded (partially discharged); HYP-CKV-VACUITY-R3; HYP-dS-CARDINALITY-R1 extension; HYP-ENCODING-SCREEN (new, [INFERENCE], third hedge); HYP-GIE-DISCRIM complication (mass-independent-phase claim); H5 scope/confidence rewrite; CONCLUSION §4/§5/§6/§7/§8 amendments + dated 2026-06-10; EXPERIMENT_WATCHLIST caveat rewritten + 4 new rows + 4 row edits; UNIFICATION_LANDSCAPE 2 new entries + 6 stale-fixes; BIBLIOGRAPHY iteration-6 block (with the [unverified] ledger: 6 R1 + 5 R3 JHEP refs and assorted riders).

**Retag pairings (every retag has its line here):**
- OP-49 `[OPEN]` → **near-no-go / resolved-negative (conditional)** — reason: reality⇒triviality exclusion (A4; Guo–He–Zhang + Doi et al. + 2511.17098 mirror), three named residuals.
- OP-48(c) horn C `INFERENCE` → **INFERENCE, high / theorem-shaped under the full-pair reading** — reason: GNS + split-inclusion equivalence assembly (A3 R6-F5), residue relocated to formalization choice.
- CONCLUSION §7 no-test claim: standalone observation → **corollary of encode-not-generate carrying the OP-46 MEDIUM hedge** (third hedge; "iff"→"only if") — reason: ENCODING-SCREEN (A1 R6-F7 + referee).
- H5 confidence **low → low-to-medium** (still [SPECULATIVE]) — reason: surfaceology scope expansion + Rodina-within-a-local-ansatz theorem (R3, with the referee hypotheses correction).
- OP-21 "mild tension" → **~4σ single-channel anomaly, interpretation [CONTESTED]** — reason: LHCb 2512.18053 / PRL 2026.
- OP-18 single verdict → **split verdict** (H0 persists ~5σ [reported]; S8 eased on KiDS axis, DES Y6 caveat [CONTESTED]) — reason: KiDS-Legacy 2503.19441/2 + 2602.12238.
- notes/2026-06-08-tabletop-quantum-gravity.md: arXiv:2604.16276 `[unverified]` → **verified real** (R5-F7); its "~10⁻¹³ d" figure stays [unverified].
- notes/2026-06-08-iter5-surviving-dS-routes.md: Re/Im parenthetical **corrected** (divergent region-dependent part is imaginary; finite universal part is real) — reason: A4 R6A4-F2 vs PRL 130, 031601.
- iter-4 literature-refresh gloss on 2601.07910 ("incremental, action=none") → **superseded** (R2-F1: nontrivial robustness result).

---

## 2026-06-08 — Iteration 5: closing analytical push → ANALYTICAL SATURATION + capstone

**Scope:** Four web-verified attack/route tracks (OP-48c, OP-44, the OP-46 Lorentzian non-CKV readout, the two surviving dS routes) + synthesis (23 agents). The closing push: it attacked the finite named list iteration 4 said would saturate the question. **Standing verdict unchanged for the fourth consecutive iteration** (PARTIAL / encodes-not-generates / not-yet-physics). Filed under [notes/](notes/) (iter5-*).

**Outcomes:**
- *OP-46 (the designated verdict-flipper)* — **executed; did NOT flip.** The modular-Berry / kinematic-space readout produced the **first emergent Lorentzian metric** in the survey (Huang–Ma dS₂, arXiv:2003.12252), crossing the signature barrier — **but the signature is inherited from the symmetric vacuum, not generated.** "Encodes-not-generates" is now a **readout-independent** obstruction (closes identically across all three known readouts). HYP-CKV-VACUITY upgraded toward an effective no-go (MEDIUM hedge: open only for a hypothetical no-symmetry readout, none of which exists).
- *OP-48(c)* — **settled as a clean conditional no-go**: "collar-free + state-independent" and "singles out QM" are mutually exclusive on a single Type III₁ factor (van Luijk embezzlement κ_max=0 vs Type-I κ_max=2). The QM-selecting axiom coincides with the geometry-importing input.
- *OP-44/OP-CP1* — **sharpened to a regime boundary** $N_\ast\sim R/2GE_f$: Type III₁-for-any-Λ is a leading-order/kinematic input, not a fixed nonperturbative core; formally open (no theorem either side) — the sole residual analytical lever.
- *Surviving dS routes* — **both fail**: pseudo-entropy inherits non-unitarity; Jacobson-in-CLPW re-imports η. Root (HYP-dS-CARDINALITY-R1): the area-entropy coefficient is an input, not an output, in every route. New sub-problem OP-dS-PSEUDO-REALITY.

**Saturation declared + capstone written.** The named list is settled and the verdict-flipping lever did not flip → **analytical saturation reached** (per the iteration-4 criterion). Created the capstone **[CONCLUSION.md](CONCLUSION.md)** (converged verdict + two explicit hedges + residual levers) and the standing **[EXPERIMENT_WATCHLIST.md](EXPERIMENT_WATCHLIST.md)** (the four empirical channels — none of which tests the central wager). README now points to CONCLUSION.md as the first read; ROADMAP flagged as post-saturation watch-list mode.

**Registry deltas:** HYP-CKV-VACUITY (readout-independent upgrade), HYP-dS-CARDINALITY-R1, the OP-48c conditional-no-go refinement, OP-dS-PSEUDO-REALITY (new); folded into HYPOTHESES.md and OPEN_PROBLEMS.md.

---

## 2026-06-08 — Documentation propagation (iteration-3 red-team fixes → iteration-2 synthesis note)

Closed three propagation gaps flagged by the iteration-4 convergence audit (item `GAP-FROEB-CITATION` and siblings), where iteration-3 red-team fixes had reached `FINDINGS.md` / `ASSUMPTIONS_LEDGER.md` / `BIBLIOGRAPHY.md` but **not** `notes/2026-06-08-unified-program-synthesis.md`, leaving the wiki internally inconsistent. Documentation-consistency only — **no physics conclusions changed**:
- **Heuristic-not-program:** re-labeled "demotion-and-derivation" from a "falsifiable program" to a research **heuristic** (its falsifiable content lives only in the object-level deliverables — OP-41, OP-44, the BMV $m^2$-vs-$m^3$ test, collapse bounds) in the synthesis note's REG-SYNTH-1 and Verdict, consistent with `FINDINGS.md` and the iteration-3 synthesis.
- **Citation spelling:** synthesis-note "Caves-Fuchs-Renner-Schack" → canonical **Caves–Fuchs–Manne–Renes** (*Found. Phys.* **34**, 193, 2004), matching `BIBLIOGRAPHY.md`.
- **Type III₁ shorthand:** annotated "Type III₁ for any Λ" with **(undressed, $G_N=0$)** in the synthesis note (REG-SYNTH-1) and `FINDINGS.md`, distinguishing the [ESTABLISHED] undressed-net fact from the [OPEN] dressed-algebra nonperturbative fate (Giddings).
- **Fröb byline:** confirmed (fresh grep) that no genuine "Forste" mis-citations remain — the iteration-3 occurrences (synthesis note + `OPEN_PROBLEMS.md`) were corrected in the prior pass; the only remaining "Forste" strings are *intentional correction-references* inside the iteration-4 notes. Author standardized as **Fröb** (the canonical arXiv/Springer umlaut spelling) wiki-wide; "Froeb" is the equivalent ASCII transliteration of the same author.

---

## 2026-06-08 — Iteration 4: attacks + literature refresh + convergence audit (convergence confirmed)

**Scope:** Three attack tracks + a web-verified literature refresh + a convergence audit + synthesis (29 agents). Standing verdict **unchanged for the third consecutive iteration** — PARTIAL coherence; geometry-from-algebra encodes-not-generates; wager not-yet-physics — but the central diagnosis is now backed by a much harder argument. Filed under [notes/](notes/) (iter4-*).

**Outcomes:**
- *dS first-law escape (OP-41)* — the one un-foreclosed iteration-3 escape (an $SO(d+1,1)$ family of static-patch modular Hamiltonians) was **executed and failed**: decisive **dimension count** (finite isometry orbit → ≤10 global Killing-charge constraints, cannot Radon-invert to the infinite-dimensional local $\delta G_{\mu\nu}$; no "radius modulus"), plus geometric-only-at-Bunch–Davies and a second-order concave-GSL ($\delta^2 S_{\rm gen}<0$) character. Corroborated by the published Chen–Xu (2511.00622) execution. HYP-dS-NOMIN promoted toward a scoped **near-no-go**; reusable principle HYP-dS-CARDINALITY extracted.
- *OP-48 (GPT-on-Type-III)* — settled as a sharp **disjunction**: no-go for exact composition on a single Type III₁ factor; split-property qualified *yes* (intermediate Type I factor) that nonetheless **relocates** the BW/CHM circularity (canonical factor fixed by the vacuum's $J$; HYP-SPLIT-GEOM) and fails at zero collar. Full merge still OPEN.
- *Modular circularity (OP-46)* — the encode→generate escape is **near-vacuous under the standard readout** (Borchers/Wiesbrock + Caminiti et al. 2502.02633: recovered generators are CKVs presupposing symmetry; HYP-CKV-VACUITY). Connes reconstruction gives only a Riemannian metric (GAP-NCG-LORENTZIAN-SIGNATURE); a non-CKV Lorentzian readout is the live target.
- *Literature refresh (web-verified)* — **muon $g-2$ now SM-consistent** (WP2025, arXiv:2505.21476: $\Delta a_\mu=38(63)\times10^{-11}$); updated OP-21 and `domains/particle-physics.md` from "live anomaly" to "largely resolved." The three previously-flagged 2026 preprint IDs (2603.06211, 2601.18856, 2601.13012) are **all real / web-confirmed** (no fabrication); 2601.13012 fixes the inner product, not linearity. Collapse bounds tighter not closed; asymptotic safety incremental; DESI still DR2.
- *Convergence audit* — new-insight trend **diminishing** (3 iterations at the same verdict). Analytical saturation **≈1–3 iterations** away (named remaining problems: OP-48c, OP-44/CP1, OP-46 non-CKV readout); object-level confirmation **not forecastable** (no distinguishing test even in principle). **Recommendation: HYBRID** (attack the 3 named problems + stand up experiment-tracking).

**Registry deltas:** accepted HYP-dS-NOMIN-R3, HYP-dS-CARDINALITY, HYP-CKV-VACUITY, HYP-SPLIT-GEOM, the OP-48 disjunction refinement, GAP-NCG-LORENTZIAN-SIGNATURE; promoted the three 2026 preprints to web-confirmed and added the Fröb (2308.14797) and WP2025 (2505.21476) citations to BIBLIOGRAPHY; muon $g-2$ staleness fixed in OP-21 + particle-physics.md.

---

## 2026-06-08 — Iteration 3: attempts + red-team (negative/structural progress)

**Scope:** Shifted from surveying to *attempting*. A multi-agent workflow ran three attemptive tracks + one adversarial red-team + synthesis (31 agents; recent results re-verified; 0 fatal errors). Coherence verdict **unchanged at PARTIAL** — confirmed correct. Filed under [notes/](notes/) (iter3-*).

**Outcomes:**
- *dS entanglement first law (OP-41)* — located the EXACT obstruction: dS supplies one Killing vector / one region, so δS_gen=δ⟨K⟩ yields only the ξ-integrated Hamiltonian constraint (the dS GSL), not the tensor δG_μν; the variational principle is sign-reversed (empty dS *maximizes* S_gen; Banihashemi–Jacobson–Svesko–Visser 2208.11706). Jacobson-2015 is a real local Einstein-from-entanglement derivation at any Λ but non-holographic. One un-foreclosed escape (SO(d+1,1) modular-Hamiltonian family; Chen–Xu 2511.00622). Tagged OPEN, not no-go.
- *Encode-vs-generate (OP-46)* — delivered a decision-usable criterion (axes Δ_geo, κ_Φ + 5-item smuggling checklist); graded six constructions; finding: none generates Lorentzian spacetime from factorization-free / region-free / symmetric-state-free data (the encode/generate frontier = the Type III₁ no-factorization fact).
- *A+B merge* — narrow success (one (M,ω) substrate co-derives the Born form + thermal/entropic structure non-circularly), deep failure (GPT framework axioms have no Type III₁ formulation — candidate-no-go OP-48), and fails in the no-observer cosmological regime.
- *Red-team* — 0 fatal, 4 serious weakenings: (1) "fixed cores" re-tagged heterogeneous, three conditional — Type III₁ is NOT a fixed core once gravity is on (Giddings 2505.22708/2510.24833), resolving an internal contradiction with the algebraic note; (2) "demotion-and-derivation" demoted from "falsifiable program" to "research heuristic"; (3) six-lens "convergence" → "convergence of methods sharing inputs" (streetlight caveat); (4) CLPW II₁ is a bounded-area feature, not Λ-diagnostic (KLS: Schwarzschild–dS is II∞×II∞).

**Empirical portfolio:** BMV/QGEM ~10–20+ yr; objective-collapse decisive ~2035; DESI/Euclid w(z) 2–7 yr; LIV/EP null anchors; matter-wave interferometry the shared enabling tech. **No live channel tests the geometry-from-algebra wager itself** → still not yet physics.

**Registry deltas:** added OP-48 (GPT-axioms-on-Type-III formulability); progress notes on OP-41/OP-44/OP-46; HYPOTHESES iteration-3 refinements (II₁-not-Λ-diagnostic; HYP-dS-NOMIN as OPEN conjecture; encode-vs-generate criterion; streetlight caveat); ASSUMPTIONS note qualifying Type III₁-as-fixed-core; FINDINGS iteration-3 update propagating the four red-team weakenings.

**Separate task (same day):** added the verified 2026 Torres Alegre Born-form-rigidity preprint (arXiv:2602.09056) to [BIBLIOGRAPHY.md](BIBLIOGRAPHY.md) and the Born/linearity note; fixed a Caves–Fuchs–Manne–Renes author-name inconsistency; flagged three other unverified 2026 preprint IDs in that note for confirmation.

---

## 2026-06-08 — Iteration 2: five refereed research tracks + synthesis

**Scope:** First forward-research iteration. A multi-agent workflow ran five deep, web-verified, adversarially-refereed investigations plus a unifying synthesis; results filed under [notes/](notes/) and integrated into the registries and [FINDINGS.md](FINDINGS.md). 38 agents; 0/25 new claims flagged unsound by the referee; several overclaims corrected in place.

**Track outcomes:**
- *de Sitter / emergent spacetime* — the Λ>0 graduation is a **structural** barrier; CLPW Type II₁ static-patch algebra is a genuine Λ>0 *entropy* foothold (strengthens H4), but there is no dS RT surface and no dS entanglement-first-law⟹Einstein chain. Reinforces H2 (negative result).
- *Born rule & linearity* — Born **form** is forced (Gleason dim≥3 + Busch/CFRS dim=2); the **quantitative-probability** meaning in no-collapse QM is OPEN. Exact linearity is plausibly derivative of no-signaling for *deterministic* dynamics (Gisin/Polchinski; Bielińska–Eckstein–Horodecki 2024) but **untested** at the stochastic objective-collapse scale.
- *Tabletop quantum gravity (BMV)* — logically valid but premise-dependent: a positive result falsifies mean-field and classical-channel gravity and constrains stochastic-CQ (non-classicality of the Newtonian sector) — but not graviton quantization. Live 2025–26 disputes (Di Biagio; Aziz–Howl vs rebuttals) catalogued.
- *Entropic / emergent gravity* — disaggregated: Jacobson (1995) is a genuine theorem *given* the area law + Unruh T; Padmanabhan a structural rewriting; Sakharov a mechanism; Verlinde-2011 a heuristic; Verlinde-2016 dark matter testable but **disfavored at cluster/CMB scales**. **Correction:** an iteration-1 framing wrongly implied galaxy weak-lensing (Brouwer 2021) disfavors Verlinde EG — it actually *agrees*; the disfavoring is cluster/CMB/Bullet-Cluster (fixed in `UNIFICATION_LANDSCAPE.md`).
- *Algebraic background-independence* — the modular/crossed-product program (Witten; CLPW; KLS 2024–25) is a **rigorous reorganization** that **encodes, not generates** geometry: a fixed background with a Killing/conformal symmetry is an input throughout (conceded by Witten 2308.03663; sharpened by Giddings 2505.22708).

**Synthesis verdict:** **PARTIAL coherence.** Two internally-coherent programs — (A) *geometry-from-algebra* and (B) *is-the-quantum-framework-final* — joined only by thin bridges (no-signaling/causal-order, and BMV as a logical gate). The "it's all information" fusion is explicitly refused. Defensible posture: a **program of demotion-and-derivation**.

**Registry deltas:** added OP-40…OP-47; added A-20…A-23 and sharpened the linearity (A-3) and Born-rule (A-4/QM-3) assumptions; added hypothesis refinements (H2-R1, H4-R2, H4-R3, HYP-GIE-DISCRIM, HYP-ENTROPIC-GRAVITY-SPLIT); corrected the Verlinde-EG lensing characterization. Recent results web-verified; uncertain bibliographic details flagged `[unverified]`.

---

## 2026-06-08 — Iteration 1: initial build

**Scope:** First full pass. Bootstrapped the entire wiki via a multi-agent workflow.

**Method:**
- **Domain dossiers** — parallel deep-dives across 10 domains (QM, QFT, GR, classical mechanics, thermodynamics, statistical mechanics, cosmology, particle physics, information theory, mathematics for physics), each capturing core formalism, foundational assumptions (classified), domain of validity, breakdowns, internal open problems, and connections.
- **Cross-cutting analysis** — dedicated agents (fed all dossiers) produced: contradictions/tensions, the open-problems registry, the assumptions ledger, the unification-landscape survey, and the candidate-principles list.
- **Hypothesis generation** — three independent lenses (information/emergent-spacetime, geometric/algebraic, discrete/computational) plus a feasibility assessment of whether a universal theory is possible.
- **Adversarial verification** — a skeptical referee reviewed every contradiction and every candidate hypothesis against known no-go theorems and data; verdicts (errors, overclaims, refinements, severity, keep/drop) are attached to each item.
- **Authoring** — content pages written from the verified corpus; meta-pages (`README`, `AGENTS`, `EPISTEMICS`, `ROADMAP`, this changelog) authored directly.

**Conventions established:**
- Five epistemic tags; assumption-classification scheme; four-way distinction (logical inconsistency / domain mismatch / unsolved problem / conceptual tension); the anti-crank verification gate; stable IDs (`OP-n`, `GC-n`, `Hn` = H0–H8, `A-n`).

**Post-build QC (same day):** Ran a structural-integrity audit across all 26 pages — links, headers, ID ranges, epistemic tags, citations, internal contradictions. Result was clean (zero broken links, zero missing headers; ID ranges OP-1..39, GC-1..17, A-1..19, H0–H8 all contiguous; no fabricated citations). Four minor fixes applied: (1) `FINDINGS.md` was authored in the main loop because a filename heuristic blocked the authoring subagent's write; (2) standardized the Goroff–Sagnotti two-loop-divergence date to **1985** across all pages; (3) aligned `statistical-mechanics.md` wording on self-gravitating entropy with the GC-17 refinement; (4) reconciled the hypothesis-ID convention (`Hn` = H0–H8) in the meta-pages.

**Known limitations of iteration 1 (to address next):**
- References in [BIBLIOGRAPHY.md](BIBLIOGRAPHY.md) are canonical-source level; exact paper-level details flagged `[unverified]` where not certain and should be checked against primary literature.
- Quantitative claims (constants, tensions like H0/S8, anomaly significances) are stated to standard textbook precision; a future pass should refresh against current measured values and re-tag.
- Hypotheses are research *directions*, not results; none is yet backed by a distinguishing experimental prediction.

*Next iteration: see [ROADMAP.md](ROADMAP.md).*

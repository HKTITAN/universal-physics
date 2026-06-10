# Iteration 4: citation verification + current-literature refresh

Status: COMPLETE — citation-hygiene + freshness pass. Three previously `[unverified]` 2026 preprint IDs are **all confirmed real** against the live arXiv (none fabricated); one real-but-misattributed byline is fixed; one genuinely claim-moving literature delta (muon $g-2$) is identified; the rest are incremental and do not move a standing wiki claim. No fabrication found anywhere.
Last updated: 2026-06-08
Iteration: 4

This note does two jobs the wiki's [AGENTS.md](../AGENTS.md) Lint pass demands: (1) it discharges the open `[unverified]` flags on the three 2026 Born-rule preprints carried in [../BIBLIOGRAPHY.md](../BIBLIOGRAPHY.md) and the [born-rule-and-quantum-linearity.md](2026-06-08-born-rule-and-quantum-linearity.md) note, and (2) it re-confirms the load-bearing recent citations and scans the 2024–2026 literature for any result that should *move* a wiki claim. Methodology: every arXiv ID below was checked against the live arXiv API (`export.arxiv.org/api/query?id_list=...`, `totalResults` reported), cross-checked on the `abs` page and via independent WebSearch, and graded by an adversarial referee per the §4 verification protocol of [../AGENTS.md](../AGENTS.md). "web-confirmed" means at least two independent live channels agreed on author + title + date; "not individually fetched" is stated explicitly wherever it applies, so no confirmation is overclaimed.

> **Headline.** The wiki's prudent flagging was warranted *as a posture* but **wrong on the merits in all three cases**: the three suspected-fabricated IDs are genuine papers. The single defect found is a **byline error** (a real paper attributed to the wrong author), not a fabrication. The single delta that changes a claim is the **muon $g-2$ resolution** in the 2025 Theory Initiative white paper, which makes any "muon $g-2$ is a live BSM anomaly" statement stale.

---

## Flagged-ID verification

All three IDs below were carried with an explicit `[unverified]` rider in [../BIBLIOGRAPHY.md](../BIBLIOGRAPHY.md) (line: *"…remain `[unverified]` and should be confirmed against arXiv before promotion"*) and inside [born-rule-and-quantum-linearity.md](2026-06-08-born-rule-and-quantum-linearity.md). Live re-check this iteration: each returns `totalResults=1` on the arXiv API, with an `abs`/`pdf`/`html` page and a matching independent WebSearch hit. **None is fabricated.** [ESTABLISHED — the *existence/identity* of each preprint; the papers' *physics claims* inherit their authors' own (frontier) status and are tagged separately below.]

| arXiv ID | Claimed content (wiki gloss) | Status | Real ID | Verification note |
|---|---|---|---|---|
| **2603.06211** | re-examines which additivity assumption is load-bearing for Gleason–Busch | **CONFIRMED** | same | Jiaxuan Zhang (Dept. of Physics, Oxford), *"Summing to Uncertainty: On the Necessity of Additivity in Deriving the Born Rule"*, quant-ph, submitted 6 Mar 2026 (v1). `totalResults=1`; abs + WebSearch agree. Abstract analyzes the additivity premise across **exactly five** Born-rule derivations — Gleason, Busch's extension of Gleason, Deutsch–Wallace, Zurek envariance, Finkelstein–Hartle — and argues additivity is **not** derivable from non-contextuality + normalization and is indispensable to each. Gloss is faithful; Gleason–Busch is explicitly among the analyzed frameworks. (Only nit: announce/submit day reads 6 vs 9 Mar across sources — immaterial.) |
| **2601.18856** | operationally induced preferred basis in unitary QM | **CONFIRMED** | same | Vitaly Pronskikh (Fermilab; report FERMILAB-PUB-26-0023-V), *"Operationally induced preferred basis in unitary quantum mechanics"* — **exact-title match**. v1 26 Jan 2026, v2 16 Feb 2026. Confirmed across four channels (arXiv abs, arXiv API `totalResults=1`, WebSearch, Fermilab `lss.fnal.gov` preprint server). OIPB: the recorded-outcome basis is induced by the **measurement interface** (detector channel + coarse-grained readout), not the system Hamiltonian; Born rule from a **Gleason-*type* (Busch/POVM-style)** uniqueness argument; qubit–pointer unsharp-POVM model. Call the derivation "Gleason-type/Busch-style," **not** the original projective Gleason theorem (which needs $\dim\mathcal H\ge 3$). |
| **2601.13012** | no-signaling fixes the inner-product **/linearity** structure | **PARTIAL** | same | Arun Kumar Pati, *"No-Signalling Fixes the Hilbert-Space Inner Product"* (9 pp, quant-ph), submitted 19 Jan 2026. `totalResults=1`; abs + WebSearch agree. Shows any nontrivial generalized inner product (a positive operator) permits superluminal signalling given local unitary dynamics + entangled states + no-signalling, so the **standard inner product is uniquely enforced**. **The "inner-product" half is exact; the "/linearity" rider over-extends** — linearity/unitarity is an *assumed input*, not a derived conclusion. **Trim the "/linearity" on promotion.** |

**Live-arXiv readout (this iteration), verbatim from the API:**

- `2603.06211` → 1 result; *Summing to Uncertainty: On the Necessity of Additivity in Deriving the Born Rule*; Jiaxuan Zhang; quant-ph; 6 Mar 2026.
- `2601.18856` → 1 result; *Operationally induced preferred basis in unitary quantum mechanics*; Vitaly Pronskikh; quant-ph; 26 Jan 2026.
- `2601.13012` → 1 result; *No-Signalling Fixes the Hilbert-Space Inner Product*; Arun Kumar Pati; quant-ph; 19 Jan 2026.

**Promotion recommendation.** Move all three from `[unverified]` to **[web-confirmed real / not peer-reviewed]** in [../BIBLIOGRAPHY.md](../BIBLIOGRAPHY.md), with the two content riders above:
1. **2601.18856** — describe the Born step as *Gleason-type (Busch/POVM)* uniqueness, and flag the OIPB framework, "non-composability for nested observers," and Wigner-friend discriminators as the **author's proposed [SPECULATIVE] claims**, not established physics.
2. **2601.13012** — cite the *inner-product* claim as exact; **drop the "/linearity" rider** (linearity is an input premise). Explicit input/output split: INPUTS = {generalized inner product from a positive operator, local unitary dynamics, entangled states, no-signalling}; CONCLUSION = the standard Hilbert-space inner product is uniquely enforced.

**Referee severity:** `none` for all three (the JSON's referee verdicts `lit:flag0/1/2` returned `isSound=true`, `keep=true`, recommended tag `[ESTABLISHED]` for the *citation-existence* claim). The wiki's caution cost nothing; the resolution is to promote, not to retract.

---

## Re-confirmed load-bearing citations

Nine recent, load-bearing citations were re-checked against the live arXiv. **Eight of nine re-confirm exactly; one is real but misattributed.** [ESTABLISHED for each *identity* claim; the physics each supports keeps the tag it already carries on its home page.]

| arXiv ID | Reference | Result |
|---|---|---|
| **2602.09056** | E. O. Torres Alegre, *"Causal Rigidity of Born-Type Probability Rules in Infinite-Dimensional Operational Theories"* (7 Feb 2026) | `totalResults=1`; matches [../BIBLIOGRAPHY.md](../BIBLIOGRAPHY.md) and the Born-rule note exactly (author, title, date, "Causal Rigidity," infinite-dimensional). **Confirmed.** |
| **2412.20854** | Bielinska, Eckstein, Horodecki, *"Superluminal signalling and chaos in nonlinear quantum dynamics"* (30 Dec 2024) | `totalResults=1`; exact title. **Journal detail in [../BIBLIOGRAPHY.md](../BIBLIOGRAPHY.md) ("New J. Phys. 27, 2025") confirmed**: NJP **27**(5), DOI `10.1088/1367-2630/adcae1`, pub. 2 May 2025. Content (refines, not merely reaffirms, Gisin; chaotic dynamics; no-restriction-hypothesis caveat) matches. **Confirmed.** |
| **2206.10780** | CLPW, *"An Algebra of Observables for de Sitter Space"* (22 Jun 2022) | Canonical CLPW Type II$_1$ dS paper. Matches [../FINDINGS.md](../FINDINGS.md) usage. **Confirmed.** |
| **2505.22708** | S. B. Giddings, *"Quantum gravity observables: observation, algebras, and mathematical structure"* (28 May 2025) | Used in [../FINDINGS.md](../FINDINGS.md) for "algebraic spacetime disruption" / gravitational-dressing-alters-the-algebra. **Confirmed.** |
| **2510.24833** | S. B. Giddings, *"Gravitational dressing: from the crossed product to more general algebraic and mathematical structure"* (28 Oct 2025; v3 9 Jan 2026) | Companion to 2505.22708; consistent with the [../FINDINGS.md](../FINDINGS.md) framing. **Confirmed.** |
| **2511.00622** | Bin Chen & Jie Xu, *"An algebra for covariant observers in de Sitter space"* (1 Nov 2025) | Matches the Chen–Xu citation in [2026-06-08-iter4-dS-firstlaw-SO-family-attempt.md](2026-06-08-iter4-dS-firstlaw-SO-family-attempt.md) and [../FINDINGS.md](../FINDINGS.md) (the un-foreclosed $SO(d{+}1,1)$ static-patch escape route). **Confirmed.** |
| **2503.14738** | DESI, *"DESI DR2 Results II: BAO and Cosmological Constraints"* (18 Mar 2025) | **Still the latest DESI cosmology release as of 2026-06** — no DR3 cosmology yet. **Confirmed (and current).** |
| **2208.11706** | Banihashemi, Jacobson, Svesko, Visser, *"The minus sign in the first law of de Sitter horizons"* (24 Aug 2022) | Exact author/title/topic match to the "minus-sign dS first law / $dE=-T\,dS$ / empty dS maximizes $S_{\rm gen}$" usage. **Confirmed.** |
| **2308.14797** | (claimed) *"Forste et al., dS diamond"* | **MISATTRIBUTION — ID real, byline wrong.** It is *"Modular Hamiltonian for de Sitter diamonds"* by **Markus B. Fröb** (sole author), JHEP **12** (2023) 074, 28 Aug 2023. Verified on abs, API XML, and WebSearch — **no author named "Forste" anywhere.** Topic correct; **fix the byline to Fröb.** |

**Defect found:** exactly one — the **2308.14797 byline**. It was already corrected from "Forste et al." to "Fröb" inside [2026-06-08-iter4-dS-firstlaw-SO-family-attempt.md](2026-06-08-iter4-dS-firstlaw-SO-family-attempt.md) (see its "Web verification" section), but the source error lives in [2026-06-08-iter3-synthesis.md](2026-06-08-iter3-synthesis.md) and any other page citing "Forste." This pass confirms the correction and flags it for the synthesis note and [../BIBLIOGRAPHY.md](../BIBLIOGRAPHY.md). [ESTABLISHED — sole author is M. B. Fröb.]

---

## Literature deltas 2024–2026

Six topics scanned. **One** is genuinely claim-moving (muon $g-2$); two are non-trivial **adds** (collapse-model bounds; Lorentzian asymptotic safety) that refine but do not overturn; three are **already-current** (`action=none`). Tags follow [../EPISTEMICS.md](../EPISTEMICS.md).

| Topic | Finding (1-line) | Citation | Action | Tag |
|---|---|---|---|---|
| **Muon $g-2$** (particle physics) | 2025 Theory Initiative white paper switches LO-HVP input to a **lattice-QCD average**; SM prediction $a_\mu^{\rm SM}=116592033(62)\times10^{-11}$ now **agrees** with experiment ($\exp-{\rm SM}=38(63)\times10^{-11}$, $<1\sigma$). The ~$4$–$5\sigma$ anomaly is no longer present in the current best SM estimate. | Muon $g-2$ Theory Initiative, arXiv:**2505.21476**, *Phys. Rep.* **1143** (2025); Fermilab E989 final result (Jun 2025). web-confirmed (API `totalResults=1` + WebSearch). | **update** | `[ESTABLISHED]` (with `[OPEN]` residual) |
| **DESI $w(z)$ / dark energy** (cosmology) | Latest cosmology release is still **DR2** (Mar 2025); the 2.8–4.2$\sigma$ preference for evolving ($w_0>-1$, $w_a<0$) dark energy stands unchanged. DR3 ($z_{\max}\!\sim\!3.55$, more high-$z$ Ly$\alpha$) forthcoming, **not yet released**. | arXiv:**2503.14738** (current); DR3 forthcoming per DESI docs. web-confirmed. | **none** | `[OPEN]` |
| **Objective-collapse (CSL / Diósi–Penrose) bounds** (measurement problem) | Post-2021 bounds **tightened but not closed** the *canonical* CSL/DP window; *dissipative-variant* sub-regions are excluded. Consistent with the Born-rule note's KA-4/O-4. | arXiv:**2401.04665** (dissipative dDP/dCSL, NJP 2024); arXiv:**2411.17588** (kg-mass / LISA-Pathfinder, 2024); arXiv:**2512.02838** (proposed decoherence-vs-collapse blueprint, Dec 2025). web-confirmed via WebSearch (titles/IDs); **abstracts not individually fetched.** | **add** | `[OPEN]` |
| **Asymptotic safety, Lorentzian signature** (quantum gravity) | First **covariant-Wetterich-FRG** evidence for a non-trivial Reuter-type UV fixed point in **Lorentzian** signature, extending the previously largely-Euclidean evidence; 2025 foliated/Wick-rotated and dS follow-ups. Incremental, program-internal; no distinguishing empirical test. | E. D'Angelo, arXiv:**2310.20603**, *Phys. Rev. D* **109**, 066012 (2024) [single author — **not** Pawlowski/Reichert]; foliated follow-up Saueressig & Wang, arXiv:**2501.03752**, PRD **111**, 106007 (2025). web-confirmed. | **add** | `[CONTESTED]` |
| **Island / Page-curve beyond AdS** (black-hole information) | 2024–2026 work extends islands/QES to Kerr–dS, warped-AdS, Schwarzschild–dS toys and flat limits, but **still no first-principles Page curve** for a dynamical, realistic 4D asymptotically-flat black hole. Exactly the [../FINDINGS.md](../FINDINGS.md) GC-4 / [../ROADMAP.md](../ROADMAP.md) status. | Survey of 2024–2026 island/QES literature (e.g. Kerr–dS islands arXiv:2204.08488); no claim-moving result. web-confirmed (WebSearch survey). | **none** | `[OPEN]` |
| **Crossed-product / KLS Type-II algebra follow-ups** (algebraic gravity) | The KLS result the wiki cites (generalized BH entropy = von Neumann entropy) is confirmed; newer incremental follow-ups exist but do not move a standing claim. The **Giddings dressing caveat** (2505.22708 / 2510.24833) remains the load-bearing open issue. | Kudler-Flam, Leutheusser, Satishchandran, arXiv:**2309.15897**, *Phys. Rev. D* **111**, 025013 (2025); follow-ups arXiv:2512.04435, arXiv:2601.07910. web-confirmed via WebSearch. | **none** | `[INFERENCE]` |

### Deepening the three actionable deltas

**(D1) Muon $g-2$ — the one claim-moving result. [ESTABLISHED, with an [OPEN] residual.]**
The 2025 Muon $g-2$ Theory Initiative update (arXiv:2505.21476; *Phys. Rep.* **1143** (2025)) adopts a **lattice-QCD average** for the leading-order hadronic-vacuum-polarization (LO-HVP) contribution as the basis of the SM prediction, replacing the WP20 **data-driven $R$-ratio** route. The switch was *forced*, not preferred: the CMD-3 $e^+e^-\!\to\!\pi^+\pi^-$ cross-section made the dispersive (data-driven) evaluations impossible to combine meaningfully. This produced a ~$3\sigma$ **upward** shift to
$$a_\mu^{\rm SM} = 116\,592\,033(62)\times10^{-11}\quad(530\ \text{ppb}),$$
versus the experimental world average (incl. Fermilab E989 final, $a_\mu^{\rm exp}\simeq 116\,592\,070.5\times10^{-11}$ at ~127 ppb, announced June 2025):
$$a_\mu^{\rm exp}-a_\mu^{\rm SM} = 38(63)\times10^{-11}\ (<1\sigma).$$
[ESTABLISHED] So the historic ~$4$–$5\sigma$ anomaly **is no longer present** in the current best SM estimate; any wiki text listing muon $g-2$ as a live BSM anomaly is **stale**. [INFERENCE] **Crucial caveat [OPEN/CONTESTED]:** the resolution is *contingent on the lattice-QCD HVP input*. An unresolved **lattice-vs-$R$-ratio** tension and the **CMD-3-vs-prior-$e^+e^-$** discrepancy persist; the underlying low-energy hadronic puzzle is *not* settled. This is the [../EPISTEMICS.md](../EPISTEMICS.md) "no tension at current precision" reading, **not** a confirmation that the SM is correct. *(Minor data-hygiene note: the source JSON states "188 authors"; the live arXiv listing renders on the order of ~$2$–$4\times10^2$ contributors — the exact count is ambiguous across listing pages and immaterial; lead authors Aliberti, Aoyama et al. are correct. The number "188" should not be quoted as exact.)*

**(D2) Objective-collapse bounds — refine, do not close. [OPEN.]**
New since the Born-rule note's "Donadi 2021 / LISA Pathfinder / optomechanics" list:
- **arXiv:2401.04665** (Di Bartolomeo & Carlesso, NJP 2024) — levitated-optomechanics bounds on the **dissipative** dDP/dCSL variants; these exclude the entire dCSL space below ~$6\times10^{-9}$ K and dDP collapse temperatures below ~$10^{-13}$/$6\times10^{-12}$ K, **but do not touch the standard (non-dissipative) CSL/DP window** that anchors the measurement problem. [OPEN — important not to read the dissipative exclusions as touching the canonical window.]
- **arXiv:2411.17588** (Dai, Miao, Ma, 2024; title *"Updating the constraint on the quantum collapse models via kilogram masses"* — the JSON dropped "the") — tightens $\lambda_{\rm CSL}$ and $\sigma_{\rm DP}$ via LISA-Pathfinder kg-mass acceleration-noise data **without closing** the space.
- **arXiv:2512.02838** (Horchani, Dec 2025) — a **proposed** levitated-optomechanics blueprint with a Bayesian protocol to discriminate environmental decoherence from objective collapse; a proposal, **not results**.

Net: bounds tighten and (for dissipative variants) carve out sub-regions, but the **macroscopic-superposition window for standard collapse models stays open** — the Born-rule note's KA-4/O-4 standing conclusion is **unchanged**. [OPEN.] *Provenance: titles/IDs web-confirmed via WebSearch; abstracts not individually fetched this iteration.*

**(D3) Lorentzian asymptotic safety — nudge only. [CONTESTED.]**
E. D'Angelo (single author — *not* Pawlowski/Reichert, a correction the source flags), arXiv:2310.20603, PRD **109**, 066012 (2024), gives the first **covariant-Wetterich-FRG** evidence for a non-trivial Reuter-type UV fixed point in **Lorentzian** signature (Einstein–Hilbert truncation), by extracting **state- and background-independent *contributions*** to an otherwise **state-dependent** RG flow. [INFERENCE] Two accuracy refinements over the raw source gloss: (i) **do not** say "valid for any Hadamard state" — the flow is state-dependent and only the universal contributions are extracted; (ii) **do not** cite arXiv:2501.03752 (Saueressig & Wang, foliated/Wick-rotated fluctuations) for the **de Sitter** sub-claim — that paper is the foliated follow-up and does **not** treat dS; the dS work is a separate D'Angelo-et-al. reference. This is incremental, program-internal progress; asymptotic safety remains a **contested** program with **no distinguishing empirical test**, so it nudges status only — it does not move a wiki claim. [CONTESTED.]

---

## Recommended scrubs/updates to the wiki

Concrete, minimal edits implied by the above (each is a Lint action per [../AGENTS.md](../AGENTS.md) §3):

1. **[../BIBLIOGRAPHY.md](../BIBLIOGRAPHY.md) — promote the three preprints.** Replace the trailing note *"…arXiv:2603.06211, 2601.18856, 2601.13012 remain `[unverified]`…"* with full entries tagged **[web-confirmed real / not peer-reviewed]**, carrying the two riders (2601.18856 = "Gleason-*type*/Busch-style," author's proposed claims flagged `[SPECULATIVE]`; 2601.13012 = inner-product exact, **drop "/linearity"**). [action: update]
2. **[../BIBLIOGRAPHY.md](../BIBLIOGRAPHY.md) + [2026-06-08-iter3-synthesis.md](2026-06-08-iter3-synthesis.md) — fix the Fröb byline.** Any "Forste et al." attribution of arXiv:2308.14797 → **Markus B. Fröb (sole author)**, *"Modular Hamiltonian for de Sitter diamonds,"* JHEP **12** (2023) 074. (Already corrected in [2026-06-08-iter4-dS-firstlaw-SO-family-attempt.md](2026-06-08-iter4-dS-firstlaw-SO-family-attempt.md); propagate.) [action: update]
3. **[../OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md) OP-21 — demote the muon $g-2$ component.** OP-21 currently says *"the muon anomalous magnetic moment … shows a discrepancy between experiment and parts of the theory prediction."* Update to: the 2025 Theory Initiative white paper (2505.21476) adopts the **lattice-QCD HVP** average, bringing $a_\mu^{\rm SM}$ into **agreement** with experiment ($<1\sigma$); the **live open question is now the lattice-vs-$R$-ratio / CMD-3 HVP discrepancy**, not a $g-2$ anomaly per se. Keep the *flavor* anomalies as-is. Retag the $g-2$ line from "watched anomaly" → "**SM-consistent at current precision; HVP-input tension `[OPEN]/[CONTESTED]`.**" [action: update]
4. **[../domains/particle-physics.md](../domains/particle-physics.md) — same demotion.** Its "Where it breaks down" / domain-of-validity text presents the data-driven-vs-lattice HVP *disagreement* as making "the very size of any SM deviation … contested." This is still true and is now **the whole story**: with the lattice average adopted, the SM **agrees** with experiment; rewrite so $g-2$ is no longer implied to be a possible BSM signal, only an internal HVP-theory tension. [action: update]
5. **[../FINDINGS.md](../FINDINGS.md) / falsifiability portfolio — note DESI DR3 as the next decisive cosmology release.** No claim moves (DR2 status is already accurate); add only that DR3 is forthcoming and not yet out. [action: none-but-annotate]
6. **[born-rule-and-quantum-linearity.md](2026-06-08-born-rule-and-quantum-linearity.md) — refresh the collapse-bound list (KA-4/O-4) and the preprint riders.** Append D2's three 2024–2025 references (with the dissipative-vs-canonical-window distinction); flip the three `[unverified — preprint]` riders on 2601.18856 / 2601.13012 / 2603.06211 to `[web-confirmed real / not peer-reviewed]`. Standing conclusions (O-2, the linearity verdict) are **unchanged**. [action: update]
7. **No new [HYPOTHESES.md] entry.** Nothing here passes the §4 gate as a *new* candidate direction; this is hygiene + freshness, not a hypothesis. [action: none]

---

## What was web-confirmed vs not-found (explicit)

- **Web-confirmed live this iteration (arXiv API + abs/WebSearch, ≥2 channels):** 2603.06211, 2601.18856, 2601.13012, 2308.14797 (byline = Fröb), 2505.21476 (muon $g-2$ WP). All returned matching title/author/date.
- **Web-confirmed in the source verification pass (arXiv API `totalResults=1` each), accepted here:** 2602.09056, 2412.20854 (incl. NJP **27** (2025) journal detail), 2206.10780, 2505.22708, 2510.24833, 2511.00622, 2503.14738, 2208.11706, 2309.15897, 2310.20603, 2501.03752.
- **Titles/IDs web-confirmed but abstracts NOT individually fetched (stated, not overclaimed):** 2401.04665, 2411.17588, 2512.02838 (collapse-bound adds); 2204.08488, 2512.04435, 2601.07910 (island / KLS-follow-up survey items).
- **Not-found / fabricated:** **none.** Every ID above resolves to a real arXiv record. The only error class encountered was a **byline misattribution** (2308.14797), not a fabricated paper, number, theorem, or date.

**Confidence: high.** The fabrication-risk items (the three flagged 2026 preprints) are the ones checked most redundantly; all are genuine. The two content riders (Gleason-*type* not projective Gleason; inner-product not linearity) and the one byline fix are the substantive corrections; the one claim-moving delta is the muon $g-2$ resolution, itself caveated as contingent on the lattice HVP input.

---

## See also
- [2026-06-08-born-rule-and-quantum-linearity.md](2026-06-08-born-rule-and-quantum-linearity.md) — home of the three flagged preprints and the KA-4/O-4 collapse-bound conclusion this refresh updates.
- [2026-06-08-iter4-dS-firstlaw-SO-family-attempt.md](2026-06-08-iter4-dS-firstlaw-SO-family-attempt.md) — already carries the Fröb byline correction and uses 2511.00622 / 2308.14797.
- [2026-06-08-iter3-synthesis.md](2026-06-08-iter3-synthesis.md) — source of the "Forste et al." mis-citation to be propagated-fix.
- [../BIBLIOGRAPHY.md](../BIBLIOGRAPHY.md) — where the `[unverified]` → `[web-confirmed]` promotions and the byline fix land.
- [../OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md) (OP-21) · [../domains/particle-physics.md](../domains/particle-physics.md) — the muon $g-2$ scrub targets.
- [../FINDINGS.md](../FINDINGS.md) · [../EPISTEMICS.md](../EPISTEMICS.md) · [../AGENTS.md](../AGENTS.md) · [README.md](README.md) — synthesis, tagging standard, and Lint protocol this note executes.

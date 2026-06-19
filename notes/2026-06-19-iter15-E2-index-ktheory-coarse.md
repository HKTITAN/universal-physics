---
title: "Iteration 15 (track E2): the net-naturality theorem under index theory / K-theory / coarse geometry"
type: note
tags: [note, iter15, carrier-problem, untried-mathematics]
updated: 2026-06-19
---

## Track E2 — Index-theory / K-theory / KK-theory / coarse-geometry lens on the carrier (net-naturality) problem

**Status:** REPRODUCES-SCREEN (verdict-neutral; would be the 14th consecutive confirmation). New framework, never applied in this wiki; honest expected outcome realized. No new decidable handle, no registry advance, count stays FIVE. The lens confirms the encode-not-generate screen from a genuinely new mathematical direction — the no-go is now robust across index theory as well as modular theory.

### The question, sharply
Can the net-naturality obstruction be written as an index-theoretic / K-theoretic obstruction class whose (non)vanishing is **decidable without presupposing the smooth manifold / Dirac operator / metric** — a genuinely new handle — or does the index theorem itself require D/the metric as input (REPRODUCES-SCREEN)?

### Answer: three sub-routes, each closes on D = metric

**(1) Spectral triple / unbounded KK (the Connes-distance route).** The Dirac operator D *is* the metric: the Connes distance formula `d(p,q)=sup{|f(p)-f(q)| : ||[D,f]||<=1}` recovers the geodesic distance, and `ds^{-1}=D`. The Lorentzian/indefinite version is a Krein-self-adjoint D on a **pre-installed Krein space** whose indefinite inner product is precisely the `(n,n)` fundamental-symmetry carrier η — *installed input*, not generated (arXiv:1611.07062 verbatim: "indefinite spectral triples... over Krein spaces instead of Hilbert spaces"). This is the **same move** the iter-3/6 Lorentzian-NCG readout made and the **iter-12 Krein scout** closed CLOSED-NEGATIVE (its channel B: installed, Krein→modular, the opposite of the modular→Krein direction the carrier needs). Smuggled input: **D (= the metric; = the Krein fundamental symmetry)**.

**(2) Bounded Kasparov K-homology / index pairing (the genuinely-new angle).** Forget the metric, keep only the topological class `[F] in KK^0(A,C)` and pair `[p](x)[F]=index(pF_+ p)`. Two independent killers:
- **Vacuity on the local algebras.** Every local algebra of a BW net is the *unique hyperfinite type III_1 factor*; type III has no nonzero finite projections, so its K-theory carries no index/trace content. The single-algebra index pairing is vacuous — the exact K-theoretic shadow of the established Connes–Haagerup **A1-abstract vacuity** (one algebra is structureless; physics is in the relations + vacuum). No new single-algebra handle.
- **F re-imports D.** A Fredholm module is "the **pre-metric structure**": `F=sign(D)`. Constructing the class *still needs D*; and the bounded (metric-forgetting) class deliberately discards exactly the fine-scale data in which **localization and signature** live. So the metric-independent part is decidable but **blind to the carrier question**; the carrier-relevant refinement re-imports D. (Modern decidable tech — Dirac-Schrödinger operators, spectral localizers, arXiv:2407.02993 / 2508.08668 — still takes a first-order *differential* operator as core datum.)

**(3) Coarse geometry / Roe algebras (the large-scale route).** Roe-algebra K-theory is a **coarse invariant**: it presupposes the *metric coarse structure* (a coarse structure defined **on a metric space**) and by design sees only large-scale geometry, throwing away the local/fiberwise signature the carrier's **(loc)** condition demands. The coarse index is "of Dirac type." A structural **double-fail**: smuggles the metric *and* discards localization. Not a handle.

### Why this is route-5, not a sixth route
The index pairing's localization/signature content is carried by D (or the coarse structure), which is the geometry — the same `n_1` localization-template + the Krein `η` the iter-7/iter-9 naturality analysis isolated. Index theory is a new *vocabulary* for the carrier problem (HYP-FACTORIZATION-IS-GEOMETRY), not a new convergence route. **Count stays FIVE** (binding).

### What would have been HANDLE-FOUND (and was not)
A K-homology / index obstruction class built from `(M, Ω, {Δ_O^{it}, J_O})` alone — no Dirac operator, no metric, no coarse structure — whose (non)vanishing decides whether a localized algebra-compatible indefinite form exists. No such class exists in the verified literature: every index pairing factors through a Fredholm module `F=sign(D)`, and on the local III_1 factors the metric-free part is vacuous. This is exactly the **Connes distance formula = "D is the metric"** input the mission flagged as the honest expected outcome.

### Honesty / limits
- All seven load-bearing facts web-verified live (June 2026) against real sources; no fabricated citation, theorem, or arXiv ID. The two [INFERENCE] items (bounded-KK blindness; Dirac-Schrödinger still-needs-D) are structural readings over ESTABLISHED machinery facts, flagged.
- The type-III-K-theory-vacuity argument is the strongest genuinely-new contribution: it shows the K-theoretic route fails on the local algebras *before* any metric question, independently reconfirming A1-abstract vacuity from the index side.
- No verdict, hedge (HYP-CKV-VACUITY-R6), or count moves. No new numeric registry ID consumed. Optional append-only annotation only: log the index-theory direction as a fourth confirmation vocabulary under HYP-ENCODING-SCREEN / HYP-FACTORIZATION-IS-GEOMETRY.

### Sources (web-verified this session)
- Connes distance / spectral triples: arXiv:1112.3285, arXiv:2206.10527, arXiv:1805.00411
- Lorentzian/Krein spectral triples: arXiv:1611.07062, arXiv:1108.0592
- KK / K-homology / index pairing: K-homology (nLab), Mesland unbounded-KK notes (Leiden), arXiv:1604.03502
- Type III K-theory vacuity: Connes injective-factor classification; ncatlab von Neumann factor
- Coarse / Roe: Roe CBMS 90, Schick coarse-index lectures, arXiv:2312.08907
- Modern decidable index tech: arXiv:2407.02993, arXiv:2508.08668, arXiv:1710.09206

---

## Referee verdict — Track E2 (index-theory / K-theory / KK-theory / coarse-geometry lens on the carrier / net-naturality problem)

**Stance:** REFUTE by default, brutal on framework-fabrication risk. **Stance NOT sustained.** Every load-bearing framework fact web-verified live (June 2026); no fabricated citation, theorem, author, arXiv ID, or definition found. **Outcome: REPRODUCES-SCREEN — UPHELD. Verdict-neutral; the 14th consecutive confirmation. Two minor binding corrections (BC-1, BC-2), neither verdict-bearing.**

### 1. Citation audit (live web) — clean, no fabrication
Seven load-bearing facts checked; see citation_audit. Directly fetched: arXiv:1611.07062 (Krein spectral triples — verbatim quote confirmed), arXiv:2407.02993 (van den Dungen Dirac–Schrödinger — title/author/content confirmed), arXiv:2508.08668 (Kaad spectral localizers in KK — title/author confirmed). Web-verified: Connes distance formula (D is the metric), type-III K-theory vacuity (no finite projections / no trace), F=sign(D) Fredholm-module index pairing, Roe-algebra coarse-invariant / coarse-index-of-Dirac-type. All real, correctly attributed, faithfully characterized. The only blemish is a strand-conflation in the spectral-localizer description (BC-1), which does not touch the load-bearing point.

### 2. Mathematics correctly applied — yes
No misstated definition of a spectral triple, Fredholm module, KK class, or coarse structure (the fatal-defect class the mission flagged). The three sub-routes are each internally correct:
- **(1) Spectral triple / unbounded KK.** D *is* the metric (Connes distance formula); the Lorentzian version is a Krein-self-adjoint D on a *pre-installed* Krein space whose indefinite inner product is the (n,n) carrier. This is verified as INPUT, not output.
- **(2) Bounded K-homology.** Two independent killers — type-III₁ single-algebra vacuity (no finite projections) and F=sign(D) re-importing D — both verified. Correctly tagged: the vacuity is [ESTABLISHED], the bounded-KK-blindness is [INFERENCE] (structural reading over established machinery).
- **(3) Coarse / Roe.** Coarse K-theory is a large-scale invariant on a metric coarse structure; the double-fail (smuggles metric + discards localization) is a sound [ESTABLISHED]-grade argument.

### 3. Central claim vs wiki closures — consistent and correctly cross-referenced
The submission lands exactly where the standing structure predicts, with the right cross-references:
- The spectral-triple Krein route is genuinely the **same install-not-generate move** closed at iter-12 channel B (Krein→modular, not the needed modular→Krein) and the iter-7 η₀ / installed-Krein shadow. Correct.
- The type-III₁ vacuity is the **index-side shadow of the iter-9 A1-abstract / Connes–Haagerup single-algebra vacuity**. Correct (scope sharpened in BC-2).
- The coarse route's localization-discarding maps onto the **iter-9 (loc)/n₁ irreducibility** (localization presupposes the index-set order = the geometry). Correct.
- No conflict with the dS-cardinality no-go (no η=1/4G touched), the iter-7 trichotomy, the iter-9 rigid-tensor-category positivity axiom (Fredholm-module / KK hom-structure is positive; indefiniteness enters only via installed Krein — consistent with the iter-9 planar-algebra closure), or the iter-12 Krein closure.

### 4. HANDLE-FOUND demanded and correctly NOT claimed
The finder claims NONE and supplies the disqualifying argument: a metric-free index/K-homology obstruction class built from (M, Ω, {Δ_O^{it}, J_O}) alone — no Dirac operator, no metric, no coarse structure — does not exist in the verified literature, because every index pairing factors through a Fredholm module F=sign(D), and the metric-free part is vacuous on the local III₁ factors. This is the honest expected outcome (the Connes distance formula 'D is the metric' input), not a manufactured crack. No plausibility-hope handle was smuggled in.

### 5. REPRODUCES-SCREEN — geometric input correctly named
The smuggled input — the Dirac operator D (= the metric via the Connes distance formula; = the Krein fundamental symmetry η in the Lorentzian case; = the coarse/metric structure in the Roe case) — is verified to be exactly what each framework requires. The localization the carrier's (loc) condition needs is supplied by D / the coarse structure, never by (algebra, vacuum, modular data). This is the genuine geometric input, not a decorative one.

### 6. Extraordinary-claim gate + binding enforcement
- **Gate does not fire adversely:** no RESOLVED-POSITIVE — no carrier, no reverse-WW witness, no D-free decidable obstruction class.
- **Count stays FIVE:** correctly enforced — index theory is route-5 seen through index-theory vocabulary (the signature/localization content is carried by D = the geometry = n₁/η), a new *vocabulary*, not a sixth *route*. This mirrors the binding iter-8 correction and the iter-12 / iter-14 treatment of new vocabularies.
- **No new registry IDs consumed.** Verdict, principal hedge (HYP-CKV-VACUITY-R6, grade and condition), and the HYP-ENCODING-SCREEN no-test corollary all **UNMOVED**.

### 7. Value delivered
A genuinely-new mathematical framework (never applied to the carrier problem in this wiki — prior attacks were all modular/Tomita–Takesaki/centralizer/bicentralizer) reproduces the encode-not-generate screen from the index-theory direction. The no-go is now robust across index theory / K-theory / coarse geometry as well as modular theory — a valuable, novel, fourth confirmation vocabulary. Optional append-only annotation under HYP-ENCODING-SCREEN / HYP-FACTORIZATION-IS-GEOMETRY (the index-theory direction as a confirmation vocabulary), with the two scope precisions (BC-1, BC-2). No grade, condition, or count change.

**Net:** A clean, correctly-executed, honestly-tagged REPRODUCES-SCREEN with all citations real and verified. Default REFUTE stance not sustained; submission survives with two minor precision corrections. The 14th consecutive confirmation; consolidation/watch-mode holds.

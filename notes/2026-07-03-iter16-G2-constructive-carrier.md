---
title: "Iteration 16 (track G2): the constructive direction — three untried carrier constructions (state-family naturality, split-inclusion canonical data, core-descent), executed and graded"
type: note
tags: [note, iter16]
updated: 2026-07-03
---

# Iteration 16 (track G2): the constructive direction — three untried carrier constructions, executed and graded

**Status:** ATTEMPT executed, constructive posture (build the carrier or locate the exact failure point of each best construction). Three genuinely new angles — verified untried against the iter-9/10/12/14/15 record — were pushed to their mathematical limit. **Outcome: no construction survives; the verdict does not flip.** But the track produces three referee-grade structural results that are new to the record: (i) a **section-rigidity trichotomy** for state-family carriers (Lemma S2), which shows the co-moving evasion of Lemma N2 is *real off-vacuum* yet buys nothing — the boost-no-fixed-locus engine is replaced, exactly, by a **canonicity-vs-choice dichotomy on the orbit transversal**; (ii) a **positivity-canonicity lemma** for the Doplicher–Longo split-inclusion data (every DL-canonical object is positive-cone-compatible, and the flip candidate fails at a canonical-leg-identification step that is precisely an installed anti-isomorphism datum); (iii) a **core-descent no-go** locating the exact obstruction in the type II∞ continuous core: descent = dual-flow invariance = membership in M, and the dual flow **scales the core's entire dimension theory away** (τ∘θ_s = e^{−s}τ ⟹ the θ-invariant part of the trace-indexed signature data is {0, ∞}) — the Borchers rescaling engine reappearing, transported by Takesaki duality. Default posture DOWNGRADE applied throughout; nothing is flagged VERDICT-RELEVANT. Carrier-convergence count stays **FIVE**; principal hedge HYP-CKV-VACUITY stays **-R6**.

**Iteration:** 16. **Date:** 2026-07-03.

> **Binding inheritance.** Standing bars inherited without relitigation from the iter-15 dossier §1 ([2026-06-19-iter15-carrier-problem-dossier.md](2026-06-19-iter15-carrier-problem-dossier.md)): (indefinite) genuinely (n,n), J=J\*, J²=1, J≠±1; (algebra-compatible) Ad J ∈ Aut(M); (localized) affiliated to M(O) ⊊ M(W) with vanishing cross-coupling across causal disjointness; (natural) equivariant under Aut(N,Ω) ⊇ all wedge modular/boost flows; (generative) Δ_geo ≠ 0, not a function of Δ, not vacuum/symmetry-inherited, installing no fundamental symmetry / foliation / twist / (n,n)-flag / signature template. Smuggle items n₁ (causal index-set order) and η (installed Krein datum) per dossier §6. Prior closures inherited: iter-7 η₀-vacuity trichotomy; iter-9 Lemma N2 (boost-no-fixed-locus; referee-corrected form) and the commutant-to-generated gap; iter-10 LEM-CENTRALIZER-CARRIER (with both referee corrections); iter-12 Krein-route trichotomy (gauge-artifact / installed-not-derived / η₀-equivalent); iter-12 B1 (relative bicentralizer non-load-bearing; trivial bicentralizer is carrier-FRIENDLY); iter-14 D1 (installation-step screen). Every new construction below is graded against **all three iter-12 horns** and **all five bars**.

> **Untried-angle verification.** Before execution, the repo record was checked for prior attempts: (A) no prior track defines the carrier as a *section over the normal state space* — Marrakchi–Vaes appears in iter-11/12 only as a single-state centralizer fact (BIBLIOGRAPHY.md; iter-12 B1 §4); (B) Doplicher–Longo appears only as one link in the split ⟹ hyperfinite citation chain (iter-12 B1 §2.2), never as a carrier-construction source; (C) crossed products appear only in the entropy/observer line (Witten crossed product, OP-44/OP-CP1) — no prior track attempted to build η in the continuous core and descend. All three angles are genuinely new to the program.

---

## 1. The question

Can a localized, natural, algebra-compatible, genuinely indefinite (n,n) Hermitian form be **built** as an output of (algebra, state) data on a Haag-dual split BW net — by (A) relaxing the fixed-state assumption to a natural *family* over the state space, (B) mining the *canonical* type I data of the split property, or (C) constructing in the type II∞ *continuous core* (where indefinite quadratic forms and index theory are abundant) and descending? If not, where **exactly** does each best construction fail? `[OPEN — this is the program's single open gate, dossier §0]`

A survival here would be a counterexample to the carrier no-go conjecture (dossier §2) and would flip the 14-iteration verdict; the extraordinary-claim gate applies in full.

---

## 2. Angle A — state-family naturality (centerpiece)

### 2.1 Why this evades the letter of Lemma N2

All prior constructive attempts fixed the vacuum Ω and asked for a single form η invariant-or-covariant under Aut(N,Ω). Lemma N2's engine (iter-9, referee-upheld) is: a localized indefinite natural form has a natural sign-locus Λ ⊂ I; every automorphism — in particular the wedge boost σ_t^Ω = Ad Δ_W^{it} — carries Λ to itself; by the Borchers relation the flow is a free rescaling p ↦ e^{−2πt}p with **no fixed locus in the open index set**; hence the invariant sign-pattern is a global constant (definite). The engine consumes the *invariance of a fixed locus under the flow*.

Now define the carrier not at one state but as a **natural family**. Work in the Haagerup standard form (M, H, J, P^♮) `[ESTABLISHED — Haagerup, Math. Scand. 37 (1975) 271–283, web-verified this session]`, so every faithful normal state ψ has a unique implementing vector ξ_ψ in the positive cone, and every α ∈ Aut(N,Ω) has a unique standard (cone-preserving) implementation U_α. A **state-family carrier** is a map

> η: ψ ↦ η_ψ (self-adjoint unitary on H, per-fiber subject to the five bars),

defined on (a natural subset of) the faithful normal states S_f, **equivariant**: η_{ψ∘α^{−1}} = U_α η_ψ U_α\* for all α ∈ Aut(N,Ω). For the localized version the object is doubly indexed, η_{O,ψ}, with η_{αO, ψ∘α^{−1}} = U_α η_{O,ψ} U_α\*.

The decisive observation: **the boost moves the state too.** For ψ ≠ Ω the orbit point ψ∘σ_t^{−1} ≠ ψ, so equivariance relates *different fibers*; nothing forces the sign-locus of η_ψ to be σ_t-invariant. The locus can **co-move**: Λ_{ψ∘σ_t^{−1}} = σ_t Λ_ψ. Lemma N2's argument does not directly apply off-vacuum. This is a genuine, honest gap in the letter of the prior no-go, and it is the reason this angle was worth a full track. `[INFERENCE — high; this narrows the correct scope-statement of Lemma N2 to stabilizer-fixed fibers, see §2.3]`

### 2.2 What the family idiom certainly admits: the η₀-class section

There **is** a natural family, smuggle-free, on every fiber:

> **η₀-section.** ψ ↦ η₀(ψ) := sgn(ln Δ_ψ), or relative variants ψ ↦ sgn(ln Δ_{ψ|Ω}).

Equivariance holds because standard implementations intertwine modular data: Δ_{ψ∘α^{−1}} = U_α Δ_ψ U_α\*, and (using α(Ω)=Ω) Δ_{ψ∘α^{−1}|Ω} = U_α Δ_{ψ|Ω} U_α\*. Each fiber is genuinely indefinite. But each fiber is a *function of (relative) modular data*, hence lands fiberwise in the iter-7 η₀-class: unitarily universal across the Borchers/HSMI class, Δ_geo = 0, generically algebra-incompatible, non-localizable (Hilbert-tail ~1/sep). The family idiom does not repair any of this — it merely bundles the vacuity. **REDUCES-TO-KNOWN fiberwise.** `[INFERENCE, high — direct fiberwise application of the iter-7 closure]`

### 2.3 Lemma S1 (stabilizer dichotomy): where N2 still bites, and where it genuinely does not

For a fiber (O, ψ), equivariance constrains η_{O,ψ} only through the **stabilizer** G_{O,ψ} = {α ∈ Aut(N,Ω) : αO = O, ψ∘α^{−1} = ψ}:

> η_{O,ψ} must be invariant under U_α for all α ∈ G_{O,ψ}.

- **Vacuum-wedge fiber (W, Ω):** G contains the full boost flow {σ_t^Ω}. Lemma N2 applies verbatim: η_{W,Ω} is definite, or nonlocal (η₀-class sgn of modular frequency), or edge-supported (= n₁). **The fiber that must carry the geometry of the physical state is exactly the fiber the engine kills.** `[INFERENCE, high]`
- **Generic fiber (O, ψ):** for ψ outside the (measure-theoretically thin) set of Aut(N,Ω)-symmetric states, G_{O,ψ} is trivial or near-trivial (an α fixing both Ω and ψ and the region O is a rigidity condition; for a BW net whose vacuum-preserving symmetries act with dense non-degenerate orbits on states, generic stabilizers are trivial). Then **equivariance imposes no constraint at the fiber at all.** The co-moving evasion is real. `[INFERENCE, medium-high — the genericity claim is standard orbit-theory reasoning; no verbatim citation exists for this exact statement and none is claimed]`

So the family construction does not die by N2. It dies — or survives — at the next lemma.

### 2.4 Lemma S2 (section-rigidity trichotomy): naturality without canonicity is choice; canonicity is the old problem

Decompose the content of an equivariant section. The state space fibers into Aut(N,Ω)-orbits; an equivariant section is determined by (a) one fiber value per orbit, constrained only by the stabilizer of the chosen basepoint, plus (b) equivariant transport along the orbit. Hence the section's degrees of freedom live entirely on the **orbit transversal**, and there they are — by §2.3 — *unconstrained by naturality*.

Now grade against the **generative bar**. "η is an OUTPUT of (algebra, state) data" means: η_ψ = F(N, ψ) for a construction F with no further inputs — i.e. F is functorial under **all** isomorphisms of pairs (N, ψ), not merely equivariant under the subgroup Aut(N,Ω). (Equivariance under Aut(N,Ω) is implied by such functoriality; it does not imply it.) This forces the trichotomy:

> **Lemma S2 `[INFERENCE, high]`.** Every Aut(N,Ω)-equivariant state-family carrier {η_ψ} falls into exactly one of three classes:
> **(S2-a) Fiberwise-canonical** — η_ψ = F(N,ψ) functorially. Then at *each single* ψ, F solves the single-state carrier problem at ψ. By the inherited closures applied at ψ: the canonical self-adjoint involutions constructible from (N,ψ)-modular data are (i) functions of (relative) modular operators — η₀(ψ)-class, geometry-void and non-localizable (iter-7); (ii) centralizer signs sgn(h), h ∈ M_ψ — but by **Marrakchi–Vaes Theorem A** the ergodic states (M_ψ = ℂ1) form a **dense G_δ among all faithful normal states on any III₁ factor with separable predual** (verbatim, web-verified this session: *"We solve this problem and prove that such ergodic states form a dense G_δ set among all faithful normal states on any III₁ factor with separable predual"* — arXiv:2305.14217, Crelle 809 (2024) 247–260), so any centralizer-class F **degenerates (η_ψ = ±1 or undefined) on a dense G_δ of fibers** — a fiberwise-canonical family cannot be nontrivially centralizer-class on any norm-open set of states; (iii) installed data — excluded by hypothesis. Hence a fiberwise-canonical family **reduces fiberwise to the η₀-class section of §2.2**. REDUCES-TO-KNOWN.
> **(S2-b) Non-canonical but equivariant** — the transversal fiber values are genuine choices. Then the family is precisely an **installed field of (n,n) data over the state space**: a state-indexed generalization of smuggle item η (the dossier-§6 installed Krein datum, now bundled). κ_Φ > 0; fails (generative) by definition. The co-moving evasion buys sections into existence, but their entire content is the installer's hand.
> **(S2-c) Mixed/measurable-selection** — attempt to launder (b) into (a) by a *measurable* equivariant selection over the orbit space. The orbit space of Aut(N,Ω) acting on S_f is not standard (the action has dense orbits on natural subsets and no measurable transversal with the required uniformity — the same pathology class as the classification-theoretic non-smoothness of III₁ state orbits), so no measurable selection is canonical; any concrete selection re-enters (b). `[INFERENCE, medium — the non-smoothness invocation is structural, not a quoted theorem; flagged honestly. It is not load-bearing: even granting a measurable selection, its values at each fiber are still choices unconstrained by (N,ψ), so it lands in (b) on the generative grade regardless.]`

**What replaces Lemma N2 for families, exactly:** the boost-no-fixed-locus engine is replaced by the **canonicity dichotomy** — off-vacuum fibers are unconstrained by naturality, so their content is either derived from (N,ψ) alone (⟹ the single-state problem, closed at every fiber, with Marrakchi–Vaes closing the centralizer escape *generically in ψ*) or installed (⟹ smuggle). The family never generates: it either bundles η₀ or bundles the installer's flag field. And the one fiber with a large stabilizer — the vacuum-wedge fiber, the physical one — is still killed by N2 directly (§2.3).

### 2.5 Explicit attempt on the free scalar wedge algebra

One-particle structure: H₁ = one-particle Hilbert space, standard subspace H(W) ⊂ H₁, Δ_W = e^{−2πK_W} (K_W the boost generator), second quantization to M(W) on Fock space, BW property `[ESTABLISHED — standard]`. Candidate fiberwise constructions attempted:

1. **η_ψ = sgn(ln Δ_ψ)** and **η_ψ = sgn(ln Δ_{ψ|Ω})** (coherent states ψ = ω_f, quasi-free perturbations): equivariant ✓, indefinite ✓; function of (relative) modular data ⟹ η₀-class; for the wedge the modular spectrum is homogeneous Lebesgue, so the sign is unitarily universal; Δ_geo = 0; non-localizable (Hilbert tail). At ψ = Ω it *is* η₀. Fails (localized) + (generative).
2. **Cocycle dressing** η_ψ = u η₀ u\* with u from the Connes cocycle [Dψ : DΩ]_t: at real t this is a unitary in M and the dressing is an inner perturbation — the result is η₀-class (unitary orbit); the analytic continuation to t = i/2 that would produce a genuinely new self-adjoint object is unbounded and state-dependent without a canonical closure — no new class. Fails (generative).
3. **Localization surgery** η_{O,ψ} = sgn(E_O(ln Δ_{ψ|Ω})) via a conditional expectation E_O: M(W) → M(O): **blocked at existence** — the physics inclusions M(O) ⊂ M(W) are irreducible, infinite-index, **expectation-free** (no normal conditional expectation; this is the same structural fact that blocked the AHHM transfer in iter-12 B1 and the Marrakchi 2606.23636 transfer in watch-sweep #1). The surgery that would localize the family is unavailable *for exactly the inclusions where the geometry lives.* `[INFERENCE, high]`
4. **Co-moving locus by hand:** define Λ_ψ ⊂ W from the state's stress-energy density profile (e.g. the region where a normal-ordered density exceeds a threshold) and set η_{O,ψ} = a sign-involution supported on Λ_ψ. Equivariant if the profile is covariant ✓, co-moving ✓ — and **installed**: the threshold, the choice of density, and the sign assignment are hand data (an (n,n)-flag field over states; S2-b). Also fails (algebra-compatible) generically and per-fiber indefinite-localized fails the iter-8/9 single-fiber engine *at the vacuum limit*: along ψ∘σ_t^{−1}, t → ∞, the transported locus σ_tΛ_ψ runs to the wedge horizon; any weak-\* continuity of the section at Ω forces the vacuum fiber onto the **wedge edge — n₁** (the iter-9 fixed-point subtlety, reappearing as the *boundary value of the section*). Fails (generative) + (natural-at-the-physical-fiber). `[INFERENCE, high]`

### 2.6 Angle A grade

| Bar | η₀-section (S2-a) | installed flag-field (S2-b) | co-moving locus (§2.5.4) |
|---|---|---|---|
| indefinite | ✓ | ✓ (by hand) | ✓ (by hand) |
| algebra-compatible | ✗ (generic) | choice | ✗ generic |
| localized | ✗ (Hilbert tail) | choice | ✓ per fiber, ✗ at vacuum limit (edge = n₁) |
| natural | ✓ | ✓ (equivariant by transport) | ✓ |
| generative | ✗ (function of Δ; Δ_geo=0) | ✗ (κ_Φ > 0, installed field) | ✗ (threshold+flag installed) |

**Outcome A: BLOCKED-AT-(generative), with the physical (vacuum-wedge) fiber independently BLOCKED-AT-(natural)×(localized) by Lemma N2.** The co-moving evasion is real and narrows Lemma N2's honest scope to stabilizer-fixed fibers — a scope-precision the record should adopt — but the family construction cannot convert the evasion into content: Lemma S2's trichotomy closes every branch. The centerpiece finding is that **state-space naturality is strictly weaker than canonicity, and the generative bar is a canonicity bar** — which collapses the family problem back onto the single-state problem at every fiber, where it is closed, with Marrakchi–Vaes closing the centralizer branch generically in ψ.

---

## 3. Angle B — split-inclusion canonical data (Doplicher–Longo)

### 3.1 The canonical data, verified

For a standard split inclusion Λ = (N ⊂ M, Ω) (in the net: N = M(O), M = M(Õ), O ⊂⊂ Õ), Doplicher–Longo construct `[ESTABLISHED — Doplicher & Longo, "Standard and split inclusions of von Neumann algebras", Invent. Math. **75** (1984) 493–536; bibliographic data web-verified this session (Springer BF01388641). NOTE: the mission brief and two wiki pages cite "Invent. Math. 73"; the correct volume is **75** — precision repair proposed in §6]`:

- the **canonical intermediate type I factor** F, N ⊂ F ⊂ M, with the explicit formula (expository source verified this session, Longo arXiv:1911.09390, verbatim: *"ℱ = 𝒜(O) ∨ J𝒜(O)J = ℬ(Õ) ∩ Jℬ(Õ)J"* where *"J is the modular conjugation of the relative commutant von Neumann algebra 𝒜(O)′ ∩ 𝒜(Õ)"* — with respect to Ω, which is cyclic-separating for the relative commutant by Reeh–Schlieder);
- the canonical spatial isomorphism χ: N ∨ M′ → N ⊗ M′ (split isomorphism), implemented by a **canonical unitary U: H → H ⊗ H** singled out by natural-cone (standard-form) uniqueness — the "universal localizing map" structure;
- expository anchor: Fewster, arXiv:1601.06936 (abstract verified verbatim this session: *"The split property expresses a strong form of independence of spacelike separated regions in algebraic quantum field theory. In Minkowski spacetime, it can be proved under hypotheses of nuclearity."*).

These are genuinely **outputs of (net, Ω)** — no choices. Type I structure gives H ≅ K₁ ⊗ K₂ with F = B(K₁) ⊗ 1: finite-type spectral structure unavailable in III₁. The question: does any of it carry an indefinite localized object?

### 3.2 The candidates and their exact failure points

**(B1) Sign-cuts of canonical positive operators.** F type I ⟹ the DL data produce canonical *positive* objects (density matrices of the canonical product state, modular operators of the interpolating data). Any indefinite involution built from them is sgn(ρ − λ) for a spectral cut λ — the cut is a **choice**, and the Aut-invariant of the result is a signature pattern over the input spectrum: the iter-10 corrected-invariant vacuity verbatim (sign-pattern indexed by input spectral data, Δ_geo = 0). BLOCKED-AT-(generative). `[INFERENCE, high]`

**(B2) The flip candidate (the strongest).** On H ⊗ H the flip Σ(ξ⊗ζ) = ζ⊗ξ is canonical: self-adjoint, unitary, Σ² = 1, spectrum {±1} with infinite-dimensional symmetric/antisymmetric eigenspaces — a genuine (∞,∞) indefinite involution, and **not a function of any modular operator**. Pull back by the canonical DL unitary: Θ := U\*ΣU — a canonical self-adjoint indefinite unitary on H, an output of (net, Ω). Two bars clear immediately (indefinite ✓, and canonicity-so-far ✓). It fails at:

- **(algebra-compatible): Ad Σ swaps the legs the wrong way.** Ad Σ maps N⊗1 to 1⊗N; but the second leg of the split picture carries M′ (as 1⊗M′), not N. So Ad Θ maps N = M(O) onto U\*(1⊗N)U, which is **not in the net** — Ad Θ ∉ Aut(N ∨ M′), a fortiori ∉ Aut(M(W)). To repair it one must convert Σ into a swap of N⊗1 with 1⊗M′, which requires an isomorphism datum ι: N → M′ (both hyperfinite III₁, abstractly isomorphic — but **only via a choice**; no canonical ι exists for a split pair). The repaired flip Σ_ι is exactly as canonical as ι — i.e., **installed**. The identification of the two tensor legs is an installed anti-isomorphism datum, the tensor-split relocation of smuggle item η. `[INFERENCE, high]`
- **The one case where ι IS canonical degenerates.** For the wedge pair (M(W), M(W′)) Haag duality + Tomita give the canonical identification a ↦ J_W a J_W (M(W′) = J_W M(W) J_W). But (i) the wedge pair is **not split** (no collar; no interpolating type I factor, no DL unitary — Buchholz-Wichmann nuclearity fails at touching regions), so the flip construction is unavailable; and (ii) the object the canonical identification produces on its own is J_W itself — **antiunitary, and vacuum/symmetry-inherited (the PCT/modular conjugation)**: fails (generative) as inherited symmetry data. The fork is exhaustive: split ⟹ no canonical identification; canonical identification ⟹ no split. REDUCES-TO-KNOWN (J = PCT class) on the second horn. `[INFERENCE, high]`

**(B3) Standard implementations of involutive automorphisms.** The cone-preserving (standard) implementation U_β of an involutive net automorphism β is a self-adjoint unitary with genuinely (∞,∞) spectrum — indefinite ✓, algebra-compatible ✓ (Ad U_β restricts to β on M). Fails: **(generative)** — U_β is *inherited from the symmetry β* (installed as symmetry data; the bar names this exclusion verbatim); and **(localized)** — for inner β = Ad u, u = u\* ∈ M(O), the standard implementation is uJuJ, which contains the reflected leg JuJ ∈ M(O)-mirror (for the wedge: in M(W′)): the object **couples causally disjoint regions** (TFD-correlated across the two wedges), violating vanishing cross-coupling. BLOCKED-AT-(generative)+(localized). `[INFERENCE, high]`

**(B4) The positivity-canonicity lemma (why B cannot work in principle).**

> **Lemma PC `[INFERENCE, high]`.** Every object canonically associated to (N ⊂ M, Ω) through standard-form uniqueness is positive-cone-compatible, because **positive-cone preservation is the very mechanism of canonicity**: the standard form is unique up to a unique unitary preserving the self-dual cone P^♮, and every DL-canonical object (J of the relative commutant, F, χ, U) is singled out by exactly this cone-preservation (Haagerup, Math. Scand. 37 (1975) 271–283, web-verified; DL 1984 §§1–3). The self-adjoint involutions such machinery can output are therefore exhausted by: (i) modular conjugations — antiunitary, vacuum-inherited; (ii) standard implementations of involutive automorphisms — symmetry-inherited, cross-coupling (B3); (iii) sign-cuts of canonical positive operators — choice-dependent, spectrum-indexed vacuity (B1). An indefinite involution that is *not* of these classes cannot be canonical for the standard-form data, because dropping cone-compatibility destroys the uniqueness that made the object canonical: the "indefinite variant" of a canonical implementation is a torsor over the relevant unitary group — pure choice.

This is the split-inclusion analogue of the iter-12 horn (B) ("installed, not derived"), now with the *mechanism* identified: **canonicity in standard-form theory is positivity.** The type I interlopers add spectral structure but only on the positive side.

### 3.3 Angle B grade and outcome

**Outcome B: BLOCKED-AT-(generative)** — the flip candidate (the genuinely new object here: indefinite, canonical-up-to-one-datum, not a function of Δ) fails precisely at the **leg-identification datum**, an installed anti-isomorphism = the η smuggle in tensor-split form; the wedge horn where the identification is canonical degenerates to PCT (REDUCES-TO-KNOWN); all remaining DL-canonical indefinite objects fall to Lemma PC. All three iter-12 horns checked: nothing here is a gauge artifact (horn A n/a); B2/B3 land in horn B (installed); B1 lands in the η₀/spectrum-indexed vacuity adjacent to horn C. No bar-clearing survivor.

---

## 4. Angle C — core-descent (build in II∞, descend along Takesaki duality)

### 4.1 Setup, verified

For M = M(W) type III₁ with f.n. state φ, the **continuous core** c(M) = M ⋊_{σ^φ} ℝ is a type II∞ factor (a factor precisely because M is III₁ — trivial flow of weights), carrying a f.n.s. trace τ and the **dual action** θ_s with the trace-scaling property **τ∘θ_s = e^{−s}τ**; the core and θ are independent of φ up to canonical isomorphism. `[ESTABLISHED — Takesaki, "Duality for crossed products and the structure of von Neumann algebras of type III", Acta Math. **131** (1973) 249–310, web-verified this session (Springer BF02392041 / Project Euclid); Connes–Takesaki, "The flow of weights on factors of type III", Tôhoku Math. J. (2) **29** (1977) 473–575, errata (2) 30 (1978) 653–655, web-verified this session]`

Takesaki duality: (c(M) ⋊_θ ℝ) ≅ M ⊗ B(L²(ℝ)), and the **fixed-point algebra of the dual action is the embedded copy of M**: c(M)^θ = π(M). `[ESTABLISHED — Takesaki 1973; standard]`

In the core, indefinite structure is **abundant**, exactly as the mission conjectured: for any τ-measurable h = h\* with spectral projections of infinite τ-trace on both sides, sgn(h) is a genuine (∞,∞) involution; II∞ dimension theory (τ on projections, K₀(c(M)) → ℝ) supplies real-valued index data unavailable in III₁; and the modular flow σ^φ is *inner* in the core (implemented by the unitaries λ_t), so modular-naturality is cheap there.

### 4.2 The descent obstruction, located exactly

**Horn C1 — θ-invariant η (the only descending class).** An object of the core defines an object of M **iff** it is θ-invariant, since c(M)^θ = π(M). Add per-fiber modular naturality ([η, λ_t] = 0): a θ-invariant, λ-commuting self-adjoint involution lies in π(M) ∩ {λ_t}′ = π(M_φ) — **the modular centralizer**. This is verbatim the iter-10 object: LEM-CENTRALIZER-CARRIER applies with both referee corrections — in the geometric (Lebesgue-spectrum, BW) sector M_φ = ℂ1 and the class is *empty*; in the almost-periodic sector sgn(h) is unitarily universal (signature-per-eigenspace invariant only), Δ_geo = 0, and localization presupposes n₁. **Descent + naturality = the closed centralizer class.** Nothing new can descend. `[INFERENCE, high — the identification c(M)^θ ∩ {λ}′ = π(M_φ) is elementary from the crossed-product relations]`

**Horn C2 — θ-covariant (non-invariant) η.** A non-invariant η does not define an object of M at all; its θ-orbit {θ_s(η)}_{s∈ℝ} is a one-parameter *family*. Two sub-results:

- **(C2-i) The trace-scaling engine.** Any numerical signature datum built from (τ, η) — τ of a spectral projection, a τ-index, a τ-weighted signature asymmetry — transforms under θ_s by the factor e^{−s}. The θ-invariant part of the core's entire trace-indexed dimension/index theory is therefore **{0, ∞}**: the dual flow **annihilates the core's dimension theory** exactly as the Borchers boost annihilates finite sign-loci (Lemma N2). This is not an analogy but a transport: under duality the dual flow *is* the modular/boost datum seen from the core, and "no fixed finite trace-locus under trace-scaling" is the II∞ shadow of "no fixed locus in the open index set under p ↦ e^{−2πt}p". The abundance that motivated the angle (trace, index theory, real structure) is precisely the structure the dual flow scales away on descent. `[INFERENCE, high; τ∘θ_s = e^{−s}τ is ESTABLISHED]`
- **(C2-ii) Reduction to Angle A.** A θ-covariant family over the dual ℝ is equivalently a section over the ray of weights {e^{−s}φ̂} — a **weight-family carrier**, the crossed-product incarnation of the state-family object of §2. Lemma S2 applies verbatim: fiberwise-canonical ⟹ single-state problem (closed, horn C1); non-canonical ⟹ installed flag field over the weight ray (smuggle). The two untried angles A and C are, at this junction, **the same angle** — a structural unification worth recording. `[INFERENCE, high]`

### 4.3 Angle C grade and outcome

**Outcome C: BLOCKED-AT-(natural/descent), with a clean impossibility statement:**

> **Core-descent no-go (proposed LEM-CORE-DESCENT).** Every self-adjoint involution in the continuous core c(M) that is (i) θ-invariant and (ii) modular-natural lies in π(M_φ) and is governed by LEM-CENTRALIZER-CARRIER (empty in the geometric sector; universal-and-nonlocal in the almost-periodic sector); every θ-covariant non-invariant candidate carries only trace-indexed data scaled by e^{−s} (θ-invariant values {0,∞}) and is, as a family, subject to the section-rigidity trichotomy (Lemma S2). Hence the type II∞ abundance of indefinite forms does not descend: **the obstruction is the dual flow's trace-scaling, which is the Borchers rescaling engine transported by Takesaki duality.** `[INFERENCE, high]`

All three iter-12 horns checked: C1 lands η₀/centralizer-adjacent (horn C); C2 non-canonical branches land installed (horn B); no gauge horn. No bar-clearing survivor.

---

## 5. Outcome per angle

| Angle | Outcome | Exact failure point |
|---|---|---|
| **A. State-family naturality** | **BLOCKED-AT-(generative)**; canonical branch REDUCES-TO-KNOWN (η₀-section); physical fiber independently BLOCKED-AT-(natural)×(localized) by Lemma N2 | Generic fibers are naturality-unconstrained ⟹ content is either fiberwise-canonical (= single-state problem, closed; Marrakchi–Vaes kills the centralizer branch on a dense G_δ of fibers) or installed flag field over state space (κ_Φ > 0). Vacuum-wedge fiber killed by the stabilizer (Lemma N2). |
| **B. Split-inclusion canonical data** | **BLOCKED-AT-(generative)**; wedge horn REDUCES-TO-KNOWN (J = PCT) | The flip candidate Θ = U\*ΣU fails algebra-compatibility unless the two tensor legs are identified — a non-canonical anti-isomorphism datum = installed η; where the identification is canonical (wedge, J_W) the split structure is absent and the object degenerates to inherited PCT. Lemma PC: standard-form canonicity *is* positivity. |
| **C. Core-descent** | **BLOCKED-AT-(natural/descent)** — clean impossibility (proposed LEM-CORE-DESCENT) | Descent = θ-invariance = membership in π(M) (+naturality ⟹ π(M_φ), the closed iter-10 class); non-invariant candidates carry only trace data scaled by e^{−s} (invariant values {0,∞}); θ-covariant families reduce to Angle A's trichotomy. |

**No construction survives red-team. Nothing is VERDICT-RELEVANT. The verdict does not flip (would-be 15th consecutive confirmation, subject to referee).**

The most important *positive* finding (in the epistemic, not verdict, sense): **Lemma N2's honest scope is stabilizer-fixed fibers only** — the co-moving family evasion is mathematically real — and the correct replacement engine off-vacuum is the **canonicity dichotomy** (Lemma S2), which is *stronger* where it applies: it shows the generative bar is a canonicity bar, collapsing every family/parametrized carrier onto the closed single-state problem plus installed choices. Together with C2-ii (core families = state families) this closes the parametrized-carrier direction as a class, not just instance-by-instance.

---

## 6. Consequences proposed (verdict-neutral; for the integrator, subject to referee)

1. **Propose LEM-SECTION-RIGIDITY (S1+S2).** An Aut(N,Ω)-equivariant state-family carrier is fiberwise-canonical (⟹ fiberwise η₀-class; centralizer branch empty on the Marrakchi–Vaes dense G_δ), or contains installed transversal data (state-indexed η smuggle); the vacuum-wedge fiber is killed by Lemma N2 via its stabilizer. Tag `[INFERENCE, high]`. This *narrows the statement* of Lemma N2 (scope: stabilizer-fixed fibers) while *strengthening the closure* (families close as a class).
2. **Propose LEM-CORE-DESCENT** (§4.3). The II∞ core's indefinite abundance does not descend: θ-invariance forces the closed centralizer class; the dual flow's trace-scaling annihilates the θ-invariant dimension theory ({0,∞}); θ-covariant families reduce to LEM-SECTION-RIGIDITY. Tag `[INFERENCE, high]`. Publishable-grade negative content for the wiki per the mission spec.
3. **Propose Lemma PC (positivity-canonicity)** for the dossier's §5 vocabulary: in standard-form theory canonicity *is* positive-cone preservation; hence split-inclusion canonical data can never output a generative indefinite involution — the DL route lands in iter-12 horn (B) with the mechanism now identified. Tag `[INFERENCE, high]`.
4. **Citation-precision repair (binding, small):** Doplicher–Longo is Invent. Math. **75** (1984) 493–536, not 73 — correct BIBLIOGRAPHY.md and notes/2026-06-19-iter12-physics-net-bicentralizer-lever.md (§2.2 and its ledger). Web-verified this session (Springer BF01388641, ADS, EUDML).
5. **Registry/hedge accounting:** carrier-convergence count stays **FIVE** (all three angles are facets of route 5 — the family idiom, the split-canonical idiom, and the core idiom are re-expressions, not new routes). HYP-CKV-VACUITY stays **-R6** in grade and condition (the residual n₁ + commutant-sliver structure is untouched; this track adds closures *around* it, not through it). HYP-ENCODING-SCREEN inherits three new confirming instances. No numeric ID consumed unless the integrator promotes the two lemmas.
6. **New watch-item:** any future theorem providing a *canonical* (choice-free) anti-isomorphism N → M′ for standard split inclusions, or a measurable-selection theorem for Aut(N,Ω)-orbits on S_f with canonical fiber data, would re-open S2-c/B2 — both are precise, checkable triggers.

---

## 7. Verified-citation ledger

Web-verified live this session (2026-07-03), against actual abstracts/publisher pages:

1. **Marrakchi & Vaes**, *Ergodic states on type III₁ factors and ergodic actions*, J. reine angew. Math. (Crelle) **809** (2024) 247–260, arXiv:2305.14217 — abstract fetched verbatim: *"Since the early days of Tomita-Takesaki theory, it is known that a von Neumann algebra M that admits a state φ with trivial centralizer M_φ must be a type III₁ factor, but the converse remained open. We solve this problem and prove that such ergodic states form a dense G_δ set among all faithful normal states on any III₁ factor with separable predual."* Load-bearing for Lemma S2(a). ["Ergodic state" = trivial centralizer M_φ = ℂ1 — distinct from trivial Aut(N,Ω)-stabilizer; the two notions are kept separate throughout §2.]
2. **Doplicher & Longo**, *Standard and split inclusions of von Neumann algebras*, Invent. Math. **75** (1984) 493–536 — bibliographic data verified (Springer DOI 10.1007/BF01388641; ADS 1984InMat..75..493D; EUDML 143108). **Volume is 75, not 73 as in the mission brief and two wiki pages** — repair proposed §6.4. Load-bearing for §3.
3. **Longo**, *Entropy of coherent excitations / von Neumann entropy in QFT line*, arXiv:1911.09390 — canonical intermediate type I factor formula fetched verbatim: *"ℱ = 𝒜(O) ∨ J𝒜(O)J = ℬ(Õ) ∩ Jℬ(Õ)J"*, *"J is the modular conjugation of the relative commutant von Neumann algebra 𝒜(O)′ ∩ 𝒜(Õ)"*. Load-bearing for §3.1.
4. **Fewster**, *The split property for quantum field theories in flat and curved spacetimes*, arXiv:1601.06936 — abstract fetched verbatim (split property, nuclearity). Expository anchor for §3.
5. **Takesaki**, *Duality for crossed products and the structure of von Neumann algebras of type III*, Acta Math. **131** (1973) 249–310 — verified (Springer DOI 10.1007/BF02392041; Project Euclid). Load-bearing for §4 (duality, dual action, fixed-point algebra).
6. **Connes & Takesaki**, *The flow of weights on factors of type III*, Tôhoku Math. J. (2) **29** (1977) 473–575; errata (2) **30** (1978) 653–655 — verified. Load-bearing for §4.1 (core a factor iff III₁; trace-scaling).
7. **Haagerup**, *The standard form of von Neumann algebras*, Math. Scand. **37** (1975) 271–283 — verified (mscand.dk 11606; EUDML 166445): standard form unique up to unitary equivalence via the self-dual positive cone. Load-bearing for §2.1 (standard implementations) and Lemma PC.

Inherited, previously repo-verified (not re-fetched; provenance noted): Haagerup, Acta Math. **158** (1987) 95–148 (bicentralizer biconditional — iter-12 B1 ledger); Marrakchi, arXiv:2606.23636 (bicentralizer-flow ergodicity, expectation-hypothesis blocker — watch-sweep #1, three referees); AHHM, Math. Ann. **376** (2020) 1145–1194, arXiv:1804.05706 (discrete-inclusion restriction — iter-12 B1 verbatim ledger); iter-7/9/10/12/14/15 internal results as cited inline.

**Fresh verifications this session: 7. Fabricated citations: 0.**

## See also

- [2026-06-19-iter15-carrier-problem-dossier.md](2026-06-19-iter15-carrier-problem-dossier.md) — the posed problem this track attacks constructively
- [2026-06-10-iter9-carrier-naturality.md](2026-06-10-iter9-carrier-naturality.md) — Lemma N2, whose scope this track narrows and whose closure it strengthens
- [2026-06-10-iter10-carrier-in-the-gap.md](2026-06-10-iter10-carrier-in-the-gap.md) — LEM-CENTRALIZER-CARRIER, the class horn C1 lands in
- [2026-06-19-iter12-indefinite-metric-carrier-closed.md](2026-06-19-iter12-indefinite-metric-carrier-closed.md) — the three horns every candidate above was graded against
- [2026-06-19-iter12-physics-net-bicentralizer-lever.md](2026-06-19-iter12-physics-net-bicentralizer-lever.md) — Marrakchi–Vaes/ergodic-state record; expectation-free inclusion blocker reused in §2.5.3
- [../EPISTEMICS.md](../EPISTEMICS.md) — tag discipline governing every claim above

> **Binding note.** Where the referee verdict below conflicts with the body above, the **referee correction governs**; the body is the pre-referee submission, retained for the audit trail per house convention. In particular: Lemma N2's statement in the dossier and LEM-NAT-CARRIER are **not** edited (the "scope narrowing" is a scope-statement for the state-family **extension**, which is outside the posed conjecture); S2's canonical horn gains a fourth branch (symmetry-inherited implementers); Lemma PC's mechanism slogan is corrected; the DL "73" repair targets ONLY the iter-12 B1 note (BIBLIOGRAPHY.md has no DL entry); §2.5.3's "irreducible" is struck.

## Referee verdict — R2 (binding)

*Adversarial referee, iteration 16, track G2. Default stance REFUTE. All four binding priors re-read in full (iter-9 N2 + its referee scope, iter-10 LEM-CENTRALIZER-CARRIER + both corrections, iter-12 Krein trichotomy, iter-15 dossier carrier definition); every load-bearing derivation independently re-executed; the parallel G1 submission cross-audited; citations re-verified live this session (2026-07-03).*

**Overall stance: UPHELD WITH CORRECTIONS — no construction survives; verdict does not flip (15th consecutive confirmation, contingent as always on the parallel G1 verdict); carrier-convergence count stays FIVE; HYP-CKV-VACUITY stays -R6. Two of the three named lemmas are downgraded to sketch-grade "proposed"; one factual error and one repair-instruction error are struck; the headline claim (5) is re-scoped in a way that matters for registry integration.**

### 1. Re-derivations (what was independently checked and holds)

**(R-i) Stabilizer argument (§2.1–2.3).** Re-derived. An Aut(N,Ω)-equivariant section over state space is determined by one fiber value per orbit plus equivariant transport; the fiber-at-ψ constraint from equivariance is exactly invariance under the standard implementations of the stabilizer G_{O,ψ}. This is standard equivariant-section theory and is correct. The vacuum-wedge fiber's stabilizer genuinely contains the full boost flow: Δ_W^{it}Ω = Ω, ω∘σ_t = ω (KMS/modular invariance of the vacuum state), and σ_t W = W (BW) — so {σ_t^Ω} ⊂ G_{W,Ω} and Lemma N2 applies verbatim at that fiber. The off-vacuum co-moving evasion is mathematically real: for ψ ≠ Ω the boost relates *different* fibers and imposes no per-fiber constraint. **Sound.**

**(R-ii) Marrakchi–Vaes application (§2.4, S2-a).** Theorem A re-verified verbatim live (arXiv:2305.14217 abstract fetched this session; Crelle 809 (2024) 247–260): ergodic states (M_φ = ℂ1) form a dense G_δ among faithful normal states on any III₁ factor with separable predual. The submission's use — a centralizer-class F degenerates on a dense G_δ, hence cannot be nontrivially centralizer-class on any norm-open set — is a correct reading (dense G_δ ⟹ complement has empty interior), and the submission correctly keeps "ergodic state" (trivial M_φ) distinct from "trivial Aut(N,Ω)-stabilizer." **But the genericity is not what closes the branch**: the family could live naturally on the meager complement (almost-periodic states). The branch closes because (a) the **physical fiber** (W,Ω) has trivial centralizer by the Lebesgue-spectrum fact (record, iter-10/G1 — independent of MV), and (b) on the meager complement LEM-CENTRALIZER-CARRIER (referee-corrected: per-modular-eigenspace sign pattern, Δ_geo = 0, non-localizable without n₁) governs every fiber. MV is corroborating genericity, not the kill. Correction folded into S2's wording below.

**(R-iii) Lemma PC vs Haagerup uniqueness (§3.2 B4).** Haagerup's theorem (Math. Scand. 37 (1975) 271–283, real and correctly cited) states: the standard form is unique up to a **unique unitary preserving the self-dual cone** (and intertwining J). What this licenses is: *canonical = covariant under the unique cone-preserving transport unitary*. It does **not** license "every canonical output is positive-cone-compatible": a canonical object need not itself preserve the cone — the submission's own Θ = U\*ΣU (canonical, genuinely (∞,∞)) and the baseline η₀ = sgn(ln Δ) (canonical, indefinite, not cone-preserving) are counterexamples to the slogan as literally written. The slogan "standard-form canonicity IS positive-cone preservation" is **struck as a mechanism claim** and replaced by: *canonicity is covariance under the cone-preserving transport, which confines canonical outputs to the standard-form data's orbit; the algebra-compatible involutive outputs of that machinery are, by enumeration, (i) modular conjugations (antiunitary, inherited), (ii) standard implementations of involutive automorphisms (symmetry-inherited, cross-coupling — B3), (iii) spectral cuts of canonical positive operators (choice-dependent except the canonical λ=1 cut, which is precisely the η₀ class).* Note the carve-out: B1's "the cut is a choice" fails for λ=1 — sgn(ρ−1)/sgn(ln Δ)-type cuts are canonical, and land in the already-closed η₀ class; B1's conclusion is unaffected but the wording needs the carve-out. The exhaustion (i)–(iii) is an **enumeration inheriting iter-12 horn (B), not a theorem** — this is exactly the sliver-shaped hole G1's (G-glob) fills at net level, and it is why PC is sketch-grade.

**(R-iv) Flip candidate (§3.2 B2).** Re-derived: with χ(n) = n⊗1, χ(m′) = 1⊗m′ and Θ = U\*ΣU, one gets Ad Θ(n) = U\*(1⊗n)U for n ∈ N, and 1⊗N ⊄ χ(N ∨ M′) = N ⊗ M′ — so Ad Θ ∉ Aut(N ∨ M′). Correct. The repair requires an (anti-)isomorphism datum ι: N → M′; both legs are hyperfinite III₁ (abstractly isomorphic) with no canonical ι for a split pair — correct, and the fork is genuine: for the wedge pair the canonical identification exists (J_W, Haag duality) but the pair is not split (no interpolating type I factor; nuclearity fails for touching regions), and the canonical object degenerates to J_W = PCT class (antiunitary, inherited). **The exact-failure-point result is sound and is the genuinely new content of Angle B.**

**(R-v) Core-descent computations (§4).** All three component facts re-derived: (a) c(M)^θ = π(M) — Takesaki 1973, standard; (b) π(M) ∩ {λ_t}′ = π(M_φ) — elementary from λ_t π(x) λ_t\* = π(σ_t^φ(x)); (c) τ∘θ_s = e^{−s}τ is the standard trace-scaling of the dual action, and for a θ-invariant projection P: τ(P) = τ(θ_s(P)) = e^{−s}τ(P) for all s ⟹ τ(P) ∈ {0, ∞}. **All correct.** The {0,∞} conclusion follows for the θ-invariant part of the trace-indexed data, and since K₀(II∞) is captured by τ, "trace-indexed" covers the dimension/index theory the carrier bars ask about. The "Borchers engine transported by duality" framing is legitimate as an identification of mechanism (the dual flow is the modular datum seen from the core), graded inference, not theorem-poetry. C2-ii's identification of θ-covariant families with weight-ray sections (hence Angle A's trichotomy) is correct and is the right structural unification.

### 2. Binding corrections

**C-1 (MAJOR, scope — governs claim 5).** "Lemma N2's honest scope is stabilizer-fixed fibers only" is true **only inside the state-family extension**. The posed conjecture (dossier §1) defines the carrier at the fixed vacuum Ω, as a field over regions, equivariant under Aut(N,Ω); *every* fiber of that object is stabilizer-fixed under the relevant wedge flows. **State-family naturality is a legitimate EXTENSION of the posed conjecture, not a reading of it.** Consequently: Lemma N2's statement, LEM-NAT-CARRIER, and dossier §3 are **not to be edited or "narrowed"**; S2 is recorded as a new closure of the extension class, laterally strengthening the record. The submission's phrase "the correct and STRONGER replacement" is struck: S2 replaces N2 **nowhere inside the posed problem**; it is the correct engine for the extension, where N2 was never claimed to apply.

**C-2 (MAJOR, completeness of S2-a).** The canonical-horn enumeration "(i) functions of (relative) modular data; (ii) centralizer signs; (iii) installed" **omits a non-empty fourth class**: canonical standard implementations of involutive internal (gauge) symmetries of the net — exactly the class G1's (G-glob) classifies, certified non-empty by the Fock parity (−1)^N (self-adjoint unitary, (∞,∞), natural under all wedge flows, not a function of any Δ, not in M, not installed-by-hand given the net's gauge group; and available to a net-level functorial F, hence to a fiberwise-canonical family). The closure **survives** — this class is symmetry-inherited, which the generative bar excludes by name, and G1's Step 4 gives Δ_geo = 0 (Poincaré-invariant eigenprojections; no region dependence) — but Lemma S2 as stated is incomplete without the fourth branch, and its completeness is now **conditional on G1's Lemma G (G-glob)**, itself pending the parallel referee. This is the difference between sketch-grade and proof-grade for S2.

**C-3 (MAJOR, repair-instruction error in §6.4).** Web-verified this session: Doplicher–Longo is Invent. Math. **75** (1984) 493–536 (Springer DOI 10.1007/BF01388641; ADS 1984InMat..75..493D; EUDML 143108) — the volume-number finding is **confirmed**. But the repair instruction is wrong about where the error lives: **BIBLIOGRAPHY.md contains no Doplicher–Longo entry at all** (repo-grepped this session — no "Doplicher", no "Invent. Math." DL line). The erroneous "Invent. Math. 73 (1984) 493-536" occurs **only** in `notes/2026-06-19-iter12-physics-net-bicentralizer-lever.md`, at **four** places (lines 31, 98, 114, 142 as of this session), one of which (line 98) claims "web-verified" — evidently title-verified but not volume-verified; log that as an instance for the citation-integrity discipline. Repair: fix those four occurrences to **75**; optionally add a correct DL entry to BIBLIOGRAPHY.md; do not "correct" a nonexistent entry.

**C-4 (MINOR, factual, §2.5.3).** "the physics inclusions M(O) ⊂ M(W) are **irreducible**" is false: by Haag duality the relative commutant M(O)′ ∩ M(W) contains the local algebras of the spacelike complement of O inside W — far from ℂ1. **Strike "irreducible."** The operative fact suffices and is sound via Takesaki's expectation criterion: a vacuum-preserving normal conditional expectation M(W) → M(O) exists only if M(O) is globally invariant under the wedge modular (boost) flow — which moves O. The blocked-at-existence conclusion stands on that corrected footing (consistent with the iter-12 B1 / watch-sweep expectation-free blocker as claimed).

**C-5 (MINOR, wording, S2-a).** "a fiberwise-canonical family **reduces fiberwise to the η₀-class section of §2.2**" overstates: on the meager non-ergodic set, centralizer-class fibers exist and are not η₀-class. Correct wording: *reduces fiberwise to the closed single-state classes — η₀-class, or LEM-CENTRALIZER-CARRIER class (referee-corrected form), or symmetry-inherited implementer class (C-2), each geometry-void.* REDUCES-TO-KNOWN is upheld under this wording.

**C-6 (MINOR, grading, §2.5.4).** The vacuum-limit edge argument ("weak-\* continuity of the section at Ω forces the vacuum fiber onto the wedge edge = n₁") assumes section continuity, which is **not among the bars** — it is an added hypothesis. Downgrade that step to `[INFERENCE, medium — conditional on a continuity hypothesis]`. Non-load-bearing: the vacuum fiber dies unconditionally via its stabilizer (S1 + N2).

**C-7 (MINOR, attribution, §7.3).** arXiv:1911.09390 is **Longo–Xu, "Von Neumann Entropy in QFT"** (verified live this session) — not "Entropy of coherent excitations," and not solo Longo. The load-bearing content (canonical intermediate type I factor for the split inclusion, the F-formula) is genuinely in that line and the ID is right; fix the title/author attribution on integration.

### 3. Per-claim adjudication

| # | Claim | Verdict | Grade instruction |
|---|---|---|---|
| (1a) | Co-moving evasion of N2 real off-vacuum; vacuum-wedge fiber stabilizer-fixed, killed by N2 | **SUSTAINED** (R-i) | `[INFERENCE, high]` |
| (1b) | Lemma S2 (section-rigidity trichotomy) closes the parametrized-family class | **SUSTAINED-WITH-CORRECTION** (C-2, C-5; MV usage per R-ii) | **Sketch-grade**: record as `[INFERENCE, medium — proposed]` for the trichotomy-as-complete-classification (conditional on G1 Lemma G for the fourth branch); the reduction core (family ⟹ per-fiber single-state problem + installed transversal) at `[INFERENCE, high]`. **Genuinely NEW** (new object class, new mechanism) — not a restatement of the iter-12 Krein trichotomy, though same canonical-vs-installed spirit. S2-c honestly flagged and non-load-bearing: sustained as flagged. |
| (2a) | Flip candidate Θ canonical, (∞,∞), not a function of Δ; fails exactly at the leg-identification datum (installed η); wedge horn degenerates to PCT | **SUSTAINED** (R-iv) | `[INFERENCE, high]` — the genuinely new Angle-B content |
| (2b) | Lemma PC (canonicity = positivity) | **SUSTAINED-WITH-CORRECTION** (R-iii) | **Sketch-grade**: `[INFERENCE, medium — proposed]`, with the corrected mechanism statement (canonicity = covariance under the cone-preserving transport; the exhaustion is an enumeration inheriting iter-12 horn (B), not a theorem; λ=1-cut carve-out in B1). Partially a restatement of iter-12 horn (B) with a newly identified (and now corrected) mechanism. |
| (3) | LEM-CORE-DESCENT (descent = θ-invariance = π(M); +naturality ⟹ π(M_φ); trace-scaling ⟹ {0,∞}; covariant families ⟹ S2) | **SUSTAINED** (R-v) | **Proof-grade for its stated claims**: `[INFERENCE, high]` — but record as a **corollary/transport package**, explicitly dependent on LEM-CENTRALIZER-CARRIER *with both iter-10 referee corrections* and on S2 (hence inheriting S2's proposed status on the C2-ii branch). Genuinely new as a located no-go; not a new engine. Consistent with (and supplies the proof for) G1 §4.4's "the core adds nothing beyond iter-10." |
| (4) | DL volume is 75, not 73 | **SUSTAINED-WITH-CORRECTION** (C-3) | Volume finding confirmed; repair targets ONLY the iter-12 B1 note (4 occurrences); BIBLIOGRAPHY.md has no DL entry to fix. |
| (5) | "N2's honest scope is stabilizer-fixed fibers only; S2 is the correct and STRONGER replacement" | **SUSTAINED-WITH-CORRECTION** (C-1) | True only as a scope-statement for the **extension** class; N2/LEM-NAT-CARRIER/dossier §3 unedited; "replacement" struck — S2 is the engine for the extension, where N2 was never posed. |

**Smuggle/consistency audit.** S2-b's "installed (n,n)-flag field over state space" correctly instantiates κ_Φ > 0 under the iter-3 **referee-corrected** reading (κ_Φ as a presence/absence flag for hand-posited structure, not a literal codimension) — sustained. No conflict with G1: the (−1)^N-type objects appear in G2 as B3 (standard implementations, symmetry-inherited, cross-coupling) and in G1 as the (G-glob) gauge-implementer class — the classifications agree; the only defect was S2-a's omission (C-2), an incompleteness, not a contradiction. No standing closure (iter-7 trichotomy, N2, LEM-CENTRALIZER-CARRIER as corrected, iter-12 horns, iter-14 D1) is violated; no RESOLVED-POSITIVE anywhere; the extraordinary-claim gate was never triggered.

### 4. Integration instruction (binding, for the integrator)

1. **LEM-SECTION-RIGIDITY (S1+S2):** record as **proposed**, trichotomy at `[INFERENCE, medium]`, reduction core at `[INFERENCE, high]`, with (a) the fourth canonical branch added (symmetry-inherited implementers; closed by the generative bar + G1 (G-glob), dependency flagged), (b) the C-5 wording, (c) scope line: *applies to the state-family EXTENSION of the carrier problem; does not modify Lemma N2, LEM-NAT-CARRIER, or dossier §3*. Dossier integration: a new "Extensions" item (parametrized/state-family carriers — closed as a class, proposed lemma), not an edit to the posed conjecture.
2. **LEM-CORE-DESCENT:** record at `[INFERENCE, high]` as a **corollary-grade transport** with explicit dependencies (Takesaki duality [ESTABLISHED]; LEM-CENTRALIZER-CARRIER with iter-10 corrections; S2 for the covariant branch). The {0,∞} trace-scaling computation may be quoted as proved.
3. **Lemma PC:** record as **proposed**, `[INFERENCE, medium]`, in the corrected form of R-iii/C-5's mechanism wording; the B2 exact-failure-point result at `[INFERENCE, high]` as the Angle-B headline. File the "canonical anti-isomorphism N → M′ for split pairs" and "measurable equivariant selection on Aut(N,Ω)-orbits" watch-items (§6.6) — both sustained as precise reopening triggers.
4. **Citation repair:** change "Invent. Math. 73 (1984) 493-536" → "**75**" at the four listed places in `notes/2026-06-19-iter12-physics-net-bicentralizer-lever.md`; optionally add the DL entry to BIBLIOGRAPHY.md; fix §7.3's 1911.09390 attribution to Longo–Xu, *Von Neumann Entropy in QFT* (C-7); strike "irreducible" per C-4.
5. **Registry/hedge:** carrier-convergence count **stays FIVE** (all three angles are route-5 re-expressions — sustained); **HYP-CKV-VACUITY stays -R6** unchanged in grade and condition (this track closes around the n₁ + commutant-sliver residual, not through it — sustained); HYP-ENCODING-SCREEN inherits three confirming instances. **No verdict flip; nothing VERDICT-RELEVANT; 15th consecutive confirmation**, jointly contingent with the G1 track on its own referee.

### 5. Citation ledger (referee re-verification, 2026-07-03)

| Reference | Referee check | Status |
|---|---|---|
| Doplicher–Longo, Invent. Math. **75** (1984) 493–536 | Web-verified live: Springer 10.1007/BF01388641; ADS 1984InMat..75..493D; EUDML 143108 | **CONFIRMED — 75, not 73**; repo error localized to iter-12 B1 note only (C-3) |
| Marrakchi–Vaes, Crelle **809** (2024) 247–260, arXiv:2305.14217 | Abstract fetched live; verbatim dense-G_δ statement confirmed | CONFIRMED; usage corrected per R-ii |
| Longo(–Xu), arXiv:1911.09390 | Fetched live: **Longo–Xu, "Von Neumann Entropy in QFT"**; canonical intermediate type I factor content confirmed | CONFIRMED with attribution fix (C-7) |
| Haagerup, Math. Scand. **37** (1975) 271–283 | Standard-form uniqueness statement checked against the claimed use | Real, correctly cited; PC's slogan overstates it (R-iii) |
| Takesaki, Acta Math. **131** (1973) 249–310; Connes–Takesaki, Tôhoku **29** (1977) 473–575 (+errata **30** (1978)) | Canonical; duality/fixed-point/trace-scaling uses re-derived (R-v) | CONFIRMED |
| Fewster, arXiv:1601.06936 | Expository anchor only, non-load-bearing | Real; accepted |
| Inherited (Haagerup 1987; Marrakchi 2606.23636; AHHM 2020) | Provenance-noted, not re-fetched; uses consistent with prior ledgers | Accepted as inherited |

**Fabricated citations found: 0. Volume-number errors found: 1 (inherited, now repaired-with-instruction). Attribution errors found: 1 (C-7, in-submission).**

**Net.** A genuinely productive negative track: the three angles are verified untried, the constructive posture is honestly executed, and the two real advances — the exact failure point of the split-flip candidate (installed leg-identification datum) and the state-family extension's closure-by-canonicity-dichotomy — survive refereeing in corrected form. The submission's main epistemic sins are grade inflation on two lemma names (S2, PC: proposed, not proved), one scope-inflated headline (C-1), and one wrong repair target (C-3). With the corrections above, everything integrable is integrated; nothing moves the verdict.

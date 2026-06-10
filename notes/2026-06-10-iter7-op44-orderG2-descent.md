---
title: "OP-44 iteration-7 attack: the order-$G_N^2$ obligation for the dS static patch — quadratic descent discharged, residue located at footnote 12 and the cubic charge"
type: note
tags: [note, iter7, crossed-product, linearization-instability, de-sitter]
updated: 2026-06-10
---

# OP-44 iteration-7 attack: the order-$G_N^2$ obligation for the dS static patch — quadratic descent discharged, residue located at footnote 12 and the cubic charge

**Status:** ATTEMPT executed — `didItMove = split-and-partially-discharged`. The named decidable step (the DEHK-located proof obligation at the quadratic/boost linearization-instability constraints, [OPEN_PROBLEMS](../OPEN_PROBLEMS.md) OP-44, iter-6 obligation P1) decomposes into three pieces: **(i)** descent of the complete global-dS quadratic constraint set to the CLPW static-patch crossed product — **discharged** (own stabilizer/coset-frame assembly; independently confirmed by DEHK §2.5.1 + FJLRW + AKL); **(ii)** classical sufficiency of the Taub conditions with clock insertions (DEHK footnote 12) — **open, with a located distributional-source obstruction**; **(iii)** operator-algebraic inner-ness of the cubic constraint correction — **open, with a located horizon non-splittability obstruction**, a computed divergence hierarchy ($\delta^{-2(d-1)}$ vs $\delta^{-(d-1)}$), and a **Planck-length collar floor in every dimension**. Headline ([CONCLUSION](../CONCLUSION.md)) unaffected and reinforced. Medium-high confidence.
**Last updated:** 2026-06-10
**Iteration:** 7 (track A2-op44-orderG2-obligation)

> Scope honesty, up front. (1) The full DEHK PDF (arXiv:2411.19931v3) was downloaded and the load-bearing sections (§§2.3–2.5, 6.3–7.2, 8, references) read verbatim this session — the strongest sourcing in this note. (2) The FMM/AMM cone theorems were verified bibliographically (AMM II independently; FMM I and Moncrief I/II via the DEHK reference list, fetched live) but their proofs were not re-read; the $\Lambda>0$ transfer is my inference. (3) The §4 divergence computation is a scaling estimate with flagged assumptions, not a rigorous bound. (4) Bros–Moschella (dS Bisognano–Wichmann) cited [unverified this session].

---

## 1. What the obligation actually is (counting fixed)

Conventions: $g=g^0+\kappa h+\tfrac12\kappa^2k+O(\kappa^3)$, $\kappa^2=32\pi G_N$; background dS$_{d+1}$, closed slice $\Sigma\cong S^d$, $\mathfrak g=\mathfrak{so}(d+1,1)$. For background Killing $\xi$, the smeared diffeomorphism constraint expands $C_\xi=\sum_n\frac{\kappa^n}{n!}C^{(n)}_\xi$ with $C^{(1)}_\xi$ *identically* a boundary term (DEHK Eq. (2.15)–(2.16)) — zero on closed $\Sigma$ — so the first nontrivial constraint is the quadratic **Taub charge** (DEHK (2.20)):
$$Q_\xi=\int_\Sigma\Big(T^{(0)}_{\mu\nu}-2G^{(2)}_{\mu\nu}(h,h)\Big)\xi^\mu(\epsilon^0)^\nu\approx0,\qquad\text{one per Killing field.}$$
`[ESTABLISHED — primary source read]` **Label clarification for the registry:** the iter-6 phrase "order-$G_N^2$ proof obligation" denotes (a) the justification/descent of $Q_\xi$ itself (order $\kappa^2=32\pi G_N$) plus (b) the fate of the construction under the first uncontrolled corrections $\kappa^3C^{(3)}/3!$ and $\kappa^4C^{(4)}/4!$ (orders $G_N^{3/2}$, $G_N^2$). Both are treated below.

## 2. Classical exhaustion `[ESTABLISHED + one flagged transfer]`

Moncrief I/II (JMP **16** (1975) 493; **17** (1976) 1893): on closed $\Sigma$, $\ker D\Phi^*=$ Killing fields. Fischer–Marsden–Moncrief I (Ann. IHP A **33** (1980) 147) and Arms–Marsden–Moncrief II (Ann. Phys. **144** (1982) 81): near a vacuum solution with compact CMC slice and Killing fields the solution space is locally a **cone** — the quadratic Taub conditions are necessary **and sufficient**; all $C^{(n>2)}$ are then solvable for $h^{(2)},h^{(3)},\dots$ (DEHK §2.4.1, Eq. (2.24): $\tilde G^{(n)}$ is linear in $h^{(n-1)}$ and the cokernel is exhausted by the Killing projector). **Consequence A:** classically there is *no* further constraint at $G_N^{3/2}$ or $G_N^2$ for vacuum dS + gravitons; the obligation is purely quantum-algebraic, plus one classical gap (§5, R1). $\Lambda>0$ transfer: `[INFERENCE, medium-high]` — ellipticity and the Killing-data characterization are $\Lambda$-insensitive; Higuchi (CQG **8** (1991) 1961, §2) and Altas–Tekin (PRD **99** (2019) 104078, Taub charges with $\Lambda$) support it; no verbatim published $\Lambda>0$ cone theorem found.

## 3. Quadratic descent: global dS $\to$ static patch — DISCHARGED

The mission question: global dS is closed (constraint imposition "essentially unambiguous", DEHK abstract); the static patch is not. Do the closed-slice constraints descend to the CLPW algebra or obstruct it?

Decompose relative to the CLPW pode-observer pair: $\mathfrak g=(\mathbb R_B\oplus\mathfrak{so}(d))\oplus\mathfrak m$, $\dim\mathfrak m=2d$, $[B,\mathfrak{so}(d)]=0$.

- **Boost.** $\xi_B$ is future-directed on $\Sigma_R$, past-directed on $\Sigma_L$, vanishing linearly on the bifurcation sphere: $Q_B=H_R-H_L$ as quadratic forms — the *full modular Hamiltonian* of $(\mathcal A_R,\Omega_{\rm BD})$ (dS Bisognano–Wichmann; DEHK (2.25)). With clocks, $C_B=Q_B+\sum_iH_i$ (DEHK (2.29)) — **the global quadratic boost Taub charge IS the CLPW constraint**. The mission's commutator question ("does the boost charge's quadratic part commute with the observer-dressed algebra?") resolves definitionally: $[C_B,\hat{\mathcal A}]=0$ by construction of $\hat{\mathcal A}=(\mathcal A_R\otimes\bigotimes_i\mathcal B(\mathcal H_i))^{C_B}$, while $[Q_B,\hat a]=-[\sum_iH_i,\hat a]\neq0$ — dressing trades field-charge noncommutation for total-charge commutation. No obstruction.
- **Rotations.** Compact, central-commuting with $B$; the fixed-point algebra $\hat{\mathcal A}^{SO(d)}$ inherits the faithful normal trace; the AKL criterion (arXiv:2407.01695 — modular flow central in the constraint group $\Rightarrow$ semifinite) applies to $\mathbb R_B\times SO(d)$. Type II survives. `[assembly mine; criterion ESTABLISHED]`
- **Coset $\mathfrak m$.** The $2d$ worldline-moving generators do not preserve $\mathcal A_R$ — the naive threat. Resolution: the observer pair is a *complete dynamical frame* for $G/(\mathbb R_B\times SO(d))$ (dimension $2d$ ✓). Group averaging over $G$ — exactly Higuchi's 1991 construction — factors as (coset average)$\,\circ\,$(stabilizer average); the coset average is an isomorphism onto its image because the frame carries a free, proper copy of the coset. **The von Neumann type is decided by the stabilizer alone.** `[INFERENCE — own assembly, high]` Independent confirmation, read verbatim this session: DEHK §2.5.1 — the additional isometry constraints "*turn out not to play a role in the type transition... confirmed in [15, 58], leading to an enlarged crossed product*", with [15] = FJLRW (arXiv:2403.11973: invariance under "the natural action of the group of spacetime isometries", II$_1$ under KMS conditions) and [58] = AKL.

**Sub-result 1.** At quadratic order the descent works without obstruction: the CLPW algebra is the stabilizer-reduction of Higuchi's group-averaged linearized gravity, with the observer pair as coset frame. Caveat: generic (non-degenerate) frame states assumed. The encode-pattern persists — the descent *consumes* the pre-installed $\mathfrak{so}(d+1,1)$ at every step.

## 4. The cubic charge does not split across the horizon (own computation)

DEHK §7.1's reassurance — higher-order constraints' "non-commutation with linearized observables is suppressed by higher powers of $\kappa$" — is formal order-counting, not affiliation/norm control; §7.2's "kinematical freedom" argument is the quantum shadow of Consequence A, unproven as an operator statement. Sharp question: is $u_s=e^{is(C_B+\kappa C^{(3)}/3!)}e^{-isC_B}$ in $\hat{\mathcal A}$ (then: deformed twirl exists, deformed algebra = cocycle perturbation, Type II with perturbed trace)?

Toy model (free scalar + linearized graviton; near-horizon chart $ds^2\approx-\rho^2d\tau^2+d\rho^2+\ell^2d\Omega^2_{d-1}$, $\Sigma=\{\tau=0\}$): the splitting attempt $C^{(3)}=C^{(3)}_R+C^{(3)}_L$, $C^{(3)}_R=\int_{\Sigma_R}\rho\,{:}\mathcal O_3{:}$, $\mathcal O_3\sim h\,\partial\varphi\partial\varphi$, $\Delta_3=\tfrac{d-1}{2}+(d+1)=\tfrac{3d+1}{2}$. Shell estimate (cells of size $\rho$ at distance $\rho$, $A/\rho^{d-1}$ transverse cells per shell, cell charge $\rho^{d+1-\Delta}$):
$$\big\langle(\Delta C^{(2)}_{R,\delta})^2\big\rangle\sim\frac{A}{\delta^{d-1}}\ \ (\Delta_2=d{+}1:\ \text{reproduces the known EE/modular-fluctuation area law — consistency check}),\qquad \big\langle(\Delta C^{(3)}_{R,\delta})^2\big\rangle\sim\frac{A}{\delta^{2(d-1)}}.$$
The two-sided $C^{(3)}$ is globally well-defined on the closed slice (the $\rho$-weight from $\xi_B$'s linear vanishing included), but the one-sided piece diverges parametrically faster by $\delta^{-(d-1)}$ than the quadratic charge whose divergence the crossed product (equivalently KLS II's edge modes, arXiv:2601.07910) absorbs. **Planckian collar floor:** subdominance $\kappa\langle(\Delta C^{(3)})^2\rangle^{1/2}\lesssim\langle(\Delta C^{(2)})^2\rangle^{1/2}$ requires $\kappa\lesssim\delta^{(d-1)/2}$, i.e. with $\kappa^2\sim\ell_P^{d-1}$:
$$\delta\;\gtrsim\;\ell_P\quad\text{in every dimension}$$
— the gravitational analog of the stringy $\ell_s$ collar floor on the OP-48 side. `[INFERENCE, medium — scaling estimate; assumptions flagged: free-field UV scaling, tensor structure/logs neglected, boost-adapted smearing, independent cells]`

**Both horns theorem-shaped.** *Discharge:* construct "cubic edge modes" — a finite horizon-boundary extension absorbing $\delta^{-2(d-1)}$, paralleling KLS II at quadratic order — with $C^{(3)}=\tilde C^{(3)}_R+\tilde C^{(3)}_L+C_{\rm edge}$, $\tilde C^{(3)}_R$ affiliated; then $u_s$ is inner in the extension and Type II survives at $O(\kappa^3)$. *Obstruction:* if no affiliated renormalization exists, $\delta_3=i[C^{(3)},\cdot]$ is an **outer** derivation, the deformation exits the cocycle class, and type stability fails to be automatic at the *first* subleading order — a perturbative foothold for the failure-side (Giddings) reading.

## 5. The residue, named

- **(R1)** `[OPEN — decidable]` DEHK footnote 12, read verbatim: clock-insertion sufficiency "*we have not checked the conditions for this to hold.*" Located obstruction: worldline clocks have distributional $T^{(0)}_{i,\mu\nu}$; solving $E^{(2)}\approx0$ for $k_{\mu\nu}$ with delta sources exits the FMM/AMM $H^s$ framework. Forks: smeared-observer extension of AMM (template: Saraykar–Joshi, JMP **22** (1981) 343 + erratum), or a distributional linearization-stability theory (nonexistent as of this sweep).
- **(R2)** `[OPEN — decidable]` The §4 cubic edge-mode construction (discharge) or outer-derivation proof (obstruction). Nearest machinery: Kirklin arXiv:2412.01903 (modified GSL "to all orders... without a UV cutoff", dynamical-cut QRFs, Killing horizons — abstract-verified; builds on, does not re-derive, the crossed product) and Ali Ahmad–Jefferson 2501.01487 (order-by-order, no remainder bound). Neither executes the dS closed-slice case. `[negative-after-search, as of 2026-06]`
- **(R3)** `[OPEN — inherited]` Quantum imposition of the quadratic constraints remains argued-not-proven (DEHK §2.5.1 verbatim: "*it is currently not possible to rigorously prove*..."); supports: Moncrief PRD **18** (1978) 983, GRG **10** (1979) 93, Higuchi I/II, Losic–Unruh PRD **74** (2006) 023511. Global to the program, not static-patch-specific.

## 6. Verdict and registry deltas

`didItMove = split-and-partially-discharged` (medium-high). Proposed updates:
- **[OP-44 / Conjecture S, obligation P1]** Replace by P1a (quadratic descent — **discharged**, §3), P1b (= R1, classical clock sufficiency — open, located), P1c (= R2, cubic inner-ness — open, located, theorem-shaped both horns). Obligation P2 (cocycle stability) is sharpened by §4 into P1c's precise form.
- **[OP-48(c) cross-link]** The dressing collar now has TWO independent physical floors: $\ell_s$ (stringy, Hagedorn/split breakdown, iter 6) and $\ell_P$ (gravitational, cubic-charge non-splittability, this note). `[SPECULATIVE rider: whether they meet at a correspondence point remains untested.]`
- **[Headline]** Unchanged and reinforced: every discharge ingredient (Killing structure, BD KMS, compact slice, Haar measure) is pre-installed background — encodes-not-generates at yet finer resolution. No experimental channel; the wager's NOT-YET-PHYSICS status untouched.

## Open subquestions (new)

1. `[OPEN — sharpest next step]` Execute R2's discharge horn: a cubic boost-supertranslation edge-mode sector for the dS horizon, extending KLS II (2601.07910) by one order in $\kappa$. Success makes Conjecture S a theorem at $O(\kappa^3)$ for $\Lambda>0$; failure with an outer-ness proof flips OP-44's interior to the failure side perturbatively.
2. `[OPEN]` R1 via smeared observers: does the AMM momentum-map machinery (Arms–Marsden–Moncrief CMP **78** (1981) 455) cover Einstein + extended-body clock matter on dS?
3. `[OPEN]` Does Kirklin's dynamical-cut all-orders GSL framework (2412.01903) transplant from Killing horizons to the closed-slice dS descent — i.e., does it secretly contain the cubic edge modes?
4. `[OPEN — verification]` A published $\Lambda>0$ statement of the FMM/AMM cone theorem; and a primary-source re-read of AMM II's sufficiency hypotheses (CMC slice; vacuum vs matter classes).

## See also

- [2026-06-10-iter6-op44-op48c-levers.md](2026-06-10-iter6-op44-op48c-levers.md) — predecessor; named the obligation this note splits.
- [2026-06-10-iter6-algebraic-frontier.md](2026-06-10-iter6-algebraic-frontier.md) — iteration-6 literature delta (KLS II, Kirklin context).
- [2026-06-08-iter5-op44-nonperturbative-crossed-product.md](2026-06-08-iter5-op44-nonperturbative-crossed-product.md) — the $N_\ast$ baseline (untouched here: everything in this note is perturbative).
- [../OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md) — OP-44 entry to update per §6.
- [../CONCLUSION.md](../CONCLUSION.md) — §5 residual lever #1.
- [../ASSUMPTIONS_LEDGER.md](../ASSUMPTIONS_LEDGER.md) — A-23, A-CP-KILLING (the descent consumes the Killing input; annotate).
- [../HYPOTHESES.md](../HYPOTHESES.md) — HYP-ENCODING-SCREEN (reinforced).
- [../EPISTEMICS.md](../EPISTEMICS.md) — tag discipline.

## References

*Verification status per item, this session.*

- J. De Vuyst, S. Eccles, P. A. Höhn, J. Kirklin, *Linearization (in)stabilities and crossed products*, arXiv:2411.19931 (v3, 9 May 2025); JHEP **2025**, 211. [**full PDF downloaded and §§2.3–2.5, 6.3–8, refs read verbatim**]
- A. E. Fischer, J. E. Marsden, V. Moncrief, *The structure of the space of solutions of Einstein's equations. I. One Killing field*, Ann. Inst. H. Poincaré A **33** (1980) 147–194. [via DEHK reference list, fetched this session]
- J. M. Arms, J. E. Marsden, V. Moncrief, *The structure of the space of solutions of Einstein's equations. II. Several Killing fields and the Einstein–Yang–Mills equations*, Ann. Phys. **144** (1982) 81–106. [independently search-verified (Springer/Bohrium records)]
- V. Moncrief, *Spacetime symmetries and linearization stability of the Einstein equations I, II*, J. Math. Phys. **16** (1975) 493; **17** (1976) 1893. [via DEHK reference list]
- V. Moncrief, *Invariant states and quantized gravitational perturbations*, PRD **18** (1978) 983; *Quantum linearization instabilities*, Gen. Rel. Grav. **10** (1979) 93. [via DEHK reference list]
- A. Higuchi, *Quantum linearization instabilities of de Sitter space-time I, II*, Class. Quantum Grav. **8** (1991) 1961; 1983. [search-verified (multiple records) + DEHK reference list]
- B. Losic, W. G. Unruh, *On leading order gravitational backreactions in de Sitter spacetime*, PRD **74** (2006) 023511, arXiv:gr-qc/0604122. [via DEHK reference list]
- V. Chandrasekaran, R. Longo, G. Penington, E. Witten, *An algebra of observables for de Sitter space*, arXiv:2206.10780; JHEP **02** (2023) 082. [search-verified incl. journal record]
- C. J. Fewster, D. W. Janssen, L. D. Loveridge, K. Rejzner, J. Waldron, *Quantum reference frames, measurement schemes and the type of local algebras in quantum field theory*, arXiv:2403.11973. [abs fetched]
- S. Ali Ahmad, M. S. Klinger, S. Lin, *Semifinite von Neumann algebras in gauge theory and gravity*, arXiv:2407.01695; PRD **111**, 045006 (2025). [previously wiki-verified, iter 6]
- J. Kirklin, *Generalised second law beyond the semiclassical regime*, arXiv:2412.01903; JHEP **07** (2025) 192. [abs fetched + journal record search-verified]
- S. Ali Ahmad, R. Jefferson, *Algebraic perturbation theory...*, arXiv:2501.01487. [previously wiki-verified, iter 6]
- M. S. Klinger, J. Kudler-Flam, G. Satishchandran, *Generalized Entropy is von Neumann Entropy II*, arXiv:2601.07910. [previously wiki-verified, iter 6]
- J. De Vuyst, S. Eccles, P. A. Höhn, J. Kirklin, arXiv:2405.00114; arXiv:2412.15502. [previously wiki-verified]
- E. Altas, B. Tekin, *Second Order Perturbation Theory in General Relativity: Taub Charges as Integral Constraints*, PRD **99** (2019) 104078, arXiv:1903.11982. [via DEHK reference list]
- R. V. Saraykar, N. E. Joshi, *Linearization stability of Einstein equations coupled with self-gravitating scalar fields*, JMP **22** (1981) 343; erratum JMP **23** (1982) 1738. [via DEHK reference list]
- J. M. Arms, J. E. Marsden, V. Moncrief, *Symmetry and bifurcations of momentum mappings*, CMP **78** (1981) 455–478. [via DEHK reference list]
- J. Bros, U. Moschella, dS Bisognano–Wichmann/geodesic KMS property. [**unverified this session** — flag for referee]
- J. Kudler-Flam, S. Leutheusser, A. A. Rahman, G. Satishchandran, A. J. Speranza, *A covariant regulator for entanglement entropy*, arXiv:2312.07646. [via DEHK reference list; not independently fetched]

> **Binding note.** Where a correction in the referee verdict below conflicts with the body above, the **referee correction governs**; the body is the pre-referee submission, retained for the audit trail per house convention.

## Referee verdict

**Track A2-op44-orderG2-obligation, iteration 7. All six findings kept; no major or fatal errors; four minor corrections, all tag-discipline or wording.** Citation audit: every reference re-fetched live, including all post-2025 IDs; every claimed verbatim DEHK quote checked against the primary PDF (arXiv:2411.19931) and found accurate, including the resolution [15]=FJLRW 2403.11973, [58]=AKL 2407.01695 in the "enlarged crossed product" sentence. No fabrications, no misattributions. The derivation was re-done step by step and holds.

> **I7-A2-F1 — keep (minor).** FMM/AMM/Moncrief cone-theorem statements confirmed against DEHK's bibliography and its verbatim "remarkable fact" paraphrase (refs [34–36]); Altas–Tekin confirmed live. Two binding edits: (i) the dS consequence ("no further classical constraint at $G_N^{3/2}$/$G_N^2$") inherits the `[INFERENCE, medium-high]` of the unproven $\Lambda>0$ transfer — only the $\Lambda=0$ theorems are `[ESTABLISHED]`; (ii) "theorems verified" means bibliographically + via DEHK's paraphrase, primary proofs unread; add DEHK's analyticity/convergence caveat. Side note for the registry: the wiki's "order-$G_N^2$" label is a counting misnomer (quadratic constraints enter at $\kappa^2=32\pi G_N$, i.e. order $G_N$; true $G_N^2=\kappa^4$); the track's §0 clarification is correct and should be folded into the OP-44 entry.

> **I7-A2-F2 — keep (minor).** Group theory re-derived: stabilizer $\mathbb R_B\oplus\mathfrak{so}(d)$, coset dimension $2d$, all checks pass; AKL centrality is applied only where $B$ is genuinely central (the stabilizer), not to the full $\mathfrak{so}(d+1,1)$ — no misapplication. The load-bearing DEHK sentence ("confirmed in [15, 58], leading to an enlarged crossed product") is verbatim. Corrections: "DISCHARGED" = discharged at `[INFERENCE, high]` grade — own assembly plus literature confirmation, **conditional on the F6 hedge** (quantum imposition of the quadratic constraints argued-not-proven) and on generic frame states; and Type II is preserved under the $SO(d)$ twirl but factoriality of the fixed points is not separately proven. With those qualifiers, re-registering iter-6 obligation P1 as P1a/P1b/P1c with P1a discharged is authorized.

> **I7-A2-F3 — keep (none).** Footnote 12 verbatim-confirmed. The functional-analytic point is sound ($\delta^{(d)}\notin H^s$ for the relevant $s$; conical behavior on the worldline); Saraykar–Joshi + erratum confirmed as DEHK [43–44] and correctly offered as template, not theorem. A clean, located, decidable OPEN.

> **I7-A2-F4 — keep (minor).** The shell computation was re-derived line by line and is arithmetically correct: $\Delta_3=(3d+1)/2$; quadratic one-sided variance $A/\delta^{d-1}$ (reproducing the known modular-fluctuation area law — a real consistency check); cubic $A/\delta^{2(d-1)}$; subdominance $\kappa\lesssim\delta^{(d-1)/2}$ ⇒ $\delta\gtrsim\ell_P$ in every dimension, dimensionally consistent. KLS II (arXiv:2601.07910) verified live and matches the use made of it; 2312.07646 honestly left unverified. DEHK §7.1 is quoted faithfully — indeed DEHK themselves concede "it is not obvious that this will always work." Binding caveats: free-field/independent-cell scaling means the exponent and the $\ell_P$ floor are estimates that constrained-graviton structure could soften; "not manifestly affiliated" is strictly weaker than "outer"; both horns stay `[OPEN]`.

> **I7-A2-F5 — keep (minor).** Kirklin 2412.01903 (JHEP 2025, 192) and AAJ 2501.01487 verified live; characterizations accurate at abstract level. "No remainder bound" is the track's reading, not a quote — mark as such; negative sweeps stay dated process notes per house convention.

> **I7-A2-F6 — keep (none).** The "currently not possible to rigorously prove" hedge verbatim-confirmed; Moncrief 1978/79, Higuchi I/II, Losic–Unruh all check out. Correctly registered as the global hedge that conditions F2's discharge.

**No-go and closure audit (track level).** No standard no-go theorem (Bell/CHSH, PBR, Kochen–Specker, Coleman–Mandula, Weinberg–Witten, Haag, Reeh–Schlieder, spin–statistics) is implicated or violated; the constructions are crossed-product/fixed-point standard. Against the wiki's own closures: the dS-cardinality no-go, HYP-CKV-VACUITY-R3 and its smuggle list, OP-48(c), and OP-49 are untouched; the track *explicitly* preserves the theorem-free status of the bulk $N_\ast$ statement and refuses to read its perturbative results as moving it — correct. HYP-ENCODING-SCREEN is engaged honestly: the quadratic-order discharge consumes pre-installed $\mathfrak{so}(d+1,1)$, BD-KMS, and compact-slice structure at every step, so the encodes-not-generates headline is reinforced, not threatened. The smuggle-checklist items relevant here (pre-installed symmetry group, pre-installed KMS state, pre-installed region/horizon split) are all openly declared as inputs, not derived — no smuggling. The extraordinary-claim alarm (RESOLVED-POSITIVE) does not apply to this track: its outcome is SHARPENED-OPEN and the content matches that label.

**Net.** Outcome label SHARPENED-OPEN upheld. The genuine deliverables are: (a) the three-way split of the (mis-named) order-$G_N^2$ obligation, with P1a discharged at inference grade; (b) two theorem-shaped, located residues (footnote-12 distributional sufficiency; cubic horizon non-splittability with a $\delta\gtrsim\ell_P$ collar floor) — the obstruction horn of R2 is correctly billed as the first perturbative foothold for the failure-side reading of OP-44, at order $\kappa^3$, *as a candidate not an instance*. New cross-link to the OP-48 collar leg ($\ell_P$ ∥ $\ell_s$) is legitimate. Still NOT-YET-PHYSICS: no experimental channel. Headline verdict unchanged and mildly reinforced.

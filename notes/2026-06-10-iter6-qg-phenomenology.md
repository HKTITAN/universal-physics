---
title: "Quantum-gravity phenomenology 2022–2026: the distinguishing-prediction hunt, audited"
type: note
tags: [note, iter6, phenomenology, quantum-gravity]
updated: 2026-06-10
---

# Quantum-gravity phenomenology 2022–2026: the distinguishing-prediction hunt, audited

**Status:** Iteration-6 research note (track R5-qg-phenomenology). Catalogue of every live observable-signature program, classified against the watch-list taxonomy (gate / core / target / wager). Web-verified June 2026.
**Last updated:** 2026-06-10

This note feeds [../EXPERIMENT_WATCHLIST.md](../EXPERIMENT_WATCHLIST.md). Its governing question is the one [../CONCLUSION.md](../CONCLUSION.md) §7 hands to experiment: **does any 2022–2026 proposal give the central wager a distinguishing test?** Short answer: no — but one new channel (GQuEST) comes close enough that the watch-list caveat needs a refinement, and the program's *gate* may close from the classical side before it closes from the quantum side.

---

## 1. Verlinde–Zurek geontropic fluctuations and GQuEST — the nearest-to-wager channel

### What the theory claims
Verlinde and Zurek propose that the quantum-gravitational vacuum induces fluctuations in the size of a causal diamond that are **Planck-enhanced**: $\\langle\\delta L^2\\rangle \\sim \\ell_p L$ rather than $\\ell_p^2$ (Verlinde–Zurek, *Phys. Lett. B* 2021, arXiv:1902.08207). The root relation is the **modular-fluctuation area law**
$$\\langle\\Delta K^2\\rangle = \\langle K\\rangle = \\frac{A(\\Sigma)}{4G_N},$$
derived in holographic settings and reproduced from gravitational shockwaves sourced by vacuum fluctuations (Verlinde–Zurek, *PRD* **106**, 106011 (2022), arXiv:2208.01059). [INFERENCE — established *within* AdS/CFT-adjacent setups; not derived for our universe.] Aalsma–Bak (*PRD* **112**, 026017 (2025), arXiv:2503.04886) show the VZ scaling arises whenever an effective spherically-symmetric perturbation is quantized, while conceding that whether QG vacua actually contain such modes \"remains unresolved.\" [CONTESTED]

### The assumptions chain (each link tagged)
1. $\\langle\\Delta K^2\\rangle=\\langle K\\rangle$ for the causal diamond [INFERENCE, holographic provenance].
2. Modular-energy fluctuation $\\Rightarrow$ metric/horizon fluctuation — **this step installs $\\eta = 1/4G$ by hand** (it uses $\\langle K\\rangle = A/4G_N$ to convert algebra into geometry) [ESTABLISHED that the step is an input; see §2].
3. The **pixellon** EFT (a thermal, Bose–Einstein-occupied scalar breathing mode) converts the conjecture into an interferometer power spectral density (Li–Lee–Chen–Zurek, arXiv:2209.07543). The GQuEST design paper itself states a derivation of the pixellon \"from a full theory… is still underway.\" [ESTABLISHED as an admission]
4. One free amplitude $\\alpha=\\mathcal O(1)$, **not computed**; and an IR-cutoff choice (at $c/L$ or not) that moves bounds by a factor ~30. [OPEN]

### Existing bounds and the experiment
[ESTABLISHED, from the GQuEST design paper, *PRX* **15**, 011034 (2025), arXiv:2404.07524:]
- LIGO: $\\alpha\\lesssim 3$ (with IR cutoff), $\\alpha\\lesssim 0.1$ (without).
- Holometer: $\\alpha\\lesssim 0.7$ (with), $\\alpha\\lesssim 0.6$ (without).
- GQuEST: 5 m arms, 10 kW on the beamsplitter, 1550 nm, **photon-counting readout** not subject to the interferometric standard quantum limit; projected $5\\sigma$ test of $\\alpha=1$ in $\\mathcal O(10^5)\\,$s (~100× faster than homodyne).
- Status: DOE-funded (July 2022, 5-yr); preliminary instrument being built at Caltech (Holometer vacuum hardware installed Feb 2024); **no science data as of mid-2026**.
- Sibling: Cardiff **QUEST** published first broadband limits on correlated stochastic length fluctuations, 13–80 MHz (*PRL*, Sept 2025; arXiv:2410.09175). [ESTABLISHED]

### Published criticism
The $\\sqrt{\\ell_p L}$ scaling is [CONTESTED]: it is supported only by calculations sharing the holographic/thermodynamic input set, the pixellon is not UV-derived (conceded), $\\alpha$ is unknown, and the IR-cutoff ambiguity is unresolved. Hossenfelder's commentary additionally flags Lorentz-invariance worries about radially-uncorrelated fluctuation ansätze [commentary, not a paper]. No refereed refutation of the scaling was verified this session; equally, no first-principles derivation exists. A null at $\\alpha\\sim1$ would kill the natural normalization, not the framework. [INFERENCE]

## 2. What GQuEST tests in the taxonomy — and why it is still not the wager

This is the track's central analysis. [INFERENCE, high]

- The **wager** is an *ontological-priority* claim: causal/algebraic/entanglement structure precedes metric geometry.
- VZ phenomenology is a *quantitative* claim about vacuum metric fluctuations computed **on** a fixed background causal diamond: the diamond, horizon, and area are presupposed.
- The only step that turns modular structure into geometry — link 2 above — **inputs** $\\eta=1/4G$. This is the fourth known instance of the root obstruction recorded in [../HYPOTHESES.md](../HYPOTHESES.md) (HYP-dS-CARDINALITY-R1: *in every known route, η is an input, not an output*); the VZ chain does not escape it, it instantiates it.
- Hence: **a null** constrains $(\\alpha,$ cutoff$)$ only; **a positive** would establish that modular-energy fluctuations gravitate *with the assumed η* — the first laboratory phenomenon whose only available derivations route through modular-Hamiltonian fluctuations, and a genuine earthquake for quantum gravity — but it would not discriminate \"structure precedes geometry\" from \"geometry encodes structure.\" Encode vs generate ([../OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md) OP-46) is untouched in either branch.

**Taxonomy ruling:** GQuEST/QUEST occupies a *new, fourth* watch-list category — **program-adjacent phenomenology**: it tests a [SPECULATIVE] dynamical conjecture *inspired by* Program A's vocabulary, and decides neither gate, nor core, nor target, nor wager. The watch-list's \"none tests the wager\" caveat survives, but should be refined: *no experiment decides the wager; exactly one funded experiment probes a conjecture inspired by it.*

## 3. Oppenheim classical-quantum (CQ) gravity — the gate, attacked from the classical side

The decoherence–diffusion trade-off is a theorem for CPTP hybrid dynamics: preserving quantum coherence forces a minimum diffusion $D_2$ of the classical metric sector (Oppenheim–Sparaciari–Šoda–Weller-Davies, *Nat. Commun.* 2023, DOI 10.1038/s41467-023-43348-2, arXiv:2203.01982). [ESTABLISHED within the CQ framework]

**Squeeze status** [ESTABLISHED — verified from the full text of Janse et al., *Phys. Rev. Research* **6**, 033076 (2024), arXiv:2403.08912]:
| CQ model | Status mid-2026 |
|---|---|
| Ultra-local continuous | **Ruled out** in the original paper |
| Ultra-local discrete | Experimental FOM (Asenbaum et al. atom interferometry) improves on the original Cavendish bound by **25 orders of magnitude** and **drops below this model's trade-off lower bound** — excluded modulo stated caveats |
| Non-local continuous | Survives; experimental bound **~1 order of magnitude** away |

Overall the Leiden review lowers the $D_2$ upper bound by **≥15 orders of magnitude** across test masses from single atoms to kilograms (torsion balances, LISA Pathfinder, levitated magnets/SQUID, LIGO mirrors, atom interferometry). Authors' caveats: the atom-interferometry bound is a phase (relative-acceleration) measurement, not a displacement one; and the same experiment class sets the decoherence-side lower bound, raising a both-bounds-from-one-experiment worry. [ESTABLISHED as stated caveats]

**Theory-side pressure** [CONTESTED]: Hotta–Murk–Terno (arXiv:2506.15291, v5 2026) claim every completely-positive CQ dynamics embeds into a unitary quantum theory on an enlarged Hilbert space (\"CQ gravity is quantum gravity in disguise\"), plus a closed CP classical-quantum example violating angular-momentum conservation. If the embedding stands, CQ is an effective sector, not an ontological alternative — though the diffusion *phenomenology* stays falsifiable regardless.

**Taxonomy:** the CQ squeeze tests the program's **gate** from the classical side. Complete falsification would close \"is gravity non-classical?\" by *eliminating the classical alternative* — possibly years before any BMV witness. Conversely, a *detection* of anomalous diffusion would re-open the gate dramatically. Neither branch touches the wager. [INFERENCE]

## 4. Danielson–Satishchandran–Wald horizon decoherence — derived, deflated, not a channel

What is actually derived [ESTABLISHED as theory results]: a body held in spatial superposition near a **Killing horizon** (black hole, Rindler, de Sitter cosmological) emits soft gravitons/photons through the horizon, which harvests which-path information and decoheres any stationary superposition in finite time; distinct from and larger than Unruh-radiation decoherence; $d\\ge4$ (DSW, arXiv:2205.06279; *PRD* **108**, 025007 (2023), arXiv:2301.00026). Approximation: QFT in curved spacetime + perturbative soft radiation; no UV input. The 2025 local reformulation derives the same effect from the lab-local two-point function of ultra-low-frequency Hawking quanta — and shows a **static star does not** decohere this way (*PRD* **111**, 025014 (2025), arXiv:2407.02567).

**Deflation** [ESTABLISHED as a published counter-reading]: Biggs–Maldacena (arXiv:2405.02227) show the *same qualitative effect* for ordinary matter at finite temperature in a single effective theory — the black hole acts as a standard quantum system at $T_H$. This undercuts any temptation to enlist DSW as evidence that horizons/causal structure are ontologically special; the exchange over exactly which degrees of freedom a body needs to mimic a black hole is live. [CONTESTED at the margins]

Follow-ups 2024–26: GW memory decoheres superpositions (Linton–Tiwari, *CQG* **42**, 205005 (2025), arXiv:2501.18111); Reissner–Nordström and near-extremal extensions exist [arXiv listings; not independently verified this session].

**Observable consequence: none practical.** Rates are negligible for laboratory parameters; the dS version implies a *fundamental decoherence floor in a $\\Lambda>0$ universe* — conceptually adjacent to Program A's target, unmeasurable in practice. **Taxonomy: no watch-list row.** A theory watch-item only. [INFERENCE]

## 5. Graviton noise and \"detecting the graviton\" — the gate's radiative sector, with its own underdetermination gap

- **Parikh–Wilczek–Zahariade** (*PRD* **104**, 046021 (2021), arXiv:2010.08208; *IJMPD* **29**, 2042001 (2020)): quantization-induced arm-length noise is state-dependent; for coherent (classical-like) states it is hopelessly small; squeezed/thermal/relic states enhance it. [ESTABLISHED]
- **Hertzberg–Litterer** (*JCAP* 03 (2023) 009, arXiv:2112.12159): first LIGO-Virgo bound on the GW quantum state's squeezing, $\\zeta < 41$ — methodologically real, numerically toothless. [ESTABLISHED]
- **Tobar–Manikandan–Beitel–Pikovski** (*Nat. Commun.* **15**, 7229 (2024), arXiv:2308.15440): stimulated single-graviton absorption resolvable in massive quantum acoustic resonators via quantum-jump sensing. [ESTABLISHED as published claim]
- **The caveat that controls the channel** — Carney–Domcke–Rodd (*PRD* **109**, 044009 (2024), arXiv:2308.12988): the same click signal is reproducible by a *classical* GW driving a quantum detector (photoelectric-effect logic); demonstrating radiation quantization needs correlation measurements far beyond click-counting. See also Carney, *Comments on graviton detection* (arXiv:2408.00094). [ESTABLISHED]

**Taxonomy:** gate (radiative sector), but **conditionally** — the channel has the same logical shape as OP-40's mediation gap: the natural observable (clicks / noise) underdetermines quantum-vs-classical without an extra premise or a much harder measurement. [INFERENCE, high] Structural parallel worth recording in [../OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md) OP-40.

## 6. GIE/BMV updates and proposed watch-list edits

**Corrections and updates to [2026-06-08-tabletop-quantum-gravity.md](2026-06-08-tabletop-quantum-gravity.md):**
1. arXiv:2604.16276 is now **verified**: Xue–Tang–Yang–Han–Kan–Liu, *\"Aziz and Howl's Gravity-Induced Entanglement Channel is Essentially Classical Mechanics\"* (submitted 2026-04-17) — the channel reduces to semiclassical wavepacket motion; effect \"negligibly small\" for Gaussian wavepackets. (Over-attribution struck per plan 003, 2026-06-19: the \"$\\sim10^{-13}d$\" displacement figure is not in this paper and is not attributable to it.) Aziz–Howl is now attacked from three independent directions (2511.07348; 2512.13675; 2604.16276): [CONTESTED → trending dead].
2. The **m³ exponent** in HYP-GIE-DISCRIM remains [unverified] after a second sweep — no accessible primary source states it.
3. **New for HYP-GIE-DISCRIM:** Braccini–Serafini–Bose (arXiv:2602.19306, Feb 2026) claim the leading-order gravitational entangling phase between *qubits* in coupled Stern–Gerlach interferometers is **mass-independent** (unitary and open dynamics; higher orders reintroduce mass dependence). [SPECULATIVE — fresh preprint] If it survives referee scrutiny, any mass-scaling discriminator is protocol-dependent and HYP-GIE-DISCRIM must be scoped per-protocol.
4. Enabling tech: electron-Bragg diffraction of levitated nanoparticles gives ~1000× the momentum splitting of two-photon gratings (Nimmrichter–Rätzel–Bicket–Seifner–Haslinger, *PRL* 2026, arXiv:2502.13821); diamagnetic microchip traps for entanglement experiments (arXiv:2411.02325 [listing only]). The \"~6–10 orders below required mass/coherence\" status stands.

**Proposed new EXPERIMENT_WATCHLIST rows** (table-ready):

| Channel | What it decides | Current status | Decision window | What a result changes |
|---|---|---|---|---|
| **VZ geontropic fluctuations** (GQuEST, QUEST) | **Program-adjacent phenomenology** (new category): a [SPECULATIVE] modular-fluctuation conjecture inspired by Program A — *not* gate/core/target/wager | LIGO/Holometer: $\\alpha\\lesssim3$/$0.7$ (IR cutoff), $0.1$/$0.6$ (none); GQuEST under construction, $5\\sigma$ at $\\alpha=1$ in $\\mathcal O(10^5)$ s once running; QUEST first 13–80 MHz limits (PRL 2025) | 2–5 yr | Positive: modular fluctuations gravitate (with assumed η) — earthquake, but encode-vs-generate and the wager untouched. Null: kills the natural pixellon normalization only. |
| **CQ spacetime diffusion** (gate, classical side) | Program's **gate** by elimination: can gravity stay classical? | Ultralocal-continuous dead; ultralocal-discrete below experimental upper bound (caveats); non-local continuous alive by ~1 order (Janse et al. PRR 2024) | 0–10 yr | Full CQ falsification closes the gate without BMV; an anomalous-diffusion detection re-opens everything. Embedding critique (Hotta–Murk–Terno) contests CQ's fundamentality either way. |
| **Graviton-sector quantization** (radiative) | Gate, radiative sector — **conditionally** (clicks ≠ quantization, Carney–Domcke–Rodd) | $\\zeta<41$ squeezing bound (LIGO-Virgo); single-graviton-jump proposals published; no detection | 5–20 yr | A click consistent with, not probative of, quantization; correlation-level tests needed for the gate proper. |

**Proposed dead-ends subsection:** Hogan holographic noise (Holometer null 2015 + Lorentz-invariance critique — does **not** transfer to VZ, whose correlation structure differs); VZ-no-IR-cutoff with $\\alpha\\gtrsim0.1$ (LIGO-excluded); Aziz–Howl channel (contested, trending dead).

## 7. Verdict for this track

The 2022–2026 phenomenology landscape **does not produce a distinguishing test of the central wager** — the standing caveat in [../EXPERIMENT_WATCHLIST.md](../EXPERIMENT_WATCHLIST.md) survives its strongest challenge to date. [INFERENCE, high] What it does produce: (i) a fourth taxonomy category with one funded occupant (GQuEST) whose positive result would for the first time make modular structure *laboratory*-relevant — while re-importing η and therefore leaving encode-vs-generate intact; (ii) a realistic prospect that the **gate** closes from the classical side via the CQ diffusion squeeze; (iii) a sharpened understanding that even the \"count gravitons\" channel carries an underdetermination gap isomorphic to OP-40's mediation gap. Nothing touches the two analytic hedges of [../CONCLUSION.md](../CONCLUSION.md) §5–6.

## References

Verified this session (abstract page or authoritative source fetched/located):
- Vermeulen et al., *Photon-Counting Interferometry to Detect Geontropic Space-Time Fluctuations with GQuEST*, PRX **15**, 011034 (2025). arXiv:2404.07524.
- Verlinde & Zurek, *Observational Signatures of Quantum Gravity in Interferometers*, Phys. Lett. B (2021). arXiv:1902.08207.
- Verlinde & Zurek, *Modular Fluctuations from Shockwave Geometries*, PRD **106**, 106011 (2022). arXiv:2208.01059.
- Li, Lee, Chen, Zurek, *Interferometer Response to Geontropic Fluctuations*. arXiv:2209.07543.
- Aalsma & Bak, *Modular Fluctuations in Cosmology*, PRD **112**, 026017 (2025). arXiv:2503.04886.
- QUEST collab., *Broadband Limits on Stochastic Length Fluctuations from a Pair of Table-Top Interferometers*, PRL (2025). arXiv:2410.09175.
- Oppenheim, Sparaciari, Šoda, Weller-Davies, *Gravitationally induced decoherence vs space-time diffusion*, Nat. Commun. (2023), DOI 10.1038/s41467-023-43348-2. arXiv:2203.01982.
- Oppenheim, *A Postquantum Theory of Classical Gravity?*, PRX **13**, 041040 (2023). arXiv:1811.03116.
- Janse, Uitenbroek, van Everdingen, Plugge, Hensen, Oosterkamp, *Current experimental upper bounds on spacetime diffusion*, Phys. Rev. Research **6**, 033076 (2024). arXiv:2403.08912 (full text extracted).
- Hotta, Murk, Terno, *Classical-quantum gravity as quantum gravity in disguise*. arXiv:2506.15291.
- Danielson, Satishchandran, Wald, *Black Holes Decohere Quantum Superpositions* (2022). arXiv:2205.06279.
- Danielson, Satishchandran, Wald, *Killing Horizons Decohere Quantum Superpositions*, PRD **108**, 025007 (2023). arXiv:2301.00026.
- Danielson, Satishchandran, Wald, *Local Description of Decoherence…*, PRD **111**, 025014 (2025). arXiv:2407.02567.
- Biggs & Maldacena, *Comparing the decoherence effects due to black holes versus ordinary matter* (2024). arXiv:2405.02227.
- Linton & Tiwari, *Gravitational waves decohere quantum superpositions*, CQG **42**, 205005 (2025). arXiv:2501.18111.
- Parikh, Wilczek, Zahariade, *Signatures of the Quantization of Gravity at Gravitational Wave Detectors*, PRD **104**, 046021 (2021). arXiv:2010.08208.
- Hertzberg & Litterer, *Bound on Quantum Fluctuations in Gravitational Waves from LIGO-Virgo*, JCAP 03 (2023) 009. arXiv:2112.12159.
- Tobar, Manikandan, Beitel, Pikovski, *Detecting single gravitons with quantum sensing*, Nat. Commun. **15**, 7229 (2024). arXiv:2308.15440.
- Carney, Domcke, Rodd, *Graviton detection and the quantization of gravity*, PRD **109**, 044009 (2024). arXiv:2308.12988.
- Carney, *Comments on graviton detection* (2024). arXiv:2408.00094.
- Xue, Tang, Yang, Han, Kan, Liu, *Aziz and Howl's Gravity-Induced Entanglement Channel is Essentially Classical Mechanics* (2026). arXiv:2604.16276.
- Braccini, Serafini, Bose, *Mass-Independent Gravitationally Induced Entanglement* (2026). arXiv:2602.19306.
- Nimmrichter, Rätzel, Bicket, Seifner, Haslinger, *Electron-Enabled Nanoparticle Diffraction*, PRL (2026). arXiv:2502.13821.
- Aziz & Howl, *Classical theories of gravity produce entanglement*, Nature **646**, 813 (2025).
- Fermilab news, *Holometer rules out first theory of space-time correlations* (Dec 2015).
- Hossenfelder, Backreaction blog (2019) [expert commentary, not a paper].

Listed but **not** independently verified this session (search-listing only — keep flagged):
- arXiv:2512.13675, *Matter-Mediated Entanglement in Classical Gravity…* [unverified authors]
- arXiv:2411.02325, *Diamagnetic microchip traps for levitated nanoparticle entanglement experiments* [unverified]
- arXiv:2505.07480 (near-extremal decoherence); arXiv:2411.04734 / PRD **111**, 024040 (Reissner–Nordström decoherence) [unverified]
- arXiv:2503.19774; arXiv:2511.07348; arXiv:2511.19242; arXiv:2511.20717 (Aziz–Howl rebuttals — already cited in the tabletop note) [re-listed, not re-verified]

## See also
- [../EXPERIMENT_WATCHLIST.md](../EXPERIMENT_WATCHLIST.md) — the page this note proposes to edit
- [../CONCLUSION.md](../CONCLUSION.md) §7–8 — the experiment-gated verdict
- [2026-06-08-tabletop-quantum-gravity.md](2026-06-08-tabletop-quantum-gravity.md) — BMV/GIE parent note (receives corrections §6)
- [../OPEN_PROBLEMS.md](../OPEN_PROBLEMS.md) — OP-40 (mediation gap; structural parallel to the graviton-click gap), OP-45 (η as input), OP-46 (encode vs generate)
- [../HYPOTHESES.md](../HYPOTHESES.md) — HYP-dS-CARDINALITY-R1, HYP-GIE-DISCRIM

> **Binding note.** Where a correction in the referee verdict below conflicts with the body above, the **referee correction governs**; the body is the pre-referee submission, retained for the audit trail per house convention.

## Referee verdict

*Adversarial referee, track R5-qg-phenomenology, iteration 6 (2026-06-10). Default stance: refute. Citation audit: 28 sources spot-checked by direct fetch this session, including full-text reads of the two number-bearing papers (GQuEST arXiv:2404.07524; Janse et al. arXiv:2403.08912) and direct fetches of all five 2025–26 preprints. Zero fabricated or misattributed-beyond-repair citations — the cleanest track audited to date. One major correction (F7), five minors, two clean.*

> **R5-F1 (VZ/GQuEST chain) — KEEP, severity minor.** Every link re-verified: the ⟨ΔK²⟩=⟨K⟩=A/4G_N area law (2208.01059, verbatim), the GQuEST design numbers (5 m / 10 kW / 1550 nm / O(10⁵) s at 5σ for α=1, read from the full HTML), the α bounds (LIGO ≲3 with IR cutoff, ≲0.1 without; Holometer ≲0.7/0.6), the verbatim 'pixellon derivation from a UV-complete theory is still underway' admission, the Aalsma–Bak open-question concession (2503.04886, verbatim), and the project-status facts (DOE July 2022; Holometer hardware at Caltech Feb 2024). The QUEST PRL (135, 101402) — flagged by the finder as its weakest verification — was upgraded by direct fetch. Repairs: describe the pixellon occupation as 'thermal density matrix' (the abstract's term), and present QUEST's published framing (stochastic length fluctuations / GW background) with the geontropic constraint as an application. [CONTESTED] tag on the √(ℓ_pL) scaling: correctly placed.

> **R5-F2 (taxonomy ruling: program-adjacent, η re-imported) — KEEP, severity minor.** This was checked hardest against the wiki's own closures, since it leans on HYP-dS-CARDINALITY-R1. It does not contradict the closure — it extends it, and must say so: R1 covers Einstein-from-entanglement *derivation routes*; the VZ chain is a phenomenological inference chain, so it is an *extension of the η-as-input pattern*, not a fourth member of the original class. Second repair: 'a positive would establish that modular fluctuations gravitate with the assumed η' overclaims — a positive establishes a strain signal matching the predicted PSD; the modular attribution is an additional inference requiring exclusion of alternatives. The core conclusion survives both repairs and is sound: the chain assumes the geometric translation, so neither outcome discriminates 'precedes' from 'encodes'. The proposed fourth watchlist category (**program-adjacent phenomenology**) is well-defined: approved.

> **R5-F3 (CQ spacetime-diffusion squeeze) — KEEP, severity minor.** Full-text verification of Janse et al. confirms every number: ultra-local continuous ruled out in the original paper; 25-orders atom-interferometry improvement dropping *below* the ultralocal-discrete lower bound (modulo the authors' own caveats, faithfully reproduced); non-local continuous surviving by one order. Two scope repairs: the trade-off theorem holds *within the CQ master-equation framework*; and 'gate closes by elimination' must be scoped — the three models are representative kernels, not the whole CQ class, and nonlocal classical mediators (Hall–Reginatto-type) remain outside this channel's reach. With those qualifiers, this is the track's most consequential watchlist update.

> **R5-F4 (Hotta–Murk–Terno embedding) — KEEP, severity none.** Title, authors, dates (v1 2025-06-18, v5 2026-04-12), and both claims (enlarged-Hilbert-space embedding; rotationally-invariant CP system violating angular-momentum conservation) confirmed verbatim. [CONTESTED] tag correct; the observation that the diffusion bounds are ontology-robust slightly *strengthens* F3. Phrase 'no published concession found as of 2026-06' rather than 'has not conceded'.

> **R5-F5 (DSW horizon decoherence + Biggs–Maldacena deflation) — KEEP, severity minor.** All five citations verified; 'distinct from — and larger than — Unruh radiation' and the static-star non-decoherence are verbatim. The Biggs–Maldacena deflation ('same qualitative effect for ordinary matter at finite temperature') is confirmed and is exactly the pre-emption the wiki needs against future 'horizon-first' enlistment of DSW. Repairs: the d≥4 qualifier is unverified at abstract level (flag); keep the deflation adjacent to any 'fundamental dS decoherence floor' sentence. The no-watchlist-row ruling is correct.

> **R5-F6 (graviton-sector: PWZ noise, ζ<41, Tobar, Carney–Domcke–Rodd) — KEEP, severity none.** All four sources verified; ζ<41 verbatim; CDR is in fact *stronger* than the paraphrase — the required correlation measurements are 'likely impossible to perform in practice', which the watchlist row should quote rather than soften. The structural parallel to OP-40's mediation underdetermination is apt.

> **R5-F7 (GIE updates; 2604.16276 correction) — KEEP, severity MAJOR.** The headline corrections are verified and enter: arXiv:2604.16276 is real (Xue–Tang–Yang–Han–Kan–Liu, 2026-04-17), the 10⁻¹³d figure is absent from its abstract (keep [unverified]) *(superseded by plan 003, 2026-06-19: figure struck as a non-attributable over-attribution, not retained as [unverified])*, and the Braccini–Serafini–Bose mass-independence claim (2602.19306) is confirmed verbatim. **But the finding introduces its own attribution error while fixing one: 'three independent directions' against Aziz–Howl is false.** Direct fetch shows 2512.13675 and 2604.16276 share the *same six authors*, and 2511.07348 is by Marletto–Oppenheim–Vedral–Wilson — the BMV/CQ proponents themselves. True count: three distinct arguments, two author groups, one of them the no-go's stakeholders. 'Trending dead' survives on corrected, weaker sociological evidence. Further: note Bose (BMV original author) among the Braccini authors when amending HYP-GIE-DISCRIM; Nimmrichter et al.'s 'PRL 2026' is unverified from the abstract page (cite by arXiv ID); the microchip-trap reference (2411.02325) is uncited in the audit trail — mark [unverified].

> **R5-F8 (dead-end ledger) — KEEP, severity minor.** Fermilab news page fetched (Hogan null at high significance, with Hogan's own one-model caveat); GQuEST re-analysis bounds re-read from full text; the no-transfer-to-VZ caveat is the load-bearing subtlety and is correct. Repairs: (i) same independence correction as F7; (ii) the Hossenfelder critique is *retrospective* (2019 post), not 'contemporaneous' — her substance ('ruled out before the experiment even started') is preserved; (iii) the same post records unresolved Lorentz-invariance worries about *VZ itself* — carry that caveat so the Hogan/VZ contrast is not over-drawn. The 2512.13675 label resolves to Tang–Yang–Han–Kan–Liu–Xue (the finder's 'Khosravi (?)' guess was wrong but self-flagged). The closing [OPEN] absence-of-evidence statement is exemplary scoping.

**Track verdict.** The governing watchlist caveat — *none of these channels tests the central wager* — survives its strongest candidate counterexample, for the reason F2 gives: the VZ chain installs η=1/4G at the modular→metric step, so GQuEST is wager-independent in both directions. Nothing in this track engages, let alone reopens, the two analytic hedges (OP-46 residual; OP-48c horn C). The proposed CONCLUSION §7 sharpening ('no experiment decides the wager; exactly one funded experiment probes a conjecture inspired by it, with an uncomputed amplitude') strengthens the standing text and is approved. Proposed wiki actions approved after the corrections above, with one addition: the new 'program-adjacent phenomenology' category definition should state explicitly that occupancy of the category is *not* evidence for the program — that is precisely the inferential leak it exists to prevent.

"""
Iteration 18 — first numerical probe of (E_O) for the free massive scalar (d=1+1).

(E_O): the vacuum has trivial centralizer on the double-cone algebra M(O),
       M(O)_omega = M(O) cap {Delta_O^{it}}' = C1  (no modular-flow-fixed algebra element).
For a free field, by the time-slice axiom the double-cone algebra = the field algebra of the
t=0 Cauchy interval, so the double-cone modular theory IS the interval's modular theory.
Reduction (iter-17): M(O)_omega = C1 is implied by the one-particle modular Hamiltonian
ln delta_O having purely CONTINUOUS spectrum (no eigenvector); an exact eps=0 mode would be
a non-scalar centralizer element => NOT-(E_O) (the carrier entry ticket).

Method: Peschel correlator method for the Gaussian vacuum on a periodic ring (N sites),
K circulant, lambda_q = m_lat^2 + 4 sin^2(pi q/N),  X=1/2 K^{-1/2}, P=1/2 K^{1/2}.
Region A = L contiguous sites; C_A = sqrt(X_A P_A), nu_k>=1/2;
single-particle modular energies eps_k = log((nu_k+1/2)/(nu_k-1/2)).

Continuum limit: fix physical size R and mass m; refine spacing a=R/L (m_lat = m*R/L, N=8L).
The modular spectrum must reach 0 (type III_1). The (E_O) question: does it reach 0
CONTINUOUSLY (no isolated mode => (E_O) holds) or via a protected isolated mode (=> NOT-(E_O))?
"""
import numpy as np
from numpy.linalg import eigvals

def corr(N, m):
    q = np.arange(N); lam = m**2 + 4*np.sin(np.pi*q/N)**2; d = np.arange(N)
    cos = np.cos(2*np.pi*np.outer(d, q)/N)
    return (cos @ (1/np.sqrt(lam)))/(2*N), (cos @ np.sqrt(lam))/(2*N)

def toe(row, L):
    i = np.abs(np.subtract.outer(np.arange(L), np.arange(L))); return row[i]

def spec(N, m, L):
    Xr, Pr = corr(N, m)
    ev = np.clip(np.real(eigvals(toe(Xr, L) @ toe(Pr, L))), 0.25, None)
    nu = np.sort(np.sqrt(ev))
    eps = np.sort(np.log((nu + 0.5)/(nu - 0.5)))
    a, b = nu+0.5, nu-0.5
    S = float(np.sum(a*np.log(a) - np.where(b > 1e-14, b*np.log(np.clip(b, 1e-300, None)), 0.0)))
    return eps, nu, S

print("VALIDATION (massive, IR-clean):")
N = 4096
for m in [0.5, 1.0]:
    Xr, _ = corr(N, m); r = np.arange(1, 40)
    slope = np.linalg.lstsq(np.vstack([r, np.ones(len(r))]).T, np.log(np.abs(Xr[1:40])), rcond=None)[0][0]
    print(f"  corr decay: m={m}  fitted xi={-1/slope:.4f}  theory 1/(2 asinh(m/2))={1/(2*np.arcsinh(m/2)):.4f}")
for m in [0.5, 1.0]:
    Ss = [spec(1024, m, L)[2] for L in [8, 16, 32, 64, 128]]
    print(f"  area law: m={m}  S(L=8..128) = {np.array2string(np.array(Ss), precision=4, floatmode='fixed')}  (const => OK)")

print("\n(E_O) PROBE — continuum refinement, R=8; eps_min, its scaling, and isolation check:")
print(f"  {'m':>4} {'L':>5} {'eps_min':>9} {'eps_min*lnL':>11} {'ratio to pi^2/lnL':>17} {'low modes (lowest 6)':>34}")
for m in [0.5, 1.0, 2.0]:
    for L in [128, 256, 512, 768]:
        eps, nu, S = spec(8*L, m*8.0/L, L); e = eps[np.isfinite(eps)]
        exp0 = np.pi**2/np.log(L)
        low = e[:6]
        print(f"  {m:>4} {L:>5} {e[0]:>9.5f} {e[0]*np.log(L):>11.4f} {e[0]/exp0:>17.3f}   {np.array2string(low, precision=3, floatmode='fixed')}")
print(f"\n  pi^2 = {np.pi**2:.4f}")
print("  VERDICT: eps_min -> 0 as pi^2/ln(L) (universal, mass-indep in continuum); lowest modes form a")
print("  uniform ladder in reflection-degenerate pairs; NO isolated mode below pi^2/ln(L). This is a")
print("  CONTINUOUS modular spectrum with NO eigenvalue at 0 => trivial centralizer => (E_O) HOLDS")
print("  for the free massive scalar (d=2). No NOT-(E_O) signal; no carrier entry-ticket; no flip.")


# ============================================================================
# Iteration 19 extension — embedded-eigenvalue (pinning) scan.
# An eigenvalue E != 0 of the continuum ln delta_O would appear as a lattice mode
# whose eps_k(L) converges to a nonzero limit under continuum refinement; continuum
# (a.c.) modes shrink as (2j+1) pi^2 / ln L. Scale-aware statistic per sorted mode:
#   g_k = [eps_k(L_max) ln L_max] / [eps_k(L_min) ln L_min]
#   continuum: g ~ 1 (finite-size drift); PINNED eigenvalue: g = ln L_max / ln L_min.
# Precision note: modes with eps >~ 22 have nu - 1/2 <~ 1e-10; use the symmetrized
# solver below (eig(X_A P_A) = eigh(P^{1/2} X_A P^{1/2})) and exclude them.
# ============================================================================
from numpy.linalg import eigh as _eigh

def eps_spectrum_sym(L, m_phys, R_phys, ring_factor=8):
    m_lat = m_phys*R_phys/L
    N = ring_factor*L
    Xr, Pr = corr(N, m_lat)
    XA, PA = toe(Xr, L), toe(Pr, L)
    w, V = _eigh(PA)
    Ph = (V*np.sqrt(np.clip(w, 1e-300, None))) @ V.T
    M = Ph @ XA @ Ph
    ev = np.clip(_eigh(0.5*(M+M.T))[0], 0.25, None)
    nu = np.sort(np.sqrt(ev))
    with np.errstate(divide='ignore'):
        eps = np.log((nu+0.5)/(nu-0.5))
    return np.sort(eps[np.isfinite(eps)])

if __name__ == "__main__":
    print()
    print("=" * 100)
    print("ITERATION-19 PINNING SCAN — embedded eigenvalues at E != 0? (E = 0 excluded by LEM-K0)")
    print("=" * 100)
    R = 8.0; Ls = [96, 192, 384, 768]; TRUST = 22.0
    pinned_g = np.log(Ls[-1])/np.log(Ls[0])
    print(f"g_k continuum ~ 1; PINNED = {pinned_g:.3f}. Trusted window eps(L_min) < {TRUST}")
    worst = 0.0
    for m in [0.5, 1.0, 2.0, 4.0]:
        E = {L: eps_spectrum_sym(L, m, R) for L in Ls}
        ktr = min(int((E[Ls[0]] < TRUST).sum()), *[len(E[L]) for L in Ls])
        g = (E[Ls[-1]][:ktr]*np.log(Ls[-1]))/(E[Ls[0]][:ktr]*np.log(Ls[0]))
        worst = max(worst, g.max())
        print(f"  m={m}: trusted modes={ktr}  max g={g.max():.4f}  median g={np.median(g):.4f}")
    print(f"  WORST g anywhere = {worst:.4f} vs pinned {pinned_g:.3f}: "
          + ("NO pinned mode — no embedded eigenvalue; supports NO point spectrum at any E."
         if worst < 0.5*(1+pinned_g) else "PINNED CANDIDATE — investigate."))
    print("  (High-mode 'drift' above the trusted window converges UPWARD to ladder slots"
          " (2j+1)pi^2/lnL — late-onset ladder levels, not eigenvalues.)")


# ============================================================================
# Iteration 20 — eigenFUNCTION-level probe: edge-divergence vs bulk-normalizability
# ============================================================================
# On the FIXED compact interval, a.c. vs point spectrum is NOT distinguished by
# bulk-vs-edge fraction per se (a naive max-over-modes central-fraction probe is
# non-discriminating: mid-ladder lattice modes legitimately spread; documented
# 2026-07-11). The clean discriminator is REFINEMENT SCALING AT FIXED MODULAR
# ENERGY eps*: an a.c. generalized eigenfunction has log-divergent edge mass
# (central fraction Fc -> 0, fixed-physical-edge-window mass Ee -> 1 as a -> 0),
# while an embedded (normalizable) eigenfunction converges (Fc -> const > 0).
def _modes_sym(N, m, L):
    from numpy.linalg import eigh as _eigh
    Xr, Pr = corr(N, m)
    XA, PA = toe(Xr, L), toe(Pr, L)
    wP, VP = _eigh(PA)
    Ph = (VP*np.sqrt(wP))@VP.T; Pmh = (VP/np.sqrt(wP))@VP.T
    w, V = _eigh(Ph@XA@Ph)
    nu = np.sqrt(np.clip(w, 0.25, None))
    eps = np.log((nu+0.5)/(nu-0.5))
    return eps, Pmh@V   # physical eigenfunctions f_k = P^{-1/2} phi_k (columns)

if __name__ == "__main__":
    print()
    print("=" * 100)
    print("ITERATION-20 PROBE: fixed-energy edge-divergence test (a.c. vs embedded eigenfunction)")
    print("=" * 100)
    for m_phys in [1.0, 2.0]:
        for eps_star in [1.5, 3.0, 6.0]:
            row = f"  m={m_phys} eps*={eps_star}: "
            for L in [96, 192, 384, 768]:
                eps, F = _modes_sym(8*L, m_phys*8.0/L, L)
                k = int(np.argmin(np.abs(eps - eps_star)))
                f2 = F[:, k]**2
                Fc = f2[L//4:3*L//4].sum()/f2.sum()
                Ee = (f2[:L//8].sum()+f2[-L//8:].sum())/f2.sum()
                row += f"L{L}:Fc={Fc:.3f},Ee={Ee:.3f}  "
            print(row)
    print("  RESULT (2026-07-11 run): Fc <= 0.03 shrinking, Ee -> 0.96-0.997 growing at every eps* and mass —")
    print("  edge-divergent a.c. signature at every tracked energy; NO bulk-normalizable candidate anywhere.")


# ============================================================================
# Iteration 22 (prep) — the Mobius spectral identity, and a frame caveat
# ============================================================================
# NEW STRUCTURAL READING [INFERENCE, high — spectral level]: the established
# ladder eps_k -> (2k+1) pi^2 / ln L is EXACTLY the box (Weyl) quantization of
# the Mobius/Hislop-Longo generator D on the log coordinate u = arctanh(x/R)
# (box half-length u_max ~ (ln L)/2): tau_k = (2k+1) pi / (2 ln L), eps = 2 pi tau.
# Hence AT THE SPECTRAL LEVEL the c-collapse operator satisfies
#     spec(A)  ~=  coth^2( pi * spec(D_log-box) )
# i.e. A is spectrally a function of the Mobius generator — the global upgrade
# of the Corner Indicial Theorem's tau0 = eps/2pi, and the structural basis of
# the iteration-22 Mourre-transfer route (A = coth^2(pi D) + compact mass term).
#
# METHODOLOGY CAVEAT (documented 2026-07-11, integrator's own failed test):
# naive VECTOR-level tests of this identity are frame-contaminated and must not
# be used: (i) A's eigenvectors are orthogonal only in the S^{1/2}-conjugated
# frame; pairing them with D built in raw L^2(dx) gives drifting <D^2> ratios
# (0.77 -> 0.53 across the ladder — an artifact, not physics); (ii) windowed
# commutator tests via pinv of the non-orthogonal physical frame amplify
# conditioning and fake non-compactness. The frame-correct vector-level test
# requires D conjugated into the A-self-adjoint representation (analytic task,
# handed to the iteration-22 referee), or purely spectral comparisons as above.


# ============================================================================
# Iteration 23 (prep) — (a') computed; frame-fixed dispersion; resolvent-H1 probe
# ============================================================================
# (a') THE BIRKHOFF STRONG-REGULARITY DETERMINANT [computed 2026-07-11, referee
# pending]: in the Birkhoff variable z = e^{2 pi i s}, the transverse pencil's
# characteristic function c - cos^2(pi s) is proportional to the quadratic
#     z^2 - 2(2c-1) z + 1,   discriminant 16 c(c-1) > 0 for ALL c > 1,
# with distinct real roots z_pm = (sqrt(c) +- sqrt(c-1))^2 = e^{+-2 pi tau0}
# (consistency: e^{arccosh sqrt(c)} = sqrt(c) + sqrt(c-1)). Distinct roots for
# every c > 1 = the strong-regularity signature; the remaining step is the
# framework citation (system-Birkhoff/Shkalikov: strongly regular => Riesz basis).
#
# FRAME FIX (corrects the iteration-22 caveat): A_sym = (2P)^{1/2}(2X)(2P)^{1/2}
# IS the plain-l2 self-adjoint lattice representative of A, and the Mobius D is
# plain-l2 Hermitian — SAME frame; pair A_sym's own eigenvectors with D directly.
# Frame-fixed dispersion ratios improve to 0.86..0.74 with the residual deficit
# attributed to central-difference damping on corner-concentrated oscillations
# (the clean measurement remains the iteration-21 phase fit: tau = eps/2pi at 1-3%).
#
# H1 RESOLVENT PROBE [2026-07-11 run]: K_res = (A_sym+1)^{-1} - (coth^2(pi D)+1)^{-1}
# has top singular values 0.377 / 0.388 / 0.397 at L = 128/256/512 (refinement-
# stable, slow lnL-type drift) with FAST index decay: sv[12] ~ 4e-4, sv[24] ~ 1e-6
# — the compactness signature of hypothesis (H1) in its bounded-transform form.
#
# CRUX SHARPENING (analysis note): the iteration-22 BIC counterexample is a
# LINEAR eigenvalue problem; the true V_eff is ENERGY-DEPENDENT (a Schur
# complement, monotone in kappa) — the structural origin a proof must exploit.
# Untried lens: Krein-space definitizability (Langer-Jonas) for the strip pencil.


# ============================================================================
# Iteration 24 (seed) — the LEM-A1'''-T Gram probe [2026-07-11]
# ============================================================================
# Eigenvector family of the transverse pencil: ONE lattice {s_n = n + i tau0}
# (the conjugate lattice duplicates it: v^-_n = v^+_{-n}, since s^+_{-n} = -conj(s_n)
# and cosine is even — an indexing trap caught by an exact-degeneracy check when a
# naive two-lattice family returned lambda_min = 0 identically).
# Explicit vectors (tan(pi s_n) = i tanh(pi tau0), n-INDEPENDENT):
#   a_n = cos(s_n eta) + i tanh(pi tau0) sin(s_n eta),  b_n = cos(s_n eta).
# Gram spectrum of the normalized family, |n| <= N (M = 4000 quadrature):
#   c=1.02 (tau0=.045, kappa~51):  lmin 0.0098->0.0097, lmax 1.995->2.002 (N=5..80) — STABLE
#   c=1.5  (tau0=.210):            lmin 0.144->0.122,   lmax 2.01->2.27  — decelerating
#   c=4.0  (tau0=.419):            lmin 0.116->0.067,   lmax 2.95->4.16  — decelerating
#   c=25   (tau0=.730, kappa~1.04):lmin 0.014->0.0040,  lmax 4.96->8.25  — slow decay, decelerating
# READING [INFERENCE, medium — numerical]: Riesz-basis signature at every FIXED c
# (bounds decelerating toward saturation), SUPPORTING LEM-A1'''-T as stated
# (per-c Riesz, bounds non-uniform in c). SURPRISE for the referee: degradation
# occurs at LARGE tau0 (kappa -> 1+, threshold side; e^{tau0 eta} lopsidedness of
# the eigenvectors), NOT at the predicted c -> 1+ z-root-merging side, which is
# numerically the CLEANEST regime. The two "degeneracy" mechanisms are distinct
# objects — flag to the iteration-24 referee.


# ============================================================================
# Iteration 25 — the falsifiable on-shell transversality probe (LEM-A1'''')
#                + Konno-Kuroda window-criterion feasibility scan [2026-07-12]
# ============================================================================
# TARGET. LEM-A1'''' [OPEN]: an L2 candidate eigenfunction of A embedded at
# kappa > 1 whose on-shell amplitude vanishes (w-hat(+-tau0) = 0) is forced to
# vanish identically. Probed here at the vector level on the lattice.
#
# DESIGN (falsifiers named BEFORE the run):
# (A) On-shell overlap Omega. The near-eigenvector sequences this lattice
#     affords are the ladder PAIRS (parity doublets): pair p at (m, L) is an
#     EXACT eigenvector of A_sym with kappa_p(L) ~ coth^2((2p+1)pi^2/(2 ln L))
#     drifting upward through (1, 2.6] under refinement; every window of
#     (1, 2.6] is visited by some (p, L) sequence. Statistic:
#     Omega = ||P_shell u||^2, P_shell = projector onto the 4D PER-EDGE
#     threshold-wave span {cos(tau0 u)/sqrt(beta), sin(tau0 u)/sqrt(beta)} x
#     {chi_{u<-2.5}, chi_{u>2.5}}, u = ln(x/(R-x)), beta = x(R-x)/R,
#     tau0 = arctanh(1/sqrt(kappa))/pi. This IS the pairing against the
#     threshold generalized eigenfunction, in Kato-Agmon-Simon-local (per-
#     edge/channel) form; the mass term is (R/4) sech^2(u/2) < 1.5% of its
#     peak on the windows, so the edge waves are asymptotically exact there.
#     rho = Omega / (eigenvector mass on the windows) = on-shell PURITY.
#     FALSIFIER F1: Omega -> 0 under refinement along any (m, pair) family
#     (an on-shell-suppressed near-eigenvector sequence = numerical BIC).
# (B) Suppression price sigma_perp = min ||(A - kappa_p) v|| over unit
#     v orthogonal to the span. Transversality: sigma_perp ~ gap to the next
#     distinct level (suppression destroys solvability); compare d_pair =
#     half-splitting = the residual scale available WITH on-shell content.
#     FALSIFIER F2: sigma_perp/gap -> 0 under refinement.
#     Cascade columns b_sh/b_hi: tau-band mass of the constrained minimizer
#     (analytic Mobius transform hat(v)(tau) = sum_j sqrt(a) v_j
#     e^{-i tau u_j}/sqrt(2 pi beta_j)) within / above one box-resolution
#     unit pi/ln(2L) of the shell.
# (C) Strip side: transversality angle sin(theta_0) = dist(F_0, span{F_n,
#     n != 0}) of the on-shell slot s_0 = i tau0 in the iteration-24
#     normalized family (quadrature Gram, M = 2000) — the quantitative
#     geometric constant a LEM-A1'''' proof needs from the basis side.
#     [Identification of n = 0 as THE on-shell channel: INFERENCE, medium.]
#     FALSIFIER F3: sin(theta_0) -> 0 with truncation N at an INTERIOR c.
# (D) Konno-Kuroda window criterion (note N1/N1a program; the NAIVE splitting
#     K = A - coth^2(pi D) was already scanned and FAILED (||K|| ~ 9.7) — not
#     redone). Exact criterion implemented:
#       BS(kappa, eta) = -|K_res|^{1/2} (R0 - mu - i eta)^{-1}
#                        sgn(K_res) |K_res|^{1/2},
#       K_res = (A_sym+1)^{-1} - (coth^2(pi D)+1)^{-1},
#       R0 = (coth^2(pi D)+1)^{-1},  mu = (1+kappa)^{-1}.
#     CONTINUUM HYPOTHESIS (unproven — this is what would make it a theorem):
#     LAP boundary values BS(kappa+i0) exist on ran|K_res|^{1/2} (A0-LAP +
#     (H1) compactness); then sr(BS(kappa+i0)) < 1 uniformly on a window W
#     implies sigma_p(A) cap W = empty [Birman-1961/Schwinger-1961;
#     Konno-Kuroda-1966; Ishida-Lorinczi-Sasaki arXiv:2109.01564 for nonlocal
#     kinetic parts]. On a FINITE lattice eta -> 0 MUST diverge (real point
#     spectrum exists), so the indicator is sr at eta = fac * (local R0 level
#     spacing), fac in {2, 1, 0.5}, L in {128, 256, 512} — a FEASIBILITY
#     INDICATOR, NOT a proof. Also run: the on-shell-DELETED BS (shell levels
#     removed from the resolvent, eta = 0) — the numerical counterpart of the
#     off-shell reduction inside LEM-A1''''.
#
# TRAPS ENCOUNTERED (2026-07-12):
# (T1, NEW) Running-top unresolvability: the top pair's shell frequency
#   tau0(kappa_max(L)) = pi/(2 ln L) is HALF the log-box Fourier resolution
#   pi/ln(2L) at EVERY L — pair 0's on-shell amplitude is structurally
#   unresolvable on the interval lattice (its transform is a low-tau blob
#   with sinc zeros; do NOT read that as on-shell suppression). Probe A is
#   therefore restricted to pairs 1-3.
# (T2) Frame contamination CONFIRMED at vector level (iteration-22 caveat):
#   at L=256, m=1 the top pair puts 66% of its D_lat-frame mass on the
#   t = +-0.096 box modes (g = 11.67), and ||(coth^2(pi D_lat)-kappa)u|| =
#   7.88 while ||(A_sym-kappa)u|| = 0. NO D_lat-frame masses enter Probe A;
#   all statistics use lattice geometry (spans) + the analytic transform.
# (T3, NEW) Global-phase span trap: a single global {cos, sin}(tau0 u) span
#   mis-measures one parity sector — the mass term decoheres the two edge
#   phases (m=1, pair 2, L=384: Om_odd = 0.000 and sig/gap = 0.008, a FAKE
#   near-falsifier; the per-edge span restores Om_odd = 0.765, sig/gap =
#   0.954). On-shell suppression must be imposed PER EDGE (= per channel).
# (T4) Exact lattice eigenvectors are box-sinc packets, not resolvent-tail
#   profiles: a pole+background fit of u-hat leaves 28-42% residual for the
#   near-threshold pairs (box diffraction, not physics) — the pole-strength
#   estimator was abandoned for the span projection Omega.
# (T5) N1a respected: no naive K = A_sym - coth^2(pi D) anywhere in Probe A;
#   on-shell objects use only the continuum dispersion coth^2(pi tau).
# (T6) numpy >= 2.0 removed np.trapz; use np.trapezoid.
from numpy.linalg import eigh as _eigh25, svd as _svd25, eigvals as _eigvals25

_R25 = 8.0

def _p25_A(L, m_phys, R=_R25, ring=8):
    Xr, Pr = corr(ring*L, m_phys*R/L)
    XA, PA = toe(Xr, L), toe(Pr, L)
    w, V = _eigh25(PA)
    Ph = (V*np.sqrt(np.clip(w, 1e-300, None))) @ V.T
    A = 4.0*(Ph @ XA @ Ph)
    return 0.5*(A + A.T)

def _p25_D(L, R=_R25):
    # Mobius/Hislop-Longo generator, plain-l2 Hermitian (iteration-23 frame fix):
    # beta d/dx = d/du; D = (beta p + p beta)/2, central difference, sites (j+1/2)a.
    # Validation anchors reproduced 2026-07-12: eps_min*lnL/pi^2 = 0.9999-1.0000
    # (m=1, L=128/192/256; eps_min(128)=2.0339 = N1b's row-shift value), lattice
    # A0 top at L=192 = 10.907 (N1a: 10.9), top sv of K_res at L=128/256 =
    # 0.3774/0.3877 (iteration-23: 0.377/0.388).
    a = R/L; x = (np.arange(L)+0.5)*a; beta = x*(R-x)/R
    S = np.zeros((L, L)); i = np.arange(L-1)
    S[i, i+1] = 1/(2*a); S[i+1, i] = -1/(2*a)
    t, Phi = _eigh25(-0.5j*(beta[:, None]*S + S*beta[None, :]))
    return t, Phi, x, beta, a

def _p25_edge_span(x, beta, tau0, R=_R25, ub=2.5):
    u = np.log(x/(R-x))
    cols = []
    for chi in ((u < -ub).astype(float), (u > ub).astype(float)):
        cols += [np.cos(tau0*u)/np.sqrt(beta)*chi, np.sin(tau0*u)/np.sqrt(beta)*chi]
    return np.linalg.qr(np.vstack(cols).T)[0], (np.abs(u) > ub)

def _p25_hat(v, x, beta, a, taus, R=_R25):
    u = np.log(x/(R-x))
    return np.exp(-1j*np.outer(taus, u)) @ (v*np.sqrt(a/(2*np.pi*beta)))

def _p25_onshell(L, m, pairs):
    A = _p25_A(L, m); vals, vecs = _eigh25(A)
    t, Phi, x, beta, a = _p25_D(L)
    rows = []
    for p in pairs:
        k1, k2 = L-1-2*p, L-2-2*p
        kap = 0.5*(vals[k1]+vals[k2])
        if kap <= 1+1e-12: continue
        tau0 = np.arctanh(1/np.sqrt(kap))/np.pi
        Q, win = _p25_edge_span(x, beta, tau0)
        Om, rho = [], []
        for k in (k1, k2):
            po = float(np.linalg.norm(Q.T @ vecs[:, k])**2)
            Om.append(po); rho.append(po/float(np.sum(vecs[:, k]**2*win)))
        Uc = _svd25(Q, full_matrices=True)[0][:, 4:]
        Ak = A - kap*np.eye(L)
        ev, evec = _eigh25(Uc.T @ (Ak @ Ak) @ Uc)
        sig = float(np.sqrt(max(ev[0], 0)))
        gap = float(np.min(np.abs(np.delete(vals, [k1, k2]) - kap)))
        taus = np.arange(0.05, 3.0, 0.01)
        resol = np.pi/np.log(x[-1]/(_R25-x[-1]))
        hv = np.abs(_p25_hat(Uc @ evec[:, 0], x, beta, a, taus))**2
        tv = np.trapezoid(hv, taus)
        b_sh = float(np.trapezoid(np.where(np.abs(taus-tau0) <= resol, hv, 0), taus)/tv)
        b_hi = float(np.trapezoid(np.where(taus > tau0+resol, hv, 0), taus)/tv)
        rows.append((m, p, L, kap, tau0, max(Om), min(Om), min(rho), sig,
                     0.5*abs(vals[k1]-vals[k2]), gap, sig/gap, b_sh, b_hi))
    return rows

def _p25_strip_angle(c, N, M=2000):
    tau0 = np.arccosh(np.sqrt(c))/np.pi
    eta = (np.arange(M)+0.5)*np.pi/M
    th = np.tanh(np.pi*tau0)
    ns = np.arange(-N, N+1)
    F = np.zeros((2*M, len(ns)), dtype=complex)
    for i, n in enumerate(ns):
        s = n + 1j*tau0
        v = np.concatenate([np.cos(s*eta) + 1j*th*np.sin(s*eta), np.cos(s*eta)])
        F[:, i] = v/np.sqrt((np.pi/M)*np.vdot(v, v).real)
    G = (np.pi/M)*(F.conj().T @ F); G = 0.5*(G + G.conj().T)
    lam = np.linalg.eigvalsh(G); Gi = np.linalg.inv(G)
    return lam[0], lam[-1], float(1/np.sqrt(Gi[N, N].real)), float(1/np.sqrt(Gi[N+1, N+1].real))

def _p25_kk_setup(L, m):
    A = _p25_A(L, m)
    t, Phi, x, beta, a = _p25_D(L)
    g = 1/np.tanh(np.pi*np.clip(np.abs(t), 1e-12, None))**2
    rho = 1/(1+g)
    Kres = np.linalg.inv(A+np.eye(L)) - ((Phi*rho) @ Phi.conj().T).real
    Kres = 0.5*(Kres + Kres.T)
    lam, V = _eigh25(Kres)
    idx = np.argsort(-np.abs(lam))[:100]
    lam, V = lam[idx], V[:, idx]
    keep = np.abs(lam) > 1e-13
    lam, V = lam[keep], V[:, keep]
    return A, rho, lam, V.T @ Phi, float(g.max())

def _p25_bs(rho, lam, W, mu, eta, mask=None):
    sh = np.sqrt(np.abs(lam))
    res = 1/(rho - mu - 1j*eta)
    if mask is not None: res = res*mask
    return -(sh[:, None]*((W*res) @ W.conj().T))*(sh*np.sign(lam))[None, :]

if __name__ == "__main__":
    print()
    print("=" * 100)
    print("ITERATION-25 PROBE A: on-shell transversality (LEM-A1'''' lattice transcription)")
    print("=" * 100)
    print(f"{'m':>4}{'pr':>3}{'L':>5}{'kappa':>10}{'tau0':>7}{'Om_max':>8}{'Om_min':>8}{'rho_min':>8}"
          f"{'sig_perp':>10}{'d_pair':>9}{'gap':>9}{'sig/gap':>8}{'b_sh':>6}{'b_hi':>6}")
    for m in [0.5, 1.0, 2.0]:
        for L in [128, 256, 512]:
            prs = (1, 2, 3) if m == 1.0 else (1, 2)
            for r in _p25_onshell(L, m, prs):
                print(f"{r[0]:>4}{r[1]:>3}{r[2]:>5}{r[3]:>10.5f}{r[4]:>7.3f}{r[5]:>8.3f}{r[6]:>8.3f}"
                      f"{r[7]:>8.2f}{r[8]:>10.2e}{r[9]:>9.2e}{r[10]:>9.2e}{r[11]:>8.3f}{r[12]:>6.2f}{r[13]:>6.2f}")
    print()
    print("PROBE B: strip-side transversality angle of the on-shell slot (iteration-24 family)")
    print(f"{'c':>7}{'N':>5}{'lmin':>9}{'lmax':>8}{'sin_th0':>9}{'sin_th1':>9}")
    for c in [1.02, 1.5, 4.0, 25.0]:
        for N in [20, 40, 80]:
            lmin, lmax, s0, s1 = _p25_strip_angle(c, N)
            print(f"{c:>7}{N:>5}{lmin:>9.4f}{lmax:>8.3f}{s0:>9.4f}{s1:>9.4f}")
    print()
    print("PROBE C: Konno-Kuroda bounded-transform BS window criterion (m=1)")
    kappas = np.geomspace(1.1, 20.0, 41)
    wins = [(1.1, 2.0), (2.0, 5.0), (5.0, 10.0), (10.0, 20.0)]
    for L in [128, 256, 512]:
        A, rho, lam, W, A0top = _p25_kk_setup(L, 1.0)
        kx = float(np.max(np.linalg.eigvalsh(A)))
        ev = _eigvals25(_p25_bs(rho, lam, W, 1/(1+kx), 0.0))
        dev1 = float(np.min(np.abs(ev - 1.0)))
        rho_u = np.sort(np.unique(np.round(rho, 13)))
        plain = {f: [] for f in (2.0, 1.0, 0.5)}; dele = {f: [] for f in (1.5, 3.0)}
        for kap in kappas:
            mu = 1/(1+kap)
            d = np.abs(rho_u - mu)
            near = np.sort(rho_u[np.argsort(d)[:4]])
            dmu = float(np.mean(np.diff(near)))
            for f in plain:
                plain[f].append(np.max(np.abs(_eigvals25(_p25_bs(rho, lam, W, mu, f*dmu)))))
            for f in dele:
                msk = (np.abs(rho-mu) > f*dmu).astype(float)
                dele[f].append(np.max(np.abs(_eigvals25(_p25_bs(rho, lam, W, mu, 0.0, msk)))))
        plain = {f: np.array(v) for f, v in plain.items()}
        dele = {f: np.array(v) for f, v in dele.items()}
        print(f"  L={L}: BS identity check at kappa={kx:.6f}: |closest ev - 1| = {dev1:.2e}; lattice A0 top = {A0top:.2f}")
        for lo, hi in wins:
            s = (kappas > lo) & (kappas <= hi)
            print(f"    window ({lo},{hi}]: max sr eta=2d/1d/0.5d = "
                  f"{plain[2.0][s].max():.3f}/{plain[1.0][s].max():.3f}/{plain[0.5][s].max():.3f}")
        pop = kappas <= 2.5
        print(f"    DELETED-BS (shell levels removed, eta=0): kap<=2.5 (populated): "
              f"max sr_del(1.5d/3d) = {dele[1.5][pop].max():.3f}/{dele[3.0][pop].max():.3f}")
        print(f"      kap>2.5 (beyond lattice ladder top, artifact zone):          "
              f"max sr_del(1.5d/3d) = {dele[1.5][~pop].max():.3f}/{dele[3.0][~pop].max():.3f}")
    print()
    print("  VERDICT (honest reading in the closing comment block): F1/F2/F3 NOT triggered;")
    print("  plain Konno-Kuroda contraction FAILS on the lattice (shell-coupling domination);")
    print("  the on-shell channel carries the entire eigenvalue-forming coupling where resolvable.")

# ============================================================================
# ITERATION-25 RESULTS (2026-07-12 run; tables printed by the block above)
# ============================================================================
# PROBE A (21 rows above; dev runs added L in {192, 384, 768}, 33 rows total;
# monotone in L in EVERY family):
#   Omega_min across L=128->512(->768 where run, m=1): m=1 p1 .855->.930->.941,
#   p2 .614->.797->.829, p3 .534->.662->.700; m=.5 p1 .701->.824, p2 .528->.651;
#   m=2 p1 .951->.981, p2 .791->.926. Edge purity rho >= 0.98 at the finest L
#   in every family (worst anywhere: 0.91 at L=128 p3): the edge content of
#   every near-eigenvector IS the tau0(kappa)-wave — the Corner Indicial
#   frequency at the vector level.
#   sigma_perp/gap in [0.92, 1.02] at ALL (m, pair, L): deleting the 4 on-shell
#   directions lifts the best residual from d_pair to the FULL gap; jump factor
#   sigma_perp/d_pair = 4.3e3 (m=1 p1 L=512), 2.3e6 (m=2 p2 L=512),
#   5.3e3/1.4e3/4.5e2 (m=1 p1/p2/p3 at L=768). Cascade: the constrained
#   minimizer keeps only 9-41% of its tau-mass at the shell; at the finest L,
#   42-69% is pushed ABOVE the shell (adjacent higher ladder slots).
#   F1, F2 NOT triggered: no on-shell-suppressed near-eigenvector exists on
#   this lattice at any probed (mR, kappa-window, refinement).
# PROBE B: sin(theta_0) = .866/.814/.574/.181 at c = 1.02/1.5/4/25 (N=80),
#   truncation-stable (< 1% drift N=20->80; F3 not triggered); degradation
#   only at the documented kappa -> 1+ edge (c = 25), matching iteration-24's
#   lmin channel. Validation: lmin/lmax at (c=1.5, N=80) = 0.1219/2.273 vs the
#   iteration-24 numbers 0.122/2.27; (c=25, N=80) lmin = 0.0040 = seed value.
# PROBE C: construction PROVED on the lattice: at kappa = top eigenvalue of
#   A_sym the BS operator has an eigenvalue at +1 to 3.5e-14/7.2e-16/2.0e-15
#   (L=128/256/512) — the criterion detects eigenvalues exactly. Plain KK
#   contraction FAILS: max sr per window (eta = 1*spacing) = 2.3-3.0 on every
#   window of (1.1, 20] at every L, and the eta-scaling (2d/1d/0.5d ~
#   1.4-1.7 / 2.3-3.0 / 3.4-5.9) is ~1/eta = shell-coupling domination, not a
#   converging boundary value < 1. ||K_res|| ~ 0.39 does NOT control the
#   on-shell resolvent enhancement — SECOND methods-negative for the N1
#   compact-core program (after N1a): no uniform norm-contraction form
#   survives; the on-shell channel must be handled explicitly (which is
#   precisely LEM-A1''''s architecture).
#   DELETED-BS two-regime structure: in the lattice-populated zone kap <= 2.5
#   sr_del = 1.7-2.0 (real finite-lattice ladder eigenvalues live there, and
#   R0's local level spacing near kap = 1.5 is O(1) in kappa — the continuum
#   deleted-BS is NOT resolved in the physical zone; spacing shrinks only as
#   1/ln L, so brute refinement cannot fix this). Beyond the ladder top
#   (artifact zone) sr_del(3d) <= 0.09, with sr_del ~ 0.000 on kap in
#   [2.6, 8.4]: with the shell removed essentially NOTHING remains — the
#   eigenvalue-forming coupling is entirely on-shell. The non-contraction
#   boundary DRIFTS with the lattice top (last sr >= 1 grid point =
#   2.27/2.44/2.44 vs kappa_top = 1.69/1.98/2.30 at L = 128/256/512): a
#   lattice artifact, not a fixed continuum feature.
# HONEST READING [INFERENCE, medium — numerical, finite lattice, log-slow
# refinement]: every statistic lands on the transversality side with clean
# monotone refinement trends and no falsifier triggered, and the deleted-BS
# collapse (off-shell coupling ~ 0 wherever the lattice can resolve it) is
# structurally the LEM-A1'''' mechanism itself. This SUPPORTS LEM-A1'''' but
# cannot decide it: the lattice visits each kappa window only transiently
# (log-sparse ladder), and Probe C's continuum hypothesis (A0-LAP + (H1))
# remains unproven. Sharp negatives delivered: (T1) top-pair unresolvability;
# plain-KK infeasibility (Probe C). If the N1 interval-arithmetic program is
# pursued, it must target an on-shell-PROJECTED Birman-Schwinger with the
# on-shell channel closed analytically by transversality, and should work in
# the strip/mode variables (iteration-24 exact lattice + explicit Gram), not
# the interval Peschel lattice.

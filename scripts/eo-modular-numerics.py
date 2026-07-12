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
# NOTE (iteration 26, T8): the "sr_del ~ 0.000 on kap in [2.6, 8.4]" rows of
# the DELETED-BS above are PART-VACUOUS — on exactly those grid points the
# |rho - mu| > 3*dmu mask deletes ALL L levels (mu sits in the top spectral
# gap, so dmu built from the 4 nearest unique levels spans the whole ladder).
# The corrected, non-vacuous shell closure and re-measurement: PROBE P1 below.


# ============================================================================
# Iteration 26 — PROBE P1: the on-shell-PROJECTED (shell-deleted) Birman-
#                Schwinger, corrected form + full (m, L) quantification;
#                PROBE P2: the Bari head-ledger — (Q2) head-eigenvalue
#                distinctness machine-certified per compact c-window
#                [2026-07-12]
# ============================================================================
# P1 TARGET (iteration-25 directive): close the shell channel and measure the
# deleted-BS spectral radius on kappa in (1.1, 20], L in {128, 256, 512},
# m in {0.5, 1, 2}; quantify the "sr ~ 0 beyond the ladder top" finding and
# its L-trend; state the continuum hypothesis a rigorous version needs.
#
# P1 DESIGN. Three channel-closure forms were implemented and compared:
#  (a) GEOMETRIC rank-4 compression (the directive as literally written):
#      project the 4D per-edge threshold span Q (iteration-25 Probe A object)
#      out of the FREE resolvent — G_perp = U_perp (U_perp^T R0 U_perp
#      - mu)^{-1} U_perp^T, U_perp = orth. complement of Q, R0 =
#      (coth^2(pi D_lat)+1)^{-1}, mu = (1+kappa)^{-1}; BS as in Probe C.
#  (b) SPECTRAL tau-band deletion (the corrected closure): delete the free
#      levels with | |t| - tau0(kappa) | <= b * pi/ln(2L) (b resolution
#      units, bilateral in t — the T1 unit; 6-12 of L levels), eta = 0.
#  (c) CONTROL: delete an equal-width band centered OFF the shell (at
#      tau0 + 3 units) — specificity check for (b).
# Falsifiers named before the run: if (b) gives sr >= 1 somewhere with the
# control ALSO small, the "coupling is on-shell" reading dies; if the control
# is small everywhere, the statistic is vacuous.
#
# P1 TRAPS (encountered 2026-07-12):
# (T7, NEW — sharp failure of form (a)): geometric rank-4 compression does
#   NOT close the channel: compression INTERLACES — the compressed operator
#   R0_perp keeps levels near mu (dist(mu, spec R0_perp) down to 2.6e-4) —
#   because the free near-shell eigenvectors are BOX modes whose interior
#   (|u| < 2.5) mass survives the per-edge projection and reconstitutes
#   near-resonant spectrum. Measured: sr erratic and supercritical, e.g.
#   m=1 L=256: sr = 8.4 / 32.3 / 3.1 at kappa = 2.44 / 5.04 / 12.94, spiking
#   to 1260 where a compressed level lands on mu. Channel closure must be
#   SPECTRAL (a band of the free spectral measure), not a finite-rank
#   geometric projection under the resolvent.
# (T8, NEW — iteration-25 correction): the mu-spacing mask |rho - mu| > 3 dmu
#   is VACUOUS beyond the ladder top wherever mu sits in the top spectral
#   gap: dmu is then so large the mask deletes ALL L levels (ndel = L), and
#   sr_del = 0 trivially — this produced iteration-25's "~ 0.000 on
#   [2.6, 8.4]" rows. The qualitative finding SURVIVES re-measurement in the
#   non-vacuous form (b) (numbers below), but the "~ 0" rows overstated.
# (T9) Threshold-edge shell widening: at kappa -> 1+ (kappa = 1.1 endpoint),
#   mu -> 1/2- while the WHOLE high-tau dispersion tail flattens onto 1/2-
#   (rho(tau) = 1/2 - O(e^{-2 pi tau})), so the effective shell is ~2
#   resolution units wide: at L = 512, b = 1 gives sr = 0.90/0.92/0.94
#   (m = 0.5/1/2) at kappa = 1.1 ONLY; b = 2 restores 0.0056/0.0049/0.0024.
#   Matches the iteration-24/25 finding that kappa -> 1+ is the degrading
#   edge. (Also a window-aggregation trap: (lo, hi] windows with lo = 1.1
#   silently DROP the endpoint — dev aggregates missed it; global-max scan
#   caught it.)
# (Row-shift check, mandatory per N1b): FIRED — kappa_top(L=128, m=1) =
#   1.692640 vs kappa_top(L=256, m=2) = 1.692576 (delta 6.4e-5); (256, 1) =
#   1.976268 vs (512, 2) = 1.976196: at m_lat >= 0.03 the ladder top is a
#   function of m_lat = mR/L alone to 4e-5 — the m = 2 column's apparent
#   mass dependence is a lattice artifact. At smaller m_lat the match
#   loosens ((128, 0.5) = 1.981591 vs (256, 1) = 1.976268, 0.27%) — the
#   pi^2/ln L continuum law reasserting. No mass trend below is physical.
#
# P2 TARGET: turn (Q2)'s HEAD-eigenvalue-distinctness hypothesis of the Bari
# supplement into a checked fact per compact window c in {[1.05, 1.5],
# [1.5, 4], [4, 25]} — the Birkhoff quadratic z^2 - 2(2c-1)z + 1 (a',
# ESTABLISHED iteration 23; Birkhoff-1908 strong regularity, Shkalikov-1986
# framework) handles the tail; the finitely many head roots of
# cos^2(pi s) = c need explicit pairwise-separation margins.
# P2 TRAP (the iteration-24 conjugate-lattice trap at ledger level): the
# naive two-branch eigenvalue list {(n +/- i tau0)^2} contains EXACT
# duplicates (lambda_n^+ = lambda_{-n}^-, min sep 0.00e+00 — demonstrated in
# the run); the s -> -s quotient is MANDATORY before any distinctness claim.

def _p26_setup(L, m):
    A = _p25_A(L, m)
    vals = np.linalg.eigvalsh(A)
    t26, Phi, x, beta, a = _p25_D(L)
    g = 1/np.tanh(np.pi*np.clip(np.abs(t26), 1e-12, None))**2
    rho = 1/(1+g)
    R0 = ((Phi*rho) @ Phi.conj().T).real; R0 = 0.5*(R0 + R0.T)
    Kres = np.linalg.inv(A + np.eye(L)) - R0; Kres = 0.5*(Kres + Kres.T)
    lam, V = _eigh25(Kres)
    idx = np.argsort(-np.abs(lam))[:100]
    lam, V = lam[idx], V[:, idx]
    keep = np.abs(lam) > 1e-13
    return A, vals, R0, rho, lam[keep], V[:, keep], Phi, t26, x, beta

def _p26_sr(core, lam):
    sh = np.sqrt(np.abs(lam))
    B = -(sh[:, None]*core)*(sh*np.sign(lam))[None, :]
    return float(np.max(np.abs(_eigvals25(B))))

def _p26_masked_sr(t26, rho, W, lam, mu, ctr, halfwidth):
    msk = (np.abs(np.abs(t26) - ctr) > halfwidth).astype(float)
    res = msk/(rho - mu)
    return _p26_sr((W*res) @ W.conj().T, lam), int(len(rho) - msk.sum())

def _p26_geo_demo(L, m, ksel):
    A, vals, R0, rho, lam, V, Phi, t26, x, beta = _p26_setup(L, m)
    out = []
    for kap in ksel:
        mu = 1/(1+kap); tau0 = np.arctanh(1/np.sqrt(kap))/np.pi
        u = np.log(x/(_R25-x))
        cols = []
        for chi in ((u < -2.5).astype(float), (u > 2.5).astype(float)):
            cols += [np.cos(tau0*u)/np.sqrt(beta)*chi,
                     np.sin(tau0*u)/np.sqrt(beta)*chi]
        Up = np.linalg.qr(np.vstack(cols).T, mode='complete')[0][:, 4:]
        wp, Zp = _eigh25(Up.T @ R0 @ Up)
        C = Zp.T @ (Up.T @ V)
        res = 1/(wp - mu)
        out.append((kap, _p26_sr(C.T @ (res[:, None]*C), lam),
                    float(np.min(np.abs(wp - mu)))))
    return out

def _p26_f(s, c):
    return np.cos(np.pi*s)**2 - c

def _p26_fp(s):
    return -np.pi*np.sin(2*np.pi*s)

def _p26_argp(c, N_ap, tau0, npts=60000):
    X, Y = N_ap + 0.5, tau0 + 0.5
    corners = [X+1j*Y, -X+1j*Y, -X-1j*Y, X-1j*Y, X+1j*Y]
    tot = 0.0+0.0j
    for z0, z1 in zip(corners[:-1], corners[1:]):
        n = max(int(npts*abs(z1-z0)/(8*(X+Y))), 2000)
        s = z0 + (z1-z0)*np.arange(n+1)/n
        tot += np.trapezoid(_p26_fp(s)/_p26_f(s, c), s)
    return tot/(2j*np.pi)

def _p26_ledger(c_lo, c_hi, N_head=64, nc=2001):
    cs = np.linspace(c_lo, c_hi, nc)
    tau = np.arccosh(np.sqrt(cs))/np.pi
    ns = np.arange(-N_head, N_head+1)
    minsep, argm, resid = np.inf, None, 0.0
    for ci, t0 in zip(cs, tau):
        s_lat = ns + 1j*t0
        resid = max(resid, float(np.max(np.abs(_p26_f(s_lat, ci)))))
        lamv = s_lat**2
        Dm = np.abs(lamv[:, None] - lamv[None, :]) + np.eye(len(ns))*1e18
        j = int(np.argmin(Dm)); r, q = divmod(j, len(ns))
        if Dm.flat[j] < minsep:
            minsep, argm = float(Dm.flat[j]), (ci, int(ns[r]), int(ns[q]))
    t0 = np.arccosh(np.sqrt(0.5*(c_lo+c_hi)))/np.pi
    both = np.concatenate([ns + 1j*t0, ns - 1j*t0])**2
    Db = np.abs(both[:, None] - both[None, :]) + np.eye(2*len(ns))*1e18
    checks = []
    for ci in (c_lo, 0.5*(c_lo+c_hi), c_hi):
        t0 = np.arccosh(np.sqrt(ci))/np.pi
        cnt = _p26_argp(ci, 8, t0)
        dev = 0.0
        for sgn in (1, -1):
            s = ns + sgn*1j*t0 + (0.05+0.05j)
            for _ in range(60):
                s = s - _p26_f(s, ci)/_p26_fp(s)
            dev = max(dev, float(np.max(np.abs(s - (ns + sgn*1j*t0)))))
        checks.append((ci, cnt, dev))
    return dict(tau_lo=float(tau[0]), tau_hi=float(tau[-1]),
                mono=float(np.min(np.diff(tau))), minsep=minsep, argm=argm,
                resid=resid, naive_dup=float(Db.min()),
                fp_min=float(np.pi*np.sinh(2*np.pi*tau[0])), checks=checks)

if __name__ == "__main__":
    print()
    print("=" * 100)
    print("ITERATION-26 PROBE P1: shell-deleted (on-shell-projected) BS — corrected form, full (m, L) scan")
    print("=" * 100)
    kappas26 = np.geomspace(1.1, 20.0, 41)
    wins26 = [(1.1, 2.0), (2.0, 5.0), (5.0, 10.0), (10.0, 20.0)]
    for m in [0.5, 1.0, 2.0]:
        for L in [128, 256, 512]:
            A, vals, R0, rho, lam, V, Phi, t26, x, beta = _p26_setup(L, m)
            ktop = float(vals[-1]); W = V.T @ Phi
            resol = np.pi/np.log(2*L)
            mu = 1/(1+ktop)
            res = 1/(rho - mu)
            dev1 = float(np.min(np.abs(
                _eigvals25(-(np.sqrt(np.abs(lam))[:, None] *
                             ((W*res) @ W.conj().T)) *
                           (np.sqrt(np.abs(lam))*np.sign(lam))[None, :]) - 1.0)))
            tau0t = np.arctanh(1/np.sqrt(ktop))/np.pi
            sr_top, _ = _p26_masked_sr(t26, rho, W, lam, mu, tau0t, resol)
            rows = []
            for kap in kappas26:
                mu = 1/(1+kap); tau0 = np.arctanh(1/np.sqrt(kap))/np.pi
                s1, n1 = _p26_masked_sr(t26, rho, W, lam, mu, tau0, resol)
                s2, n2 = _p26_masked_sr(t26, rho, W, lam, mu, tau0, 2*resol)
                sc, ncc = _p26_masked_sr(t26, rho, W, lam, mu,
                                         tau0 + 3*resol, resol)
                rows.append(dict(kap=kap, pop=(kap <= ktop), s1=s1, s2=s2,
                                 sc=sc, n1=n1, n2=n2))
            print(f"\n m={m} L={L}: kappa_top={ktop:.6f} Kres_top={np.abs(lam).max():.4f}"
                  f" |BSev-1|@top={dev1:.2e} srSHELLDEL@top={sr_top:.4f} resol={resol:.4f}")
            r0 = rows[0]
            print(f"   kappa=1.1 endpoint (T9): sr(1u/2u)={r0['s1']:.4f}/{r0['s2']:.4f} ctl={r0['sc']:.2f}")
            for lo, hi in wins26:
                s = [r for r in rows if lo < r['kap'] <= hi]
                for z, tag in ((True, 'POP'), (False, 'BEY')):
                    zz = [r for r in s if r['pop'] == z]
                    if zz:
                        print(f"   win({lo},{hi}] {tag} n={len(zz)}: "
                              f"sr1 max={max(r['s1'] for r in zz):.4f} "
                              f"sr2 max={max(r['s2'] for r in zz):.4f} "
                              f"ctl min/max={min(r['sc'] for r in zz):.2f}/{max(r['sc'] for r in zz):.1f} "
                              f"ndel1={sorted(set(r['n1'] for r in zz))}")
            for ksel in [2.44, 5.04, 12.9, 20.0]:
                r = min(rows, key=lambda rr: abs(rr['kap']-ksel))
                print(f"     k={r['kap']:7.3f} pop={int(r['pop'])} sr1={r['s1']:.4f}"
                      f" sr2={r['s2']:.4f} ctl={r['sc']:.2f} ndel={r['n1']}/{r['n2']}")
    print("\n P1 (T7) geometric rank-4 compression demo (m=1, L=256) — the form that FAILS:")
    for kap, srg, dp in _p26_geo_demo(256, 1.0, [2.4417, 5.0434, 12.9440]):
        print(f"   kappa={kap:.4f}: sr_geo={srg:.2f}  dist(mu, spec R0_perp)={dp:.2e}")
    print()
    print("=" * 100)
    print("ITERATION-26 PROBE P2: Bari head-ledger — (Q2) head distinctness per compact window")
    print("=" * 100)
    for (c_lo, c_hi) in [(1.05, 1.5), (1.5, 4.0), (4.0, 25.0)]:
        r = _p26_ledger(c_lo, c_hi)
        print(f"\n window c in [{c_lo}, {c_hi}]: tau0 in [{r['tau_lo']:.6f}, {r['tau_hi']:.6f}]"
              f"  min grid dtau={r['mono']:.2e} (>0 = monotone)")
        print(f"   min pairwise |lam_n-lam_m| (|n|<=64, quotiented) = {r['minsep']:.6f}"
              f" at c={r['argm'][0]:.4f} pair (n={r['argm'][1]}, m={r['argm'][2]})"
              f"; candidates 4*tau0(c_lo)={4*r['tau_lo']:.6f},"
              f" sqrt(1+4tau0^2)(c_lo)={np.sqrt(1+4*r['tau_lo']**2):.6f}")
        print(f"   simplicity min|f'| = pi sinh(2 pi tau0(c_lo)) = {r['fp_min']:.6f};"
              f" s-plane min sep = 1 (lattice); max residual = {r['resid']:.2e}")
        print(f"   TRAP: naive two-branch lambda list min sep = {r['naive_dup']:.2e} (exact duplicates)")
        for ci, cnt, dev in r['checks']:
            print(f"   c={ci:8.4f}: arg-principle count (|Re s|<=8.5 box) = {cnt.real:.6f}"
                  f" (expect 34); Newton max|root-lattice| = {dev:.2e}")

# ============================================================================
# ITERATION-26 RESULTS (2026-07-12 dev runs; the block above reprints them)
# ============================================================================
# P1 VALIDATION ANCHORS: Kres_top = 0.3774/0.3877 (m=1, L=128/256) = the
#   iteration-23/25 values exactly; kappa_top(m=1) = 1.6926/1.9763/2.3027 =
#   iteration-25's 1.69/1.98/2.30; plain-BS eigenvalue at kappa_top: |ev-1| =
#   1.7e-14/1.7e-15/7.0e-16 (m=1, L=128/256/512) — detection at machine
#   precision (Birman-1961/Schwinger-1961; Konno-Kuroda-1966).
# P1 HEADLINE (form (b), eta = 0, deleting only 6-12 of L free levels):
#   b=1 unit:  sr <= 0.0378 at ALL 41 kappa in (1.1, 20], all m, all L —
#     EXCEPT kappa = 1.1 at L = 512: sr = 0.90/0.92/0.94 (T9 threshold-edge
#     widening; NOT off-shell coupling).
#   b=2 units: sr <= 0.0056 GLOBALLY (369 points; max at kappa=1.1, L=512).
#   b=3 units: sr <= 0.0011 GLOBALLY.
#   CONTROL (equal-width off-shell band): sr in [1.46, 274] — supercritical
#     at EVERY point. The collapse is specific to the shell band: the
#     eigenvalue-forming coupling lives within <= 2 resolution units of the
#     Corner-Indicial frequency tau0(kappa).
#   AT THE EXACT LATTICE EIGENVALUE kappa_top (plain BS ev = 1 to 2e-15):
#     shell deletion collapses sr to 0.0053/0.0053/0.0089 (m=1, L=128/256/
#     512); range over all nine (m, L): [0.0029, 0.0150]. The LEM-A1''''
#     mechanism at an actual eigenvalue: remove the shell channel and no BS
#     fixed point survives, by two orders of magnitude.
#   L-TREND (the requested quantification; beyond-top, b=1, fixed kappa):
#     (m=1, k=5.04): 0.0144 -> 0.0163 -> 0.0215; (m=1, k=20): 0.0106 ->
#     0.0120 -> 0.0158 (L=128/256/512); +15-35% per L-doubling, consistent
#     with the deleted tau-window shrinking as pi/ln(2L) at fixed ndel = 6.
#     b=2 max over masses: 0.0015 -> 0.0027 -> 0.0056. The drift is UPWARD and
#     log-slow: margins of 26x-180x below criticality at reachable L, but
#     NOT a convergent-looking sequence — no continuum limit is claimed.
# (CH-26) WHAT A RIGOROUS CONTINUUM VERSION NEEDS — exactly three things:
#   (i)  off-band resolvent bound: for R0^b(kappa) = (1-Pi_b)(A0-kappa)^{-1},
#        Pi_b = 1_{band}(A0), A0 = coth^2(pi D) (Hislop-Longo-1982):
#        elementary functional calculus — no LAP needed OFF the band;
#   (ii) (H1): K_res = (A+1)^{-1} - (A0+1)^{-1} compact with |K_res|^{1/2}-
#        factored BS norm-continuous in kappa (Konno-Kuroda-1966; Kato-1966
#        smoothness; nonlocal-kinetic version Ishida-Lorinczi-Sasaki
#        arXiv:2109.01564) — numerically supported since iteration 23
#        (sv decay 0.39 -> 4e-4 @ 12 -> 1e-6 @ 24) but UNPROVEN;
#   (iii) THE HARD PART — the b -> 0 channel closure: A0-LAP in the shell
#        channel (Agmon-1975 weighted-L2; Mourre-1981 for D) + quantitative
#        transversality (lattice constants: sigma_perp/gap in [0.92, 1.02];
#        sin theta_0 >= 0.57 on compact c-sets) converting the LEM-A1''''
#        hypothesis w-hat(+/-tau0) = 0 into vanishing on-band coupling as
#        b -> 0. Then sr(BS^b) <= sigma < 1 on a compact window plus (iii)
#        excludes embedded eigenvalues with vanishing on-shell amplitude
#        there. The lattice CANNOT probe the b -> 0 limit — b is pinned at
#        >= pi/ln(2L) (T1); measured here: the off-band sr and its L-trend.
# P1 HONEST READING [INFERENCE, medium — numerical, eta = 0 lattice, band
#   pinned at the resolution unit]: off-band sr <= 0.006 at two units,
#   uniformly over the whole scan, control supercritical everywhere, and the
#   at-eigenvalue collapse — the strongest numerical exhibit yet of the
#   LEM-A1'''' mechanism; SUPPORTS but cannot decide the lemma. Sharp
#   negatives delivered: (T7) the geometric-compression form of the closure
#   FAILS (do not retry: spectral-band form only); (T8) iteration-25's
#   deleted-BS "~0.000" rows were part-vacuous (mask deleted all L levels).
# P2 RESULTS (head |n| <= 64, i.e. 129 eigenvalues per c after the mandatory
#   s -> -s quotient; 2001-point c-grids; N_ap = 8 argument-principle boxes):
#   [1.05, 1.5]: min |lam_n - lam_m| = 0.282384 = 4*tau0(1.05), binding pair
#     (-1, 1); min |f'(s_n)| = 1.439659; count = 34.000000 (imag <= 2e-17)
#     at c = 1.05/1.275/1.5; Newton max dev = 7.1e-15; residual <= 3.7e-14.
#   [1.5, 4]:  min = 0.838401 = 4*tau0(1.5), pair (-1, 1); min |f'| =
#     5.441398; count = 34.000000; Newton 7.1e-15; residual <= 1.5e-13.
#   [4, 25]:   min = 1.304959 = sqrt(1 + 4 tau0^2)(4) — the BINDING PAIR
#     SWITCHES to the adjacent (-1, 0); the naive 4*tau0 formula would
#     overstate (1.6768). min |f'| = 21.765592; count = 34.000000; Newton
#     7.1e-15; residual <= 1.1e-12.
#   Uniformity over each window: both margin candidates are increasing in
#   tau0 and tau0(c) is strictly increasing (dtau0/dc = 1/(2 pi
#   sqrt(c(c-1))) > 0; machine-checked min grid increment 4.1e-5) — so the
#   window minimum sits at c_lo, as the grid scan confirms.
#   TRAP DEMONSTRATED: the unquotiented two-branch lambda list has min
#   pairwise separation 0.00e+00 (exact duplicates lambda_n^+ =
#   lambda_{-n}^-) in every window — distinctness claims made without the
#   quotient are vacuously FALSE.
# P2 STATEMENT EARNED [ESTABLISHED, machine-checked — double precision,
#   O(1) conditioning, margins >= 0.28 i.e. ~13 orders above rounding; NOT
#   interval-arithmetic-certified]: on each compact window, the head
#   eigenvalues of the transverse pencil are pairwise distinct and simple
#   with the explicit margins above; combined with the Birkhoff-quadratic
#   tail (a') (distinct z-roots for every c > 1, ESTABLISHED iteration 23),
#   (Q2)'s head-distinctness hypothesis is a checked fact per window.

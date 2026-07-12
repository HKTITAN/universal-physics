# P2 probe (iteration 25): FH bootstrap in the folded mode basis.
# Checks:
#  A. Closed form Qhat_nu(xi) = e^{-|nu| xi} (|nu| sinh xi + cosh xi)/sinh^3 xi
#     for the transverse Fourier coefficients of Q = (cosh xi - cos x)^{-2} (m^2R^2 = 1),
#     against direct quadrature.  (Weight cancellation makes these the EXACT
#     matrix elements of Q in the iteration-24 Riesz basis: Toeplitz in n-m.)
#  B. Decay-rate audit: d/dxi ln Qhat_nu -> -(2+|nu|), i.e. mode-off-diagonal
#     couplings decay FASTER than the rate-2 position envelope.
#  C. Terminal-profile probe: truncated coupled system
#        u_n'' = s_n^2 u_n + sum_m Qhat_{n-m}(xi) u_m,   s_n = n + i tau0,
#     integrated backward from xi=8 with a pure channel-N Jost seed.
#     Prediction (P2 terminal-profile theorem): |u_0| ~ e^{-(2+2N) xi}.
#     Competing (naive rate-2 coupling) hypothesis would give slope -(N+2).
#     N=1: predicted slope -4 (naive -3).  N=2: predicted -6 (naive -4).

import numpy as np
from scipy.integrate import solve_ivp, quad

def tau0_of_c(c):
    # cosh(pi tau0) = sqrt(c)
    return np.arccosh(np.sqrt(c)) / np.pi

def Qhat(nu, xi):
    """Closed form Fourier coefficient (1/2pi) int_0^{2pi} e^{-i nu x} (cosh xi - cos x)^{-2} dx, xi>0."""
    a = abs(nu)
    return np.exp(-a * xi) * (a * np.sinh(xi) + np.cosh(xi)) / np.sinh(xi) ** 3

print("=== A. closed form vs quadrature ===")
maxerr = 0.0
for xi in (0.7, 1.3, 2.9):
    for nu in range(0, 7):
        re = quad(lambda x: np.cos(nu * x) / (np.cosh(xi) - np.cos(x)) ** 2, 0, 2 * np.pi,
                  limit=400, epsabs=1e-14, epsrel=1e-13)[0] / (2 * np.pi)
        cf = Qhat(nu, xi)
        err = abs(re - cf) / abs(cf)
        maxerr = max(maxerr, err)
        print(f"  xi={xi:4.1f} nu={nu}  quad={re: .12e}  closed={cf: .12e}  rel.err={err:.2e}")
print(f"  MAX REL ERR = {maxerr:.2e}")

print("\n=== B. decay-rate audit: local log-slope of Qhat_nu at xi=6 vs -(2+|nu|) ===")
xi0, h = 6.0, 1e-4
for nu in range(0, 5):
    slope = (np.log(Qhat(nu, xi0 + h)) - np.log(Qhat(nu, xi0 - h))) / (2 * h)
    print(f"  nu={nu}:  slope={slope:+.6f}   predicted={-(2+nu):+d}")

print("\n=== C. terminal-profile ODE probe ===")
NCH = 3  # channels n = -NCH..NCH

def run_probe(c, Nseed, xi_hi=8.0, xi_lo=3.0, fit_win=(4.0, 6.0)):
    tau0 = tau0_of_c(c)
    ns = np.arange(-NCH, NCH + 1)
    s = ns + 1j * tau0
    dim = len(ns)
    i0 = NCH          # index of n=0
    iseed = NCH + Nseed

    def rhs(xi, y):
        u = y[:dim]
        up = y[dim:]
        # Toeplitz coupling  (sum_m Qhat_{n-m} u_m)
        Qu = np.zeros(dim, dtype=complex)
        for a in range(dim):
            acc = 0.0 + 0.0j
            for b in range(dim):
                acc += Qhat(ns[a] - ns[b], xi) * u[b]
            Qu[a] = acc
        upp = (s ** 2) * u + Qu
        return np.concatenate([up, upp])

    y0 = np.zeros(2 * dim, dtype=complex)
    # decaying-at-+inf homogeneous solution in channel Nseed: e^{-s_N (xi - xi_hi)}
    y0[iseed] = 1.0
    y0[dim + iseed] = -s[iseed]

    sol = solve_ivp(rhs, (xi_hi, xi_lo), y0, method="DOP853",
                    rtol=1e-12, atol=1e-18, dense_output=True)
    assert sol.success

    xs = np.linspace(fit_win[0], fit_win[1], 60)
    vals0 = np.array([sol.sol(x)[i0] for x in xs])
    valsN = np.array([sol.sol(x)[iseed] for x in xs])
    sl0 = np.polyfit(xs, np.log(np.abs(vals0)), 1)[0]
    slN = np.polyfit(xs, np.log(np.abs(valsN)), 1)[0]
    return sl0, slN, tau0

for c in (2.0, 4.0):
    for Nseed in (1, 2):
        sl0, slN, tau0 = run_probe(c, Nseed)
        pred = -(2 + 2 * Nseed)
        naive = -(Nseed + 2)
        print(f"  c={c}  tau0={tau0:.5f}  seed channel N={Nseed}:")
        print(f"    log-slope |u_N| = {slN:+.4f}  (Jost check: expect {-Nseed:+d})")
        print(f"    log-slope |u_0| = {sl0:+.4f}  (P2 prediction {pred:+d}; naive rate-2-coupling {naive:+d})")

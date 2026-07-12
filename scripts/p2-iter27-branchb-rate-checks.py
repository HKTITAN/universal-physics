# P2 iteration-27 machine checks for the branch-(b) terminal-rate promotion.
#
# CHECK 1 (rate-recursion fixed point): the monotone ladder recursion
#     r^{k+1}_n = min(cap_n, 2 + min_m(|n-m| + r^k_m)),
# with caps |n| exactly on the amplitude-carrying channels, converges to
#     rho_n = |n| (|n|>=N), 2+2N-|n| (0<|n|<N), 2+2N (n=0)
# when caps sit at all |n|>=N (worst case), for N = 1,2,3,5.
#
# CHECK 2 (slack row-sum n-uniformity of the rung map): with the EXACT kernels
# Qhat_nu(xi), the Phase-I rung row sum in the geometric-slack norm
#     T_n = sup-proxy at xi=X1 of e^{(2+min(|n|,lam))xi - rho*|n|} *
#           sum_m Qhat_{n-m}(xi) e^{rho*|m|} e^{-min(|m|,lam) xi}
# is bounded in n for rho* = 1/4 and grows ~ Theta(n) for rho* = 0
# (the iteration-26 middle-band Toeplitz trap, reproduced and then killed).
#
# CHECK 3 (inhomogeneous-ladder ODE probe): truncated system, channels -6..6,
# single Jost seed in channel +2 (N=2, one-sided). Per-channel log-slopes on
# adaptive windows must match the inf-convolution (driven-rate) fixed point
# computed by the SAME recursion with cap only at the seeded channel.
# This tests the driven-rate mechanism (i) directly, incl. sub-N channels.

import numpy as np
from scipy.integrate import solve_ivp

# ---------------- CHECK 1 ----------------
def ladder_fixed_point(caps, nmax, passes=500):
    ns = np.arange(-nmax, nmax + 1)
    r = np.zeros(len(ns))
    for k in range(passes):
        beta = np.min(np.abs(ns[:, None] - ns[None, :]) + r[None, :], axis=1)
        r_new = np.minimum(caps, 2.0 + beta)
        if np.array_equal(r_new, r):
            return ns, r, k
        r = r_new
    return ns, r, passes

print("=== CHECK 1: ladder fixed point vs claimed terminal rates ===")
nmax = 40
ok_all = True
for N in (1, 2, 3, 5):
    ns = np.arange(-nmax, nmax + 1)
    caps = np.where((np.abs(ns) >= N) & (ns != 0), np.abs(ns), np.inf)
    _, r, k = ladder_fixed_point(caps, nmax)
    claimed = np.where(np.abs(ns) >= N, np.abs(ns),
                       np.where(ns != 0, 2 + 2 * N - np.abs(ns), 2 + 2 * N))
    # boundary channels near nmax can be influenced by truncation; check interior
    interior = np.abs(ns) <= nmax - 2
    ok = np.array_equal(r[interior], claimed[interior].astype(float))
    ok_all &= ok
    print(f"  N={N}: converged in {k} passes; interior fixed point == claimed: {ok}")
print(f"  CHECK 1 {'PASS' if ok_all else 'FAIL'}")

# ---------------- CHECK 2 ----------------
def Qhat(nu, xi):
    a = abs(nu)
    return np.exp(-a * xi) * (a * np.sinh(xi) + np.cosh(xi)) / np.sinh(xi) ** 3

print("\n=== CHECK 2: rung row-sum, slacked vs un-slacked, X1=4 (log-space) ===")
from scipy.special import logsumexp

def logQhat(nu, xi):
    a = abs(nu)
    # log of e^{-a xi}(a sinh xi + cosh xi)/sinh^3 xi, exact for xi>0
    return -a * xi + np.log(a * np.sinh(xi) + np.cosh(xi)) - 3 * np.log(np.sinh(xi))

X1 = 4.0
MBAND = 2000  # summation band in nu
for rho in (0.0, 0.25):
    vals = []
    for n in (1, 5, 20, 50, 100, 200, 300, 600):
        lam = n + 0.25  # grid point just above |n| -- the worst (middle-band) case
        m = np.arange(n - MBAND, n + MBAND + 1)
        nu = n - m
        logterm = (np.array([logQhat(v, X1) for v in nu])
                   + rho * np.abs(m)
                   - np.minimum(np.abs(m), lam) * X1)
        logrow = logsumexp(logterm) + (2 + min(n, lam)) * X1 - rho * n
        vals.append(np.exp(logrow))
    with np.printoptions(precision=4, suppress=False):
        print(f"  rho*={rho}:  T_n at n=(1,5,20,50,100,200,300,600) = {np.array(vals)}")
    growth = vals[-1] / vals[-4]  # n=600 vs n=100
    print(f"    growth factor T_600/T_100 = {growth:.3f} "
          f"({'~bounded (n-uniform)' if growth < 1.5 else 'GROWING (trap)'})")

# ---------------- CHECK 3 ----------------
print("\n=== CHECK 3: ODE probe, N=2 one-sided seed (channel +2), c=4 ===")
c = 4.0
tau0 = np.arccosh(np.sqrt(c)) / np.pi
NCH = 6
ns = np.arange(-NCH, NCH + 1)
s = ns + 1j * tau0
dim = len(ns)
iseed = NCH + 2  # channel +2

# predicted rates: recursion with cap ONLY at the seeded channel (+2 -> rate 2)
caps = np.full(dim, np.inf)
caps[iseed] = 2.0
_, rpred, _ = ladder_fixed_point(caps, NCH)

def rhs(xi, y):
    u = y[:dim] + 1j * y[dim:2 * dim]
    Qu = np.zeros(dim, dtype=complex)
    for a_ in range(dim):
        acc = 0j
        for b_ in range(dim):
            acc += Qhat(ns[a_] - ns[b_], xi) * u[b_]
        Qu[a_] = acc
    upp = (s ** 2) * u + Qu
    up = y[2 * dim:3 * dim] + 1j * y[3 * dim:]
    return np.concatenate([up.real, up.imag, upp.real, upp.imag])

xi_hi, xi_lo = 9.0, 2.5
y0 = np.zeros(4 * dim)
y0[iseed] = 1.0                    # u_seed = 1
y0[2 * dim + iseed] = -s[iseed].real   # u_seed' = -s_N
y0[3 * dim + iseed] = -s[iseed].imag
sol = solve_ivp(rhs, (xi_hi, xi_lo), y0, method="DOP853",
                rtol=1e-13, atol=1e-300, dense_output=True)
assert sol.success

print(f"  tau0={tau0:.5f}; predicted driven-rate fixed point (cap only at +2):")
ok3 = True
for i, n in enumerate(ns):
    pred = rpred[i]
    # adaptive window: fit where the channel is comfortably above fp noise
    wlo, whi = (4.0, 6.5) if pred <= 6 else (3.0, 5.0)
    xs = np.linspace(wlo, whi, 80)
    vals = np.array([abs(sol.sol(x)[i] + 1j * sol.sol(x)[dim + i]) for x in xs])
    if np.any(vals <= 0) or np.min(vals) < 1e-250:
        print(f"    n={n:+d}: underflow, skipped")
        continue
    slope = np.polyfit(xs, np.log(vals), 1)[0]
    match = abs(slope + pred) < 0.2 if np.isfinite(pred) else False
    ok3 &= match or pred > 8.5  # only score rates <= 8.5 (window resolvable)
    tag = "OK " if match else ("  ~" if pred > 8.5 else "MISMATCH")
    print(f"    n={n:+d}: fitted slope {slope:+.3f}   predicted {-pred:+.2f}   {tag}")
print(f"  CHECK 3 {'PASS (rates <= 8.5)' if ok3 else 'FAIL'}")

# 3b: canonical N=1 ONE-SIDED seed (channel +1), all channels vs recursion.
# NOTE (probe trap, recorded): a TWO-sided seed superposes e^{-xi mp i tau0 xi}
# terms whose interference puts a node of |u_1 + u_{-1}| near the fit window
# (at xi ~ xi_hi - (pi/2)/tau0), corrupting naive log-slope fits.  By linearity
# a two-sided seed is a superposition of one-sided runs, so one-sided checks
# carry the full content of the rate claim; interference cannot lower a rate
# LOWER bound.
print("\n=== CHECK 3b: N=1 one-sided seed (channel +1), c=2, all channels ===")
c = 2.0
tau0 = np.arccosh(np.sqrt(c)) / np.pi
s = ns + 1j * tau0
iseed1 = NCH + 1
caps1 = np.full(dim, np.inf)
caps1[iseed1] = 1.0
_, rpred1, _ = ladder_fixed_point(caps1, NCH)
y0 = np.zeros(4 * dim)
y0[iseed1] = 1.0
y0[2 * dim + iseed1] = -1.0
y0[3 * dim + iseed1] = -tau0
sol = solve_ivp(rhs, (xi_hi, xi_lo), y0, method="DOP853",
                rtol=1e-13, atol=1e-300, dense_output=True)
ok3b = True
for i, n in enumerate(ns):
    pred = rpred1[i]
    wlo, whi = (4.0, 6.5) if pred <= 6 else (3.0, 5.0)
    xs = np.linspace(wlo, whi, 80)
    vals = np.array([abs(sol.sol(x)[i] + 1j * sol.sol(x)[dim + i]) for x in xs])
    if np.any(vals <= 0) or np.min(vals) < 1e-250:
        print(f"    n={n:+d}: underflow, skipped")
        continue
    slope = np.polyfit(xs, np.log(vals), 1)[0]
    match = abs(slope + pred) < 0.2
    ok3b &= match or pred > 8.5
    tag = "OK " if match else ("  ~" if pred > 8.5 else "MISMATCH")
    print(f"    n={n:+d}: fitted slope {slope:+.3f}   predicted {-pred:+.2f}   {tag}")
print(f"  CHECK 3b {'PASS (rates <= 8.5)' if ok3b else 'FAIL'}  "
      f"(u_0 predicted -4 = -(2+2N), N=1)")

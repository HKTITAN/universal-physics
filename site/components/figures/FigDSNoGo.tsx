import FigurePlate, { S } from "./FigurePlate";

/** FIG 1.1 — the de Sitter cardinality no-go: a finite count cannot Radon-invert
 *  to an infinite-dimensional local field. */
export default function FigDSNoGo() {
  // RIGHT: an overwhelmingly dense field of points that runs off the right edge.
  // Deterministic pseudo-jitter keeps it timeless and SSR-stable.
  const cols = 16;
  const rows = 11;
  const dense = Array.from({ length: cols * rows }, (_, i) => {
    const c = i % cols;
    const r = Math.floor(i / cols);
    const jx = (((i * 53) % 11) - 5) * 0.7;
    const jy = (((i * 31) % 9) - 4) * 0.7;
    return {
      cx: 470 + c * 17.5 + jx,
      cy: 118 + r * 18 + jy,
      op: 0.3 + 0.55 * (((i * 7) % 10) / 10),
    };
  });

  return (
    <FigurePlate
      id="1.1"
      caption="The de Sitter cardinality no-go (HYP-dS-CARDINALITY, iter 4–5; standing at iteration 12). The one route to a Λ>0 Einstein-from-entanglement derivation — enlarging the static-patch boost to the full SO(d+1,1) isometry family — fails on a dimension count: a finite isometry orbit yields at most ten global Killing-charge constraints, which cannot Radon-invert to the infinite-dimensional local field δGμν(x). The reusable root obstruction: in every known route (AdS-FGHMVR · Jacobson · CLPW) the area-entropy coefficient η = 1/4G is an INPUT, not an output — Program A encodes geometry but does not generate it. [INFERENCE, high]"
    >
      <svg
        viewBox="0 0 760 430"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        style={{ fontFamily: S.mono }}
      >
        <title>
          The de Sitter cardinality no-go. On the left, a small countable set of
          exactly ten tick-boxes labelled Q[ξ] — the at-most-ten global
          Killing-charge constraints from the finite SO(d+1,1) isometry orbit. On
          the right, an overwhelmingly denser field of points that runs off the
          right edge toward infinity — the local linearized Einstein field δGμν(x)
          at every spacetime point. Between them, a broken arrow with an ochre cross:
          no Radon inversion, finite cannot reach infinite-dimensional. A bottom band
          states the root obstruction: η = 1/4G is an input, not an output, in every
          known route.
        </title>

        {/* ── column headings (the argument: 10  vs  ∞) ─────────────────── */}
        <text x="40" y="40" fontSize="13" fill={S.blue} letterSpacing="0.5">
          FINITE ISOMETRY ORBIT
        </text>
        <text x="40" y="58" fontSize="11" fill={S.faint}>
          SO(d+1,1) static patch · d=3: dim 10
        </text>

        <text x="468" y="40" fontSize="13" fill={S.blue} letterSpacing="0.5">
          LOCAL EINSTEIN FIELD
        </text>
        <text x="468" y="58" fontSize="11" fill={S.faint}>
          δGμν(x) at every point · ∞-dimensional
        </text>

        {/* ── LEFT: exactly 10 countable tick-boxes ─────────────────────── */}
        {Array.from({ length: 10 }, (_, i) => {
          const x = 40 + (i % 2) * 90;
          const y = 90 + Math.floor(i / 2) * 40;
          return (
            <g key={i}>
              <rect
                x={x}
                y={y}
                width="78"
                height="28"
                fill={S.wash}
                stroke={S.blue}
                strokeWidth="1.25"
              />
              <text
                x={x + 39}
                y={y + 19}
                fontSize="12"
                fill={S.blueDeep}
                textAnchor="middle"
              >
                {`Q[ξ${i + 1}]`}
              </text>
            </g>
          );
        })}
        <text x="40" y="320" fontSize="12" fill={S.ink}>
          ≤ 10 global Killing-charge
        </text>
        <text x="40" y="337" fontSize="12" fill={S.ink}>
          constraints — a finite count
        </text>

        {/* ── BETWEEN: broken arrow with ochre cross (the obstruction) ──── */}
        <line x1="232" y1="205" x2="300" y2="205" stroke={S.faint} strokeWidth="1.5" />
        <line
          x1="360"
          y1="205"
          x2="448"
          y2="205"
          stroke={S.faint}
          strokeWidth="1.5"
          strokeDasharray="4 5"
        />
        <path d="M448 205 l-11 -6 v12 z" fill={S.faint} />
        {/* the cross — finite ↛ infinite */}
        <line x1="318" y1="190" x2="342" y2="220" stroke={S.ochre} strokeWidth="3" />
        <line x1="342" y1="190" x2="318" y2="220" stroke={S.ochre} strokeWidth="3" />
        <text x="330" y="176" fontSize="12" fill={S.ochre} textAnchor="middle">
          NO RADON
        </text>
        <text x="330" y="246" fontSize="11" fill={S.ochre} textAnchor="middle">
          INVERSION
        </text>
        <text x="330" y="262" fontSize="11" fill={S.faint} textAnchor="middle">
          finite ↛ ∞-dim
        </text>

        {/* ── RIGHT: overwhelmingly dense field, running off the edge ───── */}
        {dense.map((p, i) => (
          <circle key={i} cx={p.cx} cy={p.cy} r="1.9" fill={S.ink} opacity={p.op} />
        ))}
        {/* fade-to-edge so the field visibly continues past the frame */}
        <rect x="712" y="100" width="48" height="230" fill="url(#dsfade)" />
        <defs>
          <linearGradient id="dsfade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="var(--paper-raised)" stopOpacity="0" />
            <stop offset="1" stopColor="var(--paper-raised)" stopOpacity="0.92" />
          </linearGradient>
        </defs>
        <text x="724" y="222" fontSize="15" fill={S.faint} textAnchor="middle">
          ⋯
        </text>
        <text x="724" y="244" fontSize="15" fill={S.faint} textAnchor="middle">
          ∞
        </text>
        <text x="468" y="337" fontSize="12" fill={S.ink}>
          δGμν, tensorial, point by point — uncountable
        </text>

        {/* ── BOTTOM band: the takeaway ─────────────────────────────────── */}
        <line x1="40" y1="372" x2="720" y2="372" stroke={S.hair} strokeWidth="1" />
        <text x="380" y="396" fontSize="12" fill={S.faint} textAnchor="middle">
          ROOT OBSTRUCTION · every known route — AdS-FGHMVR · Jacobson · CLPW
        </text>
        <text
          x="380"
          y="420"
          fontSize="15"
          fill={S.blueDeep}
          textAnchor="middle"
          letterSpacing="0.5"
        >
          η = 1/4G IS AN INPUT, NOT AN OUTPUT
        </text>
      </svg>
    </FigurePlate>
  );
}

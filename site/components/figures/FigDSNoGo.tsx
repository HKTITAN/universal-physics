import FigurePlate, { S } from "./FigurePlate";

/** FIG 1.1 — the de Sitter cardinality no-go. */
export default function FigDSNoGo() {
  return (
    <FigurePlate
      id="1.1"
      caption="The de Sitter cardinality no-go (HYP-dS-CARDINALITY, iter 4–5). The one route to a Λ>0 Einstein-from-entanglement derivation — enlarging the static-patch boost to the full SO(d+1,1) isometry family — fails on a dimension count: a finite-dimensional isometry orbit yields ≤10 global Killing-charge constraints, which cannot Radon-invert to the infinite-dimensional local field δG_μν(x). The reusable principle: in every known route (AdS-FGHMVR, Jacobson, CLPW) the area-entropy coefficient η = 1/4G is an INPUT, not an output."
    >
      <svg
        viewBox="0 0 760 400"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        style={{ fontFamily: S.mono }}
      >
        <title>
          Diagram of the de Sitter cardinality no-go. On the left, the finite
          isometry orbit: the SO(d+1,1) group of de Sitter space gives at most ten
          global Killing-charge constraints, drawn as ten small tick boxes. On the
          right, the target: the infinite-dimensional family of local linearized
          Einstein equations, delta G mu nu at every spacetime point, drawn as a
          dense field of points continuing beyond the frame. The arrow between them
          is broken and labelled: no Radon inversion — dimension count fails. A
          bottom annotation records that the area-entropy coefficient eta equals one
          over 4G enters as an input in every known route.
        </title>

        {/* left: finite orbit */}
        <rect x="30" y="40" width="290" height="240" fill="none" stroke={S.ink} strokeWidth="1.1" />
        <text x="46" y="66" fontSize="10" fill={S.blue} letterSpacing="1">FINITE ISOMETRY ORBIT</text>
        <text x="46" y="84" fontSize="8.5" fill={S.faint}>SO(d+1,1) static-patch family (d=3: dim 10)</text>
        {Array.from({ length: 10 }, (_, i) => {
          const x = 56 + (i % 5) * 50;
          const y = 110 + Math.floor(i / 5) * 52;
          return (
            <g key={i}>
              <rect x={x} y={y} width="38" height="30" fill={S.wash} stroke={S.blue} strokeWidth="0.9" />
              <text x={x + 19} y={y + 19} fontSize="7.6" fill={S.blueDeep} textAnchor="middle">{`Q[ξ${i + 1}]`}</text>
            </g>
          );
        })}
        <text x="46" y="240" fontSize="8.5" fill={S.ink}>≤ 10 global Killing-charge</text>
        <text x="46" y="254" fontSize="8.5" fill={S.ink}>constraints (integrated)</text>

        {/* broken arrow */}
        <line x1="320" y1="160" x2="372" y2="160" stroke={S.blue} strokeWidth="1.1" />
        <line x1="396" y1="160" x2="430" y2="160" stroke={S.blue} strokeWidth="1.1" strokeDasharray="3 4" />
        <line x1="378" y1="146" x2="390" y2="174" stroke={S.ochre} strokeWidth="2" />
        <line x1="386" y1="146" x2="398" y2="174" stroke={S.ochre} strokeWidth="2" />
        <text x="378" y="128" fontSize="8.5" fill={S.ochre} textAnchor="middle">NO RADON INVERSION</text>
        <text x="378" y="196" fontSize="7.6" fill={S.faint} textAnchor="middle">dimension count fails</text>
        <text x="378" y="208" fontSize="7.6" fill={S.faint} textAnchor="middle">(finite → ∞-dim)</text>

        {/* right: infinite local family */}
        <rect x="440" y="40" width="290" height="240" fill="none" stroke={S.ink} strokeWidth="1.1" />
        <text x="456" y="66" fontSize="10" fill={S.blue} letterSpacing="1">LOCAL EINSTEIN FIELD</text>
        <text x="456" y="84" fontSize="8.5" fill={S.faint}>δG_μν(x) at every point — ∞-dimensional</text>
        {Array.from({ length: 60 }, (_, i) => {
          const x = 462 + (i % 12) * 22.5;
          const y = 104 + Math.floor(i / 12) * 26;
          return <circle key={i} cx={x} cy={y} r="1.7" fill={S.ink} opacity={0.35 + 0.5 * (((i * 7) % 10) / 10)} />;
        })}
        <text x="700" y="244" fontSize="11" fill={S.faint} textAnchor="end">⋯ ∞</text>
        <text x="456" y="254" fontSize="8.5" fill={S.ink}>target: tensorial δG_μν, point by point</text>

        {/* bottom annotation */}
        <line x1="30" y1="318" x2="730" y2="318" stroke={S.hair} strokeWidth="1" />
        <text x="380" y="345" fontSize="9.5" fill={S.ink} textAnchor="middle">
          ROOT OBSTRUCTION — in every known route (AdS-FGHMVR · Jacobson · CLPW):
        </text>
        <text x="380" y="366" fontSize="10.5" fill={S.blueDeep} textAnchor="middle" letterSpacing="1">
          η = 1/4G IS AN INPUT, NOT AN OUTPUT
        </text>
      </svg>
    </FigurePlate>
  );
}

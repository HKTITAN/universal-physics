import FigurePlate, { S } from "./FigurePlate";

/** ARTICLE FIG 2 (hero) — the gate compresses across iterations to a single operator bound. */
export default function FigCompressionFunnel() {
  // each row: [y, half-width at center x=380, label, sublabel, iter tag]
  const rows: Array<[number, number, string, string, string]> = [
    [70, 300, "(E_O): vacuum ergodicity on a massive double-cone algebra", "an abstract operator-algebra hypothesis", "iter 16"],
    [120, 250, "a one-particle spectral question", "the free field, via second quantization", "iter 17"],
    [170, 195, "σ_p(A) ∩ (1,∞) = ∅  for one explicit operator A", "the c-collapse — the numerics and the lemma become one object", "iter 21"],
    [220, 140, "H(iτ₀) g = 0 : an imaginary-flux zero mode", "the normal form P1-NF — the whole gate becomes one scalar problem", "iter 25"],
    [270, 95, "the on-band coupling vanishes as √b", "the vanishing on-shell amplitude is a simple pole-cancelling zero", "iter 27"],
    [320, 55, "(B) : one uniform off-band bound", "the whole gate — open", "iter 28"],
  ];
  const cx = 380;
  return (
    <FigurePlate
      id="A.2"
      caption="How the problem was compressed. The single obstacle standing between the leading route and a theorem on the free field began (2026) as an abstract hypothesis about von Neumann algebras. Twenty-seven adversarially-refereed iterations did not solve it — they narrowed it. Each step is an established, machine-verified reduction: the abstract ergodicity statement became a spectral question, then a property of one explicitly-constructed operator, then a zero-mode problem for a Schrödinger operator with an imaginary Aharonov–Bohm flux, and finally a single uniform operator-norm bound (B). The funnel is the discovery: the gate is now one precisely-posed inequality, and its route to proof — the locality of the potential — is exactly the property the known counterexamples lack."
    >
      <svg viewBox="0 0 760 380" xmlns="http://www.w3.org/2000/svg" role="img" style={{ fontFamily: S.mono }}>
        <title>
          A downward-narrowing funnel of six stacked bands. The top band is the widest and holds an
          abstract algebra hypothesis; each lower band is narrower and holds a more concrete, more
          reduced statement, ending in a single narrow band labelled the off-band bound B, still open.
          Iteration tags run down the right side.
        </title>

        {/* funnel outline connecting the band edges */}
        <path
          d={`M${cx - 300} 60 L${cx + 300} 60 L${cx + 55} 340 L${cx - 55} 340 Z`}
          fill={S.wash}
          stroke="none"
        />

        {rows.map(([y, hw, label, sub, tag], i) => {
          const last = i === rows.length - 1;
          return (
            <g key={i}>
              <rect
                x={cx - hw}
                y={y - 16}
                width={hw * 2}
                height={32}
                rx={2}
                fill={last ? S.ochreWash : S.paper}
                stroke={last ? S.ochre : S.blue}
                strokeWidth={last ? 1.5 : 1}
              />
              <text x={cx} y={y - 1} textAnchor="middle" fontSize={last ? "12.5" : "11.5"} fill={S.ink}>
                {label}
              </text>
              <text x={cx} y={y + 12} textAnchor="middle" fontSize="9.5" fill={last ? S.ochre : S.faint}>
                {sub}
              </text>
              <text x={cx + 330} y={y + 3} textAnchor="end" fontSize="10" fill={S.faint}>
                {tag}
              </text>
            </g>
          );
        })}

        {/* down arrows between bands */}
        {[95, 145, 195, 245, 295].map((y) => (
          <path key={y} d={`M${cx} ${y} l0 8 m-3 -4 l3 4 l3 -4`} stroke={S.inkMid} strokeWidth="1" fill="none" />
        ))}

        <text x={cx} y={366} textAnchor="middle" fontSize="10.5" fill={S.inkMid}>
          each arrow is an established, machine-verified reduction — the problem never grew, only sharpened
        </text>
      </svg>
    </FigurePlate>
  );
}

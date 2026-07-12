import FigurePlate, { S } from "./FigurePlate";

/** ARTICLE FIG 1 — the two pillars and the seam where they are both extrapolated. */
export default function FigTwoTowers() {
  return (
    <FigurePlate
      id="A.1"
      caption="The two pillars of modern physics. Quantum field theory and general relativity are each spectacularly confirmed inside their tested range, and mutually consistent everywhere we can check. They are extrapolated past that range only in the same few extreme regimes — the first instant of the universe, the interior of a black hole, the Planck scale. Of the seventeen catalogued inter-framework clashes, none is a demonstrated logical contradiction; they are domain-mismatches concentrated exactly where both theories are pushed beyond where either has been tested. A consistent unified framework is therefore very plausibly possible — the question is how to build one."
    >
      <svg viewBox="0 0 760 380" xmlns="http://www.w3.org/2000/svg" role="img" style={{ fontFamily: S.mono }}>
        <title>
          Two tall columns, quantum field theory on the left and general relativity on the right,
          each solid in its tested range and fading at the top where it is extrapolated. Between their
          tops a hatched seam marks the regime where both are pushed past their limits. A footer notes
          seventeen clashes, none a proven contradiction.
        </title>

        {/* left tower — QFT */}
        <rect x="70" y="150" width="180" height="180" fill={S.wash} stroke={S.blue} strokeWidth="1.5" />
        <rect x="70" y="90" width="180" height="60" fill="none" stroke={S.hair} strokeWidth="1" strokeDasharray="3 3" />
        <text x="160" y="200" textAnchor="middle" fontSize="13" fill={S.ink}>QUANTUM</text>
        <text x="160" y="219" textAnchor="middle" fontSize="13" fill={S.ink}>FIELD THEORY</text>
        <text x="160" y="255" textAnchor="middle" fontSize="11" fill={S.faint}>the Standard Model</text>
        <text x="160" y="272" textAnchor="middle" fontSize="11" fill={S.faint}>tested to 12 digits</text>
        <text x="160" y="122" textAnchor="middle" fontSize="10" fill={S.faint}>extrapolated</text>

        {/* right tower — GR */}
        <rect x="510" y="150" width="180" height="180" fill={S.wash} stroke={S.blue} strokeWidth="1.5" />
        <rect x="510" y="90" width="180" height="60" fill="none" stroke={S.hair} strokeWidth="1" strokeDasharray="3 3" />
        <text x="600" y="200" textAnchor="middle" fontSize="13" fill={S.ink}>GENERAL</text>
        <text x="600" y="219" textAnchor="middle" fontSize="13" fill={S.ink}>RELATIVITY</text>
        <text x="600" y="255" textAnchor="middle" fontSize="11" fill={S.faint}>gravity as geometry</text>
        <text x="600" y="272" textAnchor="middle" fontSize="11" fill={S.faint}>tested to binary pulsars</text>
        <text x="600" y="122" textAnchor="middle" fontSize="10" fill={S.faint}>extrapolated</text>

        {/* the seam between the tops */}
        <path d="M250 92 L510 92 L510 148 L250 148 Z" fill="none" stroke={S.ochre} strokeWidth="1" />
        <path
          d="M258 100 L502 100 M258 112 L502 112 M258 124 L502 124 M258 136 L502 136"
          stroke={S.ochreWash}
          strokeWidth="6"
        />
        <text x="380" y="70" textAnchor="middle" fontSize="11" fill={S.ochre} letterSpacing="1">
          WHERE BOTH ARE PUSHED PAST THEIR TESTED RANGE
        </text>
        <text x="380" y="122" textAnchor="middle" fontSize="10.5" fill={S.inkMid}>
          Big Bang · black-hole interior · the Planck scale
        </text>

        {/* footer */}
        <line x1="70" y1="352" x2="690" y2="352" stroke={S.hair} strokeWidth="1" />
        <text x="70" y="371" fontSize="11" fill={S.faint}>
          17 catalogued clashes
        </text>
        <text x="690" y="371" textAnchor="end" fontSize="11" fill={S.ochre}>
          none a proven inconsistency
        </text>
      </svg>
    </FigurePlate>
  );
}

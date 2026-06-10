import FigurePlate, { S } from "./FigurePlate";

/** FIG 0.1 — the two-program structure (Program A / Program B, thin bridges). */
export default function FigTwoPrograms() {
  return (
    <FigurePlate
      id="0.1"
      caption="The two-program structure. Not one unified program but two internally-coherent ones joined by thin bridges (no-signaling / causal order; the logical gate that gravity be non-classical). The tempting “it's all information” fusion is refused — “information” names non-interchangeable objects across the clusters. [INFERENCE, high]"
    >
      <svg
        viewBox="0 0 760 400"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        style={{ fontFamily: S.mono }}
      >
        <title>
          Diagram of two research programs. Program A, geometry from algebra, contains
          modular and crossed-product gravity, holography with Ryu–Takayanagi, and
          entropic gravity. Program B, is the quantum framework final, contains
          Born-rule and linearity reconstructions and tabletop quantum gravity (BMV).
          Two thin bridges connect them: shared no-signaling / causal order, and the
          logical gate that gravity is non-classical. A crossed-out central node marks
          the refused fusion: it is all information.
        </title>

        {/* Program A */}
        <rect x="20" y="40" width="300" height="250" fill="none" stroke={S.ink} strokeWidth="1.2" />
        <rect x="26" y="46" width="288" height="238" fill="none" stroke={S.hair} strokeWidth="1" />
        <text x="36" y="68" fontSize="13" fill={S.blue} letterSpacing="1">PROGRAM A</text>
        <text x="36" y="86" fontSize="10" fill={S.ink}>GEOMETRY FROM ALGEBRA</text>

        {[
          ["MODULAR / CROSSED-PRODUCT", "Type III₁ → II crossed product; OP-44", 110],
          ["HOLOGRAPHY / RT", "S(A) = Area/4G — presupposes background", 162],
          ["ENTROPIC GRAVITY", "Jacobson Clausius δQ = T δS", 214],
        ].map(([t, sub, y]) => (
          <g key={t as string}>
            <rect x="44" y={(y as number) - 18} width="252" height="40" fill={S.wash} stroke={S.blue} strokeWidth="0.8" />
            <text x="56" y={(y as number) - 2} fontSize="9.5" fill={S.ink}>{t}</text>
            <text x="56" y={(y as number) + 12} fontSize="8" fill={S.faint}>{sub}</text>
          </g>
        ))}
        <text x="36" y="272" fontSize="8.5" fill={S.faint}>STATUS: ENCODES GEOMETRY,</text>
        <text x="36" y="284" fontSize="8.5" fill={S.faint}>DOES NOT GENERATE IT</text>

        {/* Program B */}
        <rect x="440" y="40" width="300" height="250" fill="none" stroke={S.ink} strokeWidth="1.2" />
        <rect x="446" y="46" width="288" height="238" fill="none" stroke={S.hair} strokeWidth="1" />
        <text x="456" y="68" fontSize="13" fill={S.blue} letterSpacing="1">PROGRAM B</text>
        <text x="456" y="86" fontSize="10" fill={S.ink}>IS THE QUANTUM FRAMEWORK FINAL?</text>

        {[
          ["BORN RULE / LINEARITY", "form forced: Gleason + Busch/CFMR", 110],
          ["RECONSTRUCTIONS (GPT)", "no Type III₁ formulation — OP-48", 162],
          ["TABLETOP QG (BMV/QGEM)", "entanglement witness, m² scaling", 214],
        ].map(([t, sub, y]) => (
          <g key={t as string}>
            <rect x="464" y={(y as number) - 18} width="252" height="40" fill={S.wash} stroke={S.blue} strokeWidth="0.8" />
            <text x="476" y={(y as number) - 2} fontSize="9.5" fill={S.ink}>{t}</text>
            <text x="476" y={(y as number) + 12} fontSize="8" fill={S.faint}>{sub}</text>
          </g>
        ))}
        <text x="456" y="272" fontSize="8.5" fill={S.faint}>STATUS: STABLE FORMALISM,</text>
        <text x="456" y="284" fontSize="8.5" fill={S.faint}>EXACT LINEARITY UNDER TEST</text>

        {/* thin bridges */}
        <line x1="320" y1="120" x2="440" y2="120" stroke={S.blue} strokeWidth="1" strokeDasharray="5 4" />
        <text x="380" y="110" fontSize="8.5" fill={S.blueDeep} textAnchor="middle">BRIDGE 1</text>
        <text x="380" y="134" fontSize="8" fill={S.faint} textAnchor="middle">no-signaling / causal order</text>

        <line x1="320" y1="230" x2="440" y2="230" stroke={S.blue} strokeWidth="1" strokeDasharray="5 4" />
        <text x="380" y="220" fontSize="8.5" fill={S.blueDeep} textAnchor="middle">BRIDGE 2</text>
        <text x="380" y="244" fontSize="8" fill={S.faint} textAnchor="middle">gate: gravity non-classical</text>

        {/* refused fusion */}
        <g>
          <rect x="280" y="320" width="200" height="46" fill="none" stroke={S.ochre} strokeWidth="1" />
          <line x1="280" y1="320" x2="480" y2="366" stroke={S.ochre} strokeWidth="1" />
          <line x1="480" y1="320" x2="280" y2="366" stroke={S.ochre} strokeWidth="1" />
          <text x="380" y="339" fontSize="9" fill={S.ochre} textAnchor="middle">“IT'S ALL INFORMATION”</text>
          <text x="380" y="354" fontSize="8" fill={S.ochre} textAnchor="middle">FUSION REFUSED</text>
          <line x1="170" y1="290" x2="290" y2="330" stroke={S.hair} strokeWidth="1" />
          <line x1="590" y1="290" x2="470" y2="330" stroke={S.hair} strokeWidth="1" />
        </g>
      </svg>
    </FigurePlate>
  );
}

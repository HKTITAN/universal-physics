import FigurePlate, { S } from "./FigurePlate";

/** FIG 12.1 — the experiment watchlist map (gate / cores / target / program-adjacent). */
export default function FigWatchlist() {
  const cols: Array<{
    label: string;
    decides: string;
    rows: Array<[string, string]>;
    x: number;
  }> = [
    {
      label: "GATE",
      decides: "is gravity non-classical?",
      x: 20,
      rows: [
        ["BMV / QGEM", "~10–20+ yr (2030s–40s)"],
        ["CQ TRADE-OFF", "running now — classical-side closure"],
      ],
    },
    {
      label: "CORES",
      decides: "linearity · Lorentz · strong-field GR",
      x: 205,
      rows: [
        ["COLLAPSE BOUNDS", "decisive coverage ~2035"],
        ["LIV / EP NULLS", "0–10 yr null anchor"],
        ["GW STRONG-FIELD", "continuous (O4/O5)"],
      ],
    },
    {
      label: "TARGET",
      decides: "is the universe eternal dS?",
      x: 390,
      rows: [
        ["w(z) — DESI/EUCLID", "decision point 2027"],
        ["Σmν COSMOLOGY", "~1–4 yr"],
      ],
    },
    {
      label: "PROGRAM-ADJACENT",
      decides: "phenomenology, not the wager",
      x: 575,
      rows: [["GQuEST / VZ NOISE", "~2–5 yr; chain inputs η=1/4G"]],
    },
  ];
  return (
    <FigurePlate
      id="12.1"
      caption="The watchlist taxonomy with decision windows. Every live channel constrains the program's gate (is gravity non-classical?), its fixed cores (exact linearity, Lorentz invariance, strong-field GR), its target (eternal dS?), or program-adjacent phenomenology (GQuEST, whose inference chain re-imports η = 1/4G). NO channel decides the central wager — as of iteration 6 a corollary of the encode-not-generate obstruction (HYP-ENCODING-SCREEN), inheriting its MEDIUM hedge."
    >
      <svg
        viewBox="0 0 760 420"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        style={{ fontFamily: S.mono }}
      >
        <title>
          Map of the experiment watchlist in four columns: gate (BMV/QGEM, 10 to 20
          plus years; the classical-quantum trade-off, running now), cores (collapse
          bounds decisive around 2035; Lorentz-invariance and equivalence-principle
          nulls; gravitational-wave strong-field nulls), target (dark-energy w of z
          with a 2027 decision point; neutrino-mass cosmology), and program-adjacent
          phenomenology (GQuEST, 2 to 5 years). All four columns connect downward to a
          box labelled the central wager, with the annotation that no channel decides
          it even in principle.
        </title>

        {cols.map((c) => (
          <g key={c.label}>
            <rect x={c.x} y="20" width="165" height="250" fill="none" stroke={S.ink} strokeWidth="1" />
            <rect x={c.x} y="20" width="165" height="42" fill={S.wash} stroke={S.ink} strokeWidth="1" />
            <text x={c.x + 82} y="38" fontSize="9.5" fill={S.blueDeep} textAnchor="middle" letterSpacing="1">
              {c.label}
            </text>
            <text x={c.x + 82} y="53" fontSize="6.8" fill={S.faint} textAnchor="middle">
              {c.decides}
            </text>
            {c.rows.map(([name, win], i) => {
              const y = 84 + i * 60;
              return (
                <g key={name}>
                  <rect x={c.x + 10} y={y - 14} width="145" height="46" fill={S.paper} stroke={S.hair} strokeWidth="1" />
                  <text x={c.x + 18} y={y + 2} fontSize="7.8" fill={S.ink}>{name}</text>
                  <text x={c.x + 18} y={y + 17} fontSize="6.8" fill={S.blue}>{win}</text>
                </g>
              );
            })}
            <line x1={c.x + 82} y1="270" x2={c.x + 82} y2="305" stroke={S.faint} strokeWidth="0.9" strokeDasharray="3 3" />
          </g>
        ))}

        {/* the wager */}
        <rect x="150" y="305" width="460" height="62" fill="none" stroke={S.ochre} strokeWidth="1.6" />
        <text x="380" y="330" fontSize="10.5" fill={S.ink} textAnchor="middle" letterSpacing="1">
          THE CENTRAL WAGER
        </text>
        <text x="380" y="348" fontSize="8" fill={S.faint} textAnchor="middle">
          causal/algebraic/entanglement structure precedes metric geometry
        </text>
        <text x="380" y="392" fontSize="8.5" fill={S.ochre} textAnchor="middle">
          NO CHANNEL DECIDES IT — even in principle (HYP-ENCODING-SCREEN, MEDIUM hedge)
        </text>
        <line x1="160" y1="378" x2="600" y2="378" stroke={S.ochre} strokeWidth="0.8" strokeDasharray="4 3" />
      </svg>
    </FigurePlate>
  );
}

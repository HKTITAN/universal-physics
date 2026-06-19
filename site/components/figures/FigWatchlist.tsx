import FigurePlate, { S } from "./FigurePlate";

/** FIG 12.1 — the experiment watchlist: four channel-classes funnel into a wager nothing decides. */
export default function FigWatchlist() {
  const cols: Array<{
    label: string;
    decides: string;
    x: number;
    w: number;
    rows: Array<{ name: string; win: string }>;
  }> = [
    {
      label: "GATE",
      decides: "is gravity non-classical?",
      x: 16,
      w: 168,
      rows: [
        { name: "BMV / QGEM", win: "~2030s–40s" },
        { name: "CQ trade-off", win: "running now" },
      ],
    },
    {
      label: "CORES",
      decides: "linearity · Lorentz · strong-field GR",
      x: 200,
      w: 178,
      rows: [
        { name: "Collapse bounds", win: "VIP/XENONnT 2026" },
        { name: "LIV / EP nulls", win: "0–10 yr anchor" },
        { name: "GW strong-field", win: "O4 / O5" },
      ],
    },
    {
      label: "TARGET",
      decides: "is the universe eternal dS?",
      x: 394,
      w: 168,
      rows: [
        { name: "w(z) DESI/Euclid", win: "verdict 2027" },
        { name: "ν-mass cosmology", win: "~1–4 yr" },
      ],
    },
    {
      label: "PROGRAM-ADJACENT",
      decides: "phenomenology, not wager",
      x: 578,
      w: 166,
      rows: [{ name: "GQuEST / VZ noise", win: "~2–5 yr · η=1/4G" }],
    },
  ];

  const rowH = 50;
  const headTop = 24;
  const headH = 50;
  const funnelY = 322;
  const wagerY = 350;

  return (
    <FigurePlate
      id="12.1"
      caption="The watchlist taxonomy with decision windows. Every live channel constrains the program's gate (is gravity non-classical? — BMV/QGEM and the classical-side CQ trade-off), its fixed cores (exact linearity, tightened in 2026 by VIP/XENONnT; Lorentz invariance; strong-field GR), its target (eternal dS? — w(z), the nearest dated verdict at 2027), or program-adjacent phenomenology (GQuEST, whose chain re-imports η=1/4G). All four funnel into the central wager, and none decides it even in principle — as of iteration 13 a corollary of the encode-not-generate obstruction (HYP-ENCODING-SCREEN, grade R6: MEDIUM-HIGH → HIGH). [INFERENCE, high]"
    >
      <svg
        viewBox="0 0 760 470"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        style={{ fontFamily: S.mono }}
      >
        <title>
          The experiment watchlist as a funnel. Four channel-class columns — gate (is
          gravity non-classical? BMV/QGEM in the 2030s–40s and the classical-quantum
          trade-off running now), cores (collapse bounds tightened by VIP/XENONnT in
          2026, Lorentz and equivalence-principle nulls, gravitational-wave strong-field
          tests), target (dark-energy w of z with a 2027 verdict, neutrino-mass
          cosmology), and program-adjacent phenomenology (GQuEST). Every column drops an
          arrow down into one wide box, the central wager that causal/algebraic/
          entanglement structure precedes metric geometry. Beneath it, in warning colour:
          no channel decides it even in principle.
        </title>

        {cols.map((c) => {
          const cx = c.x + c.w / 2;
          return (
            <g key={c.label}>
              {/* column header */}
              <rect x={c.x} y={headTop} width={c.w} height={headH} fill={S.wash} stroke={S.ink} strokeWidth="1.25" />
              <text x={cx} y={headTop + 22} fontSize="14" fill={S.blueDeep} textAnchor="middle" letterSpacing="0.5">
                {c.label}
              </text>
              <text x={cx} y={headTop + 39} fontSize="11" fill={S.faint} textAnchor="middle">
                {c.decides}
              </text>

              {/* channel rows */}
              {c.rows.map((r, i) => {
                const y = headTop + headH + 12 + i * rowH;
                return (
                  <g key={r.name}>
                    <rect x={c.x} y={y} width={c.w} height={rowH - 10} fill={S.paper} stroke={S.hair} strokeWidth="1" />
                    <text x={c.x + 12} y={y + 17} fontSize="12" fill={S.ink}>{r.name}</text>
                    <text x={c.x + 12} y={y + 33} fontSize="11" fill={S.blue}>{r.win}</text>
                  </g>
                );
              })}

              {/* funnel arrow down into the wager */}
              <line x1={cx} y1={headTop + headH + 12 + c.rows.length * rowH - 6} x2={cx} y2={funnelY} stroke={S.faint} strokeWidth="1.5" />
              <path d={`M ${cx - 5} ${funnelY - 8} L ${cx} ${funnelY} L ${cx + 5} ${funnelY - 8}`} fill="none" stroke={S.faint} strokeWidth="1.5" />
            </g>
          );
        })}

        {/* the wager — everything funnels here */}
        <rect x="60" y={wagerY} width="640" height="58" fill={S.wash} stroke={S.ink} strokeWidth="1.5" />
        <text x="380" y={wagerY + 24} fontSize="14" fill={S.ink} textAnchor="middle" letterSpacing="0.5">
          THE CENTRAL WAGER
        </text>
        <text x="380" y={wagerY + 44} fontSize="12" fill={S.faint} textAnchor="middle">
          causal / algebraic / entanglement structure precedes metric geometry
        </text>

        {/* the refusal — nothing decides it */}
        <text x="380" y={wagerY + 86} fontSize="13" fill={S.ochre} textAnchor="middle" letterSpacing="0.3">
          NO CHANNEL DECIDES IT — EVEN IN PRINCIPLE
        </text>
        <text x="380" y={wagerY + 104} fontSize="11" fill={S.ochre} textAnchor="middle">
          HYP-ENCODING-SCREEN · grade R6: MEDIUM-HIGH → HIGH · iteration 13
        </text>
      </svg>
    </FigurePlate>
  );
}

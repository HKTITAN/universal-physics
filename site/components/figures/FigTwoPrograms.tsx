import FigurePlate, { S } from "./FigurePlate";

/** FIG 0.1 — the two-program structure: two coherent programs, two thin bridges, one refused fusion. */
export default function FigTwoPrograms() {
  // three stacked items per panel; y is the top of each item band
  const itemsA: [string, string][] = [
    ["MODULAR / CROSSED-PRODUCT", "Type III₁ → II crossed product · OP-44"],
    ["HOLOGRAPHY / RT", "S = Area / 4G · presupposes a background"],
    ["ENTROPIC GRAVITY", "Jacobson: δQ = T·δS from a Killing horizon"],
  ];
  const itemsB: [string, string][] = [
    ["BORN RULE / LINEARITY", "form-forced · Gleason + Busch"],
    ["GPT RECONSTRUCTIONS", "no Type III₁ formulation · OP-48"],
    ["TABLETOP QG (BMV / QGEM)", "gravity-mediated entanglement witness"],
  ];

  // panel geometry
  const pxA = 30;
  const pxB = 430;
  const pw = 300;
  const ptop = 64;
  const itemTop = 150;
  const itemH = 78;
  const itemGap = 8;
  const itemW = 264;

  const renderItems = (items: [string, string][], xPad: number) =>
    items.map(([t, sub], i) => {
      const y = itemTop + i * (itemH + itemGap);
      return (
        <g key={t}>
          <rect
            x={xPad}
            y={y}
            width={itemW}
            height={itemH}
            fill={S.wash}
            stroke={S.blue}
            strokeWidth="1.25"
          />
          <text x={xPad + 18} y={y + 32} fontSize="13" fill={S.ink}>
            {t}
          </text>
          <text x={xPad + 18} y={y + 56} fontSize="11.5" fill={S.faint}>
            {sub}
          </text>
        </g>
      );
    });

  return (
    <FigurePlate
      id="0.1"
      caption="The standing structure is not one unified program but two internally-coherent ones, joined only by two thin bridges: shared no-signaling / causal order, and the logical gate that gravity be non-classical. Program A encodes geometry but does not generate it; Program B is a stable formalism whose exact linearity is under tabletop test. The tempting 'it is all information' fusion is refused — 'information' names non-interchangeable objects across the two clusters. [INFERENCE, high]"
    >
      <svg
        viewBox="0 0 760 600"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        style={{ fontFamily: S.mono }}
      >
        <title>
          Two side-by-side panels stand as separate research programs. The left
          panel, Program A "geometry from algebra," stacks modular
          crossed-product gravity, holography with Ryu&ndash;Takayanagi, and
          entropic gravity; its status is "encodes geometry, does not
          generate it." The right panel, Program B "is the quantum
          framework final," stacks the form-forced Born rule, GPT
          reconstructions with no Type III-one formulation, and tabletop
          quantum gravity (BMV / QGEM); its status is "stable formalism,
          exact linearity under test." Only two thin dashed bridges connect
          the panels: no-signaling / causal order, and the gate that gravity be
          non-classical. Below center, the refused fusion "it is all
          information" is struck through with an ochre cross.
        </title>

        {/* ===== PROGRAM A (left panel) ===== */}
        <rect
          x={pxA}
          y={ptop}
          width={pw}
          height={398}
          fill="none"
          stroke={S.ink}
          strokeWidth="1.5"
        />
        <text x={pxA + 18} y={ptop + 34} fontSize="15" fill={S.blue} letterSpacing="1.5">
          PROGRAM A
        </text>
        <text x={pxA + 18} y={ptop + 58} fontSize="13" fill={S.ink}>
          GEOMETRY FROM ALGEBRA
        </text>
        <line
          x1={pxA + 18}
          y1={ptop + 72}
          x2={pxA + pw - 18}
          y2={ptop + 72}
          stroke={S.hair}
          strokeWidth="1"
        />

        {renderItems(itemsA, pxA + 18)}

        {/* Program A status footer */}
        <line
          x1={pxA + 18}
          y1={ptop + 320}
          x2={pxA + pw - 18}
          y2={ptop + 320}
          stroke={S.hair}
          strokeWidth="1"
        />
        <text x={pxA + 18} y={ptop + 346} fontSize="12" fill={S.ink}>
          ENCODES GEOMETRY —
        </text>
        <text x={pxA + 18} y={ptop + 366} fontSize="12" fill={S.ochre}>
          DOES NOT GENERATE IT
        </text>

        {/* ===== PROGRAM B (right panel) ===== */}
        <rect
          x={pxB}
          y={ptop}
          width={pw}
          height={398}
          fill="none"
          stroke={S.ink}
          strokeWidth="1.5"
        />
        <text x={pxB + 18} y={ptop + 34} fontSize="15" fill={S.blue} letterSpacing="1.5">
          PROGRAM B
        </text>
        <text x={pxB + 18} y={ptop + 58} fontSize="13" fill={S.ink}>
          IS THE QUANTUM FRAMEWORK FINAL?
        </text>
        <line
          x1={pxB + 18}
          y1={ptop + 72}
          x2={pxB + pw - 18}
          y2={ptop + 72}
          stroke={S.hair}
          strokeWidth="1"
        />

        {renderItems(itemsB, pxB + 18)}

        {/* Program B status footer */}
        <line
          x1={pxB + 18}
          y1={ptop + 320}
          x2={pxB + pw - 18}
          y2={ptop + 320}
          stroke={S.hair}
          strokeWidth="1"
        />
        <text x={pxB + 18} y={ptop + 346} fontSize="12" fill={S.ink}>
          STABLE FORMALISM —
        </text>
        <text x={pxB + 18} y={ptop + 366} fontSize="12" fill={S.ink}>
          EXACT LINEARITY UNDER TEST
        </text>

        {/* ===== two thin bridges (the only links) ===== */}
        {/* Bridge 1 — upper */}
        <line
          x1={pxA + pw}
          y1={210}
          x2={pxB}
          y2={210}
          stroke={S.blue}
          strokeWidth="1.5"
          strokeDasharray="6 5"
        />
        <text x={380} y={196} fontSize="12" fill={S.blueDeep} textAnchor="middle">
          BRIDGE 1
        </text>
        <text x={380} y={230} fontSize="11" fill={S.faint} textAnchor="middle">
          no-signaling / causal order
        </text>

        {/* Bridge 2 — lower */}
        <line
          x1={pxA + pw}
          y1={368}
          x2={pxB}
          y2={368}
          stroke={S.blue}
          strokeWidth="1.5"
          strokeDasharray="6 5"
        />
        <text x={380} y={354} fontSize="12" fill={S.blueDeep} textAnchor="middle">
          BRIDGE 2
        </text>
        <text x={380} y={388} fontSize="11" fill={S.faint} textAnchor="middle">
          gate: gravity non-classical
        </text>

        {/* ===== refused fusion (below center) ===== */}
        {/* faint feeders showing both clusters reaching for the fusion */}
        <line x1={pxA + pw / 2} y1={462} x2={300} y2={512} stroke={S.hair} strokeWidth="1" />
        <line x1={pxB + pw / 2} y1={462} x2={460} y2={512} stroke={S.hair} strokeWidth="1" />

        <rect
          x={270}
          y={512}
          width={220}
          height={58}
          fill="none"
          stroke={S.ochre}
          strokeWidth="1.25"
        />
        {/* ochre X struck through the refused fusion */}
        <line x1={270} y1={512} x2={490} y2={570} stroke={S.ochre} strokeWidth="3" />
        <line x1={490} y1={512} x2={270} y2={570} stroke={S.ochre} strokeWidth="3" />
        <text x={380} y={536} fontSize="13" fill={S.ochre} textAnchor="middle">
          "IT IS ALL INFORMATION"
        </text>
        <text x={380} y={556} fontSize="11" fill={S.ochre} textAnchor="middle">
          FUSION REFUSED
        </text>
      </svg>
    </FigurePlate>
  );
}

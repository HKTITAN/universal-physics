import type { ReactNode } from "react";

export default function FigurePlate({
  id,
  caption,
  children,
}: {
  id: string;
  caption: string;
  children: ReactNode;
}) {
  return (
    <figure className="figure-plate">
      {children}
      <figcaption>
        <span className="fig-id">FIG {id}</span> — {caption}
      </figcaption>
    </figure>
  );
}

/** shared SVG text/line style constants for the figure plates */
export const S = {
  ink: "var(--ink-950)",
  faint: "var(--ink-500)",
  hair: "var(--hairline)",
  blue: "var(--blue)",
  blueDeep: "var(--blue-deep)",
  wash: "var(--blue-wash)",
  ochre: "var(--ochre)",
  paper: "var(--paper-raised)",
  mono: "var(--mono)",
} as const;

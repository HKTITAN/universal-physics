import { Children, cloneElement, isValidElement, type ReactNode } from "react";

export default function FigurePlate({
  id,
  caption,
  children,
}: {
  id: string;
  caption: string;
  children: ReactNode;
}) {
  // Stable, unique caption id derived from the figure number (dots → hyphens
  // so it is a valid HTML id), e.g. FIG 1.1 → fig-1-1-caption.
  const captionId = `fig-${id.replace(/\./g, "-")}-caption`;

  // Associate the figure's <svg> with its caption for screen readers. The
  // figure components pass a single <svg> as the only child, so we clone it to
  // add aria-describedby pointing at the caption; non-element children pass
  // through untouched.
  const described = Children.map(children, (child) =>
    isValidElement<{ "aria-describedby"?: string }>(child)
      ? cloneElement(child, { "aria-describedby": captionId })
      : child
  );

  return (
    <figure className="figure-plate">
      {described}
      <figcaption id={captionId}>
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
  ochreWash: "var(--ochre-wash)",
  inkMid: "var(--ink-700)",
  paper: "var(--paper-raised)",
  mono: "var(--mono)",
} as const;

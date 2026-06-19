import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import { visit, SKIP } from "unist-util-visit";
import type { Root, Element, ElementContent, Text } from "hast";
import { LINK_MAP } from "./manifest";

export interface TocItem {
  id: string;
  text: string;
  depth: 2 | 3;
}

export interface Rendered {
  html: string;
  toc: TocItem[];
}

/* ── helpers ─────────────────────────────────────────────────────────── */

function textOf(node: Element | ElementContent): string {
  if (node.type === "text") return node.value;
  if (node.type === "element") return node.children.map(textOf).join("");
  return "";
}

/** Rewrite internal wiki .md links to site routes; externalize the rest. */
function rehypeWikiLinks() {
  return (tree: Root) => {
    visit(tree, "element", (node: Element) => {
      if (node.tagName !== "a" || typeof node.properties?.href !== "string") return;
      let href = node.properties.href as string;
      if (/^(https?:|mailto:)/.test(href)) {
        node.properties.rel = "noopener noreferrer";
        return;
      }
      if (href.startsWith("#")) return;

      const [path, frag] = href.split("#");
      // normalize: strip leading ./ and ../ segments (content is flat at one
      // level of nesting, so basenames + the domains/notes prefix suffice)
      let p = path.replace(/^(\.\/|\.\.\/)+/, "").toLowerCase();
      // links written from inside notes/ or domains/ to a sibling note
      if (!(p in LINK_MAP) && /^\d{4}-\d{2}-\d{2}-/.test(p)) p = `notes/${p}`;
      if (!(p in LINK_MAP) && `domains/${p}` in LINK_MAP) p = `domains/${p}`;
      const target = LINK_MAP[p];
      if (target) {
        href = target + (frag ? `#${frag}` : "");
      } else if (p.endsWith(".md")) {
        // unknown wiki file (broken link in the frozen source) → point at the
        // GitHub tree rather than 404 on-site
        href = `https://github.com/HKTITAN/universal-physics/blob/main/${p}`;
      }
      node.properties.href = href;
    });
  };
}

/** Wrap tables in a horizontally scrollable figure-like container. */
function rehypeTableWrap() {
  return (tree: Root) => {
    visit(tree, "element", (node: Element, index, parent) => {
      if (node.tagName !== "table" || !parent || typeof index !== "number") return;
      if (parent.type === "element" && parent.properties?.className === "table-scroll") return;
      const wrapper: Element = {
        type: "element",
        tagName: "div",
        properties: { className: ["table-scroll"], tabIndex: 0 },
        children: [node],
      };
      (parent.children as ElementContent[])[index] = wrapper;
      return SKIP;
    });
  };
}

const TAG_RE =
  /\[(ESTABLISHED|INFERENCE|SPECULATIVE|OPEN|CONTESTED|unverified)((?:[ ,;/(][^\]\n]{0,90})?)\]/g;

const TAG_CLASS: Record<string, string> = {
  ESTABLISHED: "chip chip-established",
  INFERENCE: "chip chip-inference",
  SPECULATIVE: "chip chip-speculative",
  OPEN: "chip chip-open",
  CONTESTED: "chip chip-contested",
  unverified: "chip chip-unverified",
};

/** Render inline epistemic tags ([ESTABLISHED] …) as mono chips. */
function rehypeEpistemicChips() {
  return (tree: Root) => {
    visit(tree, "text", (node: Text, index, parent) => {
      if (!parent || typeof index !== "number") return;
      if (parent.type === "element" && ["code", "pre", "script", "style"].includes(parent.tagName))
        return;
      const value = node.value;
      TAG_RE.lastIndex = 0;
      if (!TAG_RE.test(value)) return;
      TAG_RE.lastIndex = 0;

      const out: ElementContent[] = [];
      let last = 0;
      let m: RegExpExecArray | null;
      while ((m = TAG_RE.exec(value)) !== null) {
        // guard against identifiers like [OPEN_PROBLEMS...]
        const after = m[2] ?? "";
        if (after && /^[A-Z_]/.test(after)) continue;
        if (m.index > last) out.push({ type: "text", value: value.slice(last, m.index) });
        out.push({
          type: "element",
          tagName: "span",
          properties: { className: TAG_CLASS[m[1]].split(" "), "data-tag": m[1] },
          children: [{ type: "text", value: `${m[1]}${after}` }],
        });
        last = m.index + m[0].length;
      }
      if (out.length === 0) return;
      if (last < value.length) out.push({ type: "text", value: value.slice(last) });
      (parent.children as ElementContent[]).splice(index, 1, ...out);
      return index + out.length;
    });
  };
}

/** Collect h2/h3 headings (after rehype-slug) for the in-page TOC. */
function rehypeCollectToc(toc: TocItem[]) {
  return (tree: Root) => {
    visit(tree, "element", (node: Element) => {
      if ((node.tagName === "h2" || node.tagName === "h3") && typeof node.properties?.id === "string") {
        toc.push({
          id: node.properties.id as string,
          text: textOf(node).replace(/\s+/g, " ").trim(),
          depth: node.tagName === "h2" ? 2 : 3,
        });
      }
    });
  };
}

/* ── public API ──────────────────────────────────────────────────────── */

export async function renderMarkdown(markdown: string): Promise<Rendered> {
  const toc: TocItem[] = [];
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMath, { singleDollarTextMath: true })
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeKatex, { throwOnError: false, strict: false })
    .use(rehypeSlug)
    .use(rehypeWikiLinks)
    .use(rehypeTableWrap)
    .use(rehypeEpistemicChips)
    .use(rehypeCollectToc, toc)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdown);
  return { html: String(file), toc };
}

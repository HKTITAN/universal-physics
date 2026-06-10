import { readFileSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";
import { renderMarkdown, type Rendered } from "./markdown";

const CONTENT_DIR = join(process.cwd(), "content");

export interface WikiPage extends Rendered {
  /** frontmatter title, if present */
  title?: string;
  updated?: string;
}

const cache = new Map<string, Promise<WikiPage>>();

/** gray-matter parses `updated: 2026-06-10` as a JS Date — render it back as ISO yyyy-mm-dd */
function formatUpdated(v: unknown): string | undefined {
  if (v == null) return undefined;
  if (v instanceof Date && !isNaN(v.getTime())) return v.toISOString().slice(0, 10);
  return String(v);
}

/** Read a wiki markdown file (path relative to site/content/), strip its
 *  YAML frontmatter, and render it to HTML + an in-page TOC. */
export function loadPage(relPath: string): Promise<WikiPage> {
  let p = cache.get(relPath);
  if (!p) {
    p = (async () => {
      const raw = readFileSync(join(CONTENT_DIR, relPath), "utf8");
      const { content, data } = matter(raw);
      const rendered = await renderMarkdown(content);
      return {
        ...rendered,
        title: typeof data.title === "string" ? data.title : undefined,
        updated: formatUpdated(data.updated),
      };
    })();
    cache.set(relPath, p);
  }
  return p;
}

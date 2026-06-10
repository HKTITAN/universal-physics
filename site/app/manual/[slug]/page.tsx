import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CHAPTERS, FLAT, chapterOf, entryBySlug, type ManualEntry } from "@/lib/manifest";
import { loadPage } from "@/lib/content";
import type { TocItem } from "@/lib/markdown";
import FigEncodeGenerate from "@/components/figures/FigEncodeGenerate";
import FigHedgeLedger from "@/components/figures/FigHedgeLedger";
import FigWatchlist from "@/components/figures/FigWatchlist";
import FigTheoryMap from "@/components/figures/FigTheoryMap";
import FigDSNoGo from "@/components/figures/FigDSNoGo";

export const dynamicParams = false;

export function generateStaticParams() {
  return FLAT.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = entryBySlug(slug);
  if (!entry) return {};
  return {
    title: `${entry.num} ${entry.title}`,
    description: entry.summary,
    openGraph: { title: `${entry.num} ${entry.title} · Universal Physics`, description: entry.summary },
  };
}

/** figure plates injected above designated chapters */
const FIGS: Record<string, React.ComponentType> = {
  conclusion: FigDSNoGo,
  findings: FigEncodeGenerate,
  "theory-map": FigTheoryMap,
  "experiment-watchlist": FigWatchlist,
  notes: FigHedgeLedger,
};

function Pager({ slug }: { slug: string }) {
  const i = FLAT.findIndex((e) => e.slug === slug);
  const prev = i > 0 ? FLAT[i - 1] : undefined;
  const next = i < FLAT.length - 1 ? FLAT[i + 1] : undefined;
  return (
    <nav className="pager" aria-label="Chapter navigation">
      {prev ? (
        <Link href={`/manual/${prev.slug}`} rel="prev">
          <span className="dir">← Previous</span>
          <span className="dest">
            <span className="num">{prev.num}</span>
            {prev.title}
          </span>
        </Link>
      ) : (
        <span className="pager-empty" aria-hidden="true" />
      )}
      {next ? (
        <Link href={`/manual/${next.slug}`} rel="next" className="next">
          <span className="dir">Next →</span>
          <span className="dest">
            <span className="num">{next.num}</span>
            {next.title}
          </span>
        </Link>
      ) : (
        <span className="pager-empty" aria-hidden="true" />
      )}
    </nav>
  );
}

function Breadcrumbs({ entry }: { entry: ManualEntry }) {
  const chapter = chapterOf(entry.slug);
  const isSection = chapter && chapter.slug !== entry.slug;
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        <li>
          <Link href="/">Manual</Link>
        </li>
        {isSection && chapter ? (
          <li>
            <Link href={`/manual/${chapter.slug}`}>
              {chapter.num} {chapter.title}
            </Link>
          </li>
        ) : null}
        <li aria-current="page">
          {entry.num} {entry.title}
        </li>
      </ol>
    </nav>
  );
}

function PageTocMobile({ toc }: { toc: TocItem[] }) {
  if (toc.length < 2) return null;
  return (
    <details className="page-toc-mobile">
      <summary>On this page</summary>
      <nav aria-label="On this page">
        <ul>
          {toc.map((t) => (
            <li key={t.id} className={`depth-${t.depth}`}>
              <a href={`#${t.id}`}>{t.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </details>
  );
}

function PageToc({ toc }: { toc: TocItem[] }) {
  if (toc.length < 2) return null;
  return (
    <aside className="page-toc">
      <div className="page-toc-inner">
        <nav aria-labelledby="page-toc-heading">
          <h2 id="page-toc-heading">On this page</h2>
          <ul>
            {toc.map((t) => (
              <li key={t.id} className={`depth-${t.depth}`}>
                <a href={`#${t.id}`}>{t.text}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

/** generated landing pages for chapters 4 (Domains) and 14 (Method) */
function ChapterLanding({ slug }: { slug: string }) {
  const chapter = CHAPTERS.find((c) => c.slug === slug)!;
  const intro =
    slug === "domains" ? (
      <>
        <p className="landing-intro">
          Ten domain deep-dives — the load-bearing frameworks of current physics, audited one by
          one: formalism, domain of validity, known breakdowns, and the precise senses in which
          each framework yields. Cross-cutting structure lives in the{" "}
          <Link href="/manual/theory-map">Theory Map</Link>; the places where the frameworks clash
          rather than nest are catalogued in{" "}
          <Link href="/manual/gaps-and-contradictions">Gaps &amp; Contradictions</Link>.
        </p>
        <p className="landing-intro">
          Every claim on these pages carries one of the five epistemic tags{" "}
          (<Link href="/manual/epistemics">§14.1</Link>):{" "}
          <span className="chip chip-established">ESTABLISHED</span>{" "}
          <span className="chip chip-inference">INFERENCE</span>{" "}
          <span className="chip chip-speculative">SPECULATIVE</span>{" "}
          <span className="chip chip-open">OPEN</span>{" "}
          <span className="chip chip-contested">CONTESTED</span>
        </p>
      </>
    ) : (
      <p className="landing-intro">
        The machinery that keeps the wiki honest. The evidence standard defines the five epistemic
        tags and the cardinal rule that speculation never wears the clothes of established fact;
        the agent schema specifies how any agent — human or LLM — reads, extends, and lints the
        wiki, including the anti-crank verification protocol; the roadmap is the post-saturation
        watch-list. Contribution conventions are summarized on the{" "}
        <Link href="/contribute">contribute</Link> page.
      </p>
    );
  return (
    <>
      <h1
        style={{
          fontFamily: "var(--mono)",
          fontWeight: 400,
          fontSize: "1.9rem",
          borderBottom: "2px solid var(--ink-950)",
          paddingBottom: "0.7rem",
          margin: "1.2rem 0",
        }}
      >
        {chapter.title}
      </h1>
      {intro}
      <ol className="section-index">
        {chapter.sections.map((s) => (
          <li key={s.slug}>
            <Link href={`/manual/${s.slug}`}>
              <span className="num">{s.num}</span>
              <span className="name">{s.title}</span>
              {s.summary ? <span className="desc">{s.summary}</span> : null}
            </Link>
          </li>
        ))}
      </ol>
    </>
  );
}

export default async function ManualPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = entryBySlug(slug);
  if (!entry) notFound();

  const Fig = FIGS[slug];
  let body: React.ReactNode;
  let toc: TocItem[] = [];
  let updated: string | undefined;

  if (entry.generated) {
    body = <ChapterLanding slug={slug} />;
  } else {
    const page = await loadPage(entry.file!);
    toc = page.toc;
    updated = page.updated;
    body = <div className="prose" dangerouslySetInnerHTML={{ __html: page.html }} />;
  }

  return (
    <div className="manual-shell">
      <article>
        <Breadcrumbs entry={entry} />
        <p className="chapter-label">
          <span>§ {entry.num}</span>
          <span className="rule" aria-hidden="true" />
          {updated ? <span className="updated">updated {updated}</span> : null}
        </p>
        <PageTocMobile toc={toc} />
        {Fig ? <Fig /> : null}
        {body}
        <Pager slug={slug} />
      </article>
      <PageToc toc={toc} />
    </div>
  );
}

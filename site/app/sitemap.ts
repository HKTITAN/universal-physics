import type { MetadataRoute } from "next";
import { FLAT } from "@/lib/manifest";

/**
 * Sitemap for the public site. The /manual entries are derived from the same
 * FLAT manifest the [slug] route uses for generateStaticParams(), so new pages
 * appear here automatically and the two stay in lockstep. Base URL is the
 * production alias (kept in sync with metadataBase in app/layout.tsx).
 */
const BASE = "https://universal-physics.khe.money";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/about", "/contribute"].map((path) => ({
    url: new URL(path, BASE).toString(),
    changeFrequency: "monthly" as const,
  }));

  const manualRoutes = FLAT.map((entry) => ({
    url: new URL(`/manual/${entry.slug}`, BASE).toString(),
    changeFrequency: "monthly" as const,
  }));

  return [...staticRoutes, ...manualRoutes];
}

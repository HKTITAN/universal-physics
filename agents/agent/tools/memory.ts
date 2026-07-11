import Supermemory from "supermemory";
import { z } from "zod";

/**
 * Team memory — supermemory local (http://localhost:6767).
 *
 * Partitioning (containerTag):
 *   "up-shared"          — the project-wide shared memory. Written ONLY by the
 *                          librarian, after a result is refereed and integrated.
 *   "up-agent-<role>"    — each agent's private working memory (prover, referee,
 *                          assembler, numerics, watcher, librarian, scribe).
 *
 * Server setup: see ../../memory/README.md (one-time interactive key setup —
 * the key lives in supermemory's own encrypted store, never in this repo).
 */
const client = new Supermemory({
  apiKey: process.env.SUPERMEMORY_API_KEY ?? "local",
  baseURL: process.env.SUPERMEMORY_BASE_URL ?? "http://localhost:6767",
});

const tagSchema = z
  .string()
  .regex(/^up-(shared|agent-[a-z]+)$/, "tag must be up-shared or up-agent-<role>");

export const addMemory = {
  description:
    "Store a memory. Use your private tag (up-agent-<role>) for working notes; up-shared is reserved for the librarian's integrated state.",
  parameters: z.object({
    content: z.string().min(1),
    containerTag: tagSchema,
  }),
  execute: async ({ content, containerTag }: { content: string; containerTag: string }) => {
    const res = await client.add({ content, containerTag });
    return { ok: true, id: (res as any)?.id ?? null };
  },
};

export const searchMemory = {
  description: "Hybrid search across a memory container. Always search up-shared before starting work.",
  parameters: z.object({
    q: z.string().min(1),
    containerTag: tagSchema,
    limit: z.number().int().min(1).max(20).default(5),
  }),
  execute: async ({ q, containerTag, limit }: { q: string; containerTag: string; limit: number }) => {
    const res = await client.search.memories({ q, containerTag, limit } as any);
    return res;
  },
};

export const memoryProfile = {
  description: "Retrieve the compiled profile of a memory container (the distilled state).",
  parameters: z.object({ containerTag: tagSchema }),
  execute: async ({ containerTag }: { containerTag: string }) => {
    const res = await client.profile({ containerTag } as any);
    return res;
  },
};

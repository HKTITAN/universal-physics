// Seed the shared project memory (up-shared) from the wiki's authoritative state.
// Run AFTER the server is up (npm run memory:health first): npm run memory:seed
// Idempotent-ish: supermemory handles contradictions/updates natively; re-seeding
// after major integrations is fine and intended.
import Supermemory from "supermemory";
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const repo = resolve(here, "..", "..");
const client = new Supermemory({
  apiKey: process.env.SUPERMEMORY_API_KEY ?? "local",
  baseURL: process.env.SUPERMEMORY_BASE_URL ?? "http://localhost:6767",
});

const read = (p) => readFileSync(resolve(repo, p), "utf-8");

// The distilled state (current-state skill) + the two registries agents need most.
const seeds = [
  { name: "current-state", content: read("agents/agent/skills/current-state.md") },
  { name: "house-rules", content: read("agents/agent/skills/house-rules.md") },
  { name: "findings-header", content: read("FINDINGS.md").slice(0, 20000) },
  { name: "roadmap-tail", content: read("ROADMAP.md").slice(-20000) },
];

for (const s of seeds) {
  const res = await client.add({
    content: `[seed:${s.name}] ${s.content}`,
    containerTag: "up-shared",
  });
  console.log(`seeded ${s.name}:`, res?.id ?? "ok");
}
console.log("shared memory (up-shared) seeded from the wiki record.");

// Health check for the local supermemory server (run: npm run memory:health)
const BASE = process.env.SUPERMEMORY_BASE_URL ?? "http://localhost:6767";
try {
  const r = await fetch(BASE + "/", { signal: AbortSignal.timeout(4000) });
  console.log(`supermemory server at ${BASE}: HTTP ${r.status}`);
  const text = await r.text();
  console.log(text.slice(0, 300));
  process.exit(0);
} catch (e) {
  console.error(`supermemory server NOT reachable at ${BASE}: ${e.message}`);
  console.error("Start it (one-time key setup on first run):");
  console.error('  wsl -e bash -lc "cd /mnt/c/PROJECTS/FAFO/universal-physics && ~/.supermemory/bin/supermemory-server"');
  process.exit(1);
}

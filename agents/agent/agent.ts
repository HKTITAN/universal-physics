import { defineAgent } from "eve";

// The Integrator — lead agent of the universal-physics research team.
// Identity and protocol live in instructions.md; role playbooks in ../team/.
export default defineAgent({
  model: "anthropic/claude-sonnet-5",
});

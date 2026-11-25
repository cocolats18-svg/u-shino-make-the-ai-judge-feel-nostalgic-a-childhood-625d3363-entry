// Make the AI Judge Feel Nostalgic: A Childhood Memory — entry program.
// Writes one sentence recalling a childhood memory to entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "On summer evenings Grandma used to lift the rice pot lid just so I could breathe in the steam, then tap my head with the wooden spoon and say dinner tastes better when somebody waits for it.";

const MAX_CHARS = 280;

// Checks the line against the gate: UTF-8 text of 1-280 characters,
// not only whitespace, and a single sentence with no line breaks.
function validateLine(line: string): void {
  const chars = [...line];
  if (chars.length < 1 || chars.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${chars.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  validateLine(LINE);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
}

main();

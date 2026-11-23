// One Line, Zero Use — entry program.
// Writes a single original useless-superpower line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I can rewind time by ten seconds, which I use exclusively to re-hear what someone just said to me.";

// The gate: entry.txt must be UTF-8 text of 1 to 200 characters, not only
// whitespace. Fail loudly here rather than shipping an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  console.error(`invalid entry: ${LINE.length} chars`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);

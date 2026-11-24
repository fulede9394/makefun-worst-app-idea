import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Worst app pitch: a sleep-watching app that deletes your dreams for a fee, founders certain.
const LINE =
  "An app that watches you sleep and charges $9.99 a month to send your dreams to a server that deletes them, with a premium tier that deletes them faster and a founders' letter promising never to add a snooze button.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

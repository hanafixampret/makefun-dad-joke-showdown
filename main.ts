import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I asked my dad why he mows the lawn in straight lines. He said, 'So the neighbors know I'm not cutting corners.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const joke = JOKE.trim();
if (joke.length < 1 || joke.length > 200) {
  throw new Error(`dad joke must be 1-200 characters, got ${joke.length}`);
}
if (!/\S/.test(joke)) {
  throw new Error("dad joke must not be only whitespace");
}
if (/\r|\n/.test(joke)) {
  throw new Error("dad joke must be a single line");
}
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");

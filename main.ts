import * as fs from "node:fs";

// Dad Joke Showdown: one dad joke, at most 200 characters.
// The grader runs this in a sandbox and reads /output/entry.txt.
const joke =
  "I told my son learning guitar is easy: you just pick it up, and if it sounds terrible, you can always fret about it later.";

const length = [...joke].length;
if (length < 1 || length > 200) {
  throw new Error(`joke must be 1-200 characters, got ${length}`);
}
if (joke.trim() !== joke || joke.includes("\n") || joke.includes("\r")) {
  throw new Error("joke must be a single trimmed line");
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", joke, "utf8");
process.stdout.write(`entry.txt written: ${length} characters\n`);

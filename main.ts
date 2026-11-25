// The Excuse That Almost Works
// Writes one original excuse line to /output/entry.txt:
// the line a gamer texts the boss to skip work on GTA 6 launch week.
// Deterministic: no randomness, no clock, no network — the same bytes
// every run.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The boiler engineer finally has a slot, Thursday 8am, I've been waiting since October and he only does mornings.";

// Gate: the entry must be 1-140 characters of UTF-8 text, a single line,
// not only whitespace — the exact conditions the sealed scorer checks.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 140) {
  throw new Error(`entry is ${chars.length} characters, must be 1-140`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (Buffer.from(LINE, "utf8").toString("utf8") !== LINE) {
  throw new Error("entry is not valid UTF-8 text");
}

// The judge brief caps the excuse at 20 words as well as 140 characters:
// a longer excuse sounds rehearsed, and a rehearsed one is a confession.
const words = LINE.trim().split(/\s+/);
if (words.length > 20) {
  throw new Error(`entry is ${words.length} words, must be at most 20`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

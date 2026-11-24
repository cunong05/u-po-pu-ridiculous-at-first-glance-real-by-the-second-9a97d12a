// The bounty gate accepts 1-200 characters of UTF-8 text, not only whitespace.
// A pitch that is too long is never judged, so the program refuses to ship one.
// The gate also rejects a pitch that is only whitespace or carries double spaces,
// which is why the checks below look at the text before anything is written.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "Rent-a-Grandma pairs lonely remote workers with retired grandmothers who video-call weekly to nag them about vegetables and sleep, because loving nagging beats any productivity app at $40 a month.";

// Validate the pitch the way the sealed gate scorer does: length first,
// then shape. Any failure throws, so a bad entry never reaches /output.
function validateEntry(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (/\s{2,}/.test(text)) {
    throw new Error("entry must not contain a run of two or more spaces");
  }
}

validateEntry(ENTRY);

// Write the validated pitch to the grader's output path and echo it, so a
// local run shows exactly what the grader will read from /output/entry.txt.
// The directory is created first because the sandbox hands the program an
// empty /output, and the write is UTF-8 so the gate's character count matches.
function writeEntry(text: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
  process.stdout.write(text);
}

writeEntry(ENTRY);

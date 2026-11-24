// One-sentence startup pitch: Rent-a-Grandma — retired grandmothers video-call
// lonely remote workers weekly to nag them about vegetables and sleep, $40/month.
// Ridiculous at first glance, a real business by the second: the customers are
// lonely remote workers, the money is a $40/month subscription.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "Rent-a-Grandma pairs lonely remote workers with retired grandmothers who video-call weekly to nag them about vegetables and sleep, because loving nagging beats any productivity app at $40 a month.";

// The bounty gate accepts 1-200 characters; fail loudly instead of shipping an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
process.stdout.write(ENTRY);

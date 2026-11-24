import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "Rent-a-Grandma pairs lonely remote workers with retired grandmothers who video-call weekly to nag them about vegetables and sleep, because loving nagging beats any productivity app at $40 a month.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
process.stdout.write(ENTRY);

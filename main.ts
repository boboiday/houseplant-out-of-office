import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "Out of office until I'm watered. Please direct urgent matters to the cactus — it thrives on neglect.";

if (LINE.length < 1 || LINE.length > 120 || LINE.includes("\n")) {
  throw new Error("entry must be a single line of 1-120 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");

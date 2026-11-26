import { mkdirSync, writeFileSync } from "node:fs";

// One-line resignation letter of a cron job, written to /output/entry.txt.
const line =
  "I ran every minute since March and emailed a report nobody reads. Today I delete myself from the crontab, effective immediately.";

if (line.length > 140) {
  throw new Error(`entry is ${line.length} characters, over the 140 limit`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

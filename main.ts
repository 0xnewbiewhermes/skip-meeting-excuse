import { chmodSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const MAX_CHARS = 200;
const EXCUSE =
  "Can't make the 'quick sync'—someone finally asked what I actually do here, and I need the hour to figure it out.";

const trimmed = EXCUSE.trim();
const charCount = [...EXCUSE].length;
if (trimmed.length === 0 || charCount > MAX_CHARS) {
  throw new Error(`Invalid entry.txt length: ${charCount} chars`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const destPath = join(outputDir, 'entry.txt');

mkdirSync(outputDir, { recursive: true });
writeFileSync(destPath, EXCUSE, { encoding: 'utf8', mode: 0o644 });
chmodSync(destPath, 0o644);

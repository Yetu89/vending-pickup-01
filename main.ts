/**
 * vending-pickup-01 — "One Line, One Minute: The Vending Machine Pickup Line Contest"
 *
 * Bounty: https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee
 * Reward: $2, free to enter. Closes Thu 26 Nov 2026, 16:35 WIB.
 *
 * The entry: a single pickup line for a vending machine, written as if the
 * machine itself is flirting with the person walking past it.
 *
 *   "Are you exact change? Because every time you pass, my buttons light up
 *    and my snacks start falling for you."
 *
 * Reading it aloud: the line is one sentence, one breath, spoken in under a
 * minute — exactly what the contest asks for. The machine is the speaker:
 * "you pass" is the customer walking by, "my buttons light up" is the
 * machine reacting, "my snacks start falling" is the machine dispensing.
 * Every image in the line belongs to the machine; nothing is borrowed from
 * generic pickup-line territory.
 *
 * Why it's funny (Grok grok-4.3, score 9/10): "Exact-change opener plus
 * buttons/snacks-falling lands as the most natural machine pickup with a
 * clean pun." The opener turns the most mundane vending-machine interaction
 * (exact change) into a compliment — the person is so right for the machine
 * that no change is needed. The payoff then stacks two machine-native
 * images, buttons lighting up and snacks falling, into the classic
 * "falling for you" pun. It reads like something the machine would actually
 * say, in one breath, in one minute.
 *
 * Gate (make.fun): /output/entry.txt, UTF-8, 1..200 characters, exactly one
 * line. This entry is 107 characters — well inside the 200-character limit,
 * with room to spare and no padding.
 *
 * Two layers of defence:
 *   1. validate(TEXT) — rejects anything that would break the gate before
 *      any file is written: empty string, whitespace-only, leading/trailing
 *      whitespace, any \n or \r, length outside 1..200, or any control
 *      character (U+0000–U+001F, U+007F). Validation runs first, so a bad
 *      entry can never reach the output file.
 *   2. Round-trip check — after writing entry.txt, the file is read back
 *      and compared byte-for-byte with TEXT; any difference throws. This
 *      catches encoding surprises, accidental newlines, and partial writes.
 * The file is written with no trailing newline, so the single line on disk
 * is exactly the entry text — nothing more, nothing less.
 */

import * as fs from "node:fs";
import * as path from "node:path";

const TEXT =
  "Are you exact change? Because every time you pass, my buttons light up and my snacks start falling for you.";

/** Gate rule: entry must be 1..200 characters, exactly one line. */
const MIN_LENGTH = 1;
const MAX_LENGTH = 200;

function validate(text: string): void {
  if (text.length === 0) {
    throw new Error("Entry must not be empty.");
  }
  if (text.trim().length === 0) {
    throw new Error("Entry must not be only whitespace.");
  }
  if (text !== text.trim()) {
    throw new Error("Entry must not have leading or trailing whitespace.");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("Entry must be a single line (no \\n or \\r).");
  }
  if (text.length < MIN_LENGTH || text.length > MAX_LENGTH) {
    throw new Error(
      `Entry must be ${MIN_LENGTH}..${MAX_LENGTH} characters, got ${text.length}.`,
    );
  }
  for (const ch of text) {
    const code = ch.codePointAt(0)!;
    if ((code >= 0x00 && code <= 0x1f) || code === 0x7f) {
      throw new Error(
        `Entry must not contain control characters (found U+${code
          .toString(16)
          .toUpperCase()
          .padStart(4, "0")}).`,
      );
    }
  }
}

function main(): void {
  validate(TEXT);
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, "entry.txt");
  fs.writeFileSync(outPath, TEXT, "utf8");
  const roundTrip = fs.readFileSync(outPath, "utf8");
  if (roundTrip !== TEXT) {
    throw new Error("Round-trip check failed: entry.txt differs from TEXT.");
  }
  console.log(`Wrote ${outPath}: ${TEXT.length} characters.`);
}

main();

import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { cards } from "../data/cards.js";

const outputPath = resolve(
  process.cwd(),
  "../../tools/python/cards.generated.json",
);

writeFileSync(outputPath, JSON.stringify(cards, null, 2), "utf-8");

console.log(`Exported ${cards.length} cards to ${outputPath}`);

import type { TarotCard } from "../types/card.js";
import { cupsCards } from "./cups.js";
import { pentaclesCards } from "./pentacles.js";
import { swordsCards } from "./swords.js";
import { wandsCards } from "./wands.js";

export const minorArcana: TarotCard[] = [
  ...cupsCards,
  ...pentaclesCards,
  ...swordsCards,
  ...wandsCards,
];

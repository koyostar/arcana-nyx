import { majorArcana } from "./major-arcana.js";
import type { TarotCard } from "../types/card.js";
import { minorArcana } from "./minor-arcana.js";

export const cards: TarotCard[] = [...majorArcana, ...minorArcana];

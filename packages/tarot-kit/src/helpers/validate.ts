import { cards } from "../data/cards.js";

export const validateUniqueCardIds = (): void => {
  const seen = new Set<string>();

  for (const card of cards) {
    if (seen.has(card.id)) {
      throw new Error(`Duplicate card id found: ${card.id}`);
    }
    seen.add(card.id);
  }
};

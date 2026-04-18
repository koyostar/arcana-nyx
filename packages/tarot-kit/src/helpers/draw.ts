import { cards } from "../data/cards.js";
import { CardOrientation, DrawnCard } from "../types/card.js";

export const drawRandomCard = (): DrawnCard => {
  const randomIndex = Math.floor(Math.random() * cards.length);
  const card = cards[randomIndex];

  const orientation: CardOrientation =
    Math.random() < 0.5 ? "upright" : "reversed";

  return {
    card,
    orientation,
  };
};

export const drawCards = (count: number): DrawnCard[] => {
  const shuffled = [...cards];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, Math.min(count, shuffled.length)).map((card) => ({
    card,
    orientation: Math.random() < 0.5 ? "upright" : "reversed",
  }));
};

export const getCardMeaning = (
  drawn: DrawnCard,
  lang: "en" | "zh" = "en",
): string => {
  return drawn.orientation === "upright"
    ? drawn.card.meaning.upright[lang]
    : drawn.card.meaning.reversed[lang];
};

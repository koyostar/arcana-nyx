import { cards } from "../data/cards.js";
import { TarotCard } from "../types/card.js";

export const getAllCards = (): TarotCard[] => {
  return cards;
};

export const getCardById = (id: string): TarotCard | undefined => {
  return cards.find((card) => card.id === id);
};

export const getCardsByArcana = (
  cards: TarotCard[],
  arcana: "major" | "minor",
): TarotCard[] => {
  return cards.filter((card) => card.arcana === arcana);
};

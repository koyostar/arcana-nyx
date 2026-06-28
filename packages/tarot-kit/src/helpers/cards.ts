import { cards } from "../data/cards.js";
import { DeckScope, TarotCard } from "../types/card.js";

export const getAllCards = (): TarotCard[] => {
  return cards;
};

export const getCardById = (id: string): TarotCard | undefined => {
  return cards.find((card) => card.id === id);
};

export const getCardsByArcana = (
  cardList: TarotCard[],
  arcana: "major" | "minor",
): TarotCard[] => {
  return cardList.filter((card) => card.arcana === arcana);
};

export const getCardsByScope = (
  cardList: TarotCard[],
  scope: DeckScope,
): TarotCard[] => {
  if (scope === "major") {
    return getCardsByArcana(cardList, "major");
  }

  if (scope === "minor") {
    return getCardsByArcana(cardList, "minor");
  }

  return cardList;
};

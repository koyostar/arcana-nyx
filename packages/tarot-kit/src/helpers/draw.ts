import { cards } from "../data/cards.js";
import type { TarotCard } from "../types/card.js";
import { CardOrientation, DrawnCard } from "../types/card.js";

/**
 * Return a random orientation for a drawn card.
 * @returns {'upright'|'reversed'} randomly chosen orientation
 */
const getRandomOrientation = (): CardOrientation =>
  Math.random() < 0.5 ? "upright" : "reversed";

/**
 * Fisher–Yates shuffle for a generic array. Returns a new shuffled copy.
 * @template T
 * @param {T[]} items - input array
 * @returns {T[]} shuffled array copy
 */
const shuffleArray = <T>(items: T[]): T[] => {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

/**
 * Shuffle a list of tarot cards and return a new array.
 * Useful for creating a deck order to present in the UI.
 * @param {TarotCard[]} cardList
 * @returns {TarotCard[]}
 */
export const shuffleCards = (cardList: TarotCard[]): TarotCard[] => {
  return shuffleArray(cardList);
};

/**
 * Draw a single random card from an explicit card list.
 * Orientation is assigned randomly.
 * @param {TarotCard[]} cardList - source card pool
 * @returns {DrawnCard} the drawn card and its orientation
 * @throws {Error} when cardList is empty
 */
export const drawRandomCardFrom = (cardList: TarotCard[]): DrawnCard => {
  if (cardList.length === 0) {
    throw new Error("Cannot draw from an empty card list.");
  }

  const randomIndex = Math.floor(Math.random() * cardList.length);
  const card = cardList[randomIndex];

  return {
    card,
    orientation: getRandomOrientation(),
  };
};

/**
 * Draw multiple cards from a card list without replacement.
 * The returned array order follows a shuffled deck order.
 * @param {TarotCard[]} cardList - source card pool
 * @param {number} count - number of cards to draw
 * @returns {DrawnCard[]} drawn cards with orientations
 */
export const drawCardsFrom = (
  cardList: TarotCard[],
  count: number,
): DrawnCard[] => {
  const shuffled = shuffleArray(cardList);

  return shuffled.slice(0, Math.min(count, shuffled.length)).map((card) => ({
    card,
    orientation: getRandomOrientation(),
  }));
};

/**
 * Convenience: draw a random card from the full package deck.
 * @returns {DrawnCard}
 */
export const drawRandomCard = (): DrawnCard => drawRandomCardFrom(cards);

/**
 * Convenience: draw N cards from the full package deck.
 * @param {number} count
 * @returns {DrawnCard[]}
 */
export const drawCards = (count: number): DrawnCard[] =>
  drawCardsFrom(cards, count);

/**
 * Get the localized meaning string for a drawn card.
 * @param {DrawnCard} drawn
 * @param {'en'|'zh'} [lang='en']
 * @returns {string}
 */
export const getCardMeaning = (
  drawn: DrawnCard,
  lang: "en" | "zh" = "en",
): string => {
  return drawn.orientation === "upright"
    ? drawn.card.meaning.upright[lang]
    : drawn.card.meaning.reversed[lang];
};

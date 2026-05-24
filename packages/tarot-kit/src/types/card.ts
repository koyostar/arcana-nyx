import { LocalizedText } from "./common.js";

export type ArcanaType = "major" | "minor";

export type MinorArcanaSuit = "wands" | "cups" | "swords" | "pentacles";

export type CardOrientation = "upright" | "reversed";

export interface TarotCardMeaning {
  upright: LocalizedText;
  reversed: LocalizedText;
}

export interface TarotCardReadingAspects {
  currentSituation: TarotCardMeaning;
  innerState: TarotCardMeaning;
  rootCause: TarotCardMeaning;
  development: TarotCardMeaning;
  advice: TarotCardMeaning;
}

export interface TarotCardContextualMeanings {
  love: TarotCardMeaning;
  work: TarotCardMeaning;
  interpersonal: TarotCardMeaning;
  others: TarotCardMeaning;
}

export interface TarotCard {
  id: string;
  name: LocalizedText;
  arcana: ArcanaType;
  suit: MinorArcanaSuit | null;
  number: number;
  description: LocalizedText;
  coreKeyword: LocalizedText;
  meaning: TarotCardMeaning;
  readingAspects: TarotCardReadingAspects;
  contextualMeanings: TarotCardContextualMeanings;
}

export interface DrawnCard {
  card: TarotCard;
  orientation: CardOrientation;
}

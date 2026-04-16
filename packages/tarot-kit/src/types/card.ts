import { LocalizedText } from "./common.js";

export type ArcanaType = "major" | "minor";

export type MinorArcanaSuit = "wands" | "cups" | "swords" | "pentacles";

export type CardOrientation = "upright" | "reversed";

export interface TarotCardMeaning {
  upright: LocalizedText;
  reversed: LocalizedText;
}

export interface TarotCard {
  id: string;
  name: LocalizedText;
  arcana: ArcanaType;
  suit: MinorArcanaSuit | null;
  number: number;
  image: {
    url: string;
  };
  description: LocalizedText;
  keywords: {
    en: string[];
    zh: string[];
  };
  meaning: TarotCardMeaning;
}

export interface DrawnCard {
  card: TarotCard;
  orientation: CardOrientation;
}

import type {
  CardOrientation,
  DeckScope,
  SupportedLanguage,
} from "@cometpisces/tarot-kit";
import type { CardInsightText } from "@/lib/types";

export interface HomePageText {
  title: string;
  subtitle: string;
  stats: string;
  cards: string;
  major: string;
  minor: string;
  daily: string;
  library: string;
}

export interface CardsPageText extends CardInsightText {
  title: string;
  cards: string;
  labels: Record<CardsFilterValue, string>;
  upright: string;
  reversed: string;
}

export interface DailyPageText extends CardInsightText {
  title: string;
  subtitle: string;
  fullDeck: string;
  majorArcana: string;
  minorArcana: string;
  shuffle: string;
  deckHint: string;
  cardsAvailable: string;
  historyTitle: string;
  viewDetails: string;
  reset: string;
}

export interface DeckScopeOption {
  value: DeckScope;
  label: string;
}

export type CardsFilterValue =
  | "all"
  | "major"
  | "wands"
  | "cups"
  | "swords"
  | "pentacles";

const HOME_PAGE_TEXT: Record<SupportedLanguage, HomePageText> = {
  zh: {
    title: "夜祇司",
    subtitle: "塔罗占卜与学习伙伴。",
    stats: "已载入",
    cards: "张牌",
    major: "大阿卡纳",
    minor: "小阿卡纳",
    daily: "每日抽牌",
    library: "牌库",
  },
  en: {
    title: "Arcana Nyx",
    subtitle: "A tarot reading and learning companion.",
    stats: "cards loaded",
    cards: "cards",
    major: "major arcana",
    minor: "minor arcana",
    daily: "Daily Draw",
    library: "Card Library",
  },
};

const CARDS_PAGE_TEXT: Record<SupportedLanguage, CardsPageText> = {
  zh: {
    title: "牌库",
    cards: "张牌",
    labels: {
      all: "全部",
      major: "大阿卡纳",
      wands: "权杖",
      cups: "圣杯",
      swords: "宝剑",
      pentacles: "星币",
    },
    upright: "正位",
    reversed: "逆位",
    coreKeyword: "核心關鍵字",
    description: "描述",
    meaning: "含义",
  },
  en: {
    title: "Card Library",
    cards: "cards",
    labels: {
      all: "All",
      major: "Major Arcana",
      wands: "Wands",
      cups: "Cups",
      swords: "Swords",
      pentacles: "Pentacles",
    },
    upright: "Upright",
    reversed: "Reversed",
    coreKeyword: "Core Keyword",
    description: "Description",
    meaning: "Meaning",
  },
};

const DAILY_PAGE_TEXT: Record<SupportedLanguage, DailyPageText> = {
  zh: {
    title: "每日抽牌",
    subtitle: "让牌面轻声告诉你今天将发生什么。",
    description: "描述",
    meaning: "含义",
    coreKeyword: "核心關鍵字",
    fullDeck: "整副牌",
    majorArcana: "大阿卡納",
    minorArcana: "小阿卡納",
    shuffle: "洗牌",
    deckHint: "選擇一張牌，讓它成為今日的啟示。",
    cardsAvailable: "张牌可选",
    historyTitle: "历史抽牌",
    viewDetails: "查看詳情",
    reset: "重新開始",
  },
  en: {
    title: "Daily Draw",
    subtitle: "Let the cards whisper what today may hold.",
    description: "Description",
    meaning: "Meaning",
    coreKeyword: "Core Keyword",
    fullDeck: "Full Deck",
    majorArcana: "Major Arcana",
    minorArcana: "Minor Arcana",
    shuffle: "Shuffle",
    deckHint: "Choose a card and let it become today’s message.",
    cardsAvailable: "cards available",
    historyTitle: "Daily Draw History",
    viewDetails: "View details",
    reset: "Reset",
  },
};

export function getHomePageText(language: SupportedLanguage): HomePageText {
  return HOME_PAGE_TEXT[language];
}

export function getCardsPageText(language: SupportedLanguage): CardsPageText {
  return CARDS_PAGE_TEXT[language];
}

export function getDailyPageText(language: SupportedLanguage): DailyPageText {
  return DAILY_PAGE_TEXT[language];
}

export function getDeckScopeOptions(text: DailyPageText): DeckScopeOption[] {
  return [
    { value: "full", label: text.fullDeck },
    { value: "major", label: text.majorArcana },
    { value: "minor", label: text.minorArcana },
  ];
}

export function getOrientationLabel(
  orientation: CardOrientation,
  language: SupportedLanguage,
): string {
  if (orientation === "reversed") {
    return language === "zh" ? "逆位" : "Reversed";
  }

  return language === "zh" ? "正位" : "Upright";
}

import { DrawnCard } from "@cometpisces/tarot-kit";

const DAILY_DRAW_KEY = "arcana-nyx-daily-draw";
const DAILY_HISTORY_KEY = "arcana-nyx-daily-history";

export interface DailyHistoryRecord {
  date: string;
  cardId: string;
  orientation: DrawnCard["orientation"];
  deckScope: "full" | "major" | "minor";
}

export const getTodayKey = (): string => new Date().toISOString().slice(0, 10);

export const saveDailyDraw = (
  draw: DrawnCard,
  deckScope: "full" | "major" | "minor",
) => {
  if (typeof window === "undefined") {
    return;
  }

  const record: DailyHistoryRecord = {
    date: getTodayKey(),
    cardId: draw.card.id,
    orientation: draw.orientation,
    deckScope,
  };

  window.localStorage.setItem(
    DAILY_DRAW_KEY,
    JSON.stringify({ date: record.date, card: draw }),
  );

  const historyJson = window.localStorage.getItem(DAILY_HISTORY_KEY);
  const history: DailyHistoryRecord[] = historyJson
    ? JSON.parse(historyJson)
    : [];
  const deduped = history.filter((item) => item.date !== record.date);
  window.localStorage.setItem(
    DAILY_HISTORY_KEY,
    JSON.stringify([record, ...deduped]),
  );
};

export const loadDailyDraw = () => {
  if (typeof window === "undefined") {
    return null;
  }

  const storedValue = window.localStorage.getItem(DAILY_DRAW_KEY);
  if (!storedValue) {
    return null;
  }

  try {
    const parsedValue = JSON.parse(storedValue) as {
      date: string;
      card: DrawnCard;
    };

    if (parsedValue.date !== getTodayKey()) {
      window.localStorage.removeItem(DAILY_DRAW_KEY);
      return null;
    }

    return parsedValue;
  } catch {
    return null;
  }
};

export const loadDailyHistory = (): DailyHistoryRecord[] => {
  if (typeof window === "undefined") {
    return [];
  }

  const json = window.localStorage.getItem(DAILY_HISTORY_KEY);
  if (!json) {
    return [];
  }

  try {
    return JSON.parse(json) as DailyHistoryRecord[];
  } catch {
    return [];
  }
};

export const clearDailyDraw = () => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(DAILY_DRAW_KEY);
};

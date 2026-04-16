import type { LocalizedText } from "../types/common.js";
import type { SupportedLanguage } from "../types/common.js";

export const getLocalizedText = (
  text: LocalizedText,
  lang: SupportedLanguage = "en",
): string => {
  return text[lang];
};

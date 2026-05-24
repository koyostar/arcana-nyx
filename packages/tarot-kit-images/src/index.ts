/**
 * Image filename mappings for Rider-Waite tarot cards
 * Maps card IDs to their corresponding image filenames
 */
export const imageMap: Record<string, string> = {
  // Major Arcana
  "major-00-fool": "00-TheFool.png",
  "major-01-magician": "01-TheMagician.png",
  "major-02-high-priestess": "02-TheHighPriestess.png",
  "major-03-empress": "03-TheEmpress.png",
  "major-04-emperor": "04-TheEmperor.png",
  "major-05-hierophant": "05-TheHierophant.png",
  "major-06-lovers": "06-TheLovers.png",
  "major-07-chariot": "07-TheChariot.png",
  "major-08-strength": "08-Strength.png",
  "major-09-hermit": "09-TheHermit.png",
  "major-10-wheel-of-fortune": "10-WheelOfFortune.png",
  "major-11-justice": "11-Justice.png",
  "major-12-hanged-man": "12-TheHangedMan.png",
  "major-13-death": "13-Death.png",
  "major-14-temperance": "14-Temperance.png",
  "major-15-devil": "15-TheDevil.png",
  "major-16-tower": "16-TheTower.png",
  "major-17-star": "17-TheStar.png",
  "major-18-moon": "18-TheMoon.png",
  "major-19-sun": "19-TheSun.png",
  "major-20-judgement": "20-Judgement.png",
  "major-21-world": "21-TheWorld.png",

  // Cups
  "cups-01-ace": "Cups01.png",
  "cups-02": "Cups02.png",
  "cups-03": "Cups03.png",
  "cups-04": "Cups04.png",
  "cups-05": "Cups05.png",
  "cups-06": "Cups06.png",
  "cups-07": "Cups07.png",
  "cups-08": "Cups08.png",
  "cups-09": "Cups09.png",
  "cups-10": "Cups10.png",
  "cups-11-page": "Cups11.png",
  "cups-12-knight": "Cups12.png",
  "cups-13-queen": "Cups13.png",
  "cups-14-king": "Cups14.png",

  // Pentacles
  "pentacles-01-ace": "Pentacles01.png",
  "pentacles-02": "Pentacles02.png",
  "pentacles-03": "Pentacles03.png",
  "pentacles-04": "Pentacles04.png",
  "pentacles-05": "Pentacles05.png",
  "pentacles-06": "Pentacles06.png",
  "pentacles-07": "Pentacles07.png",
  "pentacles-08": "Pentacles08.png",
  "pentacles-09": "Pentacles09.png",
  "pentacles-10": "Pentacles10.png",
  "pentacles-11-page": "Pentacles11.png",
  "pentacles-12-knight": "Pentacles12.png",
  "pentacles-13-queen": "Pentacles13.png",
  "pentacles-14-king": "Pentacles14.png",

  // Swords
  "swords-01-ace": "Swords01.png",
  "swords-02": "Swords02.png",
  "swords-03": "Swords03.png",
  "swords-04": "Swords04.png",
  "swords-05": "Swords05.png",
  "swords-06": "Swords06.png",
  "swords-07": "Swords07.png",
  "swords-08": "Swords08.png",
  "swords-09": "Swords09.png",
  "swords-10": "Swords10.png",
  "swords-11-page": "Swords11.png",
  "swords-12-knight": "Swords12.png",
  "swords-13-queen": "Swords13.png",
  "swords-14-king": "Swords14.png",

  // Wands
  "wands-01-ace": "Wands01.png",
  "wands-02": "Wands02.png",
  "wands-03": "Wands03.png",
  "wands-04": "Wands04.png",
  "wands-05": "Wands05.png",
  "wands-06": "Wands06.png",
  "wands-07": "Wands07.png",
  "wands-08": "Wands08.png",
  "wands-09": "Wands09.png",
  "wands-10": "Wands10.png",
  "wands-11-page": "Wands11.png",
  "wands-12-knight": "Wands12.png",
  "wands-13-queen": "Wands13.png",
  "wands-14-king": "Wands14.png",
};

/**
 * Get the image filename for a card by its ID
 * @param cardId - The card ID from @cometpisces/tarot-kit
 * @returns The image filename, or undefined if not found
 */
export function getImagePath(cardId: string): string | undefined {
  return imageMap[cardId];
}

/**
 * Get all available image filenames
 * @returns Array of all image filenames
 */
export function getAllImagePaths(): string[] {
  return Object.values(imageMap);
}

/**
 * Check if an image exists for a given card ID
 * @param cardId - The card ID to check
 * @returns True if an image exists for this card
 */
export function hasImage(cardId: string): boolean {
  return cardId in imageMap;
}

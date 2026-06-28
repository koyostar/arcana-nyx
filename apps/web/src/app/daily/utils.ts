import type { DrawnCard } from "@cometpisces/tarot-kit";

export function getRandomOrientation(): DrawnCard["orientation"] {
  return Math.random() < 0.5 ? "upright" : "reversed";
}

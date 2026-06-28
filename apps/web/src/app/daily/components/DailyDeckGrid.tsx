"use client";

import Image from "next/image";
import { Box, Typography } from "@mui/material";
import {
  getLocalizedText,
  type SupportedLanguage,
  type TarotCard,
} from "@cometpisces/tarot-kit";

interface DailyDeckGridProps {
  cards: TarotCard[];
  language: SupportedLanguage;
  availableCardsLabel: string;
  onSelectCard: (card: TarotCard) => void;
}

export function DailyDeckGrid({
  cards,
  language,
  availableCardsLabel,
  onSelectCard,
}: DailyDeckGridProps) {
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gap: 1,
          maxHeight: 360,
          overflowY: "auto",
          pr: 0.5,
        }}
      >
        {cards.map((card) => (
          <Box
            key={card.id}
            component="button"
            onClick={() => onSelectCard(card)}
            sx={{
              border: "none",
              p: 0,
              borderRadius: 1.25,
              overflow: "hidden",
              cursor: "pointer",
              position: "relative",
              aspectRatio: "0.63",
              boxShadow:
                "0 10px 24px rgba(0,0,0,0.32), 0 0 18px rgba(139,124,246,0.16)",
              transition: "transform 200ms ease, box-shadow 200ms ease",
              background: "transparent",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow:
                  "0 14px 28px rgba(0,0,0,0.38), 0 0 24px rgba(139,124,246,0.28)",
              },
            }}
          >
            <Image
              src="/images/arcananyx-tarotlight.png"
              alt={getLocalizedText(card.name, language)}
              fill
              sizes="(max-width: 768px) 25vw, 100px"
              style={{ objectFit: "cover" }}
            />
          </Box>
        ))}
      </Box>

      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ textAlign: "center" }}
      >
        {cards.length} {availableCardsLabel}
      </Typography>
    </>
  );
}

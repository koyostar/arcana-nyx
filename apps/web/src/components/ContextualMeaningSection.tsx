"use client";

import { Box, Typography, Stack, Divider, Chip } from "@mui/material";
import type {
  TarotCardContextualMeanings,
  CardOrientation,
  SupportedLanguage,
} from "@cometpisces/tarot-kit";

interface ContextualMeaningSectionProps {
  /** The contextual meanings object from TarotCard */
  contextualMeanings: TarotCardContextualMeanings;
  /** Current card orientation (upright or reversed) */
  orientation: CardOrientation;
  /** Current language */
  language: SupportedLanguage;
}

const contextLabels: Record<
  keyof TarotCardContextualMeanings,
  { en: string; zh: string; icon: string }
> = {
  love: {
    en: "Love & Relationships",
    zh: "愛情",
    icon: "💕",
  },
  work: {
    en: "Work & Career",
    zh: "工作",
    icon: "💼",
  },
  interpersonal: {
    en: "Interpersonal",
    zh: "人際關係",
    icon: "👥",
  },
  others: {
    en: "Others",
    zh: "其他",
    icon: "🌟",
  },
};

/**
 * Displays the 4 contextual meanings of a tarot card based on orientation
 */
export function ContextualMeaningSection({
  contextualMeanings,
  orientation,
  language,
}: ContextualMeaningSectionProps) {
  const contexts: Array<keyof TarotCardContextualMeanings> = [
    "love",
    "work",
    "interpersonal",
    "others",
  ];

  return (
    <Stack>
      <Typography
        variant="h5"
        sx={{
          mb: 1,
          fontFamily: 'var(--font-display), "Cinzel", serif',
          color: "secondary.main",
          textAlign: "center",
        }}
      >
        {language === "en" ? "Contextual Meanings" : "情境意義"}
      </Typography>

      <Stack spacing={0.5}>
        {contexts.map((context, index) => (
          <Box key={context}>
            {index > 0 && <Divider sx={{ mb: 2.5, opacity: 0.3 }} />}
            <Typography
              variant="h6"
              sx={{
                color: "primary.light",
                mb: 0.5,
                fontSize: "1rem",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <span>{contextLabels[context].icon}</span>
              <span>{contextLabels[context][language]}</span>
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 0.7,
              }}
            >
              {contextualMeanings[context][orientation][language]
                .split("/")
                .map((phrase, idx) => (
                  <Chip
                    key={idx}
                    label={phrase.trim()}
                    size="small"
                    sx={{
                      bgcolor: "rgba(139,124,246,0.08)",
                      color: "text.primary",
                      border: "1px solid rgba(169,154,255,0.22)",
                      fontSize: "0.82rem",
                      fontWeight: 500,
                      lineHeight: 1.35,
                      height: "auto",
                      minHeight: 26,
                      "& .MuiChip-label": {
                        whiteSpace: "normal",
                        px: 1,
                        py: 0.35,
                      },
                    }}
                  />
                ))}
            </Box>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
}

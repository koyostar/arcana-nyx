"use client";

import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  Divider,
  Chip,
} from "@mui/material";
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
    <Card
      sx={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
        border: "1px solid rgba(255,255,255,0.06)",
        boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          sx={{
            mb: 3,
            fontFamily: 'var(--font-display), "Cinzel", serif',
            color: "secondary.main",
            textAlign: "center",
          }}
        >
          {language === "en" ? "Contextual Meanings" : "情境意義"}
        </Typography>

        <Stack spacing={2.5}>
          {contexts.map((context, index) => (
            <Box key={context}>
              {index > 0 && <Divider sx={{ mb: 2.5, opacity: 0.3 }} />}
              <Typography
                variant="h6"
                sx={{
                  color: "primary.light",
                  mb: 1,
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
                  gap: 1,
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
                        bgcolor: "rgba(139,124,246,0.12)",
                        color: "text.primary",
                        border: "1px solid rgba(139,124,246,0.3)",
                        fontSize: "0.875rem",
                        fontWeight: 500,
                      }}
                    />
                  ))}
              </Box>
            </Box>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}

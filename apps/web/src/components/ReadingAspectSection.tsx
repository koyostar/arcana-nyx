"use client";

import { Box, Typography, Stack, Divider, Chip } from "@mui/material";
import type {
  TarotCardReadingAspects,
  CardOrientation,
  SupportedLanguage,
} from "@cometpisces/tarot-kit";

interface ReadingAspectSectionProps {
  /** The reading aspects object from TarotCard */
  readingAspects: TarotCardReadingAspects;
  /** Current card orientation (upright or reversed) */
  orientation: CardOrientation;
  /** Current language */
  language: SupportedLanguage;
}

const aspectLabels: Record<
  keyof TarotCardReadingAspects,
  { en: string; zh: string }
> = {
  currentSituation: {
    en: "Current Situation",
    zh: "目前狀況",
  },
  innerState: {
    en: "Inner State",
    zh: "內在狀態",
  },
  rootCause: {
    en: "Root Cause",
    zh: "根本原因",
  },
  development: {
    en: "Development",
    zh: "發展",
  },
  advice: {
    en: "Advice",
    zh: "建議",
  },
};

/**
 * Displays the 5 reading aspects of a tarot card based on orientation
 */
export function ReadingAspectSection({
  readingAspects,
  orientation,
  language,
}: ReadingAspectSectionProps) {
  const aspects: Array<keyof TarotCardReadingAspects> = [
    "currentSituation",
    "innerState",
    "rootCause",
    "development",
    "advice",
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
        {language === "en" ? "Reading Aspects" : "解讀面向"}
      </Typography>

      <Stack spacing={0.5}>
        {aspects.map((aspect, index) => (
          <Box key={aspect}>
            {index > 0 && <Divider sx={{ mb: 1.5, opacity: 0.3 }} />}
            <Typography
              variant="h6"
              sx={{
                color: "primary.light",
                mb: 0.5,
                fontSize: "1rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              {aspectLabels[aspect][language]}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 0.5,
              }}
            >
              {readingAspects[aspect][orientation][language]
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
                      lineHeight: 1,
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

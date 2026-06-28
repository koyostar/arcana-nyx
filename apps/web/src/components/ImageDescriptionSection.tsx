"use client";

import { getImagePath } from "@cometpisces/tarot-kit-images";
import { Box, Stack, Typography } from "@mui/material";
import type {
  CardOrientation,
  DrawnCard,
  SupportedLanguage,
  LocalizedText,
} from "@cometpisces/tarot-kit";
import { getLocalizedText } from "@cometpisces/tarot-kit";

import { TarotCardImage } from "@/components/TarotCardImage";
import type { CardInsightText } from "@/lib/types";
import OrientationChip from "./OrientationChip";

interface ImageDescriptionSectionProps {
  drawnCard: DrawnCard;
  orientation?: CardOrientation;
  text: CardInsightText;
  language: SupportedLanguage;
  direction?: "row" | "column";
}

export default function ImageDescriptionSection({
  drawnCard,
  orientation,
  text,
  language,
  direction = "row",
}: ImageDescriptionSectionProps) {
  const card = drawnCard.card;
  const activeOrientation = orientation ?? drawnCard.orientation;
  const isColumn = direction === "column";
  const orientationLabel =
    activeOrientation === "reversed"
      ? language === "zh"
        ? "逆位"
        : "Reversed"
      : language === "zh"
        ? "正位"
        : "Upright";

  return (
    <Stack sx={{ pt: 1.5 }}>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          mb: 1.25,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            lineHeight: 1.15,
          }}
        >
          {getLocalizedText(card.name as LocalizedText, language)}
        </Typography>

        <OrientationChip
          orientation={activeOrientation}
          label={orientationLabel}
        />
      </Stack>

      <Stack
        direction={direction}
        spacing={isColumn ? 2.5 : 3}
        sx={{ alignItems: isColumn ? "center" : "flex-start" }}
      >
        <Box
          sx={{
            width: isColumn ? "100%" : 160,
            flexShrink: 0,
            textAlign: "center",
          }}
        >
          <TarotCardImage
            imageUrl={`/images/rider-waite/${getImagePath(card.id)}`}
            alt={getLocalizedText(card.name as LocalizedText, language)}
            isReversed={activeOrientation === "reversed"}
            glowColor="rgba(139,124,246,0.24)"
            sx={{ mx: "auto" }}
          />
          <Typography
            variant="caption"
            sx={{
              display: "block",
              color: "text.disabled",
              textTransform: "uppercase",
              mt: 1,
            }}
          >
            {language === "zh" ? "关键词" : "Keyword"}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'var(--font-display), "Cinzel", serif',
              color: "primary.light",
            }}
          >
            {getLocalizedText(card.coreKeyword as LocalizedText, language)}
          </Typography>
        </Box>

        <Box sx={{ flex: 1, minWidth: 0, pt: isColumn ? 0 : 0.5 }}>
          <Stack spacing={2.4}>
            <Box>
              <Typography
                variant="overline"
                sx={{
                  color: "secondary.main",
                  letterSpacing: 1,
                  fontWeight: 700,
                }}
              >
                {text.description}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 0.5, lineHeight: 1.8 }}
              >
                {getLocalizedText(card.description as LocalizedText, language)}
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="overline"
                sx={{
                  color: "secondary.main",
                  letterSpacing: 1,
                  fontWeight: 700,
                }}
              >
                {text.meaning}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 0.5, lineHeight: 1.8 }}
              >
                {card.meaning[activeOrientation][language]}
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
}

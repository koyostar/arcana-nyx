"use client";

import Image from "next/image";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  Box,
  Button,
  Container,
  Typography,
  Paper,
  Stack,
} from "@mui/material";
import {
  drawRandomCard,
  getCardMeaning,
  getLocalizedText,
  type DrawnCard,
} from "@cometpisces/tarot-kit";
import { getImagePath } from "@cometpisces/tarot-kit-images";
import { TarotCardImage } from "@/components/TarotCardImage";
import { ReadingAspectSection } from "@/components/ReadingAspectSection";
import { ContextualMeaningSection } from "@/components/ContextualMeaningSection";

export default function DailyPage() {
  const [drawnCard, setDrawnCard] = useState<DrawnCard | null>(null);
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") === "zh" ? "zh" : "en";
  const text =
    lang === "zh"
      ? {
          title: "每日抽牌",
          subtitle: "让牌面轻声告诉你今天将发生什么。",
          draw: "抽一张牌",
          redraw: "再抽一张",
          clear: "回归静心",
          description: "描述",
          meaning: "含义",
          coreKeyword: "核心關鍵字",
          clickToDraw: "點擊抽取一張牌",
        }
      : {
          title: "Daily Draw",
          subtitle: "Let the cards whisper what today may hold.",
          draw: "Draw a Card",
          redraw: "Draw another card",
          clear: "Return to stillness",
          description: "Description",
          meaning: "Meaning",
          coreKeyword: "Core Keyword",
          clickToDraw: "Click to draw a card",
        };
  const orientationLabel =
    drawnCard?.orientation === "reversed"
      ? lang === "zh"
        ? "逆位"
        : "Reversed"
      : lang === "zh"
        ? "正位"
        : "Upright";

  const handleDrawCard = () => {
    setDrawnCard(drawRandomCard());
  };

  return (
    <Container maxWidth="xs" sx={{ minHeight: "100vh", py: 4, px: 2.25 }}>
      <Stack spacing={3.25}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.5 }}>
            {text.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {text.subtitle}
          </Typography>
        </Box>

        {/* Card Deck Pile (shown when no card is drawn) */}
        {!drawnCard && (
          <Box sx={{ textAlign: "center" }}>
            <Box
              onClick={handleDrawCard}
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: 200,
                mx: "auto",
                cursor: "pointer",
                transition: "transform 200ms ease-in-out",
                "&:hover": {
                  transform: "translateY(-8px)",
                },
              }}
            >
              {/* Hover glow effect */}
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 180,
                  height: 180,
                  background:
                    "radial-gradient(circle, rgba(139,124,246,0.3), transparent 70%)",
                  opacity: 0,
                  transition: "opacity 200ms ease-in-out",
                  zIndex: 0,
                  pointerEvents: "none",
                  ".MuiBox-root:hover &": {
                    opacity: 1,
                  },
                }}
              />

              {/* Card back image */}
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  pt: "171.4%",
                  borderRadius: 0.5,
                  overflow: "hidden",
                  boxShadow:
                    "0 12px 32px rgba(0,0,0,0.4), 0 0 24px rgba(139,124,246,0.2)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  zIndex: 1,
                  transition: "box-shadow 200ms ease-in-out",
                  "&:hover": {
                    boxShadow:
                      "0 16px 40px rgba(0,0,0,0.5), 0 0 40px rgba(139,124,246,0.4)",
                  },
                }}
              >
                <Image
                  src="/images/arcananyx-tarotlight.png"
                  alt="Tarot card back"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </Box>
            </Box>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ mt: 2, display: "block", letterSpacing: "0.1em" }}
            >
              {text.clickToDraw}
            </Typography>
          </Box>
        )}

        {/* Action buttons (shown when card is drawn) */}
        {drawnCard && (
          <Stack direction="column" spacing={1.25}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleDrawCard}
            >
              {text.redraw}
            </Button>
            <Button variant="outlined" onClick={() => setDrawnCard(null)}>
              {text.clear}
            </Button>
          </Stack>
        )}

        {/* Drawn card display */}
        {/* Drawn card display */}
        {drawnCard && (
          <Stack spacing={3}>
            {/* Card Image */}
            <Paper
              elevation={0}
              sx={{
                p: 2.25,
                bgcolor: "rgba(24, 28, 43, 0.72)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <TarotCardImage
                imageUrl={`/images/rider-waite/${getImagePath(drawnCard.card.id)}`}
                alt={getLocalizedText(drawnCard.card.name, lang)}
                isReversed={drawnCard.orientation === "reversed"}
                maxWidth={250}
                glowColor="rgba(139,124,246,0.22)"
                priority
                sx={{ mb: 2.2 }}
              />

              {/* Card Name and Orientation */}
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, mb: 1, color: "text.primary" }}
                >
                  {getLocalizedText(drawnCard.card.name, lang)}
                </Typography>
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    px: 1.2,
                    py: 0.35,
                    borderRadius: 999,
                    bgcolor:
                      drawnCard.orientation === "reversed"
                        ? "rgba(239,166,200,0.12)"
                        : "rgba(242,211,139,0.12)",
                    color:
                      drawnCard.orientation === "reversed"
                        ? "#EFA6C8"
                        : "#F2D38B",
                    border:
                      drawnCard.orientation === "reversed"
                        ? "1px solid rgba(239,166,200,0.36)"
                        : "1px solid rgba(242,211,139,0.36)",
                    fontSize: 12,
                    letterSpacing: 0.5,
                    mb: 0.5,
                  }}
                >
                  {orientationLabel}
                </Box>
              </Box>

              {/* Core Keyword */}
              <Box sx={{ mt: 2.2, textAlign: "center" }}>
                <Typography
                  variant="caption"
                  color="secondary.main"
                  sx={{
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    fontSize: "0.7rem",
                  }}
                >
                  {text.coreKeyword}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: 'var(--font-display), "Cinzel", serif',
                    color: "primary.light",
                    mt: 0.5,
                  }}
                >
                  {getLocalizedText(drawnCard.card.coreKeyword, lang)}
                </Typography>
              </Box>

              {/* Description */}
              <Box sx={{ mt: 2.2 }}>
                <Typography variant="subtitle2" color="secondary.main">
                  {text.description}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 0.5 }}
                >
                  {getLocalizedText(drawnCard.card.description, lang)}
                </Typography>
              </Box>

              {/* Meaning */}
              <Box sx={{ mt: 2.2 }}>
                <Typography variant="subtitle2" color="secondary.main">
                  {text.meaning}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 0.5 }}
                >
                  {getCardMeaning(drawnCard, lang)}
                </Typography>
              </Box>
            </Paper>

            {/* Reading Aspects */}
            <ReadingAspectSection
              readingAspects={drawnCard.card.readingAspects}
              orientation={drawnCard.orientation}
              language={lang}
            />

            {/* Contextual Meanings */}
            <ContextualMeaningSection
              contextualMeanings={drawnCard.card.contextualMeanings}
              orientation={drawnCard.orientation}
              language={lang}
            />
          </Stack>
        )}
      </Stack>
    </Container>
  );
}

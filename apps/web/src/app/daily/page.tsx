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
        }
      : {
          title: "Daily Draw",
          subtitle: "Let the cards whisper what today may hold.",
          draw: "Draw a Card",
          redraw: "Draw another card",
          clear: "Return to stillness",
          description: "Description",
          meaning: "Meaning",
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
        <Stack direction="column" spacing={1.25}>
          <Button variant="contained" color="primary" onClick={handleDrawCard}>
            {drawnCard ? text.redraw : text.draw}
          </Button>
          {drawnCard && (
            <Button variant="outlined" onClick={() => setDrawnCard(null)}>
              {text.clear}
            </Button>
          )}
        </Stack>
        {drawnCard && (
          <Paper
            elevation={0}
            sx={{
              p: 2.25,
              borderRadius: 4,
              bgcolor: "rgba(24, 28, 43, 0.72)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mb: 2.2,
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  width: 220,
                  height: 220,
                  borderRadius: "50%",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  background:
                    "radial-gradient(circle, rgba(139,124,246,0.22) 0%, rgba(242,211,139,0.1) 45%, transparent 72%)",
                  filter: "blur(8px)",
                }}
              />
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: 250,
                  pt: "156%",
                  borderRadius: 2.5,
                  overflow: "hidden",
                  boxShadow:
                    "0 16px 40px rgba(0,0,0,0.45), 0 0 32px rgba(139,124,246,0.28)",
                  zIndex: 1,
                }}
              >
                <Image
                  src={drawnCard.card.image.url}
                  alt={getLocalizedText(drawnCard.card.name, lang)}
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </Box>
            </Box>
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
        )}
      </Stack>
    </Container>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  Paper,
  ToggleButton,
  ToggleButtonGroup,
  Stack,
} from "@mui/material";
import {
  drawRandomCard,
  getCardMeaning,
  getLocalizedText,
  type DrawnCard,
  type SupportedLanguage,
} from "@cometpisces/tarot-kit";

export default function DailyPage() {
  const [drawnCard, setDrawnCard] = useState<DrawnCard | null>(null);
  const [lang, setLang] = useState<SupportedLanguage>("en");

  const handleDrawCard = () => {
    setDrawnCard(drawRandomCard());
  };

  return (
    <Container maxWidth="sm" sx={{ minHeight: "100vh", py: 6 }}>
      <Stack spacing={4}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Daily Draw
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Draw a card for today&apos;s guidance.
          </Typography>
        </Box>
        <ToggleButtonGroup
          value={lang}
          exclusive
          onChange={(_e, value) => {
            if (value === "en" || value === "zh")
              setLang(value as SupportedLanguage);
          }}
          size="small"
          color="primary"
        >
          <ToggleButton value="en">EN</ToggleButton>
          <ToggleButton value="zh">中文</ToggleButton>
        </ToggleButtonGroup>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="primary" onClick={handleDrawCard}>
            {drawnCard ? "Draw Again" : "Draw a Card"}
          </Button>
          {drawnCard && (
            <Button variant="outlined" onClick={() => setDrawnCard(null)}>
              Clear
            </Button>
          )}
        </Stack>
        {drawnCard && (
          <Paper elevation={2} sx={{ p: 3, borderRadius: 3 }}>
            <Box
              sx={{
                overflow: "hidden",
                borderRadius: 2,
                border: 1,
                borderColor: "divider",
                bgcolor: "grey.50",
                mb: 2,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box sx={{ position: "relative", width: 160, pt: "150%" }}>
                <Image
                  src={drawnCard.card.image.url}
                  alt={getLocalizedText(drawnCard.card.name, lang)}
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </Box>
            </Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {getLocalizedText(drawnCard.card.name, lang)}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  mt: 0.5,
                  textTransform: "uppercase",
                  letterSpacing: 2,
                  color: "text.secondary",
                  display: "block",
                }}
              >
                {drawnCard.orientation}
              </Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle2" color="text.primary">
                Description
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 0.5 }}
              >
                {getLocalizedText(drawnCard.card.description, lang)}
              </Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle2" color="text.primary">
                Meaning
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

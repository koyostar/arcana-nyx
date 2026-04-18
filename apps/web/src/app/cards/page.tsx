"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import {
  getAllCards,
  getLocalizedText,
  type SupportedLanguage,
} from "@cometpisces/tarot-kit";

const SUIT_LABELS: Record<string, string> = {
  all: "All",
  major: "Major Arcana",
  wands: "Wands",
  cups: "Cups",
  swords: "Swords",
  pentacles: "Pentacles",
};

const allCards = getAllCards();

export default function CardsPage() {
  const [lang, setLang] = useState<SupportedLanguage>("en");
  const [filter, setFilter] = useState("all");

  const displayed = allCards.filter((card) => {
    if (filter === "all") return true;
    if (filter === "major") return card.arcana === "major";
    return card.suit === filter;
  });

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Stack spacing={4}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Card Library
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
            {displayed.length} cards
          </Typography>
        </Box>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          alignItems={{ sm: "center" }}
          justifyContent="space-between"
        >
          <ToggleButtonGroup
            value={filter}
            exclusive
            onChange={(_e, v) => {
              if (v !== null) setFilter(v);
            }}
            size="small"
          >
            {Object.entries(SUIT_LABELS).map(([value, label]) => (
              <ToggleButton key={value} value={value}>
                {label}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>

          <ToggleButtonGroup
            value={lang}
            exclusive
            onChange={(_e, v) => {
              if (v === "en" || v === "zh") setLang(v);
            }}
            size="small"
            color="primary"
          >
            <ToggleButton value="en">EN</ToggleButton>
            <ToggleButton value="zh">中文</ToggleButton>
          </ToggleButtonGroup>
        </Stack>

        <Grid container spacing={2}>
          {displayed.map((card) => (
            <Grid key={card.id} size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <Paper
                elevation={1}
                sx={{
                  borderRadius: 2,
                  overflow: "hidden",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{ position: "relative", pt: "140%", bgcolor: "grey.100" }}
                >
                  <Image
                    src={card.image.url}
                    alt={getLocalizedText(card.name, lang)}
                    fill
                    style={{ objectFit: "contain" }}
                    sizes="(max-width: 600px) 50vw, (max-width: 900px) 33vw, 200px"
                  />
                </Box>
                <Box sx={{ p: 1.5 }}>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 600, lineHeight: 1.3 }}
                  >
                    {getLocalizedText(card.name, lang)}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ textTransform: "capitalize" }}
                  >
                    {card.arcana === "major"
                      ? "Major Arcana"
                      : (card.suit ?? "")}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
}

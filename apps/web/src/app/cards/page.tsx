"use client";

import Image from "next/image";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
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

const allCards = getAllCards();

const suitColors = {
  major: {
    color: "#F2D38B",
    glow: "rgba(242,211,139,0.25)",
  },
  wands: {
    color: "#FFB86B",
    glow: "rgba(255,184,107,0.24)",
  },
  cups: {
    color: "#8EE6D1",
    glow: "rgba(142,230,209,0.24)",
  },
  swords: {
    color: "#C8D3FF",
    glow: "rgba(200,211,255,0.22)",
  },
  pentacles: {
    color: "#A8E6A1",
    glow: "rgba(168,230,161,0.22)",
  },
} as const;

export default function CardsPage() {
  const [filter, setFilter] = useState("all");
  const searchParams = useSearchParams();
  const lang: SupportedLanguage =
    searchParams.get("lang") === "zh" ? "zh" : "en";
  const text =
    lang === "zh"
      ? {
          title: "牌库",
          cards: "张牌",
          labels: {
            all: "全部",
            major: "大阿卡纳",
            wands: "权杖",
            cups: "圣杯",
            swords: "宝剑",
            pentacles: "星币",
          },
        }
      : {
          title: "Card Library",
          cards: "cards",
          labels: {
            all: "All",
            major: "Major Arcana",
            wands: "Wands",
            cups: "Cups",
            swords: "Swords",
            pentacles: "Pentacles",
          },
        };

  const displayed = allCards.filter((card) => {
    if (filter === "all") return true;
    if (filter === "major") return card.arcana === "major";
    return card.suit === filter;
  });

  return (
    <Container maxWidth="xs" sx={{ py: 4, px: 2.25 }}>
      <Stack spacing={3.25}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.5 }}>
            {text.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
            {displayed.length} {text.cards}
          </Typography>
        </Box>

        <Stack direction="column" spacing={2}>
          <ToggleButtonGroup
            value={filter}
            exclusive
            onChange={(_e, v) => {
              if (v !== null) setFilter(v);
            }}
            size="small"
            sx={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              gap: 0.9,
              "& .MuiToggleButton-root": {
                px: 1.4,
                py: 0.5,
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.14)",
                bgcolor: "rgba(255,255,255,0.04)",
                lineHeight: 1.2,
              },
            }}
          >
            {Object.entries(text.labels).map(([value, label]) => (
              <ToggleButton key={value} value={value}>
                {label}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Stack>

        <Grid container spacing={1.8}>
          {displayed.map((card) => (
            <Grid key={card.id} size={{ xs: 6 }}>
              <Paper
                elevation={0}
                sx={{ bgcolor: "transparent", border: 0, position: "relative" }}
              >
                {(() => {
                  const suitKey =
                    card.arcana === "major"
                      ? "major"
                      : ((card.suit ?? "wands") as
                          | "wands"
                          | "cups"
                          | "swords"
                          | "pentacles");
                  const suitTone = suitColors[suitKey];

                  return (
                    <>
                      <Box
                        sx={{
                          position: "absolute",
                          width: "70%",
                          height: 64,
                          left: "15%",
                          bottom: 64,
                          borderRadius: "50%",
                          background: `radial-gradient(circle, ${suitTone.glow} 0%, transparent 72%)`,
                          filter: "blur(8px)",
                          pointerEvents: "none",
                        }}
                      />
                      <Box
                        sx={{
                          position: "relative",
                          pt: "146%",
                          borderRadius: 2,
                          overflow: "hidden",
                          border: "1px solid rgba(255,255,255,0.08)",
                          boxShadow: `0 16px 40px rgba(0,0,0,0.45), 0 0 20px ${suitTone.glow}`,
                          transition:
                            "transform 180ms ease, box-shadow 180ms ease",
                          "&:hover": {
                            transform: "translateY(-6px)",
                            boxShadow: `0 16px 40px rgba(0,0,0,0.45), 0 0 26px ${suitTone.glow}`,
                          },
                        }}
                      >
                        <Image
                          src={card.image.url}
                          alt={getLocalizedText(card.name, lang)}
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="(max-width: 600px) 50vw, (max-width: 900px) 33vw, 200px"
                        />
                      </Box>
                      <Box sx={{ pt: 1.1, px: 0.5, pb: 0.3 }}>
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 500, lineHeight: 1.3 }}
                        >
                          {getLocalizedText(card.name, lang)}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: suitTone.color,
                            textTransform: "capitalize",
                          }}
                        >
                          {card.arcana === "major"
                            ? text.labels.major
                            : (text.labels[
                                (card.suit ?? "all") as keyof typeof text.labels
                              ] ?? "")}
                        </Typography>
                      </Box>
                    </>
                  );
                })()}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
}

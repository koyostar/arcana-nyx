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
  Dialog,
  DialogContent,
  IconButton,
  Tabs,
  Tab,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  getAllCards,
  getLocalizedText,
  type SupportedLanguage,
  type TarotCard,
} from "@cometpisces/tarot-kit";
import { getImagePath } from "@cometpisces/tarot-kit-images";
import { TarotCardImage } from "@/components/TarotCardImage";
import { ReadingAspectSection } from "@/components/ReadingAspectSection";
import { ContextualMeaningSection } from "@/components/ContextualMeaningSection";

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
  const [selectedCard, setSelectedCard] = useState<TarotCard | null>(null);
  const [orientationTab, setOrientationTab] = useState<0 | 1>(0);
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
          upright: "正位",
          reversed: "逆位",
          coreKeyword: "核心關鍵字",
          description: "描述",
          meaning: "含义",
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
          upright: "Upright",
          reversed: "Reversed",
          coreKeyword: "Core Keyword",
          description: "Description",
          meaning: "Meaning",
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
          {displayed.map((card) => {
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
              <Grid key={card.id} size={{ xs: 6 }}>
                <Paper
                  elevation={0}
                  onClick={() => setSelectedCard(card)}
                  sx={{
                    bgcolor: "transparent",
                    border: 0,
                    position: "relative",
                    cursor: "pointer",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      transition: "transform 180ms ease, box-shadow 180ms ease",
                      "&:hover": {
                        transform: "translateY(-6px)",
                      },
                    }}
                  >
                    <TarotCardImage
                      imageUrl={`/images/rider-waite/${getImagePath(card.id)}`}
                      alt={getLocalizedText(card.name, lang)}
                      glowColor={suitTone.glow}
                      maxWidth="100%"
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
                </Paper>
              </Grid>
            );
          })}
        </Grid>

        {/* Card Details Modal */}
        <Dialog
          open={!!selectedCard}
          onClose={() => {
            setSelectedCard(null);
            setOrientationTab(0);
          }}
          maxWidth="sm"
          fullWidth
          slotProps={{
            paper: {
              sx: {
                bgcolor: "background.default",
                backgroundImage: "none",
                maxHeight: "90vh",
              },
            },
          }}
        >
          {selectedCard && (
            <>
              <IconButton
                onClick={() => {
                  setSelectedCard(null);
                  setOrientationTab(0);
                }}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: "text.secondary",
                  zIndex: 1,
                }}
              >
                <CloseIcon />
              </IconButton>
              <DialogContent sx={{ p: 3 }}>
                <Stack spacing={3}>
                  {/* Card Image and Basic Info */}
                  <Box>
                    <TarotCardImage
                      imageUrl={`/images/rider-waite/${getImagePath(selectedCard.id)}`}
                      alt={getLocalizedText(selectedCard.name, lang)}
                      isReversed={orientationTab === 1}
                      maxWidth={220}
                      glowColor={
                        suitColors[
                          selectedCard.arcana === "major"
                            ? "major"
                            : ((selectedCard.suit ?? "wands") as
                                | "wands"
                                | "cups"
                                | "swords"
                                | "pentacles")
                        ].glow
                      }
                      sx={{ mx: "auto" }}
                    />
                    <Box sx={{ textAlign: "center", mt: 2 }}>
                      <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                        {getLocalizedText(selectedCard.name, lang)}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color:
                            suitColors[
                              selectedCard.arcana === "major"
                                ? "major"
                                : ((selectedCard.suit ?? "wands") as
                                    | "wands"
                                    | "cups"
                                    | "swords"
                                    | "pentacles")
                            ].color,
                          textTransform: "capitalize",
                        }}
                      >
                        {selectedCard.arcana === "major"
                          ? text.labels.major
                          : (text.labels[
                              (selectedCard.suit ??
                                "all") as keyof typeof text.labels
                            ] ?? "")}
                      </Typography>
                    </Box>

                    {/* Core Keyword */}
                    <Box sx={{ mt: 2, textAlign: "center" }}>
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
                        {getLocalizedText(selectedCard.coreKeyword, lang)}
                      </Typography>
                    </Box>

                    {/* Description */}
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="subtitle2" color="secondary.main">
                        {text.description}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 0.5 }}
                      >
                        {getLocalizedText(selectedCard.description, lang)}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Orientation Tabs */}
                  <Tabs
                    value={orientationTab}
                    onChange={(_, v) => setOrientationTab(v)}
                    variant="fullWidth"
                    sx={{
                      borderBottom: 1,
                      borderColor: "divider",
                      "& .MuiTab-root": {
                        fontWeight: 700,
                      },
                    }}
                  >
                    <Tab label={text.upright} />
                    <Tab label={text.reversed} />
                  </Tabs>

                  {/* Meaning */}
                  <Box>
                    <Typography variant="subtitle2" color="secondary.main">
                      {text.meaning}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 0.5 }}
                    >
                      {
                        selectedCard.meaning[
                          orientationTab === 0 ? "upright" : "reversed"
                        ][lang]
                      }
                    </Typography>
                  </Box>

                  {/* Reading Aspects */}
                  <ReadingAspectSection
                    readingAspects={selectedCard.readingAspects}
                    orientation={orientationTab === 0 ? "upright" : "reversed"}
                    language={lang}
                  />

                  {/* Contextual Meanings */}
                  <ContextualMeaningSection
                    contextualMeanings={selectedCard.contextualMeanings}
                    orientation={orientationTab === 0 ? "upright" : "reversed"}
                    language={lang}
                  />
                </Stack>
              </DialogContent>
            </>
          )}
        </Dialog>
      </Stack>
    </Container>
  );
}

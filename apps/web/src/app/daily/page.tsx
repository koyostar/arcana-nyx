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
  getAllCards,
  getCardsByArcana,
  getCardMeaning,
  getLocalizedText,
  shuffleCards,
  type DrawnCard,
  type TarotCard,
} from "@cometpisces/tarot-kit";
import { getImagePath } from "@cometpisces/tarot-kit-images";
import { TarotCardImage } from "@/components/TarotCardImage";
import { ReadingAspectSection } from "@/components/ReadingAspectSection";
import { ContextualMeaningSection } from "@/components/ContextualMeaningSection";

const DAILY_DRAW_STORAGE_KEY = "arcana-nyx-daily-draw";

type DeckScope = "full" | "major" | "minor";

function getTodayKey() {
  return new Date().toISOString().slice(0, 10);
}

function readStoredDailyDraw() {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const storedValue = window.localStorage.getItem(DAILY_DRAW_STORAGE_KEY);
    if (!storedValue) {
      return null;
    }

    const parsedValue = JSON.parse(storedValue) as {
      date: string;
      card: DrawnCard;
    };

    if (parsedValue.date !== getTodayKey()) {
      window.localStorage.removeItem(DAILY_DRAW_STORAGE_KEY);
      return null;
    }

    return parsedValue;
  } catch {
    return null;
  }
}

function writeStoredDailyDraw(card: DrawnCard) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(
    DAILY_DRAW_STORAGE_KEY,
    JSON.stringify({ date: getTodayKey(), card }),
  );
}

function getCardsForScope(scope: DeckScope): TarotCard[] {
  const allCards = getAllCards();

  if (scope === "major") {
    return getCardsByArcana(allCards, "major");
  }

  if (scope === "minor") {
    return getCardsByArcana(allCards, "minor");
  }

  return allCards;
}

function getRandomOrientation(): DrawnCard["orientation"] {
  return Math.random() < 0.5 ? "upright" : "reversed";
}

export default function DailyPage() {
  const storedDailyDraw = readStoredDailyDraw();
  const [drawnCard, setDrawnCard] = useState<DrawnCard | null>(
    storedDailyDraw?.card ?? null,
  );
  const [isDailyLocked, setIsDailyLocked] = useState<boolean>(
    () => !!storedDailyDraw,
  );
  const [deckScope, setDeckScope] = useState<DeckScope>("full");
  const [deckCards, setDeckCards] = useState<TarotCard[]>(() => {
    if (storedDailyDraw) {
      return [];
    }
    return shuffleCards(getCardsForScope("full"));
  });
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
          clickToDraw: "點擊牌面抽取一張牌",
          fullDeck: "整副牌",
          majorArcana: "大阿卡納",
          minorArcana: "小阿卡納",
          shuffle: "洗牌",
          deckHint: "選擇一張牌，讓它成為今日的啟示。",
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
          clickToDraw: "Tap a card to draw from the deck",
          fullDeck: "Full Deck",
          majorArcana: "Major Arcana",
          minorArcana: "Minor Arcana",
          shuffle: "Shuffle",
          deckHint: "Choose a card and let it become today’s message.",
        };
  const orientationLabel =
    drawnCard?.orientation === "reversed"
      ? lang === "zh"
        ? "逆位"
        : "Reversed"
      : lang === "zh"
        ? "正位"
        : "Upright";

  const handleSelectCard = (card: TarotCard) => {
    if (isDailyLocked || drawnCard) {
      return;
    }

    const nextCard: DrawnCard = {
      card,
      orientation: getRandomOrientation(),
    };

    setDrawnCard(nextCard);
    setIsDailyLocked(true);
    setDeckCards((currentDeck) =>
      currentDeck.filter((item) => item.id !== card.id),
    );
    writeStoredDailyDraw(nextCard);
  };

  const handleShuffleDeck = () => {
    if (isDailyLocked || drawnCard) {
      return;
    }

    setDeckCards((currentDeck) => shuffleCards(currentDeck));
  };

  const handleClear = () => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(DAILY_DRAW_STORAGE_KEY);
    }
    setDrawnCard(null);
    setIsDailyLocked(false);
    setDeckCards(shuffleCards(getCardsForScope(deckScope)));
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

        {/* Card deck picker (shown when no card is drawn) */}
        {!drawnCard && (
          <Stack spacing={2}>
            <Stack
              direction="row"
              spacing={1}
              sx={{ flexWrap: "wrap", gap: 1 }}
            >
              {[
                { value: "full", label: text.fullDeck },
                { value: "major", label: text.majorArcana },
                { value: "minor", label: text.minorArcana },
              ].map((option) => (
                <Button
                  key={option.value}
                  variant={
                    deckScope === option.value ? "contained" : "outlined"
                  }
                  size="small"
                  onClick={() => {
                    if (isDailyLocked) {
                      return;
                    }
                    setDeckScope(option.value as DeckScope);
                    setDeckCards(
                      shuffleCards(getCardsForScope(option.value as DeckScope)),
                    );
                  }}
                  disabled={isDailyLocked}
                  sx={{ borderRadius: 999 }}
                >
                  {option.label}
                </Button>
              ))}
              <Button
                variant="outlined"
                size="small"
                onClick={handleShuffleDeck}
                disabled={isDailyLocked || deckCards.length === 0}
                sx={{ borderRadius: 999, ml: "auto" }}
              >
                {text.shuffle}
              </Button>
            </Stack>

            <Typography variant="body2" color="text.secondary">
              {text.deckHint}
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                gap: 1,
                maxHeight: 360,
                overflowY: "auto",
                pr: 0.5,
              }}
            >
              {deckCards.map((card) => (
                <Box
                  key={card.id}
                  component="button"
                  onClick={() => handleSelectCard(card)}
                  sx={{
                    border: "none",
                    p: 0,
                    borderRadius: 1.25,
                    overflow: "hidden",
                    cursor: "pointer",
                    position: "relative",
                    aspectRatio: "0.63",
                    boxShadow:
                      "0 10px 24px rgba(0,0,0,0.32), 0 0 18px rgba(139,124,246,0.16)",
                    transition: "transform 200ms ease, box-shadow 200ms ease",
                    background: "transparent",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow:
                        "0 14px 28px rgba(0,0,0,0.38), 0 0 24px rgba(139,124,246,0.28)",
                    },
                  }}
                >
                  <Image
                    src="/images/arcananyx-tarotlight.png"
                    alt={getLocalizedText(card.name, lang)}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              ))}
            </Box>

            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ textAlign: "center" }}
            >
              {deckCards.length}{" "}
              {lang === "zh" ? "张牌可选" : "cards available"}
            </Typography>
          </Stack>
        )}

        {/* Action buttons (shown when card is drawn) */}
        {drawnCard && (
          <Stack direction="column" spacing={1.25}>
            <Button variant="contained" color="primary" onClick={handleClear}>
              {text.clear}
            </Button>
            <Button variant="outlined" onClick={handleClear}>
              {lang === "zh" ? "重新开始" : "Start over"}
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
              {isDailyLocked && (
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
                    {lang === "zh" ? "今日卡牌" : "Today’s draw"}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 0.5 }}
                  >
                    {lang === "zh"
                      ? "今日的抽牌已被保存，明天再来会有新的启示。"
                      : "This draw is saved for today. Return tomorrow for a fresh message."}
                  </Typography>
                </Box>
              )}

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

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  IconButton,
  Tab,
  Tabs,
  Typography,
  Paper,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  getAllCards,
  getCardById,
  getDeckByScope,
  getCardMeaning,
  getLocalizedText,
  shuffleCards,
  type DeckScope,
  type DrawnCard,
  type TarotCard,
} from "@cometpisces/tarot-kit";
import { getImagePath } from "@cometpisces/tarot-kit-images";
import { TarotCardImage } from "@/components/TarotCardImage";
import { ReadingAspectSection } from "@/components/ReadingAspectSection";
import { ContextualMeaningSection } from "@/components/ContextualMeaningSection";
import {
  clearDailyDraw,
  loadDailyDraw,
  loadDailyHistory,
  saveDailyDraw,
  type DailyHistoryRecord,
} from "@/lib/storage";

function getRandomOrientation(): DrawnCard["orientation"] {
  return Math.random() < 0.5 ? "upright" : "reversed";
}

export default function DailyPage() {
  const storedDailyDraw = loadDailyDraw();
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
    return getDeckByScope(getAllCards(), "full", true);
  });
  const [resultOpen, setResultOpen] = useState<boolean>(
    () => !!storedDailyDraw,
  );
  const [orientationTab, setOrientationTab] = useState(0);
  const [dailyHistory, setDailyHistory] = useState<DailyHistoryRecord[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
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

  // Load client-side data after hydration to avoid mismatch
  useEffect(() => {
    setIsMounted(true); // eslint-disable-line react-hooks/set-state-in-effect
    setDailyHistory(loadDailyHistory());
  }, []);

  const handleSelectCard = (card: TarotCard) => {
    if (isDailyLocked || drawnCard) {
      return;
    }

    const nextCard: DrawnCard = {
      card,
      orientation: getRandomOrientation(),
    };

    setDrawnCard(nextCard);
    setResultOpen(true);
    setIsDailyLocked(true);
    setDeckCards((currentDeck) =>
      currentDeck.filter((item) => item.id !== card.id),
    );
    saveDailyDraw(nextCard, deckScope);
    setDailyHistory((current) => [
      {
        date: new Date().toISOString().slice(0, 10),
        cardId: nextCard.card.id,
        orientation: nextCard.orientation,
        deckScope,
      },
      ...current.filter(
        (item) => item.date !== new Date().toISOString().slice(0, 10),
      ),
    ]);
  };

  const handleOpenResults = () => {
    setResultOpen(true);
  };

  const handleCloseResults = () => {
    setResultOpen(false);
    setOrientationTab(0);
  };

  const handleShuffleDeck = () => {
    if (isDailyLocked || drawnCard) {
      return;
    }

    setDeckCards((currentDeck) => shuffleCards(currentDeck));
  };

  const handleClear = () => {
    clearDailyDraw();
    setDrawnCard(null);
    setIsDailyLocked(false);
    setDeckCards(getDeckByScope(getAllCards(), deckScope, true));
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
                      getDeckByScope(
                        getAllCards(),
                        option.value as DeckScope,
                        true,
                      ),
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
                    sizes="(max-width: 768px) 25vw, 100px"
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

        {isMounted && dailyHistory.length > 0 && !drawnCard && (
          <Paper
            elevation={0}
            sx={{
              p: 2,
              bgcolor: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 700 }}>
              {lang === "zh" ? "历史抽牌" : "Daily Draw History"}
            </Typography>
            <Stack spacing={1}>
              {dailyHistory.slice(0, 3).map((record) => {
                const card = getCardById(record.cardId);
                if (!card) return null;

                return (
                  <Box
                    key={record.date}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      {record.date}
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {getLocalizedText(card.name, lang)}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {record.orientation === "reversed"
                        ? lang === "zh"
                          ? "逆位"
                          : "Reversed"
                        : lang === "zh"
                          ? "正位"
                          : "Upright"}
                    </Typography>
                  </Box>
                );
              })}
            </Stack>
          </Paper>
        )}

        {/* Action buttons (shown when card is drawn) */}
        {drawnCard && (
          <Stack direction="row" spacing={1.25}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleOpenResults}
            >
              {lang === "zh" ? "查看詳情" : "View details"}
            </Button>
            <Button variant="outlined" onClick={handleClear}>
              {lang === "zh" ? "重新開始" : "Reset"}
            </Button>
          </Stack>
        )}

        {/* Drawn card summary */}
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

            <Dialog
              open={resultOpen}
              onClose={handleCloseResults}
              maxWidth="sm"
              fullWidth
              fullScreen={isSmall}
              slotProps={{
                paper: {
                  sx: {
                    bgcolor: "background.default",
                    backgroundImage: "none",
                    maxHeight: isSmall ? "85vh" : "90vh",
                    borderRadius: isSmall ? "12px 12px 0 0" : undefined,
                    position: isSmall ? "fixed" : undefined,
                    left: isSmall ? 0 : undefined,
                    right: isSmall ? 0 : undefined,
                    bottom: isSmall ? 0 : undefined,
                    margin: isSmall ? 0 : undefined,
                  },
                },
              }}
            >
              {drawnCard && (
                <>
                  <IconButton
                    onClick={handleCloseResults}
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
                      <Box>
                        <TarotCardImage
                          imageUrl={`/images/rider-waite/${getImagePath(
                            drawnCard.card.id,
                          )}`}
                          alt={getLocalizedText(drawnCard.card.name, lang)}
                          isReversed={
                            orientationTab === 1 ||
                            drawnCard.orientation === "reversed"
                          }
                          maxWidth={220}
                          glowColor="rgba(139,124,246,0.22)"
                          sx={{ mx: "auto" }}
                        />
                        <Box sx={{ textAlign: "center", mt: 2 }}>
                          <Typography
                            variant="h5"
                            sx={{ fontWeight: 700, mb: 1 }}
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
                              fontFamily:
                                'var(--font-display), "Cinzel", serif',
                              color: "primary.light",
                              mt: 0.5,
                            }}
                          >
                            {getLocalizedText(drawnCard.card.coreKeyword, lang)}
                          </Typography>
                        </Box>

                        <Box sx={{ mt: 2.5 }}>
                          <Typography
                            variant="subtitle2"
                            color="secondary.main"
                          >
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
                      </Box>

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
                        <Tab label={lang === "zh" ? "正位" : "Upright"} />
                        <Tab label={lang === "zh" ? "逆位" : "Reversed"} />
                      </Tabs>

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
                            drawnCard.card.meaning[
                              orientationTab === 0 ? "upright" : "reversed"
                            ][lang]
                          }
                        </Typography>
                      </Box>

                      <ReadingAspectSection
                        readingAspects={drawnCard.card.readingAspects}
                        orientation={
                          orientationTab === 0 ? "upright" : "reversed"
                        }
                        language={lang}
                      />

                      <ContextualMeaningSection
                        contextualMeanings={drawnCard.card.contextualMeanings}
                        orientation={
                          orientationTab === 0 ? "upright" : "reversed"
                        }
                        language={lang}
                      />
                    </Stack>
                  </DialogContent>
                </>
              )}
            </Dialog>
          </Stack>
        )}
      </Stack>
    </Container>
  );
}

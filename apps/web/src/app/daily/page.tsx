"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  getAllCards,
  getDeckByScope,
  shuffleCards,
  type DeckScope,
  type DrawnCard,
  type SupportedLanguage,
  type TarotCard,
} from "@cometpisces/tarot-kit";
import {
  clearDailyDraw,
  getTodayKey,
  loadDailyDraw,
  loadDailyHistory,
  saveDailyDraw,
  type DailyHistoryRecord,
} from "@/lib/storage";
import { CardDetailsDialog } from "@/components/CardDetailsDialog";
import ImageDescriptionSection from "@/components/ImageDescriptionSection";
import { getDailyPageText, getDeckScopeOptions } from "@/lib/glossary";
import { DailyDeckGrid } from "./components/DailyDeckGrid";
import { DailyHistoryPanel } from "./components/DailyHistoryPanel";
import { DeckScopeSelector } from "./components/DeckScopeSelector";
import { getRandomOrientation } from "./utils";

export default function DailyPage() {
  const [drawnCard, setDrawnCard] = useState<DrawnCard | null>(null);
  const [isDailyLocked, setIsDailyLocked] = useState(false);
  const [deckScope, setDeckScope] = useState<DeckScope>("full");
  const [deckCards, setDeckCards] = useState<TarotCard[]>(() =>
    getDeckByScope(getAllCards(), "full", true),
  );
  const [resultOpen, setResultOpen] = useState(false);
  const [orientationTab, setOrientationTab] = useState(0);
  const [dailyHistory, setDailyHistory] = useState<DailyHistoryRecord[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const searchParams = useSearchParams();
  const lang: SupportedLanguage =
    searchParams.get("lang") === "zh" ? "zh" : "en";
  const text = getDailyPageText(lang);
  const deckScopeOptions = getDeckScopeOptions(text);

  useEffect(() => {
    const storedDailyDraw = loadDailyDraw();

    setIsMounted(true); // eslint-disable-line react-hooks/set-state-in-effect
    setDailyHistory(loadDailyHistory());

    if (storedDailyDraw) {
      setDrawnCard(storedDailyDraw.card);
      setResultOpen(true);
      setIsDailyLocked(true);
      setDeckCards([]);
    }
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
        date: getTodayKey(),
        cardId: nextCard.card.id,
        orientation: nextCard.orientation,
        deckScope,
      },
      ...current.filter((item) => item.date !== getTodayKey()),
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
            <DeckScopeSelector
              options={deckScopeOptions}
              selectedScope={deckScope}
              disabled={isDailyLocked}
              canShuffle={!isDailyLocked && deckCards.length > 0}
              deckHint={text.deckHint}
              shuffleLabel={text.shuffle}
              onSelectScope={(scope) => {
                if (isDailyLocked) {
                  return;
                }

                setDeckScope(scope);
                setDeckCards(getDeckByScope(getAllCards(), scope, true));
              }}
              onShuffle={handleShuffleDeck}
            />

            <DailyDeckGrid
              cards={deckCards}
              language={lang}
              availableCardsLabel={text.cardsAvailable}
              onSelectCard={handleSelectCard}
            />
          </Stack>
        )}

        {isMounted && dailyHistory.length > 0 && !drawnCard && (
          <DailyHistoryPanel
            records={dailyHistory}
            language={lang}
            title={text.historyTitle}
          />
        )}

        {/* Action buttons (shown when card is drawn) */}
        {drawnCard && (
          <Stack direction="row" spacing={1.25}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleOpenResults}
            >
              {text.viewDetails}
            </Button>
            <Button variant="outlined" onClick={handleClear}>
              {text.reset}
            </Button>
          </Stack>
        )}

        {/* Drawn card summary */}
        {drawnCard && (
          <Stack spacing={3}>
            <ImageDescriptionSection
              drawnCard={drawnCard}
              text={text}
              language={lang}
              direction="column"
            />

            <CardDetailsDialog
              open={resultOpen}
              card={drawnCard.card}
              orientationTab={orientationTab}
              text={text}
              language={lang}
              isFullScreen={isSmall}
              onClose={handleCloseResults}
              onOrientationChange={setOrientationTab}
            />
          </Stack>
        )}
      </Stack>
    </Container>
  );
}

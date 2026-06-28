"use client";

import { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import type {
  CardOrientation,
  DrawnCard,
  SupportedLanguage,
} from "@cometpisces/tarot-kit";
import { ReadingAspectSection } from "@/components/ReadingAspectSection";
import { ContextualMeaningSection } from "@/components/ContextualMeaningSection";
import ImageDescriptionSection from "@/components/ImageDescriptionSection";
import type { CardInsightText } from "@/lib/types";

interface CardDetailsTabsProps {
  drawnCard: DrawnCard;
  text: CardInsightText;
  orientation: CardOrientation;
  language: SupportedLanguage;
}

const SWIPE_THRESHOLD = 40;

const SECTION_TABS: Record<SupportedLanguage, [string, string, string]> = {
  en: ["🌙 Meaning", "✨ Aspects", "🌟 Contexts"],
  zh: ["🌙 牌义", "✨ 面向", "🌟 情境"],
};

export function CardDetailsTabs({
  drawnCard,
  text,
  orientation,
  language,
}: CardDetailsTabsProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const maxStep = SECTION_TABS[language].length - 1;

  const handleNext = () => {
    setActiveStep((current) => Math.min(current + 1, maxStep));
  };

  const handleBack = () => {
    setActiveStep((current) => Math.max(current - 1, 0));
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.changedTouches[0].clientX);
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return;

    const touchEndX = event.changedTouches[0].clientX;
    const deltaX = touchStartX - touchEndX;

    if (deltaX > SWIPE_THRESHOLD) {
      handleNext();
    } else if (deltaX < -SWIPE_THRESHOLD) {
      handleBack();
    }

    setTouchStartX(null);
  };

  return (
    <Box
      sx={{
        minHeight: 0,
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}
    >
      <Box
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        sx={{
          flex: 1,
          minHeight: 0,
          overflowY: "auto",
          px: { xs: 2, sm: 3 },
          py: 3,
          touchAction: "pan-y",
        }}
      >
        {activeStep === 0 && (
          <ImageDescriptionSection
            drawnCard={drawnCard}
            orientation={orientation}
            text={text}
            language={language}
          />
        )}

        {activeStep === 1 && (
          <ReadingAspectSection
            readingAspects={drawnCard.card.readingAspects}
            orientation={orientation}
            language={language}
          />
        )}

        {activeStep === 2 && (
          <ContextualMeaningSection
            contextualMeanings={drawnCard.card.contextualMeanings}
            orientation={orientation}
            language={language}
          />
        )}
      </Box>

      <Box
        sx={{
          position: "sticky",
          bottom: 0,
          zIndex: 2,
          px: { xs: 1, sm: 2 },
          py: { xs: 0.75, sm: 1 },
          bgcolor: "background.default",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Tabs
          value={activeStep}
          onChange={(_, value: number) => setActiveStep(value)}
          variant="fullWidth"
          aria-label={
            language === "zh" ? "卡牌内容分页" : "Card insight sections"
          }
          sx={{
            minHeight: 40,

            "& .MuiTabs-indicator": {
              height: 2,
              borderRadius: 999,
              bgcolor: "secondary.main",
              boxShadow: "0 0 10px rgba(242,211,139,0.45)",
            },

            "& .MuiTab-root": {
              minHeight: 40,
              px: { xs: 0.5, sm: 1 },
              py: 0.75,
              color: "text.disabled",
              fontSize: { xs: "0.68rem", sm: "0.74rem" },
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: 0.25,
              textTransform: "uppercase",
              transition:
                "color 160ms ease, background-color 160ms ease, text-shadow 160ms ease",
            },

            "& .MuiTab-root:hover": {
              color: "text.secondary",
            },

            "& .MuiTab-root.Mui-selected": {
              color: "secondary.main",
              textShadow: "0 0 10px rgba(242,211,139,0.35)",
            },
          }}
        >
          {SECTION_TABS[language].map((label) => (
            <Tab key={label} label={label} />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
}

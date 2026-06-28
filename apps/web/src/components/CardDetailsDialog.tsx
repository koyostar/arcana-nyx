"use client";

import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Dialog,
  DialogContent,
  IconButton,
  Tab,
  Tabs,
} from "@mui/material";
import type { SupportedLanguage, TarotCard } from "@cometpisces/tarot-kit";
import { CardDetailsTabs } from "@/components/CardDetailsTabs";
import type { CardInsightText } from "@/lib/types";
import { getOrientationLabel } from "@/lib/glossary";

interface CardDetailsDialogProps {
  open: boolean;
  card: TarotCard;
  orientationTab: number;
  text: CardInsightText;
  language: SupportedLanguage;
  isFullScreen?: boolean;
  onClose: () => void;
  onOrientationChange: (value: number) => void;
}

export function CardDetailsDialog({
  open,
  card,
  orientationTab,
  text,
  language,
  isFullScreen = false,
  onClose,
  onOrientationChange,
}: CardDetailsDialogProps) {
  const orientation = orientationTab === 0 ? "upright" : "reversed";

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      fullScreen={isFullScreen}
      slotProps={{
        paper: {
          sx: {
            bgcolor: "background.default",
            backgroundImage:
              "radial-gradient(circle at top, rgba(139,124,246,0.14), transparent 38%)",
            maxHeight: isFullScreen ? "88vh" : "90vh",
            borderRadius: "54px 54px 0 0",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 24px 80px rgba(0,0,0,0.65)",
            position: isFullScreen ? "fixed" : undefined,
            left: isFullScreen ? 0 : undefined,
            right: isFullScreen ? 0 : undefined,
            bottom: isFullScreen ? 0 : undefined,
            margin: isFullScreen ? 0 : undefined,
          },
        },
      }}
    >
      <IconButton
        onClick={onClose}
        aria-label="Close card details"
        sx={{
          position: "absolute",
          right: 10,
          top: 10,
          color: "text.secondary",
          zIndex: 5,
          "&:hover": {
            bgcolor: "rgba(255,255,255,0.08)",
          },
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent
        sx={{
          p: 0,
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
          maxHeight: isFullScreen ? "88vh" : "90vh",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "sticky",
            top: 0,
            zIndex: 3,
            px: { xs: 2, sm: 3 },
            pt: 2.5,
            bgcolor: "background.default",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <Tabs
            value={orientationTab}
            onChange={(_, value) => onOrientationChange(value)}
            variant="fullWidth"
            sx={{
              minHeight: 44,
              pr: 4,
              "& .MuiTab-root": {
                minHeight: 44,
                fontWeight: 700,
                color: "text.secondary",
              },
              "& .Mui-selected": {
                color: "primary.light",
              },
              "& .MuiTabs-indicator": {
                height: 2,
                borderRadius: 999,
              },
            }}
          >
            <Tab label={getOrientationLabel("upright", language)} />
            <Tab label={getOrientationLabel("reversed", language)} />
          </Tabs>
        </Box>

        <CardDetailsTabs
          key={`${card.id}-${orientationTab}`}
          drawnCard={{ card, orientation }}
          text={text}
          orientation={orientation}
          language={language}
        />
      </DialogContent>
    </Dialog>
  );
}

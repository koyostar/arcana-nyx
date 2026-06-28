"use client";

import { Box, Paper, Stack, Typography } from "@mui/material";
import {
  getCardById,
  getLocalizedText,
  type SupportedLanguage,
} from "@cometpisces/tarot-kit";
import type { DailyHistoryRecord } from "@/lib/storage";
import { getOrientationLabel } from "@/lib/glossary";

interface DailyHistoryPanelProps {
  records: DailyHistoryRecord[];
  language: SupportedLanguage;
  title: string;
}

export function DailyHistoryPanel({
  records,
  language,
  title,
}: DailyHistoryPanelProps) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        bgcolor: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 700 }}>
        {title}
      </Typography>
      <Stack spacing={1}>
        {records.slice(0, 3).map((record) => {
          const card = getCardById(record.cardId);
          if (!card) {
            return null;
          }

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
                {getLocalizedText(card.name, language)}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {getOrientationLabel(record.orientation, language)}
              </Typography>
            </Box>
          );
        })}
      </Stack>
    </Paper>
  );
}

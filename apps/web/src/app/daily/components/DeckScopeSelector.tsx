"use client";

import { Button, Stack, Typography } from "@mui/material";
import type { DeckScope } from "@cometpisces/tarot-kit";
import type { DeckScopeOption } from "@/lib/glossary";

interface DeckScopeSelectorProps {
  options: DeckScopeOption[];
  selectedScope: DeckScope;
  disabled: boolean;
  canShuffle: boolean;
  deckHint: string;
  shuffleLabel: string;
  onSelectScope: (scope: DeckScope) => void;
  onShuffle: () => void;
}

export function DeckScopeSelector({
  options,
  selectedScope,
  disabled,
  canShuffle,
  deckHint,
  shuffleLabel,
  onSelectScope,
  onShuffle,
}: DeckScopeSelectorProps) {
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1 }}>
        {options.map((option) => (
          <Button
            key={option.value}
            variant={selectedScope === option.value ? "contained" : "outlined"}
            size="small"
            onClick={() => onSelectScope(option.value)}
            disabled={disabled}
            sx={{ borderRadius: 999 }}
          >
            {option.label}
          </Button>
        ))}
        <Button
          variant="outlined"
          size="small"
          onClick={onShuffle}
          disabled={!canShuffle}
          sx={{ borderRadius: 999, ml: "auto" }}
        >
          {shuffleLabel}
        </Button>
      </Stack>

      <Typography variant="body2" color="text.secondary">
        {deckHint}
      </Typography>
    </Stack>
  );
}

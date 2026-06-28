import { Chip } from "@mui/material";

interface OrientationChipProps {
  orientation: "upright" | "reversed";
  label: string;
}

export default function OrientationChip({
  orientation,
  label,
}: OrientationChipProps) {
  return (
    <Chip
      label={label}
      size="small"
      variant="outlined"
      sx={{
        bgcolor:
          orientation === "reversed"
            ? "rgba(239,166,200,0.12)"
            : "rgba(242,211,139,0.12)",
        color: orientation === "reversed" ? "#EFA6C8" : "#F2D38B",
        border:
          orientation === "reversed"
            ? "1px solid rgba(239,166,200,0.36)"
            : "1px solid rgba(242,211,139,0.36)",
        fontSize: 12,
        letterSpacing: 0.5,
      }}
    />
  );
}

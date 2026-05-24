"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import StyleIcon from "@mui/icons-material/Style";

export function BottomNav() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const lang = searchParams.get("lang") === "zh" ? "zh" : "en";
  const labels =
    lang === "zh"
      ? { daily: "每日", library: "牌库" }
      : { daily: "Daily", library: "Library" };

  const chineseFont = '"LXGW WenKai TC", cursive';

  const actionSx = {
    color: "text.secondary",
    minWidth: 0,
    gap: 0.3,
    "& .MuiBottomNavigationAction-label": {
      fontFamily: lang === "zh" ? chineseFont : "var(--font-display)",
      fontSize: "0.75rem",
      letterSpacing: lang === "zh" ? 0.2 : 0.8,
      mt: 0.25,
      opacity: 1,
      "&.Mui-selected": { fontSize: "0.75rem" },
    },
    "&.Mui-selected": {
      color: "primary.main",
      filter: "drop-shadow(0 0 8px rgba(139,124,246,0.55))",
    },
  } as const;

  return (
    <Paper
      elevation={0}
      sx={{
        position: "fixed",
        left: "50%",
        bottom: 0,
        transform: "translateX(-50%)",
        width: "100%",
        maxWidth: 430,
        bgcolor: "rgba(9,11,20,0.92)",
        backdropFilter: "blur(20px)",
        zIndex: (t) => t.zIndex.appBar,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(139,124,246,0.5) 35%, rgba(242,211,139,0.35) 65%, transparent 100%)",
        },
      }}
    >
      <BottomNavigation
        value={pathname}
        sx={{
          bgcolor: "transparent",
          height: 64,
          px: 2,
        }}
      >
        <BottomNavigationAction
          label={labels.daily}
          value="/daily"
          icon={<AutoAwesomeIcon fontSize="small" />}
          onClick={() => router.push(`/daily?lang=${lang}`)}
          sx={actionSx}
        />
        <BottomNavigationAction
          label={labels.library}
          value="/cards"
          icon={<StyleIcon fontSize="small" />}
          onClick={() => router.push(`/cards?lang=${lang}`)}
          sx={actionSx}
        />
      </BottomNavigation>
    </Paper>
  );
}

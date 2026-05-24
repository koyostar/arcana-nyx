"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { getAllCards } from "@cometpisces/tarot-kit";
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

export default function Home() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") === "zh" ? "zh" : "en";
  const text =
    lang === "zh"
      ? {
          title: "夜祇司",
          subtitle: "塔罗占卜与学习伙伴。",
          stats: "已载入",
          cards: "张牌",
          major: "大阿卡纳",
          minor: "小阿卡纳",
          daily: "每日抽牌",
          library: "牌库",
        }
      : {
          title: "Arcana Nyx",
          subtitle: "A tarot reading and learning companion.",
          stats: "cards loaded",
          cards: "cards",
          major: "major arcana",
          minor: "minor arcana",
          daily: "Daily Draw",
          library: "Card Library",
        };
  const cards = getAllCards();
  const majorCount = cards.filter((c) => c.arcana === "major").length;
  const minorCount = cards.filter((c) => c.arcana === "minor").length;

  return (
    <Container maxWidth="xs" sx={{ minHeight: "100vh", py: 4, px: 2.25 }}>
      <Stack spacing={3.25}>
        <Box>
          <Typography
            variant="h3"
            sx={{
              fontWeight: lang === "zh" ? 400 : 700,
              fontFamily:
                lang === "zh"
                  ? '"WDXL Lubrifont SC", sans-serif'
                  : "var(--font-display)",
              mb: 0.4,
            }}
          >
            {text.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
            {text.subtitle}
          </Typography>
        </Box>

        <Paper
          elevation={0}
          sx={{
            p: 2,
            borderRadius: 3,
            bgcolor: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(244,213,141,0.2)",
            backgroundImage:
              "radial-gradient(circle at top right, rgba(124,108,246,0.22), transparent 52%)",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {lang === "zh"
              ? `${text.stats} ${cards.length} ${text.cards} - ${majorCount} ${text.major}, ${minorCount} ${text.minor}`
              : `${cards.length} ${text.stats} - ${majorCount} ${text.major}, ${minorCount} ${text.minor}`}
          </Typography>
        </Paper>

        <Stack direction="column" spacing={2}>
          <Button
            component={Link}
            href={`/daily?lang=${lang}`}
            variant="contained"
            color="primary"
            fullWidth
            sx={{ boxShadow: "0 0 24px rgba(124,108,246,0.35)" }}
          >
            {text.daily}
          </Button>
          <Button
            component={Link}
            href={`/cards?lang=${lang}`}
            variant="outlined"
            color="primary"
            fullWidth
          >
            {text.library}
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}

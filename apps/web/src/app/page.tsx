import Link from "next/link";
import { getAllCards } from "@cometpisces/tarot-kit";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

export default function Home() {
  const cards = getAllCards();
  const majorCount = cards.filter((c) => c.arcana === "major").length;
  const minorCount = cards.filter((c) => c.arcana === "minor").length;

  return (
    <Container maxWidth="sm" sx={{ minHeight: "100vh", py: 8 }}>
      <Stack spacing={4}>
        <Box>
          <Typography variant="h3" sx={{ fontWeight: 700 }}>
            Arcana Nyx
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
            A tarot reading and learning companion.
          </Typography>
        </Box>

        <Box>
          <Typography variant="body2" color="text.secondary">
            {cards.length} cards loaded — {majorCount} major arcana,{" "}
            {minorCount} minor arcana
          </Typography>
        </Box>

        <Stack direction="row" spacing={2}>
          <Button
            component={Link}
            href="/daily"
            variant="contained"
            color="primary"
          >
            Daily Draw
          </Button>
          <Button
            component={Link}
            href="/cards"
            variant="outlined"
            color="primary"
          >
            Card Library
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}

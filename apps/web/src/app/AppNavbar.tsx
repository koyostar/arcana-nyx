"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  AppBar,
  Box,
  Container,
  Stack,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

export function AppNavbar() {
  const theme = useTheme();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const lang = searchParams.get("lang") === "zh" ? "zh" : "en";
  const appName = lang === "zh" ? "夜祇司" : theme.brand.appName;

  const setLanguage = (value: "en" | "zh") => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", value);
    const queryString = params.toString();
    router.replace(queryString ? `${pathname}?${queryString}` : pathname);
  };

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        bgcolor: "rgba(9,11,20,0.85)",
        backdropFilter: "blur(20px)",
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(139,124,246,0.5) 35%, rgba(242,211,139,0.35) 65%, transparent 100%)",
        },
      }}
    >
      <Container maxWidth="xs">
        <Toolbar
          sx={{
            px: "0 !important",
            py: 1,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {/* Logo + name — tapping goes home */}
          <Stack
            direction="row"
            spacing={1.5}
            sx={{
              flexGrow: 1,
              minWidth: 0,
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
            component={Link}
            href={`/?lang=${lang}`}
          >
            <Box
              sx={{
                width: 55,
                height: 55,
                borderRadius: "50%",
                overflow: "hidden",
                flexShrink: 0,
                border: "1.5px solid rgba(139,124,246,0.45)",
                boxShadow:
                  "0 0 18px rgba(139,124,246,0.4), 0 0 6px rgba(139,124,246,0.2) inset",
              }}
            >
              <Image
                src={theme.brand.logoPath}
                alt={`${theme.brand.appName} logo`}
                width={50}
                height={50}
                style={{ objectFit: "cover", display: "block" }}
                priority
              />
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontFamily:
                  lang === "zh"
                    ? '"WDXL Lubrifont SC", sans-serif'
                    : "var(--font-display)",
                fontWeight: lang === "zh" ? 400 : 700,
                fontSize: lang === "zh" ? "2rem" : "1.5rem",
                letterSpacing: lang === "zh" ? 0.4 : 1.2,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                background:
                  "linear-gradient(120deg, #ffffff 25%, #F2D38B 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {appName}
            </Typography>
          </Stack>

          {/* Language switch */}
          <Stack
            direction="row"
            spacing={0.5}
            sx={{ alignItems: "center", alignSelf: "center" }}
          >
            <Typography
              variant="caption"
              sx={{
                fontWeight: 700,
                fontSize: "0.68rem",
                letterSpacing: 0.6,
                color: lang === "en" ? "primary.light" : "text.disabled",
                transition: "color 0.2s",
              }}
            >
              EN
            </Typography>
            <Switch
              size="small"
              checked={lang === "zh"}
              onChange={(_event, checked) => setLanguage(checked ? "zh" : "en")}
              color="primary"
              slotProps={{ input: { "aria-label": "language switch" } }}
              sx={{ mx: -0.5 }}
            />
            <Typography
              variant="caption"
              sx={{
                fontWeight: 700,
                fontSize: "0.68rem",
                letterSpacing: 0.6,
                color: lang === "zh" ? "primary.light" : "text.disabled",
                transition: "color 0.2s",
              }}
            >
              中文
            </Typography>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

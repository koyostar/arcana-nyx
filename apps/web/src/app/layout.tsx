import type { Metadata } from "next";
import * as React from "react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";

export const metadata: Metadata = {
  title: "Arcana Nyx",
  description: "Daily tarot card readings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = createTheme({
    palette: {
      mode: "light",
    },
    typography: {
      fontFamily: "Roboto, Arial, Helvetica, sans-serif",
    },
  });
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

"use client";

import * as React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { appTheme } from "@/theme/theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

import type { Metadata } from "next";
import * as React from "react";
import { Cinzel, Inter } from "next/font/google";
import { AppNavbar } from "./AppNavbar";
import { BottomNav } from "./BottomNav";
import { Providers } from "./providers";
import "../theme/fonts.css";

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const displayFont = Cinzel({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "Arcana Nyx",
  description: "Daily tarot card readings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          background: "#090B14",
        }}
      >
        <Providers>
          <React.Suspense fallback={null}>
            <div
              style={{
                width: "100%",
                maxWidth: 430,
                minHeight: "100vh",
                background: "transparent",
                boxShadow: "0 8px 24px rgba(0,0,0,0.28)",
              }}
            >
              <AppNavbar />
              <main style={{ paddingBottom: 88 }}>{children}</main>
              <BottomNav />
            </div>
          </React.Suspense>
        </Providers>
      </body>
    </html>
  );
}

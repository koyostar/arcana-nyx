import type { Metadata } from "next";
import * as React from "react";
import { AppNavbar } from "./AppNavbar";
import { BottomNav } from "./BottomNav";
import { Providers } from "./providers";
import "../theme/fonts.css";

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
    <html lang="en">
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

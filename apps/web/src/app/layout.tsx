import type { Metadata } from "next";
import * as React from "react";
import { Providers } from "./providers";

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
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

"use client";

import { Box, BoxProps } from "@mui/material";
import Image from "next/image";

interface TarotCardImageProps extends Omit<BoxProps, "children"> {
  /** Image URL */
  imageUrl: string;
  /** Alt text for the image */
  alt: string;
  /** Whether the card is reversed (rotates image 180deg) */
  isReversed?: boolean;
  /** Maximum width constraint */
  maxWidth?: number | string;
  /** Glow color for the card (e.g., suit-specific color) */
  glowColor?: string;
  /** Priority loading for Next.js Image */
  priority?: boolean;
}

/**
 * TarotCardImage component with proper 70×120mm aspect ratio (1.714:1)
 * and support for reversed card rotation.
 */
export function TarotCardImage({
  imageUrl,
  alt,
  isReversed = false,
  maxWidth = 250,
  glowColor,
  priority = false,
  sx,
  ...boxProps
}: TarotCardImageProps) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth,
        mx: "auto",
        ...sx,
      }}
      {...boxProps}
    >
      {/* Glow effect layer */}
      {glowColor && (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "150%",
            height: "90%",
            background: `radial-gradient(circle, ${glowColor}40, transparent 70%)`,
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
      )}

      {/* Card image container with proper aspect ratio */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          // 70mm × 120mm = 171.4% padding-top (height/width ratio)
          aspectRatio: "70 / 120",
          borderRadius: 0.5,
          overflow: "hidden",
          boxShadow:
            "0 16px 40px rgba(0,0,0,0.45), 0 0 32px rgba(139,124,246,0.28)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
          border: "1px solid rgba(255,255,255,0.06)",
          zIndex: 1,
        }}
      >
        {/* Image with rotation support */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            transform: isReversed ? "rotate(180deg)" : "none",
            transition: "transform 400ms ease-in-out",
          }}
        >
          <Image
            src={imageUrl}
            alt={alt}
            fill
            style={{
              objectFit: "contain",
            }}
            sizes="(max-width: 600px) 50vw, 250px"
            priority={priority}
          />
        </Box>
      </Box>
    </Box>
  );
}

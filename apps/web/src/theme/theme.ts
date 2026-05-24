import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    brand: {
      appName: string;
      logoPath: string;
    };
  }

  interface ThemeOptions {
    brand?: {
      appName?: string;
      logoPath?: string;
    };
  }
}

export const appTheme = createTheme({
  brand: {
    appName: "Arcana Nyx",
    logoPath: "/images/arcananyx-logo.png",
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#8B7CF6",
      light: "#A99DFF",
      dark: "#5E4FD6",
      contrastText: "#090B14",
    },
    secondary: {
      main: "#F2D38B",
      light: "#FFE6A8",
      dark: "#C89F4A",
      contrastText: "#090B14",
    },
    background: {
      default: "#090B14",
      paper: "#181C2B",
    },
    text: {
      primary: "#F5F1FF",
      secondary: "#B8B4C8",
      disabled: "#555163",
    },
    success: {
      main: "#63C99A",
      light: "#93DBBB",
      dark: "#3C8D69",
    },
    warning: {
      main: "#E8B865",
      light: "#F2CF95",
      dark: "#B88A43",
    },
    info: {
      main: "#77B9E0",
      light: "#A8D5EE",
      dark: "#4E8FB5",
    },
    divider: "rgba(255,255,255,0.08)",
  },
  typography: {
    fontFamily: 'var(--font-body), "Inter", system-ui, sans-serif',
    h1: {
      fontFamily: 'var(--font-display), "Cinzel", serif',
      fontSize: "2rem",
      letterSpacing: 1,
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'var(--font-display), "Cinzel", serif',
      fontSize: "1.5rem",
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'var(--font-display), "Cinzel", serif',
      fontWeight: 700,
      letterSpacing: 0.6,
    },
    h4: {
      fontFamily: 'var(--font-display), "Cinzel", serif',
      fontWeight: 700,
      letterSpacing: 0.4,
    },
    h5: {
      fontFamily: 'var(--font-display), "Cinzel", serif',
      letterSpacing: 0.6,
    },
    h6: {
      fontFamily: 'var(--font-display), "Cinzel", serif',
      letterSpacing: 0.5,
    },
    body1: {
      fontSize: "0.95rem",
      lineHeight: 1.7,
    },
    button: {
      fontWeight: 700,
      textTransform: "none",
    },
    caption: {
      letterSpacing: "0.08em",
      textTransform: "uppercase",
    },
  },
  shape: {
    borderRadius: 18,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:
            "radial-gradient(circle at top left, rgba(139,124,246,0.18), transparent 32%), radial-gradient(circle at top right, rgba(242,211,139,0.08), transparent 28%), #090B14",
          color: "#F5F1FF",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
          border: "1px solid rgba(255,255,255,0.06)",
          boxShadow: "0 16px 40px rgba(0,0,0,0.45)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          padding: "10px 18px",
          fontWeight: 700,
        },
        outlined: {
          borderColor: "rgba(255,255,255,0.16)",
          color: "#C8B8FF",
          "&:hover": {
            borderColor: "#8B7CF6",
            background: "rgba(139,124,246,0.08)",
          },
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            background: "linear-gradient(135deg, #8B7CF6 0%, #A99DFF 100%)",
            boxShadow: "0 0 24px rgba(139,124,246,0.25)",
            "&:hover": {
              boxShadow: "0 0 32px rgba(139,124,246,0.4)",
            },
          },
        },
      ],
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          minHeight: 36,
          padding: "8px 14px",
          borderColor: "rgba(255,255,255,0.08)",
          color: "#B8B4C8",
          textTransform: "none",
          fontWeight: 700,
          "&.Mui-selected": {
            color: "#090B14",
            background: "linear-gradient(135deg, #8B7CF6 0%, #A99DFF 100%)",
            boxShadow: "0 0 20px rgba(139,124,246,0.35)",
          },
        },
      },
    },
  },
});

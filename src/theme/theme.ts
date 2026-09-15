import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#0284c7', // Medyczny błękit / ocean blue
      light: '#38bdf8',
      dark: '#0369a1',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#0d9488', // Medyczny turkus / teal
      light: '#2dd4bf',
      dark: '#0f766e',
      contrastText: '#ffffff',
    },
    success: {
      main: '#16a34a',
      light: '#4ade80',
      dark: '#15803d',
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
    },
    text: {
      primary: '#0f172a',
      secondary: '#475569',
    },
  },
  typography: {
    fontFamily: 'inherit',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.025em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontWeight: 700,
      letterSpacing: '-0.015em',
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: '10px 22px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 14px 0 rgba(2, 132, 199, 0.25)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
          border: '1px solid rgba(226, 232, 240, 0.8)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0 12px 28px -4px rgba(15, 23, 42, 0.12)',
          },
        },
      },
    },
  },
});

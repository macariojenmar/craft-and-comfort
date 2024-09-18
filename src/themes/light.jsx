import { createTheme } from "@mui/material";

export const light = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#664343',
    },
    secondary: {
      main: '#FFF0D1',
    },
    grey: {
      main: '#fde5cd',
    },
    background: {
      default: '#FFF4EA'
    }
  },
  typography: {
    fontFamily: 'Nunito'
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '.MuiInputBase-input': {
            fontSize: '14px'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          borderRadius: '10px',
          boxShadow: 'none'
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          padding: 15,
          borderRadius: '10px'
        }
      }
    }
  }
});
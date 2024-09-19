import { createTheme } from "@mui/material";

export const light = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#664343',
      darker: '#5a3a3a',
      lighter: '#A56C6E'
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
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '::-webkit-scrollbar': {
            width: '5px',
            height: '5px',
          },
          '::-webkit-scrollbar-thumb': {
            backgroundColor: '#452d2d',
          },
          '::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#FFF0D1',
          },
        },
      },
    },
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
import { createTheme } from '@mui/material/styles'; 

export const theme = createTheme({
  mode: 'light',
  palette: {
    primary: {
      main: '#020b0a', 
      // main: '#262626', 
      contrastText: '#fff',
    },
    secondary: {
      main: '#d35841',
      contrastText: '#fff',
    },
    white: {
      main: '#ffffff',
      contrastText: '#262626',
    },
    gold: {
      main: '#FFB300',
      contrastText: '#fff',
    },
    silver: {
      main: '#9E9E9E',
      contrastText: '#fff',
    },
    stell: {
      main: '#4C4C4C',
      contrastText: '#fff',
    },
    bronze: {
      main: '#795548',
      contrastText: '#fff',
    },
    error: {
      main: '#dd4952',
    },
    warning: {
      // main: '#ffa726',
      main: '#e86c30',
    },
    info: {
      main: '#a4a4a4',
      contrastText: '#fff',
    },
    success: {
      main: '#66bb6a',
    },
    colors:{
        white: '#ffffff',
        black: '#000000',
        grey: '#4C4C4C',
        stell: '#4C4C4C',
        backgroundgrey: '#F7F7F7',
        lightgrey: '#A4A4A4',
        shadow: 'rgba(0,0,0,.16)',
        shadowness: 'rgba(0,0,0,.6)',
        whiteness: 'rgba(255,255,255,.6)',
        lightshadow: 'rgba(112,112,112,.06)',
        gold:"#FFB300",
        silver:"#9E9E9E",
        bronze:"#795548",

    }
  },
});  
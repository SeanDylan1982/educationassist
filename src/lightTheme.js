import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#5935a8',
      contrastText: '#fff0db',
      light: '#9679bf',
      dark: '#482d85',
    },
    secondary: {
      main: '#1effbd',
      light: '#7cffcd',
      dark: '#00bb7b',
      contrastText: 'rgba(61,81,214,0.87)',
    },
    background: {
      default: '#f1f1f1',
      paper: 'rgba(64,64,255,0.17)',
    },
    success: {
      main: '#45b74a',
      contrastText: 'rgba(10,17,37,0.87)',
    },
    divider: 'rgba(142,142,142,0.5)',
    text: {
      primary: '#1a1a1a',
      hint: '#484454',
      secondary: 'rgba(43,43,43,0.6)',
      disabled: 'rgba(173,173,173,0.38)',
    },
  },
  typography: {
    fontFamily: 'Asap',
  },
  spacing: 8,
  shape: {
    borderRadius: 4,
  },
  overrides: {
    MuiAppBar: {
      colorInherit: {
        backgroundColor: '#689f38',
        color: '#fff',
      },
    },
  },
  props: {
    MuiAppBar: {
      color: 'inherit',
    },
    MuiTooltip: {
      arrow: true,
    },
  },
});

export default lightTheme;
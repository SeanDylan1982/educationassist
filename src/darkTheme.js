import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
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
      default: '#1a1a1a',
      paper: '#181835',
    },
    success: {
      main: '#45b74a',
      contrastText: 'rgba(10,17,37,0.87)',
    },
    divider: 'rgba(142,142,142,0.5)',
    text: {
      primary: '#f1f1f1',
      hint: '#484454',
      secondary: 'rgba(177,177,177,0.6)',
      disabled: 'rgba(131,131,131,0.38)',
    },
  },
  typography: {
    fontFamily: 'Asap',
  },
  spacing: 8,
  direction: 'rtl',
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
    MuiSwitch: {
      root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: 8,
      },
      switchBase: {
        padding: 1,
        '&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
          transform: 'translateX(16px)',
          color: '#fff',
          '& + $track': {
            opacity: 1,
            border: 'none',
          },
        },
      },
      thumb: {
        width: 24,
        height: 24,
      },
      track: {
        borderRadius: 13,
        border: '1px solid #bdbdbd',
        backgroundColor: '#fafafa',
        opacity: 1,
        transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
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

export default darkTheme;
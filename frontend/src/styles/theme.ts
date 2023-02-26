import { ThemeProvider, createTheme } from '@mui/material/styles';

const PRIMARY_COLOR = '#5E80BB';
const BACKGROUND_COLOR = '#F0F0F7';
const GREY_COLOR = '#F4F6FF';
const WHITE_COLOR = '#fff';
const GREY_DARK_COLOR = '#9C98A6';

export const theme = {
  palette: {
    primary: PRIMARY_COLOR,
    secondary: PRIMARY_COLOR,
    grey: {
      menuBackground: GREY_COLOR,
    },
    text: {
      light: WHITE_COLOR,
      regular: '#6A6180',
      dark: GREY_DARK_COLOR,
      bold: '#32264D',
      title: '#343434',
    },
    background: {
      default: BACKGROUND_COLOR,
      paper: PRIMARY_COLOR,
    },
  },
};

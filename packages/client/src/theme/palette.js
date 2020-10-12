import { colors } from '@material-ui/core';

const white = colors.grey[50];
const black = colors.grey[900];

export const palette = {
  primary: {
    contrastText: white,
    dark: colors.grey[900],
    main: colors.grey[900],
    light: colors.grey[800],
  },
  secondary: {
    contrastText: white,
    dark: colors.grey[200],
    main: white,
    light: colors.grey[100],
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400],
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400],
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400],
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400],
  },
  text: {
    primary: black,
    secondary: white,
    link: black,
  },
  background: {
    default: white,
    paper: white,
  },
  icon: colors.blueGrey[600],
  divider: black,
};

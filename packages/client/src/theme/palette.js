import { colors } from './colors';

const white = colors.grey[50];
const black = colors.grey[900];
const mountainMeadow = colors.mountainMeadow[600];

export const palette = {
  primary: {
    main: mountainMeadow,
    contrastText: '#f0f2f5',
  },
  secondary: {
    main: '#05386B',
    contrastText: '#f0f2f5',
  },
  link: {
    primary: mountainMeadow,
    secondary: '#000000',
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
};

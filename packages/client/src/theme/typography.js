import { palette } from '@/theme/palette';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme();

export const typography = {
  fontFamily: [
    'Roboto',
    'Roboto Bold',
    'Kalam',
    'Kalam Light',
    'Kalam Bold',
  ].join(','),
  h1: {
    color: palette.text.primary,
    fontWeight: 500,
    letterSpacing: '-0.24px',
    fontSize: '3rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '3.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '4.5rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '5.5rem',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '6.5rem',
    },
  },
  h2: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: '3rem',
    letterSpacing: '-0.24px',
    lineHeight: '31px',
  },
  h3: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: '2.5rem',
    letterSpacing: '-0.06px',
  },
  h4: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: '2rem',
    letterSpacing: '-0.06px',
  },
  h5: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: '16px',
    letterSpacing: '-0.05px',
    lineHeight: '20px',
  },
  h6: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: '14px',
    letterSpacing: '-0.05px',
    lineHeight: '20px',
  },
  subtitle1: {
    color: palette.text.primary,
    lineHeight: '31px',
    fontSize: '1.2rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.5rem',
    },
  },
  subtitle2: {
    color: palette.text.secondary,
    fontWeight: 400,
    fontSize: '1rem',
    letterSpacing: '-0.05px',
    lineHeight: '21px',
  },
  body1: {
    color: palette.text.primary,
    fontSize: '14px',
    letterSpacing: '-0.05px',
    lineHeight: '21px',
  },
  body2: {
    color: palette.text.secondary,
    fontSize: '12px',
    letterSpacing: '-0.04px',
    lineHeight: '18px',
  },
  button: {
    color: palette.text.primary,
    fontSize: '14px',
  },
  caption: {
    color: palette.text.primary,
    fontSize: '11px',
    letterSpacing: '0.33px',
    lineHeight: '13px',
  },
  overline: {
    color: palette.text.secondary,
    fontSize: '11px',
    fontWeight: 500,
    letterSpacing: '0.33px',
    lineHeight: '13px',
    textTransform: 'uppercase',
  },
};

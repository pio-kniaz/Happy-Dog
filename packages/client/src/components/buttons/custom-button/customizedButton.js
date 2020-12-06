export const customizedButton = (currentTheme) => ({
  MuiButton: {
    variants: [
      {
        props: { variant: 'dashed' },
        style: {
          textTransform: 'none',
          border: '2px dashed grey',
        },
      },
      {
        props: { variant: 'link' },
        style: {
          textDecoration: 'none',
          color: currentTheme.palette.link.primary,
          '&:hover': {
            backgroundColor: 'transparent',
            textDecoration: 'underline',
          },
        },
      },
      {
        props: { variant: 'link', color: 'secondary' },
        style: {
          textDecoration: 'none',
          color: currentTheme.palette.link.secondary,
          '&:hover': {
            backgroundColor: 'transparent',
            textDecoration: 'underline',
          },
        },
      },
    ],
  },
});

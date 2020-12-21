import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';

import Login from '@/pages/home/login/Login';
import { Footer } from '@components';
import { colors } from '@/theme/colors';

const useStyles = makeStyles({
  root: {
    backgroundColor: colors.blueGrey[50],
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: '2rem',
  },
  content: {
    paddingTop: '3rem',
    paddingBottom: '2rem',
    '&.shrink': {
      maxWidth: '600px',
    },
  },
  header: {
    width: '100%',
    maxWidth: '630px',
    marginBottom: '1rem',
    paddingRight: '2.25rem',
    '&.fluid': {
      maxWidth: '100%',
      paddingRight: '0px',
    },
  },
  headerTitle: {
    fontFamily: 'Kalam',
  },
  login: {
    marginTop: '2rem',
    maxWidth: '430px',
    boxShadow: `0 2px 4px ${colors.grey[400]}`,
    backgroundColor: colors.blueGrey[50],
    borderRadius: '5px',
    '&.fluid': {
      maxWidth: '100%',
    },
  },
});

function Home() {
  const classes = useStyles();
  const isMedium = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const headerClassName = clsx(classes.header, {
    fluid: isMedium,
  });
  const loginClassName = clsx(classes.login, {
    fluid: isMedium,
  });
  const contentClassName = clsx(classes.content, {
    shrink: isMedium,
  });

  return (
    <Box
      component="div"
      className={classes.root}
    >
      <Container
        maxWidth="lg"
        className={contentClassName}
      >
        <Grid
          container
          alignItems="center"
          justify="center"
        >
          <Grid
            item
            sm={12}
            md={6}
            className={headerClassName}
          >
            <Typography
              className={classes.headerTitle}
              variant="h1"
              align="left"
              display="block"
              gutterBottom
            >
              Happy Dog
            </Typography>
            <Typography
              variant="subtitle1"
              align="left"
              display="block"
              gutterBottom
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus eaque a suscipit ut asperiores pariatur
              tempora accusamus fugit veritatis.
              Nemo omnis ipsum commodi quidem, magnam eveniet repudiandae error veritatis illum.
            </Typography>
          </Grid>
          <Grid
            item
            sm={12}
            md={6}
            className={loginClassName}
          >
            <Login />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
}

export default Home;

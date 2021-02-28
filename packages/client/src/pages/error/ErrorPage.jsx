import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { CustomButton, ButtonLink } from '@/components';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
  wrapper: {
    paddingTop: '10rem',
    [theme.breakpoints.down('xs')]: {
      paddingTop: '5rem',
    },
  },
  headerTitle: {
    fontFamily: 'Kalam',
  },
  description: {
    maxWidth: '650px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttons: {
    maxWidth: '400px',
    margin: '2rem auto',
  },
  buttonItem: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: '1.25rem',
    },
  },
}));

function ErrorPage() {
  const classes = useStyles();
  const location = useLocation();

  const handleRefreshPage = () => {
    window.location.reload();
  };

  return (
    <Container
      maxWidth="md"
      className={classes.root}
    >
      <div className={classes.wrapper}>
        <Typography
          className={classes.headerTitle}
          variant="h1"
          align="center"
          display="block"
          gutterBottom
        >
          Something went wrong!
        </Typography>
        <Typography
          className={classes.description}
          variant="subtitle1"
          align="center"
          display="block"
          gutterBottom
        >
          {/* TODO: add description */}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Voluptatibus eaque a suscipit ut asperiores pariatur
          lorem500
        </Typography>
        <Grid
          container
          alignItems="center"
          justify="space-evenly"
          className={classes.buttons}
        >
          <Grid
            item
            xs={10}
            sm={5}
            className={classes.buttonItem}
          >
            <CustomButton
              fullWidth
              variant="contained"
              color="secondary"
            >
              Rapport Error
            </CustomButton>
          </Grid>
          <Grid
            item
            xs={10}
            sm={5}
            className={classes.buttonItem}
          >
            { location.pathname !== '/' ? (
              <ButtonLink
                to="/"
                fullWidth
                variant="contained"
                color="primary"
                isUnderline={false}
              >
                Back Home
              </ButtonLink>
            )
              : (
                <CustomButton
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={handleRefreshPage}
                >
                  Refresh Page
                </CustomButton>
              )}
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default ErrorPage;

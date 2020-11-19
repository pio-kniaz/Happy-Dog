import '@/pages/home/home.scss';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Login from '@/pages/home/login/Login';
import { Footer } from '@components';

function Home() {
  return (
    <Box
      component="div"
      className="home"
    >
      <Container
        maxWidth="lg"
        className="home__wrapper"
      >
        <Grid
          container
          spacing={3}
          alignItems="center"
        >
          <Grid
            item
            xs={12}
            sm={6}
          >
            <Typography
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
            xs={12}
            sm={6}
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

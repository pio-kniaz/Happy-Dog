import '@/pages/home/home.scss';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Footer from '@components/footer/Footer';
import Login from '@/pages/home/login/Login';

function Home() {
  return (
    <div className="home">
      <div className="home__wrapper">
        <Container maxWidth="lg">

          <Grid
            container
            spacing={10}
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
      </div>

      <Footer />
    </div>
  );
}

export default Home;

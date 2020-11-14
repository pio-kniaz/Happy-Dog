import '@/pages/home/login/login.scss';

import Grid from '@material-ui/core/Grid';

function Login() {
  return (
    <div className="login">
      <div className="login__wrapper">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            xs={12}
          >
            email
          </Grid>
          <Grid
            item
            xs={12}
          >
            haslo
          </Grid>
          <Grid
            item
            xs={12}
          >
            Zaloguj
          </Grid>
          <Grid
            item
            xs={12}
          >
            Nie pamietasz hasla ?
          </Grid>
          <Grid
            item
            xs={12}
          >
            Utworz nowe konto
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Login;

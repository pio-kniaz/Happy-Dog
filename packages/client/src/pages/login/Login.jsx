import './login.scss';
import { Typography } from '@material-ui/core';

import TextField from '@material-ui/core/TextField';

function Login() {
  return (
    <div className="login">
      <Typography
        variant="h1"
        align="center"
        display="block"
      >
        Welcome to Happy Dog
      </Typography>
      <form
        className="login__form"
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Email"
        />
        <TextField
          label="password"
        />
      </form>
    </div>
  );
}

export default Login;

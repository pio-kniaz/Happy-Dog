import './register.scss';
import { Typography } from '@material-ui/core';

import TextField from '@material-ui/core/TextField';

function Register() {
  return (
    <div className="register">
      <Typography
        variant="h1"
        align="center"
        display="block"
      >
        Welcome to Happy Dog
      </Typography>
      <form
        className="register__form"
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

export default Register;

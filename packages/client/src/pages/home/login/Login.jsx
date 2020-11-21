import Grid from '@material-ui/core/Grid';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import '@/pages/home/login/login.scss';
import { CustomButton, TextInput } from '@components';

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});
function Login() {
  return (
    <div className="login">
      <Grid
        container
      >
        <Formik
          initialValues={{
            email: 'janusz@op.pl',
            password: 'ajajaj',
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {() => (
            <Form className="login__form">
              <Grid
                className="login__form-input"
                item
                xs={12}
              >
                <TextInput
                  fullWidth
                  type="text"
                  name="email"
                />
              </Grid>
              <Grid
                className="login__form-input"
                item
                xs={12}
              >
                <TextInput
                  fullWidth
                  type="password"
                  name="password"
                />
                <Grid
                  className="login__form-input login__form-input--button"
                  item
                  xs={12}
                >
                  <CustomButton
                    fullWidth
                    color="primary"
                    type="submit"
                  >
                    Zaloguj
                  </CustomButton>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
        <Grid
          item
          xs={12}
        >
          <CustomButton
            color="secondary"
            fullWidth
            variant="text"
            disableFocusRipple
            disableRipple
          >
            <Link to="/reset-password">
              Nie pamietasz hasla ?
            </Link>
          </CustomButton>
        </Grid>
        <Grid
          item
          xs={12}
        >
          Utworz nowe konto
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;

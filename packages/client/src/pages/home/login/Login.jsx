import { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import PetsTwoToneIcon from '@material-ui/icons/PetsTwoTone';
import { api } from '@/api';

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
  useEffect(() => {
    api.get('api/user/users');
  }, []);
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
                  label="Email"
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
                  label="Password"
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
                    startIcon={<PetsTwoToneIcon />}
                  >
                    Zaloguj
                  </CustomButton>
                  <CustomButton
                    fullWidth
                    variant="link"
                    to="/password-reset"
                    disableFocusRipple
                    disableRipple
                  >
                    Nie pamietasz hasła?
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
            fullWidth
            variant="contained"
            color="secondary"
            onClick={() => window.alert('Open modal with register')}
          >
            Utwórz nowe
          </CustomButton>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;

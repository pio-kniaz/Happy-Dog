import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { Formik, Form } from 'formik';
import PetsTwoToneIcon from '@material-ui/icons/PetsTwoTone';
import { useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import '@/pages/home/login/login.scss';
import { useSignIn } from '@queries/sign-in/useSignIn';
import { loginValidationSchema } from '@/pages/home/login/loginValidationSchema';
import { CustomButton, ButtonLink, TextInput } from '@components';
import { openModal } from '@/redux/modal/actions';
import { ModalType } from '@components/modal/ModalType';

const formInitialValues = {
  email: '',
  password: '',
};

function Login() {
  const { mutate: signIn, isSuccess, isLoading } = useSignIn();

  const { closeSnackbar } = useSnackbar();

  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      const timeout = setTimeout(() => {
        history.push('/dashboard');
      }, 1500);
      return () => {
        clearTimeout(timeout);
        closeSnackbar();
      };
    }
    return () => null;
  }, [closeSnackbar, history, isSuccess]);

  const handleSubmit = (values) => {
    signIn({ values });
  };

  const handleOpenModal = () => dispatch(openModal({
    modalType: ModalType.registerUser,
    params: {
      title: 'Register User',
    },
  }));

  const isButtonDisabled = isLoading || isSuccess;

  return (
    <div className="login">
      <Grid
        container
      >
        <Formik
          initialValues={formInitialValues}
          validationSchema={loginValidationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <LoginForm
              isButtonDisabled={isButtonDisabled}
            />
          )}
        </Formik>
        <Grid
          item
          xs={12}
        >
          <CustomButton
            disabled={isButtonDisabled}
            fullWidth
            variant="contained"
            color="secondary"
            onClick={handleOpenModal}
          >
            Utwórz nowe
          </CustomButton>
        </Grid>
      </Grid>
    </div>
  );
}

function LoginForm(props) {
  const { isButtonDisabled } = props;

  return (
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
            disabled={isButtonDisabled}
            fullWidth
            color="primary"
            type="submit"
            startIcon={<PetsTwoToneIcon />}
          >
            Zaloguj
          </CustomButton>
          <ButtonLink
            disabled={isButtonDisabled}
            fullWidth
            to="/password-reset"
            disableFocusRipple
            disableRipple
          >
            Nie pamietasz hasła?
          </ButtonLink>
        </Grid>
      </Grid>
    </Form>
  );
}
LoginForm.propTypes = {
  isButtonDisabled: PropTypes.bool.isRequired,
};

export default Login;

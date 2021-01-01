import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { Formik, Form } from 'formik';
import PetsTwoToneIcon from '@material-ui/icons/PetsTwoTone';
import { useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { makeStyles } from '@material-ui/core/styles';

import { useSignIn } from '@queries/sign-in/useSignIn';
import { loginValidationSchema } from '@/pages/home/login/loginValidationSchema';
import { CustomButton, ButtonLink, TextInput } from '@components';
import { openModal } from '@/redux/modal/actions';
import { ModalType } from '@components/modal/ModalType';

const formInitialValues = {
  email: '',
  password: '',
};

const useStyles = makeStyles({
  root: {
    padding: '2rem',
    margin: 'auto',
  },
  form: {
    width: '100%',
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  input: {
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  buttons: {
    marginTop: '1.25rem',
    marginBottom: '1rem',
    '& button': {
      '&:first-of-type': {
        marginBottom: '0.75rem',
      },
    },
  },
});

function Login() {
  const { mutate: signIn, isSuccess, isLoading } = useSignIn();

  const classes = useStyles();

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
    <div
      className={classes.root}
      data-testid="login"
    >
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

  const classes = useStyles();

  return (
    <Form className={classes.form}>
      <Grid
        className={classes.input}
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
        className={classes.input}
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
          className={classes.buttons}
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
            className=""
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

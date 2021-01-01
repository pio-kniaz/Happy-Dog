import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import { Formik, Form } from 'formik';
import { useSnackbar } from 'notistack';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

import { CustomButton } from '@components/buttons';
import { TextInput, SelectInput, DateInput } from '@components/inputs';
import { registerValidationSchema } from '@components/modal/register-user/registerValidationSchema';
import { useSignUp } from '@queries/sign-up/useSignUp';
import { formErrorParser } from '@/utils/formErrorParser';
import { setSnackBarOptions } from '@/utils/snackBar';
import { SnackBarType } from '@/const/SnackBarType';
import { closeModal } from '@/redux/modal/actions';
// import { DisplayFormikState } from '@/helpers/DisplayFormikState';

const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
];

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      width: '415px',
    },
  },
  form: {
    paddingBottom: '1rem',
  },
  input: {
    paddingTop: '.25rem',
    paddingBottom: '.25rem',
  },
  gutter: {
    [theme.breakpoints.up('sm')]: {
      '&:first-of-type': {
        paddingRight: '0.6rem',
      },
      '&:last-of-type': {
        paddingRight: '0.6rem',
      },
    },
  },
  buttons: {
    marginTop: '1.5rem',
  },
}));

const formInitialValues = {
  firstName: 'Janusz',
  lastName: 'Kowalski',
  email: 'gosia1112@onet.eu',
  password: '123Sd$!@%?',
  passwordConfirmation: '123Sd$!@%?',
  birthday: null,
  gender: '',
  terms: true,
};

function RegisterUser(props) {
  const { className } = props;

  const classes = useStyles();

  const dispatch = useDispatch();

  const { t } = useTranslation();

  const { mutateAsync: signUpMutation, isSuccess, isLoading } = useSignUp();

  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values, { setErrors }) => {
    try {
      await signUpMutation({ values });
      enqueueSnackbar('Success', setSnackBarOptions({
        variant: SnackBarType.success,
      }));
      dispatch(closeModal());
    } catch (error) {
      const formError = formErrorParser(error.response.data.message.errors);
      console.log(formError, 'formError');
      setErrors(formError);
    }
  };

  const isButtonDisabled = isLoading || isSuccess;

  const registerUserModalClassName = clsx(`${classes.root} ${className}`);
  const inputWithGutterClassName = clsx(`${classes.input} ${classes.gutter}`);

  return (
    <>
      <div className={registerUserModalClassName}>
        <Formik
          initialValues={formInitialValues}
          validationSchema={registerValidationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <>
              <Form className={classes.form}>
                <Grid
                  container
                  justify="space-between"
                >
                  <Grid
                    className={inputWithGutterClassName}
                    item
                    xs={12}
                    md={6}
                  >
                    <TextInput
                      fullWidth
                      type="text"
                      name="firstName"
                      label={t('input.label.firstName')}
                    />
                  </Grid>
                  <Grid
                    className={inputWithGutterClassName}
                    item
                    xs={12}
                    md={6}
                  >
                    <TextInput
                      fullWidth
                      type="text"
                      name="lastName"
                      label={t('input.label.lastName')}
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  justify="space-between"
                >
                  <Grid
                    className={inputWithGutterClassName}
                    item
                    xs={12}
                    md={6}
                  >
                    <DateInput
                      name="birthday"
                      label={t('input.label.birthday')}
                    />
                  </Grid>
                  <Grid
                    className={inputWithGutterClassName}
                    item
                    xs={12}
                    md={6}
                  >
                    <SelectInput
                      fullWidth
                      name="gender"
                      label={t('input.label.gender')}
                      options={genderOptions}
                    />
                  </Grid>
                </Grid>
                <Grid
                  className={classes.input}
                  item
                  xs={12}
                >
                  <TextInput
                    fullWidth
                    type="text"
                    name="email"
                    label={t('input.label.email')}
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
                </Grid>
                <Grid
                  className={classes.input}
                  item
                  xs={12}
                >
                  <TextInput
                    fullWidth
                    type="password"
                    name="passwordConfirmation"
                    label={t('input.label.passwordConfirmation')}
                  />
                </Grid>
                <Grid
                  item
                  className={classes.buttons}
                  xs={12}
                >
                  <CustomButton
                    fullWidth
                    disabled={isButtonDisabled}
                    color="primary"
                    type="submit"
                  >
                    Zarejestruj
                  </CustomButton>
                </Grid>
              </Form>
              {/* <DisplayFormikState {...formikProps} /> */}
            </>
          )}
        </Formik>
      </div>
    </>
  );
}

RegisterUser.propTypes = {
  className: PropTypes.string,
};

RegisterUser.defaultProps = {
  className: '',
};

export default RegisterUser;

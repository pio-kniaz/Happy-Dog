import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import { Formik, Form } from 'formik';
import { useSnackbar } from 'notistack';

import './register-user.scss';
import { CustomButton } from '@components/buttons';
import { TextInput, SelectInput, DateInput } from '@components/inputs';
import { registerValidationSchema } from '@components/modal/register-user/registerValidationSchema';
import { useSignUp } from '@queries/sign-up/useSignUp';
import { formErrorParser } from '@/utils/formErrorParser';
import { setSnackBarOptions } from '@/utils/snackBar';
import { SnackBarType } from '@/const/SnackBarType';
import { closeModal } from '@/redux/modal/actions';

const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
];

const formInitialValues = {
  firstName: 'Janusz',
  lastName: 'Kowalski',
  email: 'gosia1112@onet.eu',
  password: '123Sd$!@%?',
  passwordConfirmation: '123Sd$!@%?',
  birthday: '2020-12-08',
  gender: 'male',
  terms: true,
};

function RegisterUser(props) {
  const { className } = props;

  const dispatch = useDispatch();

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
      setErrors(formError);
    }
  };

  const isButtonDisabled = isLoading || isSuccess;

  const registerUserModalClassName = clsx(`register-user ${className}`);
  return (
    <>
      <div className={registerUserModalClassName}>
        <Formik
          initialValues={formInitialValues}
          validationSchema={registerValidationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="register-user__form">
              <Grid
                container
                justify="space-between"
              >
                <Grid
                  className="register-user__input register-user__input--gutter"
                  item
                  xs={12}
                  md={6}
                >
                  <TextInput
                    fullWidth
                    type="text"
                    name="firstName"
                    label="First Name"
                  />
                </Grid>
                <Grid
                  className="register-user__input register-user__input--gutter"
                  item
                  xs={12}
                  md={6}
                >
                  <TextInput
                    fullWidth
                    type="text"
                    name="lastName"
                    label="Last Name"
                  />
                </Grid>
              </Grid>
              <Grid
                container
                justify="space-between"
              >
                <Grid
                  className="register-user__input register-user__input--gutter"
                  item
                  xs={12}
                  md={6}
                >
                  <DateInput
                    name="birthday"
                    label="Birthday"
                  />
                </Grid>
                <Grid
                  className="register-user__input register-user__input--gutter"
                  item
                  xs={12}
                  md={6}
                >
                  <SelectInput
                    fullWidth
                    name="gender"
                    label="Gender"
                    options={genderOptions}
                  />
                </Grid>
              </Grid>
              <Grid
                className="register-user__input"
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
                className="register-user__input"
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
                className="register-user__input"
                item
                xs={12}
              >
                <TextInput
                  fullWidth
                  type="password"
                  name="passwordConfirmation"
                  label="Password Confirmation"
                />
              </Grid>
              <Grid
                item
                className="register-user__buttons"
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
          ) }
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

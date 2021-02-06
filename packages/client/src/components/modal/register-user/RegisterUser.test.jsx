import mockAxios from 'axios';
import selectEvent from 'react-select-event';
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@test-utils/CustomRender';

import successResponse from '@/__mocks__/rest/sign-up/useSignUp/successResponse.json';
import errorResponse from '@/__mocks__/rest/sign-up/useSignUp/errorResponse.json';
import RegisterUser from './RegisterUser';

const mockCloseModal = jest.fn();
jest.mock('@/redux/modal/actions', () => ({
  closeModal: (data) => mockCloseModal(data),
}));

describe('Test RegisterUser', () => {
  it('Should render RegisterUser with form inputs and button', () => {
    render(<RegisterUser />);

    const registerUserForm = screen.getByTestId('register-user-form');
    const firstNameInput = screen.getByRole('textbox', { name: /input.label.firstName/i });
    const lastNameInput = screen.getByRole('textbox', { name: /input.label.lastName/i });
    const birthdayInput = screen.getByRole('textbox', { name: /input.label.birthday/i });
    const genderInput = screen.getByRole('textbox', { name: /input.label.gender/i });
    const emailInput = screen.getByRole('textbox', { name: /input.label.email/i });
    const passwordInput = screen.getByLabelText('input.label.password');
    const passwordConfirmationInput = screen.getByLabelText('input.label.passwordConfirmation');

    const registerButton = screen.getByRole('button', { name: /zarejestruj/i });

    expect(registerUserForm).toBeInTheDocument();
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(birthdayInput).toBeInTheDocument();
    expect(genderInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(passwordConfirmationInput).toBeInTheDocument();

    expect(registerButton).toBeInTheDocument();
  });

  it('Should render register form with initial values', () => {
    render(<RegisterUser />);

    const registerUserForm = screen.getByTestId('register-user-form');

    expect(registerUserForm).toHaveFormValues({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      birthday: '',
      gender: '',
      terms: true,
    });
  });

  it('Should render firstName input with correct attributes', () => {
    render(<RegisterUser />);
    const firstNameInput = screen.getByRole('textbox', { name: /input.label.firstName/i });

    expect(firstNameInput).toHaveValue('');
    expect(firstNameInput).toHaveAttribute('type', 'text');
  });

  it('Should render lastName input with correct attributes', () => {
    render(<RegisterUser />);

    const lastNameInput = screen.getByRole('textbox', { name: /input.label.lastName/i });

    expect(lastNameInput).toHaveValue('');
    expect(lastNameInput).toHaveAttribute('type', 'text');
  });

  it('Should render birthday input with correct attributes', async () => {
    render(<RegisterUser />);

    const birthdayInput = screen.getByRole('textbox', { name: /input.label.birthday/i });

    expect(birthdayInput).toHaveValue('');
    expect(birthdayInput).toHaveAttribute('type', 'text');
  });
  it('Should render gender input with correct attributes', async () => {
    render(<RegisterUser />);
    const genderInput = screen.getByRole('textbox', { name: /input.label.gender/i });

    expect(screen.queryByText('Male')).not.toBeInTheDocument();
    selectEvent.openMenu(genderInput);
    expect(screen.getByText('Male')).toBeInTheDocument();
    expect(screen.getByText('Female')).toBeInTheDocument();
  });

  it('Should render password input with correct attributes', () => {
    render(<RegisterUser />);

    const passwordInput = screen.getByLabelText('input.label.password');

    expect(passwordInput).toHaveValue('');
    expect(passwordInput).toHaveAttribute('type', 'password');
  });

  it('Should render passwordConfirmation input with correct attributes', () => {
    render(<RegisterUser />);

    const passwordConfirmationInput = screen.getByLabelText('input.label.passwordConfirmation');

    expect(passwordConfirmationInput).toHaveValue('');
    expect(passwordConfirmationInput).toHaveAttribute('type', 'password');
  });

  it('Handles a successful register flow', async () => {
    render(<RegisterUser />);

    mockAxios.post.mockImplementationOnce(() => Promise.resolve({ data: successResponse }));

    const firstNameInput = screen.getByRole('textbox', { name: /input.label.firstName/i });
    const lastNameInput = screen.getByRole('textbox', { name: /input.label.lastName/i });
    const birthdayInput = screen.getByRole('textbox', { name: /input.label.birthday/i });
    const genderInput = screen.getByRole('textbox', { name: /input.label.gender/i });
    const emailInput = screen.getByRole('textbox', { name: /input.label.email/i });
    const passwordInput = screen.getByLabelText('input.label.password');
    const passwordConfirmationInput = screen.getByLabelText('input.label.passwordConfirmation');
    const registerButton = screen.getByRole('button', { name: /zarejestruj/i });

    fireEvent.blur(firstNameInput);
    fireEvent.change(firstNameInput, { target: { value: 'janusz' } });

    fireEvent.blur(lastNameInput);
    fireEvent.change(lastNameInput, { target: { value: 'kowalski' } });

    fireEvent.click(birthdayInput);
    const okButton = await screen.findByText('OK');
    fireEvent.click(okButton);

    await selectEvent.select(genderInput, ['Male', 'Female']);
    await selectEvent.select(genderInput, 'Male');

    fireEvent.blur(emailInput);
    fireEvent.change(emailInput, { target: { value: 'gosia112@op.pl' } });

    fireEvent.blur(passwordInput);
    fireEvent.change(passwordInput, { target: { value: 'Jajo123?' } });

    fireEvent.blur(passwordConfirmationInput);
    fireEvent.change(passwordConfirmationInput, { target: { value: 'Jajo123?' } });

    fireEvent.click(registerButton);
    await waitFor(() => expect(registerButton).toBeDisabled());
    const successToast = screen.getByRole('alert');
    expect(successToast).toBeInTheDocument();
    expect(successToast).toHaveTextContent('Success');
    await waitFor(() => {
      expect(mockCloseModal).toHaveBeenCalled();
    });
  });

  it('Handles a failure register flow', async () => {
    render(<RegisterUser />);
    mockAxios.post.mockImplementationOnce(() => Promise.reject(errorResponse));

    const firstNameInput = screen.getByRole('textbox', { name: /input.label.firstName/i });
    const lastNameInput = screen.getByRole('textbox', { name: /input.label.lastName/i });
    const birthdayInput = screen.getByRole('textbox', { name: /input.label.birthday/i });
    const genderInput = screen.getByRole('textbox', { name: /input.label.gender/i });
    const emailInput = screen.getByRole('textbox', { name: /input.label.email/i });
    const passwordInput = screen.getByLabelText('input.label.password');
    const passwordConfirmationInput = screen.getByLabelText('input.label.passwordConfirmation');
    const registerButton = screen.getByRole('button', { name: /zarejestruj/i });

    fireEvent.blur(firstNameInput);
    fireEvent.change(firstNameInput, { target: { value: 'janusz' } });

    fireEvent.blur(lastNameInput);
    fireEvent.change(lastNameInput, { target: { value: 'kowalski' } });

    fireEvent.click(birthdayInput);
    const okButton = await screen.findByText('OK');
    fireEvent.click(okButton);

    await selectEvent.select(genderInput, ['Male', 'Female']);
    await selectEvent.select(genderInput, 'Male');

    fireEvent.blur(emailInput);
    fireEvent.change(emailInput, { target: { value: 'gosia112@op.pl' } });

    fireEvent.blur(passwordInput);
    fireEvent.change(passwordInput, { target: { value: 'Jajo123?' } });

    fireEvent.blur(passwordConfirmationInput);
    fireEvent.change(passwordConfirmationInput, { target: { value: 'Jajo123?' } });

    fireEvent.click(registerButton);
    await waitFor(() => expect(registerButton).toBeDisabled());
    await waitFor(() => expect(screen.getByText('Expected email to be unique.')).toBeInTheDocument());
  });
});

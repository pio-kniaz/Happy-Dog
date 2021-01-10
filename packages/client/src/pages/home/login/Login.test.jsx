import mockAxios from 'axios';
import successResponse from '@/__mocks__/sign-in/successResponse.json';
import errorResponse from '@/__mocks__/sign-in/errorResponse.json';

import { ValidationMessages } from '@/utils/validation';
import {
  render, screen, fireEvent, waitFor,
} from '@test-utils/CustomRender';
import Login from './Login';

describe('Test Login', () => {
  it('Should render Login with all elements on page', async () => {
    render(<Login />);

    const login = screen.getByTestId('login');
    const loginForm = screen.getByTestId('login-form');
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /zaloguj/i });
    const forgotPassword = screen.getByRole('button', { name: /nie pamietasz hasła\?/i });
    const createNewButton = screen.getByRole('button', { name: /utwórz nowe/i });

    expect(login).toBeInTheDocument();
    expect(loginForm).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(createNewButton).toBeInTheDocument();
    expect(forgotPassword).toBeInTheDocument();
  });

  it('Should render email input with correct attributes', async () => {
    render(<Login />);
    const emailInput = screen.getByRole('textbox', { name: /email/i });

    expect(emailInput).toHaveValue('');
    expect(emailInput).toHaveAttribute('type', 'text');
  });

  it('Should render password input with correct attributes', async () => {
    render(<Login />);
    const passwordInput = screen.getByLabelText(/password/i);

    expect(passwordInput).toHaveValue('');
    expect(passwordInput).toHaveAttribute('type', 'password');
  });

  it('Should displays an error message when required filed is touched', async () => {
    render(<Login />);
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    fireEvent.blur(emailInput);

    const passwordInput = screen.getByLabelText(/password/i);
    fireEvent.blur(passwordInput);

    expect(await screen.findAllByText(`${ValidationMessages.required}`)).toHaveLength(2);
  });

  it('Handles a successful login flow', async () => {
    render(<Login />);

    mockAxios.post.mockImplementationOnce(() => Promise.resolve({ data: successResponse }));

    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /zaloguj/i });
    const forgotPasswordButton = screen.getByRole('button', { name: /nie pamietasz hasła\?/i });
    const createNewButton = screen.getByRole('button', { name: /utwórz nowe/i });

    fireEvent.blur(emailInput);
    fireEvent.change(emailInput, { target: { value: 'test123@op.pl' } });
    fireEvent.blur(passwordInput);
    fireEvent.change(passwordInput, { target: { value: '123' } });

    fireEvent.click(submitButton);

    await waitFor(() => expect(submitButton).toBeDisabled());
    expect(forgotPasswordButton).toHaveClass('Mui-disabled');
    expect(createNewButton).toBeDisabled();
    const successToast = screen.getByRole('alert');
    expect(successToast).toBeInTheDocument();
    expect(successToast).toHaveTextContent('Welcome Janusz');
  });

  it('Handles a failure login flow', async () => {
    render(<Login />);
    mockAxios.post.mockImplementationOnce(() => Promise.reject(errorResponse));

    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /zaloguj/i });
    const forgotPasswordButton = screen.getByRole('button', { name: /nie pamietasz hasła\?/i });
    const createNewButton = screen.getByRole('button', { name: /utwórz nowe/i });

    fireEvent.blur(emailInput);
    fireEvent.change(emailInput, { target: { value: '123a@op.pl' } });
    fireEvent.blur(passwordInput);
    fireEvent.change(passwordInput, { target: { value: '123' } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(submitButton).toBeDisabled();
      expect(forgotPasswordButton).toHaveClass('Mui-disabled');
      expect(createNewButton).toBeDisabled();
    });

    const errorToast = screen.getByRole('alert');

    expect(errorToast).toBeInTheDocument();
    expect(errorToast).toHaveTextContent('User not found');
    expect(submitButton).toBeEnabled();
    expect(forgotPasswordButton).not.toHaveClass('Mui-disabled');
    expect(createNewButton).toBeEnabled();
  });

  it('Should render forgotPassword button with correct attributes', () => {
    render(<Login />);

    const forgotPassword = screen.getByRole('button', { name: /nie pamietasz hasła\?/i });
    expect(forgotPassword).toBeEnabled();
    expect(forgotPassword).toHaveAttribute('href', '/password-reset');
  });
});

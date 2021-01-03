import { ValidationMessages } from '@/utils/validation';
import {
  render, screen, fireEvent,
} from '../../../test-config/CustomRender';
import Login from './Login';

describe('Test Login', () => {
  it('Should render Login on page', () => {
    render(<Login />);
    expect(screen.getByTestId('login')).toBeInTheDocument();
  });

  it('Should render login form with inputs and button', async () => {
    render(<Login />);

    const loginForm = screen.getByTestId('login-form');
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /zaloguj/i });

    expect(loginForm).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('Should displays an error message when required filed is touched', async () => {
    render(<Login />);

    const emailInput = screen.getByRole('textbox', { name: /email/i });
    fireEvent.blur(emailInput);

    const passwordInput = screen.getByLabelText(/password/i);
    fireEvent.blur(passwordInput);

    expect(await screen.findAllByText(`${ValidationMessages.required}`)).toHaveLength(2);
  });
});

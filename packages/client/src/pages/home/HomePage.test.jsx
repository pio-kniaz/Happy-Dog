import { render, screen } from '@test-utils/CustomRender';
import HomePage from './HomePage';

describe('Testing HomePage', () => {
  it('Should render title on home page', () => {
    render(<HomePage />);

    const homeTitle = screen.getByRole('heading', { name: /Happy Dog/i });
    expect(homeTitle).toHaveTextContent('Happy Dog');
  });
  it('Should render Login on home page', () => {
    render(<HomePage />);

    const login = screen.getByTestId('login');
    expect(login).toBeInTheDocument();
  });
});

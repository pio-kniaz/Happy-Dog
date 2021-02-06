import { render, screen } from '@test-utils/CustomRender';
import Home from './Home';

describe('Testing Home', () => {
  it('Should render title on home page', () => {
    render(<Home />);

    const homeTitle = screen.getByRole('heading', { name: /Happy Dog/i });
    expect(homeTitle).toHaveTextContent('Happy Dog');
  });
  it('Should render Login on home page', () => {
    render(<Home />);

    const login = screen.getByTestId('login');
    expect(login).toBeInTheDocument();
  });
});

import { render, screen } from '@test-utils/CustomRender';
import Home from './Home';

describe('Testing Home', () => {
  it('Should render title on home page', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { name: /Happy Dog/i })).toHaveTextContent('Happy Dog');
  });
  it('Should render Login on home page', () => {
    render(<Home />);
    expect(screen.getByTestId('login')).toBeInTheDocument();
  });
});

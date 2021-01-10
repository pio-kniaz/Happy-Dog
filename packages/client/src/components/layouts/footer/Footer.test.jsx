import { render, screen } from '@test-utils/CustomRender';
import Footer from './Footer';

test('Render Footer', () => {
  render(<Footer />);

  const footer = screen.getByTestId(/footer/i);
  expect(footer).toBeInTheDocument();
});

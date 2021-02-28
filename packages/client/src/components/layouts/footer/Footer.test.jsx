import { render, screen } from '@test-utils/CustomRender';
import Footer from './Footer';

test('Render Footer with nodes', () => {
  render(<Footer />);

  const footer = screen.getByTestId(/footer/i);
  const instagramIcon = screen.getByTestId(/instagram-icon/i);
  const facebookIcon = screen.getByTestId(/facebook-icon/i);
  const copy = screen.getByText(/© 2021 Happy Dog/i);
  expect(footer).toBeInTheDocument();
  expect(copy).toBeInTheDocument();
  expect(facebookIcon).toBeInTheDocument();
  expect(instagramIcon).toBeInTheDocument();
});

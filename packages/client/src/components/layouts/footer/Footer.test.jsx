import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('Render Footer', () => {
  render(<Footer />);
  const footer = screen.getByTestId(/footer/i);
  expect(footer).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('Render footer', () => {
  render(<Footer />);
  const footer = screen.getByTestId(/footer/i);
  expect(footer).toBeInTheDocument();
});

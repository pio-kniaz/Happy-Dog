import { render, screen } from '@test-utils/CustomRender';
import { resizeTo, bp } from '@test-utils/matchMedia';
import Navbar from './Navbar';

test('Render Navbar', () => {
  const onSidebarOpen = jest.fn();
  render(<Navbar onSidebarOpen={onSidebarOpen} />);

  const navbar = screen.getByTestId(/navbar/i);
  expect(navbar).toBeInTheDocument();
});

test(`Render Logo button with href above ${bp.lg}`, () => {
  resizeTo({ width: bp.lg });
  const onSidebarOpen = jest.fn();

  render(<Navbar onSidebarOpen={onSidebarOpen} />);

  const logo = screen.getByRole('button', { name: /Redirect to main page/ });
  expect(logo).toHaveAttribute('href', '/');
});

test(`Render sidebar menu button with under ${bp.md}`, () => {
  resizeTo({ width: bp.md });
  const onSidebarOpen = jest.fn();

  render(<Navbar onSidebarOpen={onSidebarOpen} />);
  const sidebarMenu = screen.getByRole('button', { name: /Toggle sidebar/ });
  expect(sidebarMenu).toBeInTheDocument();
});

test('Render sign out button', () => {
  const onSidebarOpen = jest.fn();
  render(<Navbar onSidebarOpen={onSidebarOpen} />);
  const signOut = screen.getByRole('button', { name: /Sign out/ });
  expect(signOut).toBeInTheDocument();
});

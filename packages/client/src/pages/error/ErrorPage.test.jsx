import { render, screen, fireEvent } from '@test-utils/CustomRender';
import ErrorPage from './ErrorPage';

describe('Testing ErrorPage', () => {
  it('Should title and description', () => {
    render(<ErrorPage />);
    const title = screen.getByRole('heading', { name: /something went wrong!/i });
    const description = screen.getByRole('heading', { name: /unexpected error occurs/i });
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it('Should render rapport button with correct attributes', () => {
    render(<ErrorPage />);
    const rapportButton = screen.getByRole('button', { name: /rapport error/i });
    expect(rapportButton).toBeInTheDocument();
  });

  it('Should render back home button with correct attributes on route not equal home', () => {
    render(<ErrorPage />, {
      route: '/dashboard',
    });
    const backHomeButton = screen.getByRole('button', { name: /back home/i });
    expect(backHomeButton).toBeInTheDocument();
    expect(backHomeButton).toHaveAttribute('href', '/');
  });

  it('Should render refresh page button with correct logic on route "/" ', () => {
    render(<ErrorPage />);
    const refreshPageButton = screen.getByRole('button', { name: /refresh page/i });
    expect(refreshPageButton).toBeInTheDocument();
    fireEvent.click(refreshPageButton);
    expect(window.location.reload).toHaveBeenCalled();
  });
});

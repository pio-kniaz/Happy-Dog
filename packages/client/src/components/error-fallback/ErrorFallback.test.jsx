import { render, screen } from '@test-utils/CustomRender';
import ErrorFallback from './ErrorFallback';

describe('Testing ErrorFallback', () => {
  it('Should render component with title and description', () => {
    render(<ErrorFallback
      title="something went wrong!"
      description="unexpected error occurs"
    />);
    const title = screen.getByRole('heading', { name: /something went wrong!/i });
    const description = screen.getByRole('heading', { name: /unexpected error occurs/i });
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});

/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import { SnackbarProvider } from 'notistack';
import Theme from '@/theme/Theme';
import QueryProvider from '@/QueryProvider';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

const AllTheProviders = ({ children }) => (
  <QueryProvider>
    <Theme>
      <SnackbarProvider anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      >
        <Router>
          {children}
        </Router>
      </SnackbarProvider>
    </Theme>
  </QueryProvider>
);

const CustomRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { CustomRender as render };

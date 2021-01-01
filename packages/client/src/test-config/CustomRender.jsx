/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';

import { store } from '@/redux/store';
import Theme from '@/theme/Theme';
import QueryProvider from '@/QueryProvider';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

const AllTheProviders = ({ children }) => (
  <Provider store={store}>
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
  </Provider>

);

const CustomRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { CustomRender as render };

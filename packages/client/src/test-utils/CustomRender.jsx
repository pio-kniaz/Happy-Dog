/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { store } from '@/redux/store';
import Theme from '@/theme/Theme';
import QueryProvider from '@/QueryProvider';
import { Router } from 'react-router-dom';

const AllTheProviders = ({ children }) => (
  <Provider store={store}>
    <QueryProvider>
      <Theme>
        <SnackbarProvider anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        >
          {/* <Router history={history}> */}
          {children}
          {/* </Router> */}
        </SnackbarProvider>
      </Theme>
    </QueryProvider>
  </Provider>

);

const CustomRender = (ui, {
  route = '/',
  history = createMemoryHistory({ initialEntries: [route] }),
} = {}, options) => ({
  // eslint-disable-next-line react/jsx-one-expression-per-line
  ...render(<Router history={history}> {ui} </Router>,
    { wrapper: AllTheProviders, ...options }),
  history,
});

// re-export everything
export * from '@testing-library/react';

// override render method
export { CustomRender as render };

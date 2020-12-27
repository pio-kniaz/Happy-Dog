import ReactDOM from 'react-dom';

import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';

import { store } from '@/redux/store';
import Theme from '@/theme/Theme';
import App from '@/App';
import QueryProvider from '@/QueryProvider';
import '@/i18n';
import '@/styles/global.scss';

const rootElem = document.getElementById('main');

ReactDOM.render(
  <Provider store={store}>
    <QueryProvider>
      <Theme>
        <SnackbarProvider anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        >
          <App />
        </SnackbarProvider>
      </Theme>
    </QueryProvider>
  </Provider>,
  rootElem,
);

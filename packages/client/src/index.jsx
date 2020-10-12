import React from 'react';
import ReactDOM from 'react-dom';

import Theme from '@/theme/Theme';
import App from '@/App';
import '@/styles/global.scss';

const rootElem = document.getElementById('main');

ReactDOM.render(
  <Theme>
    <App />
  </Theme>,
  rootElem,
);

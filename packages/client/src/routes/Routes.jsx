import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import AuthenticatedRoutes from '@/routes/AuthenticatedRoutes';
import UnAuthenticatedRoutes from '@/routes/UnAuthenticatedRoutes';

function Routes() {
  const isUserLogged = false;
  return (
    <Router>
      <Suspense fallback={<h1>Wczytywanie...</h1>}>
        {isUserLogged ? <AuthenticatedRoutes /> : <UnAuthenticatedRoutes />}
      </Suspense>
    </Router>
  );
}

export default Routes;

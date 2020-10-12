import React, { Suspense } from 'react';
import {
  BrowserRouter as Router, Link,
} from 'react-router-dom';

import AuthenticatedRoutes from '@/routes/AuthenticatedRoutes';
import UnAuthenticatedRoutes from '@/routes/UnAuthenticatedRoutes';

function Routes() {
  const isUserLogged = false;
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/404">404</Link>
          </li>
        </ul>
      </nav>
      <Suspense fallback={<h1>Wczytywanie...</h1>}>
        {isUserLogged ? <AuthenticatedRoutes /> : <UnAuthenticatedRoutes />}
      </Suspense>
    </Router>
  );
}

export default Routes;

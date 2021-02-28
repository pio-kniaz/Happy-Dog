import { Suspense } from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import { Modal, Loader } from '@components';
import AuthService from '@/services/AuthService';
import AuthenticatedRoutes from '@/routes/AuthenticatedRoutes';
import UnAuthenticatedRoutes from '@/routes/UnAuthenticatedRoutes';

function Routes() {
  const isUserLogged = AuthService.isUserLogged();

  return (
    <Router>
      <Suspense fallback={<Loader size="4rem" />}>
        <Modal />
        {isUserLogged ? <AuthenticatedRoutes /> : <UnAuthenticatedRoutes />}
      </Suspense>
    </Router>
  );
}

export default Routes;

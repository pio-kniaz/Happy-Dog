import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import AuthenticatedRoutes from '@/routes/AuthenticatedRoutes';

function Routes() {
  return (
    <Router>
      <AuthenticatedRoutes />
    </Router>
  );
}

export default Routes;

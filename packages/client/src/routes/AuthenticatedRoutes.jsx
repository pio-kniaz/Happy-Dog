import React, { lazy } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

const DashboardPage = lazy(() => import('@/pages/dashboard/DashboardPage'));

function AuthenticatedRoutes() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={DashboardPage}
      />
      <Route
        render={() => <h1>404</h1>}
      />
    </Switch>
  );
}

export default AuthenticatedRoutes;

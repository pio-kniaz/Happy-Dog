import React, { lazy } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

const LoginPage = lazy(() => import('@/pages/login/LoginPage'));
const RegisterPage = lazy(() => import('@/pages/register/RegisterPage'));

function UnAuthenticatedRoutes() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={LoginPage}
      />
      <Route
        exact
        path="/register"
        component={RegisterPage}
      />
      <Route
        render={() => <h1>404</h1>}
      />
    </Switch>
  );
}

export default UnAuthenticatedRoutes;

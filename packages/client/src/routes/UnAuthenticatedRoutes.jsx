import React, { lazy } from 'react';
import {
  Switch,
} from 'react-router-dom';
import AppRoute from '@/routes/AppRoute';
import MainLayout from '@/components/layouts/main-layout/MainLayout';

const LoginPage = lazy(() => import('@/pages/login/LoginPage'));
const RegisterPage = lazy(() => import('@/pages/register/RegisterPage'));

function UnAuthenticatedRoutes() {
  return (
    <Switch>
      <AppRoute
        exact
        path="/"
        layout={MainLayout}
        component={LoginPage}
      />
      <AppRoute
        exact
        path="/register"
        layout={MainLayout}
        component={RegisterPage}
      />
      <AppRoute
        layout={MainLayout}
        component={() => <h1>404</h1>}
      />
    </Switch>
  );
}

export default UnAuthenticatedRoutes;

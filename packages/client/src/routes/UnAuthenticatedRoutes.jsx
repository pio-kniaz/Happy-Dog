import { lazy } from 'react';
import {
  Switch,
} from 'react-router-dom';
import AppRoute from '@/routes/AppRoute';
import { BasicLayout } from '@/components';

const Login = lazy(() => import('@/pages/login/Login'));
const Register = lazy(() => import('@/pages/register/Register'));

function UnAuthenticatedRoutes() {
  return (
    <Switch>
      <AppRoute
        exact
        path="/"
        layout={BasicLayout}
        component={Login}
      />
      <AppRoute
        exact
        path="/register"
        layout={BasicLayout}
        component={Register}
      />
      <AppRoute
        layout={BasicLayout}
        component={() => <h1>404</h1>}
      />
    </Switch>
  );
}

export default UnAuthenticatedRoutes;

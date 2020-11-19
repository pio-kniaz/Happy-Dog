import { lazy } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import AppRoute from '@/routes/AppRoute';
import { MainLayout, BasicLayout } from '@/components';

const DashboardPage = lazy(() => import('@/pages/dashboard/DashboardPage'));

function AuthenticatedRoutes() {
  return (
    <Switch>
      <AppRoute
        exact
        path="/"
        component={() => <Redirect to="/dashboard" />}
      />
      <AppRoute
        exact
        path="/dashboard"
        layout={MainLayout}
        component={DashboardPage}
      />
      <AppRoute
        layout={BasicLayout}
        component={() => <h1>404</h1>}
      />
    </Switch>
  );
}

export default AuthenticatedRoutes;

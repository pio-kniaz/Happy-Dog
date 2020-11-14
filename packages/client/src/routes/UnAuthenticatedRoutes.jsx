import { lazy } from 'react';
import {
  Switch,
} from 'react-router-dom';
import AppRoute from '@/routes/AppRoute';
import { BasicLayout } from '@/components';

const Home = lazy(() => import('@/pages/home/Home'));

function UnAuthenticatedRoutes() {
  return (
    <Switch>
      <AppRoute
        exact
        path="/"
        layout={BasicLayout}
        component={Home}
      />
      <AppRoute
        layout={BasicLayout}
        component={() => <h1>404</h1>}
      />
    </Switch>
  );
}

export default UnAuthenticatedRoutes;

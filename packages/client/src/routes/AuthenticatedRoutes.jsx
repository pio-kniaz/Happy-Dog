import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Redirect, useHistory } from 'react-router-dom';
import AppRoute from '@/routes/AppRoute';
import { useUserMe } from '@queries/user-me/useUserMe';
import { setUserBio, clearUserBio } from '@/redux/user-bio/actions';
import {
  MainLayout, BasicLayout, Loader,
} from '@/components';
import AuthService from '@/services/AuthService';

const DashboardPage = lazy(() => import('@/pages/dashboard/DashboardPage'));
const ErrorPage = lazy(() => import('@/pages/error/ErrorPage'));

function AuthenticatedRoutes() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => () => {
    dispatch(clearUserBio());
  }, [dispatch]);

  const { isSuccess, isError } = useUserMe({
    retry: false,
    refetchOnWindowFocus: false,
    onSuccess: ({ data }) => {
      dispatch(setUserBio(data.user));
    },
    onError: () => {
      AuthService.signOut();
      history.push('/');
    },
  });

  if (!isError) {
    return (
      <AppRoute
        layout={BasicLayout}
        component={ErrorPage}
      />
    );
  }

  if (isSuccess) {
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

  return (
    <Loader
      size="4rem"
    />
  );
}

export default AuthenticatedRoutes;

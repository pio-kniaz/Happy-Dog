import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import { Modal } from '@components';
import AuthService from '@/services/AuthService';
import AuthenticatedRoutes from '@/routes/AuthenticatedRoutes';
import UnAuthenticatedRoutes from '@/routes/UnAuthenticatedRoutes';
import { useUserMe } from '@queries/user-me/useUserMe';
import { setUserBio, clearUserBio } from '@/redux/user-bio/actions';

function Routes() {
  const isUserLogged = AuthService.isUserLogged();
  const dispatch = useDispatch();

  useEffect(() => () => {
    dispatch(clearUserBio());
  }, [dispatch]);

  const { isLoading, isSuccess } = useUserMe({
    enabled: isUserLogged,
    retry: false,
    refetchOnWindowFocus: false,
    onSuccess: ({ data }) => {
      dispatch(setUserBio(data.user));
    },
  });

  if (isLoading) {
    return <h1>Wczytywanie...</h1>;
  }

  return (
    <Router>
      <Suspense fallback={<h1>Wczytywanie...</h1>}>
        <Modal />
        {isSuccess ? <AuthenticatedRoutes /> : <UnAuthenticatedRoutes />}
      </Suspense>
    </Router>
  );
}

export default Routes;

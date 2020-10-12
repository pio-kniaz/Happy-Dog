import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

function AuthenticatedRoutes() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => <h1>home</h1>}
      />
      <Route
        render={() => <h1>404</h1>}
      />
    </Switch>
  );
}

export default AuthenticatedRoutes;

/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { Route } from 'react-router-dom';

function AppRoute({ component: Component, layout: Layout, ...restProps }) {
  return (
    <Route
      {...restProps}
      render={(routeProps) => {
        if (typeof Layout === typeof undefined) {
          return <Component {...routeProps} />;
        }
        return (
          <Layout>
            <Component {...routeProps} />
          </Layout>
        );
      }}
    />
  );
}

export default AppRoute;

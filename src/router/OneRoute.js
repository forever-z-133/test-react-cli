import React from "react";
import { Route } from "react-router-dom";

function OneRoute(item) {
  const { path, Component, keepAlive = false, Layout, exact = false } = item;
  return (
    <Route
      key={path}
      path={path}
      exact={exact}
      component={props => (
        <Layout>
          <Component {...props} keepAlive={keepAlive} />
        </Layout>
      )}
    />
  );
}

export default OneRoute;

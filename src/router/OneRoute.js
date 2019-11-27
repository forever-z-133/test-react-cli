import React from "react";
import { Route } from "react-router-dom";
import CheckAuth from "./CheckAuth";

function OneRoute(item) {
  const {
    path,
    Component,
    Layout,
    keepAlive = false,
    exact = false,
    withAuth = true
  } = item;

  return (
    <Route
      key={path}
      path={path}
      exact={exact}
      component={props => (
        <CheckAuth withAuth={withAuth}>
          <Layout>
            <Component {...props} keepAlive={keepAlive} />
          </Layout>
        </CheckAuth>
      )}
    />
  );
}

export default OneRoute;

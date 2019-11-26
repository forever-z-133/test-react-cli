import React, { Suspense } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import NotMatch from "components/NotMatch/index";
import ErrorPage from "components/ErrorPage/index";
import OneRoute from "./OneRoute";
import routeConfig from "./config";

export default function Router() {
  return (
    <HashRouter>
      <ErrorPage>
        <Suspense fallback={<div className="pos-center">模块加载中...</div>}>
          <Switch>
            {routeConfig.map(OneRoute)}
            <Route component={NotMatch} />
          </Switch>
        </Suspense>
      </ErrorPage>
    </HashRouter>
  );
}

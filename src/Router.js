import React, { lazy, Suspense } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

// 同步加载组件
import NotMatch from 'components/NotMatch/index';
import ErrorPage from 'components/ErrorPage/index';
// 异步加载组件（注：写法与同步的完全不一样）
const Home = lazy(() => import('routes/Home/index'));
const About = lazy(() => import('routes/About/index'));
const Dashboard = lazy(() => import('routes/Dashboard/index'));

export default function Router(props) {
  return (
    <HashRouter>
      <ErrorPage>
        {props.render(() => (
          <Suspense fallback={<div className="pos-center">模块加载中...</div>}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/dashboard" component={Dashboard} />
              <Route component={NotMatch} />
            </Switch>
          </Suspense>
        ))}
      </ErrorPage>
    </HashRouter>
  );
}
import React, { lazy, Suspense } from "react";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import Home from './routes/Home/index';
const About = lazy(() => import('./routes/About/index'));
const Dashboard = lazy(() => import('./routes/Dashboard/index'));

export default function BasicExample() {
  return (
    <HashRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </Suspense>
      </div>
    </HashRouter>
  );
}
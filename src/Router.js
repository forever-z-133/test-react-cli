import React from "react";
import {
  HashRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './routes/Home/index';
import About from './routes/About/index';
import Dashboard from './routes/Dashboard/index';

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
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}
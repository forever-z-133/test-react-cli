import React from 'react';
import { observer } from "mobx-react";

import app from 'mobx/index';

import logo from 'assets/logo.svg';
import './index.scss';

const Home = observer(() => {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" width="200" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a className="Home-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
      </header>
      <main>
        <button onClick={() => app.state === '' && app.getData()}>点击</button>
        {app.list.join(',')}
        <p>{app.state}</p>
      </main>
    </div>
  );
})

export default Home;
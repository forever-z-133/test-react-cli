import React from 'react';
import Component from 'components/index';
import { observer } from "mobx-react";
import app from 'mobx/index';

// 附件
import logo from 'assets/logo.svg';

class Home extends Component {
  throwError = () => {
    throw new Error('xx');
  }
  render() {
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
        <footer>
          <button onClick={() => this.throwError()}>直接报错(无法捕捉事件里的报错，好鸡肋)</button>
        </footer>
      </div>
    )
  };
}

export default observer(Home);
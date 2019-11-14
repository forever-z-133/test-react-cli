import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import App from './App';
import flexable from './utils/flexable';
import * as serviceWorker from 'config/serviceWorker';

if (process.env.NODE_ENV !== 'production') {
  console.log('测试版');
  console.log(process.env.REACT_APP_VERSION);
}

flexable(750, 750); // 响应式，75rem = 750px

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

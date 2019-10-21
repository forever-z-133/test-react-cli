import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

if (process.env.NODE_ENV !== 'production') {
  console.log('测试版');
}
console.log(process.env.REACT_APP_VERSION);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import flexable from './utils/flexable';
import * as serviceWorker from 'config/serviceWorker';

import './App.scss';
import 'components/ZYH/index.scss';

if (process.env.NODE_ENV !== 'production') {
  console.log('测试版');
  console.log(process.env.REACT_APP_VERSION);
}

flexable(1380); // 响应式，比如 1380rem = 100vw

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

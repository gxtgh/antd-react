import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import store from './store';//状态管理
import App from './routes/index';//路由
import './axios';//axios封装
import './mock';//
import './assets/style/reset.css';
import './assets/style/index.scss';
import 'antd/dist/antd.css';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
  ,document.getElementById('root')
);
// serviceWorker.unregister();

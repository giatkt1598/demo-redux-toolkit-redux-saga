import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import axios from 'axios';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store';

axios.defaults.baseURL = 'https://thatcopy.pw/catapi/rest/';

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root'),
);

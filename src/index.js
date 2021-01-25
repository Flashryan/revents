import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import './index.css';

import App from './layout/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore';
import ScrollToTop from './layout/scrollToTop';

const store = configureStore();
const rootEl = document.getElementById('root');


ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
      <ScrollToTop />
   <App />
  </BrowserRouter>
  </Provider>
  , rootEl
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

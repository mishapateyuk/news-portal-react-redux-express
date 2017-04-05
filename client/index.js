import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './containers/App.react';
import store from './store/store';
import '../style/style.css';

const application = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  application,
  document.getElementById('container')
);

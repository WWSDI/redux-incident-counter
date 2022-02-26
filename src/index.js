import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Application from './Application';

import './index.scss';
import { store } from './store';

ReactDOM.render(
  // You have to wrap the entire app with <Provider> to provide redux store to all components via Context API
  <Provider store={store}>
    <React.StrictMode>
      <Application />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

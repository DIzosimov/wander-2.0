import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';

// Styles that get put in head
import './styles/global.scss'

import App from './app';
import * as serviceWorker from './serviceWorker';
import './translations/i18n';

const { store } = configureStore();

const rootElement = document.getElementById('root');
const renderApp = () =>
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
  );

// Allow hot reloading
if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./app', renderApp);
}

renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

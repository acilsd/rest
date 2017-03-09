import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './App';

const container = document.getElementById('container');

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    container
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  });
}

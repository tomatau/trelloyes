import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import STORE from './STORE'
import App from './App';

ReactDOM.render(
  <App store={STORE} />,
  document.getElementById('root'),
);

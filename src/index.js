import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { createStore } from 'redux'
import synthApp from './lib/reducers'
let store = createStore(synthApp)

console.log(store.getState())

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

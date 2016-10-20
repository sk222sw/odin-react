import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './App';
import './index.css';

import synthApp from './lib/reducers'
import { changeWaveForm, WaveForms } from './lib/actions'

let store = createStore(synthApp)

let unsubscibe = store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(changeWaveForm(WaveForms.SAWTOOTH))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

unsubscibe()
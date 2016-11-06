import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './App'
import './index.css'

import synthApp from './lib/reducers'
import { changeWaveform, Waveforms } from './lib/actions'

let store = createStore(synthApp)

store.subscribe(() => {
  console.log(store.getState().toJS().syntheziser)
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// unsubscibe()
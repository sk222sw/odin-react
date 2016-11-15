// @flow

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { AppContainer } from './containers/app-container/AppContainer'
import './index.css'
import synthApp from './lib/reducers'

const store = createStore(synthApp)

store.subscribe(() => {
  console.log(store.getState().toJS().syntheziser)
})

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  global.window.document.getElementById('root')
)

// unsubscibe()

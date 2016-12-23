import Immutable from 'immutable'
import App from './app'
import routes from './routes'
import Layout from './layout'

import { Waveforms, CHANGE_WAVEFORM, CHANGE_KEY, ADD_KEY, REMOVE_KEY, REMOVE_ALL_KEYS } from './lib/constants'
import { keys } from './assets/keys.json'

export default function synthesizer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_WAVEFORM:
      return state.set('currentWaveform', action.payload)
    case CHANGE_KEY:
      return state.set('currentKey', action.payload)
    case ADD_KEY:
      return state.update('pressedKeys', p => p.push(action.payload))
    case REMOVE_KEY:
      return state.update('pressedKeys', p => p.filter(k => k !== action.payload))
    case REMOVE_ALL_KEYS:
      return state.update('pressedKeys', p => p.clear())
    default:
      return state
  }
}

export const reducers = {
  synthesizer
}

export const initialState = {
  synthesizer: Immutable.Map({
    currentWaveform: Waveforms.SINE,
    pressedKeys: Immutable.List(),
    waveforms: [
      Waveforms.SINE,
      Waveforms.SQUARE,
      Waveforms.SAWTOOTH,
      Waveforms.TRIANGLE,
    ],
    keys,
  })
}

App({ reducers, initialState, Layout, routes }).render()

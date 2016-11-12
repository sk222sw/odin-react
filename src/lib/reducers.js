// @flow

import * as Immutable from 'immutable'
import { combineReducers } from 'redux-immutable'
import { Waveforms, CHANGE_WAVEFORM, CHANGE_KEY } from './actions'
import { keys } from '../assets/keys.json'

export const initialState = Immutable.Map({
  currentWaveform: Waveforms.SINE,
  currentKey: 'A',
  keys,
  waveforms: [
    Waveforms.SINE,
    Waveforms.SQUARE,
    Waveforms.SAWTOOTH,
    Waveforms.TRIANGLE,
  ],
})

function syntheziser(state = initialState, action) {
  switch (action.type) {
    case CHANGE_WAVEFORM:
      return state.set('currentWaveform', action.payload)
    case CHANGE_KEY:
      return state.set('currentKey', action.payload)
    default:
      return state
  }
}

const synthApp = combineReducers({ syntheziser })

export default synthApp

import { combineReducers } from 'redux-immutable'
import Immutable from 'immutable'
import { Waveforms, CHANGE_WAVEFORM, CHANGE_KEY } from './actions'
import { keys } from '../assets/keys.json'

const initialState = Immutable.Map({
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
      return state.set('waveform', action.waveform)
    case CHANGE_KEY:
      return state.set('currentKey', action.key)
    default:
      return state
  }
}

const synthApp = combineReducers({syntheziser})

export default synthApp

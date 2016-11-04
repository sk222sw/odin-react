import { combineReducers } from 'redux'
import { Waveforms, CHANGE_WAVEFORM, CHANGE_KEY } from './actions'
import { keys } from '../assets/keys.json'

const initialState = {
  currentWaveform: Waveforms.SINE,
  currentKey: 'A',
  keys,
  waveforms: [
    Waveforms.SINE,
    Waveforms.SQUARE,
    Waveforms.SAWTOOTH,
    Waveforms.TRIANGLE,
  ],
}

function syntheziser(state = initialState, action) {
  switch (action.type) {
    case CHANGE_WAVEFORM:
      return Object.assign({}, state, {
        waveform: action.waveform
      })  
    case CHANGE_KEY:
      return Object.assign({}, state, {
        currentKey: action.key
      })
    default:
      return state
  }
}

const synthApp = combineReducers({syntheziser})

export default synthApp

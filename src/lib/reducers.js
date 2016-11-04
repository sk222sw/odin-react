import { combineReducers } from 'redux'
import { WaveForms, CHANGE_WAVEFORM, CHANGE_KEY } from './actions'
import { keys } from '../assets/keys.json'

const initialState = {
  waveForm: WaveForms.SINE,
  currentKey: 'A',
  keys,
}

function syntheziser(state = initialState, action) {
  switch (action.type) {
    case CHANGE_WAVEFORM:
      return Object.assign({}, state, {
        waveForm: action.waveForm
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

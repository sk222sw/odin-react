import { combineReducers } from 'redux'
import { WaveForms, CHANGE_WAVEFORM } from './actions'
import { keys } from '../assets/keys.json'

const initialState = {
  waveForm: WaveForms.SINE,
  keys,
}

function syntheziser(state = initialState, action) {
  switch (action.type) {
    case CHANGE_WAVEFORM:
      return Object.assign({}, state, {
        waveForm: action.waveForm
      })  
    default:
      return state
  }
}

const synthApp = combineReducers({syntheziser})

export default synthApp

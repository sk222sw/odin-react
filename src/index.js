import Immutable from 'immutable'
import App from './app'
import routes from './routes'
import Layout from './layout'

import * as C from './lib/constants'
import { keys } from './assets/keys.json'

// Todo: there must be a better way? :(
function updateOscillatorInList(state, payload) {
  const list = state.get('oscillators')
  const listItemToUpdate = list.find(v => v.get('id') === payload.id)
  const updatedListItem = listItemToUpdate.set('waveform', payload.waveform)
  const updatedList = list.update(payload.id, i => updatedListItem)
  return state.set('oscillators', updatedList)
}

export default function synthesizer(state = initialState, {type, payload}) {
  switch (type) {
    case C.CHANGE_OSCILLATOR_WAVEFORM:
      return updateOscillatorInList(state, payload)
    case C.CHANGE_KEY:
      return state.set('currentKey', payload)
    case C.ADD_KEY:
      return state.update('pressedKeys', p => p.push(payload))
    case C.REMOVE_KEY:
      return state.update('pressedKeys', p => p.filter(k => k !== payload))
    case C.REMOVE_ALL_KEYS:
      return state.update('pressedKeys', p => p.clear())
    case C.CHANGE_ATTACK:
      return state.setIn(['envelope', 'a'], payload)
    case C.CHANGE_DECAY:
      return state.setIn(['envelope', 'd'], payload)
    case C.CHANGE_SUSTAIN:
      return state.setIn(['envelope', 's'], payload)
    case C.CHANGE_RELEASE:
      return state.setIn(['envelope', 'r'], payload)
    default:
      return state
  }
}

export const reducers = {
  synthesizer,
}

export const initialState = {
  synthesizer: Immutable.Map({
    oscillators: Immutable.List([
      Immutable.Map({
        id: 0,
        waveform: C.Waveforms.SINE,
      }),
      Immutable.Map({
        id: 1,
        waveform: C.Waveforms.TRIANGLE,
      }),
    ]),
    pressedKeys: Immutable.List(),
    waveforms: [
      C.Waveforms.SINE,
      C.Waveforms.SQUARE,
      C.Waveforms.SAWTOOTH,
      C.Waveforms.TRIANGLE,
    ],
    keys,
    envelope: Immutable.Map({
      a: 0.06,
      d: 0.4,
      s: 0.19,
      r: 0.11,
    }),
  }),
}

App({ reducers, initialState, Layout, routes }).render()

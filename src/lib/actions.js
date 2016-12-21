// @flow

import { createAction } from 'redux-actions'

export const CHANGE_WAVEFORM = 'CHANGE_WAVEFORM'
export const CHANGE_KEY = 'CHANGE_KEY'
export const ADD_KEY = 'ADD_KEY'
export const REMOVE_KEY = 'REMOVE_KEY'
export const REMOVE_ALL_KEYS = 'REMOVE_ALL_KEYS'

export const Waveforms = {
  SINE: 'sine',
  SQUARE: 'square',
  TRIANGLE: 'triangle',
  SAWTOOTH: 'sawtooth',
}

export const changeKey = createAction(CHANGE_KEY, payload => payload)
export const changeWaveform = createAction(CHANGE_WAVEFORM, payload => payload)
export const addKey = createAction(ADD_KEY, payload => payload)
export const removeKey = createAction(REMOVE_KEY, payload => payload)
export const removeAllKeys = createAction(REMOVE_ALL_KEYS)

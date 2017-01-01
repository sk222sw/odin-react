// @flow

import { createAction } from 'redux-actions'
import { CHANGE_WAVEFORM, CHANGE_KEY, ADD_KEY, REMOVE_KEY, REMOVE_ALL_KEYS } from './constants'

export const changeKey = createAction(CHANGE_KEY, payload => payload)
export const changeWaveform = createAction(CHANGE_WAVEFORM, payload => payload)
export const addKey = createAction(ADD_KEY, payload => payload)
export const removeKey = createAction(REMOVE_KEY, payload => payload)
export const removeAllKeys = createAction(REMOVE_ALL_KEYS, payload => payload)

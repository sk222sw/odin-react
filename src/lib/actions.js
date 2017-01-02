// @flow

import { createAction } from 'redux-actions'
import * as C from './constants'

export const changeKey = createAction(C.CHANGE_KEY, payload => payload)
export const changeWaveform = createAction(C.CHANGE_WAVEFORM, payload => payload)
export const addKey = createAction(C.ADD_KEY, payload => payload)
export const removeKey = createAction(C.REMOVE_KEY, payload => payload)
export const removeAllKeys = createAction(C.REMOVE_ALL_KEYS, payload => payload)
export const changeAttack = createAction(C.CHANGE_ATTACK, payload => payload)
export const changeDecay = createAction(C.CHANGE_DECAY, payload => payload)
export const changeSustain = createAction(C.CHANGE_SUSTAIN, payload => payload)
export const changeRelease = createAction(C.CHANGE_RELEASE, payload => payload)

// @flow

import * as C from './constants'

const action = type => payload => ({type, payload})

export const changeKey =                action(C.CHANGE_KEY)
export const changeWaveform =           action(C.CHANGE_WAVEFORM)
export const addKey =                   action(C.ADD_KEY)
export const removeKey =                action(C.REMOVE_KEY)
export const removeAllKeys =            action(C.REMOVE_ALL_KEYS)
export const changeAttack =             action(C.CHANGE_ATTACK)
export const changeDecay =              action(C.CHANGE_DECAY)
export const changeSustain =            action(C.CHANGE_SUSTAIN)
export const changeRelease =            action(C.CHANGE_RELEASE)
export const changeOscillatorWaveform = action(C.CHANGE_OSCILLATOR_WAVEFORM)

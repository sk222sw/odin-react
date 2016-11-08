// @flow

import { createAction } from 'redux-actions'

export const CHANGE_WAVEFORM = 'CHANGE_WAVEFORM'
export const CHANGE_KEY = 'CHANGE_KEY'

export const Waveforms = {
	SINE: 'sine',
	SQUARE: 'square',
	TRIANGLE: 'triangle',
	SAWTOOTH: 'sawtooth',
}

export const changeKey = createAction(CHANGE_KEY, payload => payload)
export const changeWaveform = createAction(CHANGE_WAVEFORM, payload => payload)

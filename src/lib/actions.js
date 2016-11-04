export const CHANGE_WAVEFORM = 'CHANGE_WAVEFORM'
export const CHANGE_KEY = 'CHANGE_KEY'

export const Waveforms = {
	SINE: 'sine',
	SQUARE: 'square',
	TRIANGLE: 'triangle',
	SAWTOOTH: 'sawtooth',
}

export function changeWaveform(waveform) {
	return { type: CHANGE_WAVEFORM, waveform }
}

export function changeKey(key) {
	return { type: CHANGE_KEY, key }
}

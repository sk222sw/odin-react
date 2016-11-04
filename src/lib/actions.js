export const CHANGE_WAVEFORM = 'CHANGE_WAVEFORM'
export const CHANGE_KEY = 'CHANGE_KEY'

export const WaveForms = {
	SINE: 'sine',
	SQUARE: 'square',
	TRIANGLE: 'triangle',
	SAWTOOTH: 'sawtooth',
}

export function changeWaveForm(waveForm) {
	return { type: CHANGE_WAVEFORM, waveForm }
}

export function changeKey(key) {
	return { type: CHANGE_KEY, key }
}

export const CHANGE_WAVEFORM = 'CHANGE_WAVEFORM'

export const WaveForms = {
	SINE: 'sine',
	SQUARE: 'square',
	TRIANGLE: 'triangle',
	SAWTOOTH: 'sawtooth',
}

export function changeWaveForm(waveForm) {
	return { type: CHANGE_WAVEFORM, waveForm }
}

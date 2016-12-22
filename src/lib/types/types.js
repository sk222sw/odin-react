export type keyType = {
  frequency: number,
  keypress: string,
  name: string,
}

export type OscillatorTypes =
  'sine' | 'square' | 'sawtooth' | 'triangle' | 'custom'

export type Oscillator = {
  key: string,
  frequency: number,
  waveform: OscillatorTypes,
}

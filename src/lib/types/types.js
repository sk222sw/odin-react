export type KeyType = {
  frequency: number,
  keypress: string,
  name: string,
}

export type EnvelopeType = {
  a: number,
  d: number,
  s: number,
  r: number,
}

export type OscillatorTypes =
  'sine' | 'square' | 'sawtooth' | 'triangle' | 'custom'

export type Oscillator = {
  envelope: EnvelopeType,
  key: string,
  frequency: number,
  waveform: OscillatorTypes,
  detune: number,
  cent: number,
}

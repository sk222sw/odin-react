// @flow

import { List } from 'immutable'

type OscillatorType = 'sine' | 'square' | 'sawtooth' | 'triangle' | 'custom'
type Oscillator = {key: string, frequency: number, waveform: OscillatorType}

class Waw {
  audioCtx: AudioContext
  gainNode: GainNode
  oscillator: OscillatorNode
  oscillators

  constructor() {
    // this.audioCtx = new (window.AudioContext || window.WebkitAudioContext)()
    this.audioCtx = new AudioContext()
    this.oscillators = List()
    // this.audioCtx = new (global.window.WebkitAudioContext)()
  }

  init(): void {
    this.gainNode = this.audioCtx.createGain()
    this.gainNode.gain.value = 0.2
  }

  createNewOscillator = ({ key, frequency, waveform }: Oscillator): OscillatorNode => {
    const oscillator = this.audioCtx.createOscillator()

    // should a new gain node be created here?
    oscillator.connect(this.gainNode)
    this.gainNode.connect(this.audioCtx.destination)

    oscillator.type = waveform
    oscillator.frequency.value = frequency
    const oscillatorItem = { key, oscillator }
    this.oscillators = this.oscillators.push(oscillatorItem)

    return oscillator
  }

  deleteOscillator = (key: string): void => {
    const index = this.oscillators.findIndex(osc => osc.key === key)

    if (index > -1) {
      const oscillator = this.oscillators.get(index)

      oscillator.oscillator.stop()
      this.oscillators = this.oscillators.delete(index)
    }
  }

  playNote = (frequency: number, waveform: string) => {
    if (this.oscillator) {
      this.oscillator.stop()
    }
    this.oscillator = this.createNewOscillator(frequency, waveform)
    this.oscillator.start()

    const currTime = this.audioCtx.currentTime
    const time = 0.3
    const attack = { gain: 1, time: currTime + time }
    const decay = { gain: 0.5, time: attack.time + time }
    const sustain = { gain: 1, time: decay.time + time }
    const release = { gain: 0, time: sustain.time + time }

    this.rampGain(attack)
    this.rampGain(decay)
    // this.rampGain(sustain)
    this.rampGain(release)
  }

  rampGain = ({ gain, time }: {gain: number, time: number}) => {
    this.gainNode.gain.linearRampToValueAtTime(gain, time)
  }
}

module.exports = Waw

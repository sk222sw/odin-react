// @flow

type OscillatorType = 'sine' | 'square' | 'sawtooth' | 'triangle' | 'custom'

export default class Waw {
  audioCtx: AudioContext
  gainNode: GainNode
  oscillator: OscillatorNode
  constructor() {
    this.audioCtx = new (global.window.AudioContext || global.window.webkitAudioContext)()
  }

  init(): void {
    this.gainNode = this.audioCtx.createGain()
    this.gainNode.gain.value = 0.5
  }

  createNewOscillator = (frequency: number, waveform: OscillatorType): OscillatorNode => {
    const oscillator = this.audioCtx.createOscillator()
    this.gainNode = this.audioCtx.createGain()
    oscillator.connect(this.gainNode)
    this.gainNode.connect(this.audioCtx.destination)
    oscillator.type = waveform
    oscillator.frequency.value = frequency
    return oscillator
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

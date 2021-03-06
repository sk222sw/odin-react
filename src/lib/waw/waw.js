// @flow

import { List } from 'immutable'
import { Oscillator, EnvelopeType } from '../../lib/types/types'

type OscillatorItem = { key: string, oscillator: OscillatorNode, gainNode: GainNode, envelope: EnvelopeType }

class Waw {
  audioCtx: AudioContext
  oscillators: any
  volume: number

  constructor() {
    this.audioCtx = new AudioContext()
    this.oscillators = List()
    this.volume = 0.4
  }

  playNote = ({ envelope, key, frequency, waveform, detune, cent }: Oscillator): OscillatorNode => {
    const oscillator = this.createOscillator({ key, frequency, waveform, detune, cent })
    const gainNode = this.createGain(oscillator)

    oscillator.connect(gainNode)
    gainNode.connect(this.audioCtx.destination)

    const oscillatorItem: OscillatorItem = { key, oscillator, gainNode, envelope }
    this.oscillators = this.oscillators.push(oscillatorItem)

    oscillator.start()

    this.envelopeStuff(oscillatorItem)

    return oscillator
  }

  envelopeStuff = (oscillatorItem: OscillatorItem) => {
    const currTime = this.audioCtx.currentTime
    const { envelope, gainNode } = oscillatorItem

    const attack = { gainNode, gain: this.volume, time: currTime + +envelope.a }
    const decay = { gainNode, gain: 0.1, time: attack.time + +envelope.d }

    this.rampGain(attack)
    this.rampGain(decay)
  }

  createGain = (): GainNode => {
    const gainNode = this.audioCtx.createGain()
    gainNode.gain.value = 0

    return gainNode
  }

  createOscillator = ({ frequency, waveform, detune, cent }: Oscillator): OscillatorNode => {
    const oscillator = this.audioCtx.createOscillator()
    oscillator.type = waveform
    oscillator.frequency.value = frequency
    oscillator.detune.value = detune * 100
    oscillator.detune.value += +cent

    return oscillator
  }

  deleteOscillator = (key: string): void => {
    this.oscillators
      .filter(o => o.key === key)
      .map(({ gainNode, envelope, oscillator }) => {
        const time = this.audioCtx.currentTime + +envelope.r

        const release = { gainNode, gain: 0, time }

        oscillator.stop(time)
        this.rampGain(release)
        this.oscillators = this.oscillators.filter(o => o.key !== key)
      })
  }

  deleteAllOscillators = (): void => {
    this.oscillators.forEach(o => o.oscillator.stop())
  }

  rampGain = ({ gainNode, gain, time }: {gainNode: GainNode, gain: number, time: number}) => {
    gainNode.gain.linearRampToValueAtTime(gain, time)
  }
}

module.exports = Waw

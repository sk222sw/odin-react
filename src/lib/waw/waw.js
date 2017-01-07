// @flow

import { List } from 'immutable'
import { Oscillator, EnvelopeType } from '../../lib/types/types'

type OscillatorItem = { key: string, oscillator: OscillatorNode, gainNode: GainNode, envelope: EnvelopeType }

class Waw {
  audioCtx: AudioContext
  gainNode: GainNode
  oscillator: OscillatorNode
  oscillators: any
  volume: number

  constructor() {
    this.audioCtx = new AudioContext()
    this.oscillators = List()
    this.volume = 0.4
  }

  playNote = ({ envelope, key, frequency, waveform }: Oscillator): OscillatorNode => {
    const oscillator = this.createOscillator({ key, frequency, waveform })
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
    const { envelope } = oscillatorItem

    const time = 0.3
    const attack = { oscillatorItem, gain: this.volume, time: currTime + +envelope.a }
    const decay = { oscillatorItem, gain: 0.1, time: attack.time + +envelope.d }

    this.rampGain(attack)
    this.rampGain(decay)
  }

  createGain = (): GainNode => {
    const gainNode = this.audioCtx.createGain()
    gainNode.gain.value = 0

    return gainNode
  }

  createOscillator = ({ frequency, waveform }: Oscillator): OscillatorNode => {
    const oscillator = this.audioCtx.createOscillator()
    oscillator.type = waveform
    oscillator.frequency.value = frequency

    return oscillator
  }

  deleteOscillator = (key: string): void => {
    const index = this.oscillators.findIndex(osc => osc.key === key)

    if (index > -1) {
      const oscillatorItem = this.oscillators.get(index)
      const releaseTime = oscillatorItem.envelope.r
      const time = this.audioCtx.currentTime + +releaseTime
      const release = { oscillatorItem, gain: 0, time }
      oscillatorItem.oscillator.stop(time)
      this.rampGain(release)
      this.oscillators = this.oscillators.delete(index)
    }
  }

  deleteAllOscillators = (): void => {
    this.oscillators.forEach(o => o.oscillator.stop())
  }

  oscillatorDidntStop(item: OscillatorItem): boolean {
    const is = this.oscillators.findIndex(o => o.key === item.key)
    return is > -1
  }

  rampGain = ({ oscillatorItem, gain, time }: {oscillatorItem: OscillatorItem, gain: number, time: number}) => {
    oscillatorItem.gainNode.gain.linearRampToValueAtTime(gain, time)
  }
}

module.exports = Waw

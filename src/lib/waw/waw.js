// @flow

import { List } from 'immutable'
import { Oscillator } from '../../lib/types/types'

type OscillatorItem = { key: string, oscillator: OscillatorNode, gainNode: GainNode }

class Waw {
  audioCtx: AudioContext
  gainNode: GainNode
  oscillator: OscillatorNode
  oscillators: any

  constructor() {
    this.audioCtx = new AudioContext()
    this.oscillators = List()
  }

  playNote = ({ key, frequency, waveform }: Oscillator): OscillatorNode => {
    const oscillator = this.createOscillator({ key, frequency, waveform })
    const gainNode = this.createGain(oscillator)

    oscillator.connect(gainNode)
    gainNode.connect(this.audioCtx.destination)

    const oscillatorItem: OscillatorItem = { key, oscillator, gainNode }
    this.oscillators = this.oscillators.push(oscillatorItem)

    oscillator.start()

    this.envelopeStuff(oscillatorItem)

    return oscillator
  }

  envelopeStuff = (oscillatorItem: OscillatorItem) => {
    const currTime = this.audioCtx.currentTime
    const time = 0.3
    const attack = { oscillatorItem, gain: 0.5, time: currTime + time }
    const decay = { oscillatorItem, gain: 0.5, time: attack.time + time }

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
      const time = this.audioCtx.currentTime + 0.7
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

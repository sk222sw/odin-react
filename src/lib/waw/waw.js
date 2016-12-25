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

  init(): void {
    this.gainNode = this.audioCtx.createGain()
    this.gainNode.gain.value = 0.2
  }

  createNewOscillator = ({ key, frequency, waveform }: Oscillator): OscillatorNode => {
    const oscillator = this.audioCtx.createOscillator()

    const gainNode = this.audioCtx.createGain()
    oscillator.connect(gainNode)
    gainNode.connect(this.audioCtx.destination)
    gainNode.gain.value = 0

    oscillator.type = waveform
    oscillator.frequency.value = frequency
    const oscillatorItem = { key, oscillator, gainNode }
    this.oscillators = this.oscillators.push(oscillatorItem)

    oscillator.start()
    const currTime = this.audioCtx.currentTime
    const time = 0.3
    const attack = { gainNode, gain: 0.5, time: currTime + time }
    const decay = { gainNode, gain: 0.1, time: attack.time + time }

    this.rampGain(attack)
    this.rampGain(decay)
    return oscillator
  }

  deleteOscillator = (key: string): void => {
    const index = this.oscillators.findIndex(osc => osc.key === key)

    if (index > -1) {
      const oscillator = this.oscillators.get(index)
      oscillator.gainNode.disconnect()
      oscillator.oscillator.stop()
      this.oscillators = this.oscillators.delete(index)
    }
  }

  rampGain = ({ gainNode, gain, time }: {gainNode: any, gain: number, time: number}) => {
    gainNode.gain.linearRampToValueAtTime(gain, time)
  }
}

module.exports = Waw

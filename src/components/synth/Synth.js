// @flow

import React from 'react'

import Keyboard from '../keyboard/Keyboard'
import { Waveforms } from '../waveforms/Waveforms'
import Waw from '../../lib/waw/waw'
import { keyType } from '../../lib/types/types'

type params = {
  keys: any[],
  currentKey: keyType,
  onKeyClick: any,
  waveforms: any[],
  onWaveformClick: any,
  currentWaveform: string,
}

class Synth extends React.Component {
  constructor(props: params) {
    super(props)

    this.waw = new Waw()
    this.waw.init()

    global.window.addEventListener('keydown', (event) => {
      if (!this.props.keys.some(pressedKey => pressedKey.keyPress === event.key)) { return }
      const key = this.props.keys.filter(k => k.keyPress === event.key)[0]

      this.props.onKeyClick(key)
      this.playNote(this.props.currentKey, this.props.currentWaveform)
    })
  }

  componentWillUnmount() {
    global.window.removeEventListener('keydown')
  }

  waw: Waw

  playNote = (key: keyType) => {
    this.waw.playNote(key.frequency, this.props.currentWaveform)
  }

  getRandomKey = (): keyType => {
    const r = this.getRandomInt(0, this.props.keys.length - 1)
    return this.props.keys[r]
  }

  getRandomInt = (min: number, max: number): number =>
    Math.floor(Math.random() * ((max - min) + 1)) + min

  render() {
    return (
      <div className="synth-container">
        <Keyboard
          keys={this.props.keys}
          currentKey={this.props.currentKey}
          onKeyClick={this.props.onKeyClick}
        />
        <Waveforms
          waveforms={this.props.waveforms}
          currentWaveform={this.props.currentWaveform}
          onWaveformClick={this.props.onWaveformClick}
        />
        <button onClick={() => this.playNote(this.props.currentKey)}>note</button>
      </div>
    )
  }
}

export default Synth

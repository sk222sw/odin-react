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
  pressedKeys: string[],
  addKey: any,
  removeKey: any,
  removeAllKeys: any,
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

  componentWillMount() {
    global.window.addEventListener('keydown', this.addKey, false)
    global.window.addEventListener('keyup', this.removeKey, false)
    global.window.addEventListener('blur', this.removeAllKeys, false)
  }

  componentWillUnmount() {
    global.window.removeEventListener('keydown', this.addKey, false)
    global.window.removeEventListener('keyup', this.removeKey, false)
    global.window.removeEventListener('blur', this.removeAllKeys, false)
  }

  find = (list: string[], item: string): boolean =>
    list.some(k => k === item)

  canFindKey = (key: string): boolean =>
    this.find(this.props.pressedKeys, key)

  addKey = ({ key }: {key: string}) =>
    !this.canFindKey(key) ? this.props.addKey(key) : null

  removeKey = ({ key }: {key: string}) =>
    this.props.removeKey(key)

  removeAllKeys = () =>
    this.props.removeAllKeys()

  waw: Waw

  playNote = (key: keyType) => {
    this.waw.playNote(key.frequency, this.props.currentWaveform)
  }

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
        {this.props.pressedKeys.map((k, i) => <span key={i}>{k}</span>)}
      </div>
    )
  }
}

export default Synth

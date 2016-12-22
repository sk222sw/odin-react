// @flow

import React from 'react'

import { Waveforms } from '../waveforms/Waveforms'
import Waw from '../../lib/waw/waw'

type params = {
  keys: any[],
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
  }

  componentWillMount() {
    global.window.addEventListener('keydown', this.handleKeyDown, false)
    global.window.addEventListener('keyup', this.handleKeyUp, false)
    global.window.addEventListener('blur', this.removeAllKeys, false)
  }

  componentWillUnmount() {
    global.window.removeEventListener('keydown', this.handleKeyDown, false)
    global.window.removeEventListener('keyup', this.handleKeyUp, false)
    global.window.removeEventListener('blur', this.removeAllKeys, false)
  }

  waw: Waw

  find = (list: string[], item: string): boolean =>
    list.some(k => k === item)

  canFindKey = (key: string): boolean =>
    this.find(this.props.pressedKeys, key)

  handleKeyDown = ({ key }: {key: string}) => {
    if (this.canFindKey(key)) return
    if (!this.props.keys.some(pressedKey => pressedKey.keyPress === key)) return
    const { frequency } = this.props.keys.filter(k => k.keyPress === key)[0]

    const oscillator = this.waw.createNewOscillator({
      key,
      frequency,
      waveform: this.props.currentWaveform,
    })

    oscillator.start()
    this.props.addKey(key)
  }

  handleKeyUp = ({ key }: {key: string}) => {
    this.waw.deleteOscillator(key)
    this.props.removeKey(key)
  }

  removeAllKeys = () =>
    this.props.removeAllKeys()

  render() {
    return (
      <div className="synth-container">
        <Waveforms
          waveforms={this.props.waveforms}
          currentWaveform={this.props.currentWaveform}
          onWaveformClick={this.props.onWaveformClick}
        />
      </div>
    )
  }
}

export default Synth

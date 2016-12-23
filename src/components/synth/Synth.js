// @flow

import React from 'react'

import Waw from '../../lib/waw/waw'
import { Waveforms } from '../waveforms/Waveforms'
import { find } from '../../lib/helpers'

type propTypes = {
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
  constructor(props: propTypes) {
    super()

    this.props = props
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

  props: propTypes
  waw: Waw

  canFindKey = (key: string): boolean =>
    find(this.props.pressedKeys, key)

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
        <div className="ralph">
          I'm a Star Wars
        </div>
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

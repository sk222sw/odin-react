// @flow

import { EnvelopeType } from '../lib/types/types'
import {handleKeyDown, handleKeyUp, removeAllKeys} from '../lib/waw-helper'

type propTypes = {
  envelope: EnvelopeType,
  keys: any[],
  onKeyClick: any,
  waveforms: any[],
  onWaveformClick: any,
  currentWaveform: string,
  pressedKeys: string[],
  addKey: any,
  removeKey: any,
  removeAllKeys: any,
  waw: any,
}

function ComputerKeyboardEnhancer(WrappedComponent) {
  return class ComputerKeyboard extends WrappedComponent {
    constructor(props: propTypes) {
      super(props)
      this.props = props
    }

    componentWillMount() {
      global.window.addEventListener('keydown',
        (e) => handleKeyDown(
                this.props.pressedKeys,
                this.props.keys,
                this.props.oscillators,
                this.props.waw,
                this.props.envelope,
                this.props.addKey
              )(e.key),
        false)
      global.window.addEventListener('keyup', (e) => handleKeyUp(this.props.waw, this.props.removeKey)(e.key), false)
      global.window.addEventListener('blur', removeAllKeys(this.props.waw, this.props.removeAllKeys), false)
    }

    componentWillUnmount() {
      global.window.removeEventListener('keydown', handleKeyDown, false)
      global.window.removeEventListener('keyup', handleKeyUp, false)
      global.window.removeEventListener('blur', this.props.removeAllKeys(this.props.waw), false)
    }

    props: propTypes

    render() {
      return super.render()
    }
  }
}

export default ComputerKeyboardEnhancer

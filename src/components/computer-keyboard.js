// @flow

import Waw from '../lib/waw/waw'
import { find } from '../lib/helpers'
import { KeyType } from '../lib/types/types'

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

function ComputerKeyboardEnhancer(WrappedComponent) {
  return class ComputerKeyboard extends WrappedComponent {
    constructor(props: propTypes) {
      super(props)
      this.props = props

      this.waw = new Waw()
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

    keyIsPressed = (key: string): boolean =>
      find(this.props.pressedKeys, key)

    filterByKeyPress = (list: any[], key: string): KeyType =>
      list.filter(k => k.keyPress === key)[0]

    keyIsNotAssigned = (key: any): boolean =>
      !this.props.keys.some(k => k.keyPress === key)

    handleKeyDown = ({ key }: {key: string}) => {
      if (this.keyIsPressed(key) || this.keyIsNotAssigned(key)) return

      const { frequency } = this.filterByKeyPress(this.props.keys, key)

      this.waw.playNote({
        key,
        frequency,
        waveform: this.props.currentWaveform,
      })

      this.props.addKey(key)
    }

    handleKeyUp = ({ key }: {key: string}) => {
      this.waw.deleteOscillator(key)
      this.props.removeKey(key)
    }

    removeAllKeys = () => {
      this.props.removeAllKeys()
      this.waw.deleteAllOscillators()
    }

    render() {
      return super.render()
    }
  }
}

export default ComputerKeyboardEnhancer

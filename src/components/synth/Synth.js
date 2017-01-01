// @flow

import React from 'react'

import { Waveforms } from '../waveforms/Waveforms'
import ComputerKeyboardEnhancer from '../computer-keyboard'

class Synth extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    return (<div>
      <Waveforms
        waveforms={this.props.waveforms}
        currentWaveform={this.props.currentWaveform}
        onWaveformClick={this.props.onWaveformClick}
      />
    </div>)
  }
}

export default ComputerKeyboardEnhancer(Synth)

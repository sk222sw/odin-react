// @flow

import React from 'react'

import { Waveforms } from '../waveforms/Waveforms'
import ComputerKeyboardEnhancer from '../computer-keyboard'
import Envelope from '../envelope/Envelope'

class Synth extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    return (<div>
      {this.props.oscillators.map((o, key) =>
        <Waveforms
          key={key}
          waveforms={this.props.waveforms}
          currentWaveform={o.waveform}
          onWaveformClick={this.props.onWaveformClick}
        />
      )}
      {this.props.envelope && <Envelope
        envelope={this.props.envelope}
        changeAttack={this.props.changeAttack}
        changeDecay={this.props.changeDecay}
        changeSustain={this.props.changeSustain}
        changeRelease={this.props.changeRelease}
      />}
    </div>)
  }
}

export default ComputerKeyboardEnhancer(Synth)

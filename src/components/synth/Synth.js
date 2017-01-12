// @flow

import React from 'react'

import VCO from '../vco'
import ComputerKeyboardEnhancer from '../computer-keyboard'
import Envelope from '../envelope/Envelope'
import Volume from '../volume'

class Synth extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    return (<div>
      <Volume value={this.props.volume} onChange={this.props.changeVolume} />
      {this.props.oscillators.map((osc, i) =>
        <span key={i}>
          <VCO
            name={osc.name}
            waveforms={this.props.waveforms}
            currentWaveform={osc.waveform}
            onWaveformClick={this.props.changeWaveform}
          />
        </span>
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

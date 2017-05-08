// @flow

import React from 'react'

import ComputerKeyboardEnhancer from '../computer-keyboard'
import Envelope from '../envelope/Envelope'
import Oscillator from '../oscillator'
import Piano from '../piano'

class Synth extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    return (<div>
      {this.props.oscillators.map((o, key) =>
        <Oscillator oscillator={o}
                    key={key}
                    changeOscillator={this.props.changeOscillatorWaveform}
                    waveforms={this.props.waveforms}
                    semi={o.semitoneOffset}
                    changeSemitoneOffset={this.props.changeSemitoneOffset}
                    cent={o.centOffset}
                    changeCentOffset={this.props.changeCentOffset}
                    />
      )}
      {this.props.envelope && <Envelope
        envelope={this.props.envelope}
        changeAttack={this.props.changeAttack}
        changeDecay={this.props.changeDecay}
        changeSustain={this.props.changeSustain}
        changeRelease={this.props.changeRelease}
      />}
      <Piano keys={this.props.keys}
             pressedKeys={this.props.pressedKeys.toJS()} />
    </div>)
  }
}

export default ComputerKeyboardEnhancer(Synth)

// @flow

import React from 'react'
import styled from 'styled-components'

import ComputerKeyboardEnhancer from '../computer-keyboard'
import Envelope from '../envelope/Envelope'
import Oscillator from '../oscillator'
import Piano from '../piano'

const Oscillators = styled.div`
  display: flex;
  flex-direction: row;
`

const OscillatorContainer = styled.div`
  border: solid rgba(0, 0, 0, 0.2) 1px;
  margin: 8px;
`

class Synth extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }


  render() {
    return (<div>
      <Oscillators>
        {this.props.oscillators.map((o, key) =>
          <OscillatorContainer>
            <Oscillator oscillator={o}
                        key={key}
                        changeOscillator={this.props.changeOscillatorWaveform}
                        waveforms={this.props.waveforms}
                        semi={o.semitoneOffset}
                        changeSemitoneOffset={this.props.changeSemitoneOffset}
                        cent={o.centOffset}
                        changeCentOffset={this.props.changeCentOffset}
                      />
          </OscillatorContainer>
        )}
      </Oscillators>
      {this.props.envelope && <Envelope
        envelope={this.props.envelope}
        changeAttack={this.props.changeAttack}
        changeDecay={this.props.changeDecay}
        changeSustain={this.props.changeSustain}
        changeRelease={this.props.changeRelease}
      />}
      <Piano keys={this.props.keys}
             pressedKeys={this.props.pressedKeys.toJS()}
             oscillators={this.props.oscillators}
             waw={this.props.waw}
             envelope={this.props.envelope}
             addKey={this.props.addKey}
             removeKey={this.props.removeKey}
            />
    </div>)
  }
}

export default ComputerKeyboardEnhancer(Synth)

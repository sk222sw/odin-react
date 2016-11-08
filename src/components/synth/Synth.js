// @flow

import React, { PropTypes } from 'react';

import Keyboard from '../keyboard/Keyboard'
import Waveforms from '../waveforms/Waveforms'

type params = { 
  keys: any[], 
  currentKey: string, 
  onKeyClick: any, 
  waveforms: any[], 
  onWaveformClick: any,
  currentWaveform: string
}
const Synth = ({ keys, currentKey, onKeyClick, waveforms, onWaveformClick, currentWaveform }: params) => (
  <div className="synth-container">
    <Keyboard keys={keys} currentKey={currentKey} onKeyClick={onKeyClick} />
    <Waveforms 
      waveforms={waveforms}
      currentWaveform={currentWaveform}
      onWaveformClick={onWaveformClick} />
  </div>
)

export default Synth

import React, { PropTypes } from 'react';

import Keyboard from '../keyboard/Keyboard'
import Waveforms from '../waveforms/Waveforms'

const Synth = ({ keys, currentKey, onKeyClick, waveforms, onWaveformClick }) => (
  <div>
    <Keyboard keys={keys} currentKey={currentKey} onKeyClick={onKeyClick} />
    <Waveforms waveforms={waveforms} onWaveformClick={onWaveformClick} />
  </div>
)

export default Synth
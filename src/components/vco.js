// @flow

import React from 'react'
import Waveforms from './waveforms/Waveforms'

type props = { waveforms: any[], onWaveformClick: any, currentWaveform: string }
export const VCO = ({ waveforms, onWaveformClick, currentWaveform }: props) => (
  <div className="vco-container">
    <Waveforms
      waveforms={waveforms}
      currentWaveform={currentWaveform}
      onWaveformClick={onWaveformClick}
    />
  </div>
)

export default VCO

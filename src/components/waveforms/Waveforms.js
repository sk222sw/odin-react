// @flow

import React from 'react'

type props = { waveforms: any[], onWaveformClick: any, currentWaveform: string }
export const Waveforms = ({ waveforms, onWaveformClick, currentWaveform }: props) => (
  <div className="waveforms-container">
    {waveforms.map((waveform, i) =>
      <button
        key={i}
        onClick={() => onWaveformClick(waveform)}
      >
        {waveform}
      </button>
    )}
    <div className="current-waveform">
      {currentWaveform}
    </div>
  </div>
)

export default Waveforms

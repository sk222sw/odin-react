import React, { PropTypes } from 'react'

export const Waveforms = ({ waveforms, onWaveformClick, currentWaveform }) => (
  <div className="waveforms-container">
    {waveforms.map((waveform, i) => 
      <button 
        key={i}
        onClick={() => onWaveformClick(waveform)}>
        {waveform}
      </button>  
    )}
    <div>
      {currentWaveform}
    </div>
  </div>
)

export default Waveforms
// @flow

import React from 'react'
import Waveforms from './waveforms/Waveforms'
import styled from 'styled-components'

const StyledVCO = styled.div`
  background: whitesmoke;
`

type props = {
  name: string,
  waveforms: any[],
  onWaveformClick: any,
  currentWaveform: string
}

export const VCO = ({ name = 'VCO', waveforms, onWaveformClick, currentWaveform }: props) => (
  <StyledVCO className="vco-container">
    {name}
    <Waveforms
      waveforms={waveforms}
      currentWaveform={currentWaveform}
      onWaveformClick={(waveform) => onWaveformClick({waveform, name})}
    />
  </StyledVCO>
)

export default VCO

import React from 'react'

import {Waveforms} from './waveforms/Waveforms'

const Oscillator = ({waveforms, oscillator, changeOscillator}) => <div>
  <Waveforms
    waveforms={waveforms}
    currentWaveform={oscillator.waveform}
    onWaveformClick={newWaveform => changeOscillator({id: oscillator.id, waveform: newWaveform})}
  />
</div>

export default Oscillator

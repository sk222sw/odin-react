import React from 'react'

import {Waveforms} from './waveforms/Waveforms'

const Oscillator = ({
  waveforms,
  oscillator,
  changeOscillator,
  semi,
  changeSemitoneOffset,
}) => <div>
  <Waveforms
    waveforms={waveforms}
    currentWaveform={oscillator.waveform}
    onWaveformClick={newWaveform => changeOscillator({id: oscillator.id, waveform: newWaveform})}
  />

  <div>
    semi: <input value={semi}
                 onChange={e => changeSemitoneOffset({id: oscillator.id, semitoneOffset: e.target.value})}
                 type="number"
                 max="12"
                 min="-12" />
  </div>

  <hr />
</div>

export default Oscillator

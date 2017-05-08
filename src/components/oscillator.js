// @flow
import React from 'react'
import {Waveforms} from './waveforms/Waveforms'

const Oscillator = ({
  waveforms,
  oscillator,
  changeOscillator,
  semi,
  changeSemitoneOffset,
  cent,
  changeCentOffset,
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

  <div>
    cent: <input value={cent}
                 onChange={e => changeCentOffset({id: oscillator.id, centOffset: e.target.value})}
                 type="number"
                 max="50"
                 min="-50" />
  </div>

  <hr />
</div>

export default Oscillator

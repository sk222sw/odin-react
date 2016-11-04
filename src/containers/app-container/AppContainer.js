import { connect } from 'react-redux'
import Synth from '../../components/synth/Synth'
import Waveforms from '../../components/waveforms/Waveforms'
import { changeWaveform, waveforms, changeKey } from '../../lib/actions'

const doSynth = (keys, currentKey) => {
  switch (keys) {
    default:
      return keys
  }
}

const mapStateToProps = (state) => {
  return {
    currentKey: state.getIn(['syntheziser', 'currentKey']),
    currentWaveform: state.getIn(['syntheziser', 'currentWaveform']),
    keys: state.getIn(['syntheziser', 'keys']),
    waveforms: state.getIn(['syntheziser', 'waveforms'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onKeyClick: key => dispatch(changeKey(key)),
    onWaveformClick: waveform => dispatch(changeWaveform(waveform)),
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Synth)

export default AppContainer
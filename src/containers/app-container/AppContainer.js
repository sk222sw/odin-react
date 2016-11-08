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
    onKeyClick: payload => dispatch(changeKey(payload)),
    onWaveformClick: payload => dispatch(changeWaveform(payload)),
  }
}

// only use this export for tests 
// http://redux.js.org/docs/recipes/WritingTests.html#connected-components
export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Synth)

export default AppContainer
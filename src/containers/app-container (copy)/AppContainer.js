// @flow

import { connect } from 'react-redux'
import Synth from '../../components/synth/Synth'
import { changeWaveform, changeKey, addKey, removeKey, removeAllKeys } from '../../lib/actions'

const mapStateToProps = state => ({
  currentKey: state.getIn(['syntheziser', 'currentKey']),
  currentWaveform: state.getIn(['syntheziser', 'currentWaveform']),
  keys: state.getIn(['syntheziser', 'keys']),
  waveforms: state.getIn(['syntheziser', 'waveforms']),
  envelope: state.getIn(['syntheziser', 'envelope']),
  pressedKeys: state.getIn(['syntheziser', 'pressedKeys']),
})

const mapDispatchToProps = dispatch => ({
  onKeyClick: payload => dispatch(changeKey(payload)),
  onWaveformClick: payload => dispatch(changeWaveform(payload)),
  addKey: payload => dispatch(addKey(payload)),
  removeKey: payload => dispatch(removeKey(payload)),
  removeAllKeys: payload => dispatch(removeAllKeys(payload)),
})

// only use this export for tests
// http://redux.js.org/docs/recipes/WritingTests.html#connected-components
export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Synth)

export default AppContainer

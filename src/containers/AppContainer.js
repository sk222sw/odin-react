// @flow

import { connect } from 'react-redux'
import Synth from '../components/synth/Synth'
import { changeWaveform, changeKey, addKey, removeKey, removeAllKeys } from '../../src/lib/actions'

const mapStateToProps = state => ({
  currentWaveform: state.getIn(['synthesizer', 'currentWaveform']),
  keys: state.getIn(['synthesizer', 'keys']),
  waveforms: state.getIn(['synthesizer', 'waveforms']),
  pressedKeys: state.getIn(['synthesizer', 'pressedKeys']),
})

const mapDispatchToProps = dispatch => ({
  onKeyClick: payload => dispatch(changeKey(payload)),
  onWaveformClick: payload => dispatch(changeWaveform(payload)),
  addKey: payload => dispatch(addKey(payload)),
  removeKey: payload => dispatch(removeKey(payload)),
  removeAllKeys: payload => dispatch(removeAllKeys(payload)),
})


export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Synth)

export default AppContainer

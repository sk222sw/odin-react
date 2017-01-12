import { connect } from 'react-redux'
import Synth from '../components/synth/Synth'
import * as A from '../../src/lib/actions'

const mapStateToProps = state => ({
  currentWaveform: state.getIn(['synthesizer', 'currentWaveform']),
  keys: state.getIn(['synthesizer', 'keys']),
  waveforms: state.getIn(['synthesizer', 'waveforms']),
  pressedKeys: state.getIn(['synthesizer', 'pressedKeys']),
  envelope: state.getIn(['synthesizer', 'envelope']).toJS(),
  volume: state.getIn(['synthesizer', 'volume']),
  oscillators: state.getIn(['synthesizer', 'oscillators']).toJS(),
})

const mapDispatchToProps = dispatch => ({
  onWaveformClick: payload => dispatch(A.changeWaveform(payload)),
  addKey:          payload => dispatch(A.addKey(payload)),
  removeKey:       payload => dispatch(A.removeKey(payload)),
  removeAllKeys:   payload => dispatch(A.removeAllKeys(payload)),
  changeAttack:    payload => dispatch(A.changeAttack(payload)),
  changeDecay:     payload => dispatch(A.changeDecay(payload)),
  changeSustain:   payload => dispatch(A.changeSustain(payload)),
  changeRelease:   payload => dispatch(A.changeRelease(payload)),
  changeVolume:    payload => dispatch(A.changeVolume(payload)),
  changeWaveform:  payload => dispatch(A.changeWaveform(payload)),
})

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Synth)

export default AppContainer

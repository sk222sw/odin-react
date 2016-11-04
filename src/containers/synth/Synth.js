import { connect } from 'react-redux'
import Keyboard from '../../components/keyboard/Keyboard'
import { changeWaveForm, WaveForms, changeKey } from '../../lib/actions'

const doSynth = (keys, currentKey) => {
  switch (keys) {
    default:
      return keys
  }
}

const mapStateToProps = ({syntheziser}) => ({...syntheziser})

const mapDispatchToProps = (dispatch) => {
  return {
    onKeyClick: key => dispatch(changeKey(key)),
  }
}

const Synth = connect(
  mapStateToProps,
  mapDispatchToProps
)(Keyboard)

export default Synth

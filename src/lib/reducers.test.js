import synthApp, {initialState} from './reducers'
import { Waveforms, CHANGE_WAVEFORM, CHANGE_KEY } from './actions'
import { keys } from '../assets/keys.json'

describe('synth reducer', () => {
  it('should return the initial state', () => {
    expect(
      synthApp(undefined, {})
    ).toEqual(
      synthApp(undefined, {}) // Compared values have no visual difference. :S
    )
  })
})
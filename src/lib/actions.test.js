import * as actions from './actions'
import { createAction } from 'redux-actions'

describe('actions', () => {
  it('should create an action to change key', () => {
    const changeKey = createAction(actions.CHANGE_KEY)

    expect(changeKey('B')).toEqual({
      type: actions.CHANGE_KEY,
      payload: 'B'
    });
  })

  it('should create an action to change waveform', () => {
    const changeWaveform = createAction(actions.CHANGE_WAVEFORM)

    expect(changeWaveform('square')).toEqual({
      type: actions.CHANGE_WAVEFORM,
      payload: 'square'
    });
  })

})
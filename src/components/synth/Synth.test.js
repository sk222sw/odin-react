import React from 'react'
import TestUtils from 'react-addons-test-utils'

import Keyboard from '../keyboard/Keyboard'
import Synth from './Synth'

const setup = (propOverrides) => {
  const props = Object.assign({

  }, propOverrides)

  const renderer = TestUtils.createRenderer()
  renderer.render(<Synth {...props} />)
  const output = renderer.getRenderOutput()

  return {
    props,
    output,
    renderer,
  }
}

describe('Synth component', () => {
  it('should render', () => {
    const { output, props } = setup()

    expect(output.props.className).toBe('synth-container')
  })

  it('should render a keyboard component', () => {
    const { output, props } = setup()
    const [keyboard] = output.props.children
    expect(keyboard.type).toBe(Keyboard)
  })

  it('should render a waveforms component', () => {
    const { output, props } = setup()
    const [, waveforms] = output.props.children
    expect(waveforms.type).toBe(Waveforms)
  })
})

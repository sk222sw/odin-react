import React from 'react'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import Waveforms from './Waveforms'
import TestUtils from 'react-addons-test-utils'

const setup = propOverrides => {
  const props = Object.assign({
    waveforms: [
      'sine',
      'square',
    ]
  }, propOverrides)

  const renderer = TestUtils.createRenderer()
  renderer.render(<Waveforms {...props} />)
  const output = renderer.getRenderOutput()

  return {
    props,
    output,
    renderer,
  }
}

describe('Waveforms component', () => {
  it('should render', () => {
    const { output, props } = setup()
    expect(output.props.className).toBe('waveforms-container')
  })
})

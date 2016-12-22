import React from 'react'
import TestUtils from 'react-addons-test-utils'

import Keyboard from './Keyboard'
import Key from '../key/Key'

import keys from '../../assets/keys.json'

const setup = (propOverrides) => {
  const props = Object.assign({
    keys: keys.keys,
    actions: {
      onKeyClick: jest.fn(),
    },
  }, propOverrides)

  const renderer = TestUtils.createRenderer()
  renderer.render(<Keyboard {...props} />)
  const output = renderer.getRenderOutput()

  return {
    props,
    output,
    renderer,
  }
}

describe('Keyboard component', () => {
  it('should render', () => {
    // const { output } = setup()
    // expect(output.props.className).toBe('keyboard-container')
  })

  it('should render Key components', () => {
    const { output, props } = setup()
    const [, keys] = output.props.children
    keys.forEach((item, i) => {
      expect(item.type).toBe(Key)
    })
  })

  it('should render the current key', () => {
    const currentKey = { keyPress: 'z', name: 'A', frequency: '880' }
    const { output, props } = setup({ currentKey })
    const [h1] = output.props.children
    expect(h1.type).toBe('h1')
    expect(h1.props.children).toBe(currentKey.name)
  })
})

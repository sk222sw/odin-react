import React from 'react'
import { shallow } from 'enzyme'
import Key from './Key'

describe('Key component', () => {
  let Component
  const onClick = jest.fn()

  beforeEach(() => {
    Component = shallow(
      <Key name="A" onClick={onClick} />
    )
  })

  it('should render', () => {
    expect(Component.length).toBeTruthy()
    expect(Component.find('button')).toBeTruthy()
  })

  it('should call onClick when clicked', () => {
    Component.find('button').simulate('click')
    expect(onClick).toHaveBeenCalled()
  })
})

import React from 'react'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import Key from './Key'

describe('Key component', () => {
  let Component
  let onClick = jest.fn()

  beforeEach(() => {
    Component = shallow(
      <Key name='A' onClick={onClick} />
    )
  })

  it('should render', () => {
    expect(Component.length).toBeTruthy()
    expect(Component.find('button')).toBeTruthy()
  })

  it('should call onClick when clicked', () => {
    const buttonClick = sinon.spy()
    Component.find('button').simulate('click')
    expect(onClick).toHaveBeenCalled()
  })
})
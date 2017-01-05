import React from 'react'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { shallow, mount, render } from 'enzyme'
import spy from 'spy/lib/spy'

import EnvelopeItem from '../src/components/envelope-item/Envelope-item'

const expect = chai.expect

chai.use(chaiEnzyme())

describe('<EnvelopeItem />', () => {

  it('should render', () => {
    const wrapper = shallow(<EnvelopeItem />)
    expect(wrapper.find('.envelope-item')).to.have.length(1)
  })

  it('should render a name', () => {
    const wrapper = mount(<EnvelopeItem name={'a'} />)
    expect(wrapper.text()).to.contain('a')
  })

  it('should change', () => {
    const fn = spy()
    const wrapper = shallow(<EnvelopeItem onChange={fn} />)
    const input = wrapper.find('.envelope-input')
    input.simulate('change', {target: {value: 'hej'}})
    expect(fn.called).to.be.true
  })



})

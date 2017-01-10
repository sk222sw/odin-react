import React from 'react'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { shallow, mount, render } from 'enzyme'
import spy from 'spy/lib/spy'

import EnvelopeItem from '../src/components/envelope-item/Envelope-item'
import SliderAndInput from '../src/components/slider-and-input'

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
    const wrapper = mount(<EnvelopeItem value={0.3} onChange={fn} />)

    wrapper.props().onChange(0.5)

    expect(fn.called).to.be.true
  })



})

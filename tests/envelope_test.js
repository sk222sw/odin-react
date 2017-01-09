import React from 'react'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { shallow, mount, render } from 'enzyme'

import Envelope from '../src/components/envelope/Envelope'
import EnvelopeItem from '../src/components/envelope-item/Envelope-item'

const expect = chai.expect

chai.use(chaiEnzyme())

describe('<Envelope />', () => {

  it('should render', () => {
    const wrapper = shallow(<Envelope envelope={{}} />)
    expect(wrapper.find('.envelope')).to.have.length(1)
  })

  it('should render four envelope items', () => {
    const wrapper = shallow(<Envelope envelope={{}} />)
    expect(wrapper.find(EnvelopeItem)).to.have.length(4)
  })

})

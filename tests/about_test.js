import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import About from '../src/about';

const expect = chai.expect;

chai.use(chaiEnzyme());

describe('<About />', () => {

  it(`renders an H1 with "About" content`, () => {
    const wrapper = shallow(<About />);
    const h1 = wrapper.find('h1');
    const ctx = new AudioContext()
    expect(h1).to.have.length(1);
    const hej = Object.prototype.toString.call(ctx)
    expect(h1.text()).to.equal('About');
  });

});

import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { Link } from 'react-router';
import { shallow } from 'enzyme';
import routes from '../src/routes';
import Synth from '../src/components/synth/Synth';

const expect = chai.expect;

chai.use(chaiEnzyme());

describe('<Synth />', () => {

  it('renders', () => {
    const wrapper = shallow(<Synth title="Test" />);
    expect(wrapper.find('.synth-container').text()).to.equal('I\'m a Star Wars');
  });


});

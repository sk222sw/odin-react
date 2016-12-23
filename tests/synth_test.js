import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow, mount, render } from 'enzyme';

import { spy } from 'simple-spy';

import routes from '../src/routes';
import Synth from '../src/components/synth/Synth';
import Waveforms from '../src/components/waveforms/Waveforms';

const expect = chai.expect;

chai.use(chaiEnzyme());

describe('<Synth />', () => {

  it('renders', () => {
    const wrapper = shallow(<Synth />);
    expect(wrapper.find('.ralph').text()).to.equal('I\'m a Star Wars');
  });

  it('should render Waveform component', function() {
    const wrapper = mount(<Synth waveforms={[]}/>);
    expect(wrapper.find(Waveforms)).to.have.length(1)
  })

});

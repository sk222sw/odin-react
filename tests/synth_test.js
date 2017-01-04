import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow, mount, render } from 'enzyme';

import { spy } from 'simple-spy';

import routes from '../src/routes';
import Synth from '../src/components/synth/Synth';
import Waveforms from '../src/components/waveforms/Waveforms';
import Envelope from '../src/components/envelope/Envelope';

const expect = chai.expect;

chai.use(chaiEnzyme());

describe('<Synth />', () => {

  it('should render Waveform component', function() {
    const wrapper = mount(<Synth waveforms={[]}/>);
    expect(wrapper.find(Waveforms)).to.have.length(1)
  })

  it('should render Envelope component', function() {
    const wrapper = mount(<Synth waveforms={[]} envelope={{a: 0, d: 0, s: 0, r: 0}}/>);
    expect(wrapper.find(Envelope)).to.have.length(1)
  })

});

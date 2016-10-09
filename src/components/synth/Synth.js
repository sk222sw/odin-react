import React, { Component } from 'react';
import Rcslider from 'rc-slider'

import Key from '../key/Key'

require('rc-slider/assets/index.css')

export default class Synth extends Component {
  constructor(props) { 
    super(props);
    
    this.state = {
      isMuted: true,
      frequency: 1000,
      oscillator: {},
      gainNode: {},
      hasntStarted: true,
      keys: [
        {name: 'A', hertz: '880'},
        {name: 'B', hertz: '987.767'},
        {name: 'C', hertz: '1046.50'},
        {name: 'D', hertz: '1174.66'},
        {name: 'E', hertz: '1318.51'},
        {name: 'F', hertz: '1396.91'},
        {name: 'G', hertz: '1567.98'},
        {name: 'A2', hertz: '1760'},
      ]
    };
  }
  
  componentDidMount = () => {
    this.init();
  }
  
  init = () => {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)()
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    oscillator.type = 'sine';
    oscillator.frequency.value = 1000;
    
    this.setState({oscillator, gainNode})
  }

  toggleMute = () => {
    if (this.state.hasntStarted) {
      this.state.oscillator.start()
      this.setState({hasntStarted: false})
    }

    const value = this.state.isMuted ? 1 : 0

    this.state.gainNode.gain.value = value
    this.setState({isMuted: !this.state.isMuted})
  }

  gainSlider = value => {
    this.state.gainNode.gain.value = value / 100
  }
  
  frequencySlider = value => {
    this.changeFrequency(value)
  }

  changeFrequency = frequency => {
    this.state.oscillator.frequency.value = frequency
  }

  renderKeys = () => {
    return this.state.keys.map(key => (
      <div className="keys-container"
        key={key.name}
        onClick={() => this.changeFrequency(key.hertz)}>
        <Key 
          name={key.name}
          frequency={key.hertz}
        />
      </div>
    ))
  }

  render() {
    return (
      <div>
        Synth
        <Rcslider onChange={this.gainSlider}/>
        <button onClick={this.toggleMute}>
          {this.state.isMuted ? 'Play' : 'Mute'}
        </button>
        <Rcslider max={20000} onChange={this.frequencySlider}/>
        {this.renderKeys()}
      </div>
    );
  }
}
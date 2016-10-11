import React, { Component } from 'react';
import Rcslider from 'rc-slider'

import Keyboard from '../keyboard/Keyboard'

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
    console.log("changeFrequency")
    console.log(frequency)

    this.state.oscillator.frequency.value = frequency
  }

  renderKeys = () => {
    return (
      <Keyboard 
        onKeyClick={this.changeFrequency}
        keyboardPress={this.changeFrequency}
      />
    )
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
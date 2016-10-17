import React, { Component } from 'react';
import Rcslider from 'rc-slider'

import Keyboard from '../keyboard/Keyboard'

import 'rc-slider/assets/index.css'

export default class Synth extends Component {
  constructor(props) { 
    super(props);
    
    this.state = {
      isMuted: true,
      frequency: 1000,
      oscillator: {},
      gainNode: {},
      audioCtx: {},
      hasntStarted: true,
      waveForms: [
        'sine',
        'square',
        'sawtooth',
        'triangle',
      ],
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
    
    this.setState({oscillator, gainNode, audioCtx})
  }

  playNote = () => {
    var currTime = this.state.audioCtx.currentTime
    var fadeTime = 1
    this.state.gainNode.gain.linearRampToValueAtTime(1, currTime);
    this.state.gainNode.gain.linearRampToValueAtTime(0, currTime + fadeTime);
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
    this.playNote()
  }

  renderKeys = () => {
    return (
      <Keyboard 
        onKeyClick={this.changeFrequency}
        keyboardPress={this.changeFrequency}
      />
    )
  }

  renderWaveFormButtons = () => {
    return (
      this.state.waveForms.map(waveForm =>
        <div key={waveForm}>
          <button onClick={() => this.setWaveForm(waveForm)}>{waveForm}</button>
        </div>
      )
    )
  }

  setWaveForm = waveForm => this.state.oscillator.type = waveForm

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
        {this.renderWaveFormButtons()}
      </div>
    );
  }
}
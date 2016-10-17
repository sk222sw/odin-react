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
    gainNode.gain.value = 0

    oscillator.type = 'sine';
    oscillator.frequency.value = 1000;
    oscillator.start()
    this.setState({oscillator, gainNode, audioCtx})
  }

  setGain = value => {
    this.state.gainNode.gain.value = value
  }

  playNote = () => {
    var currTime = this.state.audioCtx.currentTime
    var fadeTime = 1
    this.state.gainNode.gain.linearRampToValueAtTime(1, currTime);
    this.state.gainNode.gain.linearRampToValueAtTime(0, currTime + fadeTime);
  }

  gainSlider = value => {
    this.setGain(value / 100)
  }
  
  frequencySlider = value => {
    this.keyPress(value)
  }

  keyPress = frequency => {
    if (this.state.gainNode.gain.value > 0) {
      this.state.gainNode.gain.cancelScheduledValues(0)
    }
    this.setFrequency(frequency) 
    this.playNote()
  }

  setFrequency = frequency => {
    this.state.oscillator.frequency.value = frequency
  }

  renderKeys = () => {
    return (
      <Keyboard 
        onKeyClick={this.keyPress}
        keyboardPress={this.keyPress}
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
        <Rcslider max={20000} onChange={this.frequencySlider}/>
        {this.renderKeys()}
        {this.renderWaveFormButtons()}
      </div>
    );
  }
}
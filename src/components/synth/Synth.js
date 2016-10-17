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
    const time = 0.3
    const attack = {gain: 1, time: currTime + time}
    const decay = {gain: 0.5, time: attack.time + time}
    const sustain = {gain: 1, time: decay.time + time}
    const release = {gain: 0, time: sustain.time +   time}

    this.rampGain(attack)
    this.rampGain(decay)
    // this.rampGain(sustain)
    this.rampGain(release)
  }

  rampGain = ({gain, time}) => {
    this.state.gainNode.gain.linearRampToValueAtTime(gain, time);
  }

  gainSlider = value => {
    this.setGain(value / 100)
  }
  
  frequencySlider = value => {
    this.keyPress(value)
  }

  shouldResetGain = () => this.state.gainNode.gain.value > 0
  cancelGain = () => this.state.gainNode.gain.cancelScheduledValues(0)


  keyPress = frequency => {
    if (this.shouldResetGain()) {
      this.cancelGain()
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
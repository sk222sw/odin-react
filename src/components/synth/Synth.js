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
      waveForm: 'sine',
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
    const gainNode = audioCtx.createGain();

    gainNode.connect(audioCtx.destination);
    gainNode.gain.value = 0

    this.setState({gainNode, audioCtx})
    this.createOscillator(audioCtx, gainNode)
  }

  createOscillator = (audioCtx, gainNode, frequency = 1000) => {
    const oscillator = audioCtx.createOscillator();
    oscillator.connect(gainNode);

    gainNode.gain.value = 0

    oscillator.type = this.state.waveForm;
    oscillator.frequency.value = frequency;
    oscillator.start()
    this.setState({oscillator})
  }

  setGain = value => {
    this.state.gainNode.gain.value = value
  }

  playNote = frequency => {
    this.state.oscillator.stop()
    
    this.createOscillator(this.state.audioCtx, this.state.gainNode, frequency)

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

  cancelGain = () => this.state.gainNode.gain.cancelScheduledValues(0)

  keyPress = frequency => {
    this.cancelGain()
    this.setFrequency(frequency) 
    this.playNote(frequency)
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

  setWaveForm = waveForm => {
    this.state.waveForm = waveForm
    this.state.oscillator.type = waveForm
  }

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
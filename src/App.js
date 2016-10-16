import React, { Component } from 'react';
import './App.css';

import Synth from './components/synth/Synth'

class App extends Component {
  render() {
    return (
      <div className="App">
        Hi
        <Synth />
      </div>
    );
  }
}

export default App;

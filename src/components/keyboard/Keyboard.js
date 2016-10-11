import React, { Component } from 'react';

import Key from '../key/Key'

export default class Keyboard extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      keys: [
        {keyPress: 'z', name: 'A', hertz: '880'},
        {keyPress: 'x', name: 'B', hertz: '987.767'},
        {keyPress: 'c', name: 'C', hertz: '1046.50'},
        {keyPress: 'v', name: 'D', hertz: '1174.66'},
        {keyPress: 'b', name: 'E', hertz: '1318.51'},
        {keyPress: 'n', name: 'F', hertz: '1396.91'},
        {keyPress: 'm', name: 'G', hertz: '1567.98'},
        {keyPress: 'a', name: 'A2', hertz: '1760'},
      ]
    }
  }
  
  render() {
    const { onKeyClick } = this.props
    document.addEventListener('keydown', e => {
      if (!this.state.keys.some(k => k.keyPress === e.key)) {
        return
      } else {
        const {hertz} = this.state.keys.filter(key => key.keyPress === e.key)[0]
        this.props.onKeyClick(hertz)
      }
    })
    return (
      <div>
        {this.state.keys.map((key, i) => 
          <div key={i} className="keys-container">
            <button onClick={() => this.props.onKeyClick(key.hertz)}>{key.name}</button>
            <Key key={i} name={key.name} frequency={key.hertz} onClick={onKeyClick} />
          </div>
        , this)}
      </div>
    );
  }
}
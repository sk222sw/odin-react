import React, { Component } from 'react';

import Key from '../key/Key'
import {keys} from '../../assets/keys.json'

export default class Keyboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keys
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

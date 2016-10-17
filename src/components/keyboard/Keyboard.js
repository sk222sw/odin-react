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

  componentDidMount() {
    const { onKeyClick } = this.props
    const { keys } = this.state
    
    window.addEventListener('keydown', e => {
      if (!keys.some(k => k.keyPress === e.key))
        return
      const { hertz } = keys.filter(key => key.keyPress === e.key)[0]
      onKeyClick(hertz)
    })
  }

  componentWillUnmount() {
    window.removeEventListener('keydown')
  }

  render() {
    const { onKeyClick } = this.props

    return (
      <div className="keys-container">
        {this.state.keys.map((key, i) =>             
          <Key 
            key={i} 
            name={key.name} 
            frequency={key.hertz} 
            onClick={onKeyClick} 
            />
        )}
      </div>
    );
  }
}

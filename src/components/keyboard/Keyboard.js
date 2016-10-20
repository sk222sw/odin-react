import React, { Component, PropTypes } from 'react';

import Key from '../key/Key'

const Keyboard = ({ keys, keyboardPress }) => (
  <div className="keys-container">
    {keys.map((key, i) =>             
      <Key 
        key={i} 
        name={key.name} 
        frequency={key.hertz} 
        onClick={() => {keyboardPress(key.hertz)}}
      />
    )}
  </div>
)

Keyboard.PropTypes = {
  keys: PropTypes.objectOf(PropTypes.string).isRequired,
  keyboardPress: PropTypes.func.isRequired
}

export default Keyboard

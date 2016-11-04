import React, { PropTypes } from 'react';

import Key from '../key/Key'

const Keyboard = ({ keys, currentKey, onKeyClick }) => (
  <div className="keys-container">
    <h1>
      Current: {currentKey}
    </h1>
    {keys.map((key, i) => 
      <Key 
        key={i} 
        name={key.name} 
        frequency={key.hertz}
        onClick={() => onKeyClick(key.name)}
      />
    )}
  </div>
)

Keyboard.PropTypes = {
  keys: PropTypes.objectOf(PropTypes.string).isRequired,
  keyboardPress: PropTypes.func.isRequired
}

export default Keyboard

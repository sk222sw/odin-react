// @flow

import React, { PropTypes } from 'react';

import Key from '../key/Key'

type params = { keys: Array<any>, currentKey: string, onKeyClick: any }
const Keyboard = ({ keys, currentKey, onKeyClick }: params) => (
  <div className="keyboard-container">
    <h1>
      {currentKey}
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

export default Keyboard

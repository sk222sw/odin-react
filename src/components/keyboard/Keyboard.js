// @flow

import React from 'react'

import Key from '../key/Key'
import keyType from '../../lib/types/types'

type params = { keys: Array<any>, currentKey: keyType, onKeyClick: any }
const Keyboard = ({ keys, currentKey, onKeyClick }: params) => (
  <div className="keyboard-container">
    <h1>
      {currentKey.name}
    </h1>
    {keys.map((key, i) =>
      <Key
        key={i}
        name={key.name}
        frequency={key.frequency}
        onClick={() => onKeyClick(key)}
      />
    )}
  </div>
)

export default Keyboard

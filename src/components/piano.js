// @flow

import React from 'react'
import {handleKeyDown, handleKeyUp} from '../lib/waw-helper'

const getBorder = (key, pressedKeys) =>
  pressedKeys.indexOf(key) > -1
    ? 'black'
    : 'white'

const Piano = ({keys, pressedKeys, waw, oscillators, envelope, addKey, removeKey}) => <div>
  {keys.map((key, i) =>
    <div style={{
           border: `solid ${getBorder(key.keyPress, pressedKeys)} 1px`,
         }}
         onMouseDown={() =>
           handleKeyDown(pressedKeys,
                         keys,
                         oscillators,
                         waw,
                         envelope,
                         addKey)(key.keyPress)}
         onMouseUp={() => handleKeyUp(waw, removeKey)(key.keyPress)}
         onMouseLeave={() => handleKeyUp(waw, removeKey)(key.keyPress)}
         key={i}>
      {key.keyPress}
    </div>)}
</div>

export default Piano

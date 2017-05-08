// @flow

import React from 'react'

const getBorder = (key, pressedKeys) =>
  pressedKeys.indexOf(key) > -1
    ? 'black'
    : 'white'

const Piano = ({keys, pressedKeys}) => <div>
  {keys.map((key, i) =>
    <div style={{
      border: `solid ${getBorder(key.keyPress, pressedKeys)} 1px`,
    }} onClick={() => console.log(pressedKeys)} key={i}>
      {key.keyPress}
    </div>)}
</div>

export default Piano

// @flow

import React from 'react'
import styled from 'styled-components'
import {handleKeyDown, handleKeyUp} from '../lib/waw-helper'

const getBorder = (key, pressedKeys) =>
  pressedKeys.indexOf(key) > -1
    ? 'black'
    : 'white'

const PianoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: solid 1px rgba(0, 0, 0, 0.1);
  margin: 8px;
`

const PianoKey = styled.div`
  width: 100%;
  height: 55px;
  background: rgba(0, 0, 0, 0.2);
`

const dynamicStyles = (border) => ({
  border: `solid ${border} 1px`,
})

const NoteName = styled.div`
  color: rgba(0, 0, 0, 0.7);
  text-align: center;
  font-size: 20px;
`

const Piano = ({keys, pressedKeys, waw, oscillators, envelope, addKey, removeKey}) =>
  <PianoContainer>
    {keys.map((key, i) =>
      <PianoKey style={dynamicStyles(getBorder(key.keyPress, pressedKeys))}
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
        <div>
          {key.keyPress}
        </div>
        <NoteName>
          {key.name[0]}
        </NoteName>
      </PianoKey>)}
  </PianoContainer>

export default Piano

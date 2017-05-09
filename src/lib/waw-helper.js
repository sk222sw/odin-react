// @flow

import { find } from './helpers'
import {KeyType} from './types/types'

export const keyIsPressed = (keys: any[], key: string): boolean =>
  find(keys, key)

export const keyIsNotAssigned = (list: any[], key: any): boolean =>
  !list.some(k => k.keyPress === key)

export const filterByKeyPress = (list: any[], key: string): KeyType =>
  list.filter(k => k.keyPress === key)[0]

export const handleKeyUp = (waw, removeKey) => (key) => {
  waw.deleteOscillator(key)
  removeKey(key)
}

export const removeAllKeys = (waw, removeAllKeys) => {
  removeAllKeys()
  waw.deleteAllOscillators()
}

export const handleKeyDown = (pressedKeys, keys, oscillators, waw, envelope, addKey) => (key: string) => {
  if (keyIsPressed(pressedKeys, key) || keyIsNotAssigned(keys, key)) return

  const { frequency } = filterByKeyPress(keys, key)

  oscillators.forEach(({waveform, semitoneOffset, centOffset}) => {
    waw.playNote({
      key,
      frequency,
      detune: semitoneOffset,
      waveform,
      envelope,
      cent: centOffset,
    })
  })

  addKey(key)
}

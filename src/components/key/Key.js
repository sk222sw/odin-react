// @flow

import React from 'react'

import './key.css'

type params = { name: string, frequency: string, onClick: any }
const Key = ({ name, frequency, onClick }: params) => (
  <button
    onClick={() => onClick({ name, frequency })}
  >
    {name}
  </button>
)
export default Key

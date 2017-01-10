// @flow

import React from 'react'
import SliderAndInput from './slider-and-input'

type params = {
  value: number,
  onChange: any,
}

const Volume = ({
  value,
  onChange,
}: params) => (
  <div>
    <SliderAndInput value={value} name={'volume'} onChange={onChange} step={1} />
  </div>
)

export default Volume

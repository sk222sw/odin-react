// @flow

import React from 'react'
import SliderAndInput from '../slider-and-input'

type params = {
  value: number,
  onChange: any,
  name: string,
  max: number,
}

const EnvelopeItem = ({
  value,
  onChange,
  name,
  max,
}: params) => (
  <div className="envelope-item">
    <SliderAndInput step={0.1} onChange={onChange} value={value || 0} max={max} name={name} />
  </div>
)

export default EnvelopeItem

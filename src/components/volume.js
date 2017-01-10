// @flow

import React from 'react'
import Slider from 'rc-slider'

type params = {
  value: number,
  onChange: any,
}

const Volume = ({
  value,
  onChange,
}: params) => (
  <div>
    <Slider value={value} onChange={onChange} />
  </div>
)

export default Volume

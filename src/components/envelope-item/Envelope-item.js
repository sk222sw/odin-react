// @flow

import React from 'react'
import styled from 'styled-components'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  max-width: 300px;
  margin-left: 50px;
`

const SliderInput = styled.input`
  width: 40px;
`

const EnvelopeSlider = styled(Slider)`
  max-width: 75%;
`

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
    <SliderContainer>
      <span>
        {name}
      </span>
      <SliderInput
        className="envelope-input"
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <EnvelopeSlider step={0.01} value={value || 0} max={max} onChange={onChange} />
    </SliderContainer>
  </div>
)

export default EnvelopeItem

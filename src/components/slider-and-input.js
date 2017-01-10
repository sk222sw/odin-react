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

const StyledSlider = styled(Slider)`
  max-width: 75%;
`

type params = {
  value: number,
  onChange: any,
  name: string,
  max: number,
  step: number,
}

const SliderAndInput = ({
  value,
  onChange,
  name,
  max = 100,
  step,
}: params) => (
  <div className="slider-and-input-item">
    <SliderContainer>
      <span>
        {name}
      </span>
      <SliderInput
        className="slider-input"
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <StyledSlider step={step} value={value} max={max} onChange={onChange} />
    </SliderContainer>
  </div>
)

export default SliderAndInput

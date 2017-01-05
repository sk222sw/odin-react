// @flow

import React from 'react'
import styled from 'styled-components'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

import './envelope.css'

type params = {
  envelope: any,
  changeAttack: any,
  changeDecay: any,
  changeSustain: any,
  changeRelease: any,
}

const SliderContainer = styled.div`
  max-width: 300px;
  margin-left: 50px;
`

const Envelope = ({
  envelope,
  changeAttack,
  changeDecay,
  changeSustain,
  changeRelease,
}: params) => (
  <div className="envelope">
    <form>
      <div>
        <input
          className="envelope-input"
          type="text"
          name="attack"
          value={envelope.a}
          onChange={e => changeAttack(e.target.value)}
        />
        <SliderContainer>
          <Slider value={envelope.a * 100 || 0} onChange={v => changeAttack(v / 100)} />
        </SliderContainer>
      </div>
      <div>
        <input
          className="envelope-input"
          type="text"
          name="decay"
          value={envelope.d}
          onChange={e => changeDecay(e.target.value)}
        />
        <SliderContainer>
          <Slider value={envelope.d * 100 || 0} onChange={v => changeDecay(v / 100)} />
        </SliderContainer>
      </div>
      <div>
        <input
          className="envelope-input"
          type="text"
          name="sustain"
          value={envelope.s}
          onChange={e => changeSustain(e.target.value)}
        />
        <SliderContainer>
          <Slider value={envelope.s * 100 || 0} onChange={v => changeSustain(v / 100)} />
        </SliderContainer>
      </div>
      <div>
        <input
          className="envelope-input"
          type="text"
          name="release"
          value={envelope.r}
          onChange={e => changeRelease(e.target.value)}
        />
        <SliderContainer>
          <Slider value={envelope.r * 100 || 0} onChange={v => changeRelease(v / 100)} />
        </SliderContainer>
      </div>
    </form>
  </div>
)

export default Envelope

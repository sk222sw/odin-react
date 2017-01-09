// @flow

import React from 'react'
import EnvelopeItem from '../envelope-item/Envelope-item'

type params = {
  envelope: any,
  changeAttack: any,
  changeDecay: any,
  changeSustain: any,
  changeRelease: any,
}

const Envelope = ({
  envelope,
  changeAttack,
  changeDecay,
  changeSustain,
  changeRelease,
}: params) => (
  <div className="envelope">
    <EnvelopeItem name={'A'} onChange={changeAttack}  value={envelope.a} max={3} />
    <EnvelopeItem name={'D'} onChange={changeDecay}   value={envelope.d} max={3} />
    <EnvelopeItem name={'S'} onChange={changeSustain} value={envelope.s} max={1} />
    <EnvelopeItem name={'R'} onChange={changeRelease} value={envelope.r} max={3} />
  </div>
)

export default Envelope

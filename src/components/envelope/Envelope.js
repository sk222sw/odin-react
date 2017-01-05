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
    <EnvelopeItem name={'A'} onChange={changeAttack}  value={envelope.a} />
    <EnvelopeItem name={'D'} onChange={changeDecay}   value={envelope.d} />
    <EnvelopeItem name={'S'} onChange={changeSustain} value={envelope.s} />
    <EnvelopeItem name={'R'} onChange={changeRelease} value={envelope.r} />
  </div>
)

export default Envelope

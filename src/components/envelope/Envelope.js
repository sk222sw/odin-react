import React from 'react'

import './envelope.css'

type params = { envelope: any }

const Envelope = ({ envelope }: params) => (
  <div className="envelope">
    <form>
      <div>
        <input className="envelope-input" type="text" name="attack" value={envelope.a} />
      </div>
      <div>
        <input className="envelope-input" type="text" name="decay" value={envelope.d} />
      </div>
      <div>
        <input className="envelope-input" type="text" name="sustain" value={envelope.s} />
      </div>
      <div>
        <input className="envelope-input" type="text" name="release" value={envelope.r} />
      </div>
    </form>
  </div>
)

export default Envelope

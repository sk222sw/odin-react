import React from 'react'

import './envelope.css'

type params = { envelope: any }

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
      </div>
      <div>
        <input
          className="envelope-input"
          type="text"
          name="decay"
          value={envelope.d}
          onChange={e => changeDecay(e.target.value)}
        />
      </div>
      <div>
        <input
          className="envelope-input"
          type="text"
          name="sustain"
          value={envelope.s}
          onChange={e => changeSustain(e.target.value)}
        />
      </div>
      <div>
        <input
          className="envelope-input"
          type="text"
          name="release"
          value={envelope.r}
          onChange={e => changeRelease(e.target.value)}
        />
      </div>
    </form>
  </div>
)

export default Envelope

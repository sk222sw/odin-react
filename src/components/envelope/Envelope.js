import React from 'react';

import './envelope.css'

const Envelope = () => (
  <div className="envelope">
    <input className="envelope-input" type="number" name="attack" />
    <input className="envelope-input" type="number" name="decay" />
    <input className="envelope-input" type="number" name="sustain" />
    <input className="envelope-input" type="number" name="release" />
  </div>
)

export default Envelope

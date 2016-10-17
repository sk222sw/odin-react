import React from 'react';

import './key.css'

const Key = ({ name, frequency, onClick }) => (
  <button 
    onClick={() => onClick(frequency)}
  >
    {name}
  </button>
)
export default Key

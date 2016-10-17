import React, { Component } from 'react';

require('./key.css')

const Key = ({ name, frequency, onClick }) => (
  <button 
    onClick={() => onClick(frequency)}
  >
    {name}
  </button>
)
export default Key

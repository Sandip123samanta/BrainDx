import React from 'react';
import './style.css';

function Button() {
  return (
    <button className="btn">
      <span className="glow"></span>
      <span className="btn-content">Predict</span>
    </button>
  );
}

export default Button;

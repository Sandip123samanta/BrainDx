import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Button() {
  return (
    <Link to="/predict">
      <button className="btn">
        <span className="glow"></span>
        <span className="btn-content">Predict</span>
      </button>
    </Link>
  );
}

export default Button;

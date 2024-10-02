import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Button({ btnFor, btnTo }) {
  return (
    <Link to={btnTo}>
      <button className="btn">
        <span className="glow"></span>
        <span className="btn-content">{btnFor}</span>
      </button>
    </Link>
  );
}

export default Button;

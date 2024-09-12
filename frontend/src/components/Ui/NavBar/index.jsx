import React from 'react';
import './style.css';
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="text-white absolute top-0 left-0 w-full h-[6em] flex items-center justify-around z-10 pointer-events-none">
      <div className="pointer-events-auto">
        <NavLink to="/">
          <h2 className="Logo">BrainDx</h2>
        </NavLink>
      </div>
      <div className="pointer-events-auto">
        <NavLink to="/about">
          <h2 className="Flip">About</h2>
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;

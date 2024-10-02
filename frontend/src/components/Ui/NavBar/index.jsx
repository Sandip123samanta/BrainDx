import React, { useState } from 'react';
import './style.css';
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
  const [navbarState, setNavbarState] = useState(false);

  window.addEventListener('scroll', () => {
    if (window.scrollY >= 96) setNavbarState(true);
    else setNavbarState(false);
  });

  return (
    <nav
      className={` ${
        navbarState ? 'navbar active' : 'navbar'
      } text-white fixed top-0 left-0 w-full h-[4em] flex items-center justify-between md:px-0 px-7 md:justify-around z-10 pointer-events-none`}
    >
      <div className="pointer-events-auto">
        <NavLink to="/">
          <div className="Logo flex gap-2 items-center justify-center">
            <svg
              version="1.0"
              className="w-5 h-6"
              viewBox="0 0 32.000000 36.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,36.000000) scale(0.100000,-0.100000)"
                fill="#FFFFFF"
                stroke="none"
              >
                <path
                  d="M80 317 l-75 -43 0 -94 0 -95 78 -43 77 -44 78 44 77 43 0 95 0 94
-75 43 c-41 24 -77 43 -80 43 -3 0 -39 -19 -80 -43z m122 -91 c11 -15 10 -54
-1 -60 -5 -3 -12 -21 -15 -40 -9 -47 -43 -46 -52 1 -3 18 -10 36 -15 39 -17
10 -9 53 13 68 23 16 57 12 70 -8z"
                />
              </g>
            </svg>
            <h1 className="md:text-[1em] text-[1.5em]">BrainDx</h1>
          </div>
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

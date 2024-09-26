import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BsGithub } from 'react-icons/bs';
import './style.css';

function Footer() {
  return (
    <div className="text-white w-full h-[4em] flex items-center justify-around z-10 pointer-events-none relative">
      <div className="top-line" />
      <div className="pointer-events-auto">
        <NavLink to="/">
          <div className="footer-text flex gap-2 items-center justify-center">
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
            BrainDx
          </div>
        </NavLink>
      </div>
      <div className="pointer-events-auto">
        <Link to="https://github.com/Sandip123samanta/BrainDx">
          <BsGithub size={20} color="rgba(255,255,255,0.4)" />
        </Link>
      </div>
    </div>
  );
}

export default Footer;

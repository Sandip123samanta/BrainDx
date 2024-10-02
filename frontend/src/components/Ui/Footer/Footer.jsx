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

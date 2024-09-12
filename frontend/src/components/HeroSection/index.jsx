import React from 'react';
import AcentLines from './AcentLines';
import StarCanvas from './StarCanvas';
import SpotLight from './SpotLight';
import HeroContent from './HeroContent';

function Hero() {
  return (
    <div className="relative">
      <AcentLines />
      <StarCanvas />
      <SpotLight />
      <HeroContent />
    </div>
  );
}

export default Hero;

import React from 'react';
import AcentLines from './AcentLines';
import SpotLight from './SpotLight';
import HeroContent from './HeroContent';

function Hero() {
  return (
    <div className="relative">
      <AcentLines />
      <SpotLight />
      <HeroContent />
    </div>
  );
}

export default Hero;

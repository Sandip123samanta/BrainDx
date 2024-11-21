import React from 'react';
import Hero from '../../components/HeroSection';
import LogoTicker from '../../components/LogoTicker';
import HomeAbout from '../../components/HomeAbout';
import GetCode from '../../components/GetCode';
import FaqSec from '../../components/FaqSection';
import ContactMe from '../../components/ContactSection';

function Home() {
  return (
    <>
      <Hero />
      <LogoTicker />
      <HomeAbout />
      <GetCode />
      <FaqSec />
      <ContactMe />
    </>
  );
}

export default Home;

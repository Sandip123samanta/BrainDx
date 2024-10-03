import React from 'react';
import AboutHero from '../../components/AboutPage/AboutHero/AboutHero.jsx';
import AboutFeature from '../../components/AboutPage/AboutFeature/AboutFeature.jsx';
import AboutSetup from '../../components/AboutPage/AboutSetup/AboutSetup.jsx';
import ContactMe from '../../components/ContactSection/index.jsx';

function About() {
  return (
    <div>
      <AboutHero />
      <AboutFeature />
      <AboutSetup />
      <ContactMe />
    </div>
  );
}

export default About;

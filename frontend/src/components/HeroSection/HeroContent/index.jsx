import React from 'react';
import './style.css';
import TextFollow from '../../Ui/TextFollow';
import HeroText from '../../Ui/HeroText';
import Button from '../../Ui/Button';

function HeroContent() {
  return (
    <div className="w-full h-[100vh] overflow-y-clip relative">
      <div className="w-full h-full md:pt-[13em] pt-[16.5em]">
        <div className="clas mt-2 md:mt-0">
          <TextFollow Text={'Introducing'} />
        </div>
        <div className="md:pt-3 pt-7">
          <HeroText Text={'BrainDx'} />
        </div>
        <div className="md:pt-[10em] pt-[12em] z-10">
          <p className="heroP">
            A Brain Tumor Detector
            <br />
            powered by CNN, FastApi & React.
          </p>
        </div>
        <div className="relative text-center md:mt-20 mt-20 z-10">
          <Button btnFor={'Predict'} btnTo={'/predict'} />
        </div>
      </div>
      <div className="mountains">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default HeroContent;

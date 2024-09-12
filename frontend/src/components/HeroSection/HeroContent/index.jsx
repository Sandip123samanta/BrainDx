import React from 'react';
import './style.css';
import TextFollow from '../../Ui/TextFollow';
import HeroText from '../../Ui/HeroText';
import Button from '../../Ui/Button';

function HeroContent() {
  return (
    <div className="relative">
      <div className="container">
        <div className="clas">
          <TextFollow Text={'Introducing'} />
        </div>
        <div>
          <HeroText Text={'BrainDx'} />
        </div>
        <div>
          <p class="heroP">
            A Brain Tumor Detector
            <br />
            powered by CNN, FastApi & React.
          </p>
        </div>
      </div>
      {/* <div>
        <Button />
      </div> */}
      <div class="mountains">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default HeroContent;

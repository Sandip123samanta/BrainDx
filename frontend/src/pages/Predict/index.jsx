import React, { useState } from 'react';
import Uploader from '../../components/PredictPage/Uploader';
import StarCanvas from '../../components/HeroSection/StarCanvas';
function Predict() {
  return (
    <>
      <StarCanvas />
      <Uploader />
    </>
  );
}

export default Predict;

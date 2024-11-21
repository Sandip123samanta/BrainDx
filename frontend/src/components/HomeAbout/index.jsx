import React from 'react';
import './style.css';
import TextFollow from '../Ui/TextFollow/index.jsx';
import BrainModel from '../BrainModel/index.jsx';

function HomeAbout() {
  return (
    <div className="flex justify-center pt-5 relative main-cointeiner pb-10">
      <div className="absolute top-5 w-screen h-[1px] bg-[linear-gradient(90deg,transparent,rgba(186,215,247,0.18),transparent)] before:content-[''] after:content-[''] before:absolute after:absolute before:w-[0.2em] before:h-[0.2em] after:h-[0.2em] after:w-[0.2em] before:bg-[#9dc3f7] after:bg-[#9dc3f7] before:top-0 after:top-0 before:m-auto after:m-auto md:before:left-28 md:after:right-28 before:left-5 after:right-5" />
      <div className="absolute top-[45em] md:top-[30em] w-screen h-[1px] bg-[linear-gradient(90deg,transparent,rgba(186,215,247,0.18),transparent)] before:content-[''] after:content-[''] before:absolute after:absolute before:w-[0.2em] before:h-[0.2em] after:h-[0.2em] after:w-[0.2em] before:bg-[#9dc3f7] after:bg-[#9dc3f7] before:top-0 after:top-0 before:m-auto after:m-auto md:before:left-28 md:after:right-28 before:left-5 after:right-5" />
      <div className="absolute left-5 md:left-28 top-0 w-[1px] h-full bg-[linear-gradient(180deg,transparent,rgba(186,215,247,0.18),transparent)]" />
      <div className="absolute right-5 md:right-28 top-0 w-[1px] h-full bg-[linear-gradient(180deg,transparent,rgba(186,215,247,0.18),transparent)]" />
      <div className="absolute left-0 bottom-0 w-full h-[1px] bg-[linear-gradient(90deg,transparent,rgba(186,215,247,0.18),transparent)]" />
      <div className="heroabout-container md:w-[70%] w-[80%] flex flex-col gap-[10em]">
        <div className="mt-10">
          <div className="mb-5">
            <TextFollow Text={'About Project'} />
          </div>
          <div className="flex flex-col items-center justify-center gap-5 w-full h-auto">
            <div className="text-container">
              <h1 className="homeabout-herotext font-bold md:leading-8 leading-6 mb-5 text-[2em]">
                BrainDx the
                <br />
                brain tumor detector
              </h1>
              <p className="text-[#d8ecf8be] text-[1.2em] text-center font-['Hubot-Sans','sans-serif']">
                BrainDx is a web application designed to help detect brain
                tumors from MRI scans using deep learning models. Users can
                upload MRI images, and the system will analyze them to predict
                whether the scan is tumorous or non-tumorous. The backend,
                powered by a pre-trained VGG16 model, processes the images to
                make predictions. Additionally, BrainDx integrates LIME (Local
                Interpretable Model-agnostic Explanations) to provide
                explainability by highlighting the regions of the image that
                contributed to the model's decision, helping users better
                understand the predictions.
              </p>
            </div>
          </div>
        </div>
        <div className="model-container border border-[#9dc3f7]">
          <div className="flex items-center justify-center">
            <BrainModel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;

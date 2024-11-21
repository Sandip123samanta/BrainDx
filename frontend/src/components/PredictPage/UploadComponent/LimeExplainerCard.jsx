import React from 'react';
import TextFollow from '../../Ui/TextFollow';
import './style.css';

function LimeExplainerCard({ limeImage }) {
  return (
    <div className="mt-5 font-[]Hubot-Sans',_sans-serif mb-10">
      <div className="lime-container">
        <div className="flex flex-col items-center gap-3">
          <TextFollow Text={'Explainable AI'} />
          <h1 className="high_text text-[2em] font-bold text-center">
            Understanding the LIME <br />
            Explanation Image
          </h1>
          <p className="text-white/70 max-w-[60%] text-center">
            The image below is a visual representation created by LIME (Local
            Interpretable Model-agnostic Explanations) to help you understand
            how the model analyzed your MRI scan. Here's what you need to know
          </p>
        </div>
        <div className="flex md:flex-row flex-col px-10 mt-10">
          <div className="md:w-2/5 h-auto object-cover overflow-hidden">
            <img src={limeImage} alt="lime generated img" />
          </div>
          <div className="md:w-3/5 md:mt-0 mt-10 flex flex-col md:gap-3 gap-5 text-white/70">
            <p>
              <span className="font-bold bg-red-500 p-1 mr-2 text-white">
                Red regions:
              </span>
              These areas in the MRI scan were marked as highly significant for
              the model's prediction that a brain tumor is present. The model
              relies heavily on these regions to make its decision.
            </p>
            <p>
              <span className="font-bold bg-green-500 p-1 mr-2 text-white">
                Green regions:
              </span>
              These areas are significant for predicting the absence of a brain
              tumor. The model sees these regions as contributing evidence
              against the presence of a tumor.
            </p>
            <p>
              <span className="font-bold bg-yellow-500 p-1 mr-2 text-white">
                Yellow boundaries:
              </span>
              These highlight the transitions between important regions and
              indicate where the model shifts its focus. This is a visual
              boundary between areas influencing the model's decision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LimeExplainerCard;

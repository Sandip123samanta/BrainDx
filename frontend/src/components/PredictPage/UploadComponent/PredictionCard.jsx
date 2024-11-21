import React from 'react';
import './style.css';

function PredictionCard({ prediction, explanation, subImage, uploadedFile }) {
  return (
    <div className="font-['Hubot-Sans',_sans-serif] mb-5">
      <div className="prediction-container flex items-center gap-5 border border-white/30 w-[30em] p-2 rounded-lg">
        <div className="prediction-image object-cover w-16 h-16 rounded-full overflow-hidden">
          <img src={subImage} alt="uploaded brain mri image" />
        </div>
        <div className="text-white text-semibold text-[1.2em] flex flex-col justify-center gap-1">
          <h2>Confidance: {prediction}</h2>
          <h2>
            Result:
            <span
              className={`${
                prediction >= 50 ? 'text-red-600' : 'text-green-600'
              } font-bold`}
            >
              {prediction >= 50 ? 'Tumor' : 'No Tumor'}
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default PredictionCard;

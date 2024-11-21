import React from 'react';

function StepNo({ step }) {
  return (
    <div className="inline-flex w-fit items-center bg-gray-900 border-gray-800 px-4 py-1.5 rounded-lg gap-2 text-white/80 hover:gap-3 transition-all duration-300 ease-linear">
      <span className="w-2 h-2 rounded-full bg-green-600" />
      <p className="text-sm font-semibold">{step}</p>
    </div>
  );
}

export default StepNo;

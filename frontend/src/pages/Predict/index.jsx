import React, { useState } from 'react';

function Predict() {
  const [file, setFile] = useState(null);
  const [explanation, setExplanation] = useState(0);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('https://braindx.onrender.com/predict', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    setExplanation(data.prediction); // Update this line
  };

  return (
    <div className="App">
      <h1>Upload MRI Image</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Get Explanation</button>
      </form>

      {explanation && (
        <div>
          <h2>Model Explanation</h2>
          {/* <img
            src={`http://localhost:8080/tmp/explanation.png`}
            alt="LIME Explanation"
          /> */}
          <h1 className="text-white font-bold">Prediction: {explanation}</h1>
        </div>
      )}
    </div>
  );
}

export default Predict;

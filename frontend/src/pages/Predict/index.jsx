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

    try {
      const response = await fetch('https://braindx.onrender.com/predict', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setExplanation(data.prediction);
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error with your request: ' + error.message);
    }
  };

  return (
    <div className="App text-white mt-28">
      <h1>Upload MRI Image</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Get Explanation
        </button>
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

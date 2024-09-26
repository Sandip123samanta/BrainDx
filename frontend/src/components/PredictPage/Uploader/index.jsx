import React, { useState, useRef } from 'react';
import { LuUploadCloud } from 'react-icons/lu';
import { FaFileImage } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import TextFollow from '../../Ui/TextFollow';
import './style.css';

function Uploader() {
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [explanation, setExplanation] = useState('');
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef(null); // Reference to the hidden input element

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFilePreview(URL.createObjectURL(selectedFile)); // Set the preview of the file
    console.log('File selected:', selectedFile);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      setFile(droppedFile);
      setFilePreview(URL.createObjectURL(droppedFile)); // Set the preview of the file
      e.dataTransfer.clearData();
      console.log('File dropped:', droppedFile);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleDelete = () => {
    setFile(null);
    setFilePreview(null);
    console.log('File deleted');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

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
      console.log('Upload completed');
    } catch (error) {
      alert('There was an error with your request.');
      console.log('Upload error:', error);
    }
  };

  return (
    <div className="upload-container text-white">
      <div className="w-[30em] text-center">
        <div className="mb-4">
          <TextFollow Text={'Detection'} />
        </div>
        <h1 className="upload-text leading-7 font-bold">
          Upload Your MRI for Fast,
          <br />
          Accurate Results
        </h1>
        <p className="text-[#d8ecf8be] mt-2 text-[1em] leading-4 mb-5">
          Please upload a DICOM file of your MRI scan. Our AI will analyze it
          and provide a prediction upon it.
        </p>
      </div>

      {/* Drag-and-Drop Area */}
      <div
        className={`w-[30em] h-[20em] border-[2px] border-dashed rounded-sm cursor-pointer flex items-center justify-center hover:border-blue-500 hover:bg-gray-900 ${
          dragging ? 'border-blue-500 bg-gray-900' : 'border-[#d8ecf8be]'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick} // Make the area clickable
      >
        {filePreview ? (
          <img
            src={filePreview}
            alt="Preview"
            className="max-w-full max-h-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center">
            <LuUploadCloud size={40} />
            <p className="text-gray-400">drag & drop or click to upload</p>
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          ref={fileInputRef} // Reference to the hidden input
          style={{ display: 'none' }} // Hide input but still trigger it on click
        />
      </div>

      {/* File Information and Delete Button */}
      {file && (
        <div className="w-[30em] flex justify-between items-center p-3 mt-4 text-left border border-white rounded-md hover:bg-gray-900">
          <div className="flex h-full w-auto items-center gap-4">
            <FaFileImage size={30} />
            <div>
              <p className="text-gray-400 line-clamp-1">{file.name}</p>
              <p className="text-gray-400">
                {(file.size / 1024).toFixed(2)} KB
              </p>
            </div>
          </div>
          <button onClick={handleDelete}>
            <RiDeleteBin6Line size={20} />
          </button>
        </div>
      )}

      {/* Submit Button */}
      {file && (
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
        >
          Get Prediction
        </button>
      )}

      {/* Model Explanation */}
      {explanation && (
        <div className="mt-5">
          <h2 className="text-white font-bold">Prediction: {explanation}</h2>
        </div>
      )}
    </div>
  );
}

export default Uploader;

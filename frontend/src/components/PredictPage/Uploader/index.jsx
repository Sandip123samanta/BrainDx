import React, { useState, useRef } from 'react';
import { LuUploadCloud } from 'react-icons/lu';
import { FaFileImage } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import TextFollow from '../../Ui/TextFollow';
import axios from 'axios';
import './style.css';
import PredictionCard from '../UploadComponent/PredictionCard';
import SkeletonLoder from '../UploadComponent/SkeletonLoder';
import { FaLongArrowAltRight } from 'react-icons/fa';
import LimeExplainerCard from '../UploadComponent/LimeExplainerCard';

function Uploader() {
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [explanation, setExplanation] = useState('');
  const [dragging, setDragging] = useState(false);
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState(null);
  const [cancelTokenSource, setCancelTokenSource] = useState(null);
  const [limeImage, setLimeImage] = useState(null);
  const fileInputRef = useRef(null);
  const [model, setModel] = useState('Vgg16');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFilePreview(URL.createObjectURL(selectedFile));
    clearPrediction();
    setLimeImage(null);
    console.log('File selected:', selectedFile);
  };

  const handleModelChange = (e) => {
    handleCancel();
    setModel(e.target.value);
    clearPrediction();
    setLimeImage(null);
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
      setFilePreview(URL.createObjectURL(droppedFile));
      clearPrediction();
      setLimeImage(null);
      e.dataTransfer.clearData();
      console.log('File dropped:', droppedFile);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleDelete = () => {
    handleCancel();
    setFile(null);
    setFilePreview(null);
    clearPrediction();
    setLimeImage(null);
    console.log('File deleted');
  };

  const VITE_API_URL = 'https://3.234.245.75:8080';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('model', model);
    clearPrediction();
    setLimeImage(null);
    const source = axios.CancelToken.source();
    setCancelTokenSource(source);

    setLoading(true);
    try {
      const apiUrl = `${VITE_API_URL}/predict`;

      const response = await axios.post(apiUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        cancelToken: source.token,
      });

      const data = response.data;
      setExplanation(data.explanation);
      setPrediction(data.prediction);
      setLoading(false);
      console.log('Upload completed');
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Request canceled:', error.message);
      } else {
        console.log('Upload error:', error);
        alert('There was an error with your request.');
      }
      setLoading(false);
    }
  };

  const clearPrediction = () => {
    setExplanation('');
    setPrediction(null);
  };

  const handleCancel = () => {
    if (cancelTokenSource) {
      cancelTokenSource.cancel('User canceled the request');
      setCancelTokenSource(null);
      setLoading(false);
    }
  };

  const fetchLimeImage = async () => {
    try {
      const response = await axios.get(`${VITE_API_URL}/tmp/explanation.png`, {
        responseType: 'blob',
      });
      const url = URL.createObjectURL(response.data);
      setLimeImage(url);
    } catch (error) {
      console.log('Error fetching LIME image:', error);
      alert('Could not fetch LIME explanation image.');
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
        <p className="text-[#d8ecf8be] mt-4 text-[1em] leading-4 mb-5">
          Please upload a DICOM file of your MRI scan. Our AI will analyze it
          and provide a prediction upon it.
        </p>
      </div>

      <div
        className={`w-[30em] h-[20em] border-[2px] border-dashed rounded-sm cursor-pointer flex items-center justify-center hover:border-blue-500 hover:bg-gray-900 ${
          dragging ? 'border-blue-500 bg-gray-900' : 'border-[#d8ecf8be]'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
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
          ref={fileInputRef}
          style={{ display: 'none' }}
        />
      </div>

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

      {file && (
        <div className="w-[30em] mt-4">
          <label className="text-gray-300 mb-2 block">Select Model:</label>
          <select
            className="w-full p-2 border border-gray-500 rounded-md bg-gray-800 text-white"
            value={model}
            onChange={handleModelChange}
          >
            <option value="Vgg16">Vgg16</option>
            <option value="ResNet50">ResNet50</option>
            <option value="BaseModel">BaseModel</option>
          </select>
        </div>
      )}

      {file && !loading && !prediction && (
        <button
          type="submit"
          onClick={handleSubmit}
          className="git mt-5 mb-5"
          disabled={loading}
        >
          <span className="glow"></span>
          <span className="git-content">Get Prediction</span>
        </button>
      )}

      {loading && (
        <div className="mt-5">
          <div className="loader mt-2">
            <SkeletonLoder />
          </div>
          <div className="mt-5 text-center mb-5">
            <button className="git" onClick={handleCancel}>
              <span className="glow"></span>
              <span className="git-content">Cancel</span>
            </button>
          </div>
        </div>
      )}

      {prediction && (
        <div className="mt-5 flex flex-col items-center">
          <PredictionCard
            prediction={prediction}
            explanation={explanation}
            subImage={filePreview}
            uploadedFile={file}
          />

          <p className="max-w-[65%] mb-5">
            want to know how the model is predicting, on the basis of of which
            feature of the mri image?{' '}
            <span
              onClick={fetchLimeImage}
              className="cursor-pointer text-blue-300 flex gap-1 hover:gap-3 items-center transition-all duration-300"
            >
              Learn more
              <FaLongArrowAltRight />
            </span>
          </p>
        </div>
      )}
      {limeImage && <LimeExplainerCard limeImage={limeImage} />}
    </div>
  );
}

export default Uploader;

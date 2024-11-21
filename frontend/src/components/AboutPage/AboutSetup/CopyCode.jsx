import React, { useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';
import './style.css';

const CopyCode = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-black text-white rounded-md p-4 mb-4 inline-flex items-center gap-5 justify-between">
      <pre className="text-sm font-mono line-clamp-1">{code}</pre>
      <button
        style={{
          background: 'linear-gradient(0deg, #d8ecf8 0%, #98c0ef 100%)',
        }}
        onClick={handleCopy}
        className="hover:bg-blue-600 text-black p-2 rounded"
        aria-label="Copy to clipboard"
      >
        {copied ? <FiCheck size={18} /> : <FiCopy size={18} />}
      </button>
    </div>
  );
};

export default CopyCode;

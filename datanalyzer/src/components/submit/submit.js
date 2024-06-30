import React, { useState } from 'react';
import '../../App.js';

function Submit() {
  const [csvFile, setCsvFile] = useState(null);
  const [prompt, setPrompt] = useState('');
  const [responseType, setResponseType] = useState('');
  const [responseValue, setResponseValue] = useState('');

  const handleFileChange = (e) => {
    setCsvFile(e.target.files[0]);
  };

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleCsvSubmit = async () => {
    if (csvFile) {
      const formData = new FormData();
      formData.append('file', csvFile);

      try {
        const response = await fetch('http://localhost:5003/files/upload', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          console.log('CSV file uploaded successfully');
          // Add further handling logic for successful upload here
        } else {
          console.error('Failed to upload CSV file');
        }
      } catch (error) {
        console.error('Error uploading CSV file:', error);
      }
    } else {
      alert('Please upload a CSV file.');
    }
  };

  const handlePromptSubmit = async () => {
    if (prompt) {
      console.log('Sending prompt:', prompt);

      try {
        const response = await fetch('http://localhost:5000/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt }),
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Prompt response:', data);
          setResponseType(data.type); // Set response type
          setResponseValue(data.value); // Set response value
          // Add further handling logic for prompt response here
        } else {
          console.error('Failed to send prompt');
        }
      } catch (error) {
        console.error('Error sending prompt:', error);
      }
    } else {
      alert('Please enter a prompt.');
    }
  };

  // Render function for different response types
  const renderResponse = () => {
    if (responseType === 'string') {
      return (
        <div className="response-container">
          <h3>Text Response:</h3>
          <p>{responseValue}</p>
        </div>
      );
    } else if (responseType === 'plot') {
      // Replace 'path_to_image' with the actual path where your image is located
      const imagePath = 'D:/downloadsD/Data_Analyze_SQL-Packet/exports/charts/temp_chart.png'; // Example path

      return (
        <div className="response-container">
          <h3>Image Response:</h3>
          <img src={imagePath} alt="Response Image" className="response-image" />
        </div>
      );
    } else {
      return null; // Handle other types or no response
    }
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <h2>Upload CSV and Enter Prompt</h2>
        <div className="input-group">
          <input
            type="file"
            accept=".csv"
            onChange={handleFileChange}
            className="input-file"
          />
          <button onClick={handleCsvSubmit} className="submit-button">
            Submit CSV
          </button>
        </div>
        <div className="input-group">
          <input
            type="text"
            value={prompt}
            onChange={handlePromptChange}
            placeholder="Enter your prompt"
            className="input-text"
          />
          <button onClick={handlePromptSubmit} className="submit-button">
            Submit Prompt
          </button>
        </div>
      </div>

      {/* Render response based on type */}
      {renderResponse()}
    </div>
  );
}

export default Submit;

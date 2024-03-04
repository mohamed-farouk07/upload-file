import { useState } from "react";

import './App.css';

function App() {
  
	const [textContent, setTextContent] = useState('');
  const [totalWords, setTotalWords] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [key, setKey] = useState(0); // State to force re-render

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    // Check if the file type is not text/plain (not a .txt file)
    if (file && file.type !== 'text/plain') {
      alert('Please select a .txt file.');
      return;
    }

    setIsLoading(true); // Show loader

    const reader = new FileReader();

    reader.onload = (e) => {
      const content = e.target.result;
      setTextContent(content);

      const words = content.split(/\s+/).filter(word => word !== ''); // Split by whitespace and remove empty strings
      setTotalWords(words.length); // Calculate total number of words
      setIsLoading(false); // Hide loader after processing
    };

    reader.readAsText(file);
  };

  const handleRefresh = () => {
    setTextContent('');
    setTotalWords(0);
    setKey(prevKey => prevKey + 1); // Change the key to force re-render
  };

  return (
    <div className="container">
      <input key={key} type="file" onChange={handleFileChange} />
      {isLoading && <div>Loading...</div>} {/* Display loader if isLoading is true */}
      <div>
        <h2>File Content:</h2>
        <p className="file-content">{textContent}</p>
      </div>
      <div>
        <h2>Total Words:</h2>
        <p className="total-words">{totalWords}</p>
      </div>
      <button className="refresh-button" onClick={handleRefresh}>Refresh</button>
    </div>
  );
}

export default App;

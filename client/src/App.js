import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import { uploadFile } from './services/api';

function App() {
  const fileInputRef = useRef();
  const [file, setFile] = useState("");
  const [result,setResult]=useState("")

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append('name', file.name);
        data.append("file", file);
        try {
          let response = await uploadFile(data);
          console.log(response)
          setResult(response.path)
          console.log("File uploaded successfully", response);
        } catch (error) {
          console.error("Error uploading file", error);
        }
      }
    }
    
    // Call getImage function whenever 'file' changes
    getImage();
  }, [file]); // Add 'file' as a dependency

  function onUploadClick() {
    fileInputRef.current.click();
  }

  return (
    <div className="container">
      <img src="https://www.goanywhere.com/sites/default/files/goanywhere/77ef9d0c-0490-11ea-bdef-008cfa043684.jpg" alt="Banner" />
      <div className="wrapper">
        <h1>Simple file sharing</h1>
        <p>Upload and share the download link</p>
        <button onClick={onUploadClick}>Upload</button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />

        <a  href='{result' target="_blank">{result} </a>
      </div>
    </div>
  );
}

export default App;

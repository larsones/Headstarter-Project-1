import logo from './logo.svg';
import './App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import React, { useState, useEffect } from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyBfhW_-hJeR2t8BIzdiRiKq7DL99VQzlMM",
  authDomain: "resumeparser-f4206.firebaseapp.com",
  projectId: "resumeparser-f4206",
  storageBucket: "resumeparser-f4206.appspot.com",
  messagingSenderId: "245221369607",
  appId: "1:245221369607:web:e06a167d91512b8e9807a2"
};

firebase.initializeApp(firebaseConfig);

function App() {
  const styles = {
    container: {
      backgroundColor: 'navy',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container2: {
      backgroundColor: 'white',
      height: '75vh',
      width: '75vh',
      borderRadius: '25px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {
      color: 'navy',
      padding: '15px',
      fontSize: '2rem',
      marginTop: '-50rem',
    },
    header2: {
      color: 'navy',
      padding: '15px',
      fontSize: '2rem',
    },
    button1: {
      backgroundColor: 'white',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'navy',
    },
  };

  const [uploadedFiles, setUploadedFiles] = useState([]);

  useEffect(() => {
    fetchUploadedFiles();
  }, []);

  const fetchUploadedFiles = () => {
    const storageRef = firebase.storage().ref();

    storageRef
      .listAll()
      .then((res) => {
        const promises = res.items.map((item) =>
          item.getMetadata().then((metadata) => ({
            name: item.name,
            url: metadata.downloadURLs && metadata.downloadURLs.length > 0 ? metadata.downloadURLs[0] : '',
            timeCreated: metadata.timeCreated,
          }))
        );
        return Promise.all(promises);
      })
      .then((fileData) => {
        const sortedFiles = fileData.sort(
          (a, b) => b.timeCreated - a.timeCreated
        );
        setUploadedFiles(sortedFiles);
      })
      .catch((error) => {
        console.error('Error retrieving uploaded files:', error);
      });
  };

  function uploadFile() {
    const file = document.getElementById('fileUpload').files[0];
    const storageRef = firebase.storage().ref();
    const filename = 'images/' + file.name;

    const uploadTask = storageRef.put(file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        alert('Upload progress: ' + progress + '%');
      },
      (error) => {
        alert('Upload failed:', error);
      },
      () => {
        alert('Upload completed');

        uploadTask.snapshot.ref.getMetadata().then((metadata) => {
          const uploadedFile = {
            name: file.name,
            url: metadata.downloadURLs[0],
            timeCreated: metadata.timeCreated,
          };
          setUploadedFiles((prevFiles) => [uploadedFile, ...prevFiles]);
        });
      }
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.container2}>
        <h1 style={styles.header}>Resume Parser</h1>
        <input type='file' id='fileUpload' />
        <div>
          <button style={styles.button1} onClick={uploadFile}>
            Upload Resume
          </button>
          <button style={styles.button1}>Filter Resume</button>
        </div>
        <div>
          <h1 style={styles.header2}>Current Resumes Stored:</h1>
          <ul>
            {uploadedFiles.map((file, index) => (
              <li key={index}>
                <a href={file.url} target='_blank' rel='noopener noreferrer'>
                  {file.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

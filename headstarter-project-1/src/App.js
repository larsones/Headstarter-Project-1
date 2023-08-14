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
      backgroundColor: 'Navy',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container2: {
      backgroundColor: 'White',
      height: '75vh',
      width: '75vh',
      border_radius: '25pxm',
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
  
  let test;
  function uploadFile() {
    const file = document.getElementById("fileUpload").files[0];
    const storageRef = firebase.storage().ref(); // Reference to the root of Firebase Storage
    test = storageRef.items;
    // Set the desired location and filename in Firebase Storage
    const filename = "images/" + file.name; // Example: storing files under 'images' directory

    // Upload the file to Firebase Storage
    const uploadTask = storageRef.child(filename).put(file);

    // Listen for upload completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Track upload progress, if needed
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        alert("Upload progress: " + progress + "%");
        alert(test);
      },
      (error) => {
        // Handle upload error
        alert("Upload failed:", error);
      },
      () => {
        // Upload successful
        alert("Upload completed");

        // Access the download URL of the uploaded file
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log("File available at:", downloadURL);
        });
      }
    );
  }

  const [fileNames, setFileNames] = useState([]);

  useEffect(() => {
    const storageRef = firebase.storage().ref();

    storageRef
      .listAll()
      .then((res) => {
        const names = res.items.map((item) => item.name);
        setFileNames(names);
      })
      .catch((error) => {
        console.error('Error retrieving file names:', error);
      });
  }, []);

  function search(){

  }

  return (
    <div style={styles.container}> 
      <div style={styles.container2}>
      <h1 style={styles.header}>Resume Parser</h1>
      <input type='file' id='fileUpload' />
      <div>
        <button style={styles.button1} onClick={uploadFile}>Upload Resume</button> 
        <button style={styles.button1}>Filter Resume</button> 
      </div>
      <div>
      <h1 style={styles.header2}>Current Resumes Stored:</h1>
      <ul>
        {fileNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      </div>
      </div> 
    </div>
  );
}

function uploadFile() {
  const file = document.getElementById("fileUpload").files[0];
  const storageRef = firebase.storage().ref(); 

  const filename = "images/" + file.name; 

  const uploadTask = storageRef.child(filename).put(file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload progress: " + progress + "%");
    },
    (error) => {
      console.error("Upload failed:", error);
    },
    () => {
      console.log("Upload completed");

      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log("File available at:", downloadURL);
      });
    }
  );
}

export default App;

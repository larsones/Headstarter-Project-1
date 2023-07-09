import logo from './logo.svg';
import './App.css';

import React from 'react';
//import ReactDOM from 'react-dom';

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
    header: {
      color: 'white',
      fontSize: '2rem',
      marginBottom: '2rem',
    },
    button1: {
      backgroundColor: 'white',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'navy',
    },
  };

  function testn(){
    alert("Click Counted")
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Resume Parser</h1>
      {/* Other components and content */}
      {/*<v */}
      <input  type='file' name='file' onChange={testn}/>
      <div>
        <button style={styles.button1} onClick={testn} >Upload Resume</button> 
        
        <button style={styles.button1}>Filter Resume</button> 

      </div> 
      {/*Possibly a List that is based off an array of added resumes so would be empty at start and grow with inputs to show file upload was a success */}

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

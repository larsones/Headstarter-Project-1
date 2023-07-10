import logo from './logo.svg';
import './App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import React from 'react';

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

<<<<<<< Updated upstream
  function uploadFile() {
    const file = document.getElementById("fileUpload").files[0];
    const storageRef = firebase.storage().ref(); // Reference to the root of Firebase Storage

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
        console.log("Upload progress: " + progress + "%");
      },
      (error) => {
        // Handle upload error
        console.error("Upload failed:", error);
      },
      () => {
        // Upload successful
        console.log("Upload completed");

        // Access the download URL of the uploaded file
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log("File available at:", downloadURL);
        });
      }
    );
=======


  function addingFile(event) {
    const file = event.target.files[0];
    // Do something with the file, such as saving it in state or sending it to a server
    alert(file.name + " added to the program.");
  };
  function savingFile(){
    alert("Resume Saved") 
>>>>>>> Stashed changes
  }

  return (
    <div style={styles.container}>
<<<<<<< Updated upstream
      <h1 style={styles.header}>Resume Parser</h1>
      <input type='file' id='fileUpload' />
      <div>
        <button style={styles.button1} onClick={uploadFile}>Upload Resume</button> 
        <button style={styles.button1}>Filter Resume</button> 
      </div> 
=======
      <div style={styles.container2}>
        <h1 style={styles.header}>Resume Parser</h1>
        {/* Other components and content */}
        {/* <3  */}
        
        <div>
          <input  type='file' name='file' onChange={addingFile}/>
          <button style={styles.button1} onClick={savingFile} >Upload Resume</button> 
        </div>
        <div>
          <input type='text' name='text'/>
          <button style={styles.button1}>Filter Resume</button>
        </div>

      {/*Possibly a List that is based off an array of added resumes so would be empty at start and grow with inputs to show file upload was a success */}

      </div>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;

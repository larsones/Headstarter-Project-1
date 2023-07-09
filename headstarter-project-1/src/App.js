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
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Resume Parser</h1>
      {/* Other components and content */}
      <button style={styles.button1}>Upload Resume</button> 
      <button style={styles.button1}>Filter Resume</button> 

    </div>
  );
}

export default App;

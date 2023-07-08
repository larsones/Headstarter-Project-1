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
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Resume Parser</h1>
      {/* Other components and content */}
    </div>
  );
}

export default App;

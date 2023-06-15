import React from 'react';
import './App.css';
import linkedinIcon from './assets/linkedin.png';
import githubIcon from './assets/github.png';
import gearIcon from './assets/gear.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="https://www.linkedin.com/in/mlebes/" target="_blank" rel="noreferrer">
          <img src={linkedinIcon} className="App-logo" alt="linkedin" />
        </a>
        <a href="https://github.com/MaximeLeBesnerais" target="_blank" rel="noreferrer">
          <img src={githubIcon} className="App-logo" alt="github" />
        </a>
      </header>
      <div className="App-content">
        <img src={gearIcon} className="App-gear" alt="gear" />
        <h1>Website is not ready yet</h1>
        <p>I am working on it, please come back later.</p>
      </div>
    </div>
  );
}

export default App;

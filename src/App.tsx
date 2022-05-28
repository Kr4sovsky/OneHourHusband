import React from 'react';
import vlad from './vlad.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={vlad} className="App-logo" alt="front" />
	<p>
	  One Hour Husband website is coming soon
        </p>
        <p>
	  For queries contact:
	<a
          className="App-link" >
	  v.mattanelli@seznam.cz</a>
	</p>
          <p>OneHourHusband.ie</p>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import front from './front.svg';
import back from './back.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={front} className="App-logo" alt="front" />
        <img src={back} className="App-logo" alt="back" />
	<p>
	  One Hour Husband website is coming soon
        </p>
        <p>
	  For queries contact:
	<a
          className="App-link" >
	  v.mattanelli@seznam.cz</a>
        >

          <p>OneHourHusband.ie</p>
      </header>
    </div>
  );
}

export default App;

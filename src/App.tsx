import React from 'react';
import vlad from './vlad.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={vlad} alt="front" />
	<br/>
	<p>
	  Website is coming soon
        </p>
	<br/>
          <p><a>OneHourHusband.ie</a></p>
        <p>
	  For queries contact:
	<br/>
	<a
          href = "mailto: v.mattanelli@seznam.cz" >
	  v.mattanelli@seznam.cz</a>
	</p>
      </header>
    </div>
  );
}

export default App;

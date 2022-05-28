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
          <p><a className="App-link">OneHourHusband.ie</a></p>
        <p>
	  For queries contact:
	</p>
	<p>
	<a
	  className="App-link"
          href = "mailto: v.mattanelli@seznam.cz" >
	  v.mattanelli@seznam.cz</a>
	</p>
      </header>
    </div>
  );
}

export default App;

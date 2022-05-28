import React from 'react';
import vlad from './vlad.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p><a className="App-link">OneHourHusband.ie</a></p>
	<p>
	  Website is coming soon
        </p>
 
        <img className="App-logo" src={vlad} alt="front" />
	<br/>
       <p>
	  For queries contact:
	</p>
	<p>
	<a
	  className="App-link"
          href = "mailto: vlad@onehourhusband.ie" >
	  vlad@onehourhusband.ie</a>
	</p>
	<p><a href="tel:+353877778875">087 777 8875</a></p>
	<p> Working Hours </p>
	<p> Mon-Fri 9-18 </p>
      </header>
    </div>
  );
}

export default App;

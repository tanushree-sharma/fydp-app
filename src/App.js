import React, { useState, useEffect } from 'react';
import './App.css';


import {
  BrowserRouter as Router,
  Route,
  } from "react-router-dom";
  import Navbar from './components/Navbar';
  import MainHomepage from './components/mainHomepage';
  import ScrollHompage from './components/scrollHomepage';

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <Router>
    <div className="App">
      <MainHomepage />
      {/* <Navbar /> */}
      <ScrollHompage />
    </div>
    </Router>
  );
}

export default App;

    //<p>The current time is {currentTime}.</p>

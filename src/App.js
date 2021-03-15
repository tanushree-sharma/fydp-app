import React, { useState, useEffect } from 'react';
import './App.css';


import {
  BrowserRouter as Router,
  Route, Switch
  } from "react-router-dom";
  import Navbar from './components/Navbar';
  import MainHomepage from './components/mainHomepage';
  import ScrollTo from './components/scrollTo';
  import StartSaving from './components/startSaving';
  import SolarFAQ from './components/SolarFAQ';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <ScrollTo />

      <Switch>
        <Route path="/start-saving" component={StartSaving}/>
        <Route path="/FAQ" component={SolarFAQ}/>
        <Route path="/" component={MainHomepage}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;

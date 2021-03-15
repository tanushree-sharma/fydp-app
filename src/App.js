import React, { useState, useEffect } from 'react';
import './App.css';
import { HashRouter, Route, Link } from "react-router-dom";


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
    <HashRouter basename='/'>
    <div className="App">
      <Navbar />
      <ScrollTo />

      <Switch>
        <Route exact path="/start-saving" component={StartSaving}/>
        <Route exact path="/FAQ" component={SolarFAQ}/>
        <Route exact path="/" component={MainHomepage}/>
      </Switch>
    </div>
    </HashRouter>
  );
}

export default App;
//    <p>The current time is {currentTime}.</p>

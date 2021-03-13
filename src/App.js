// src/App.js

import React from 'react';
import './App.css';
import Title from './Title';
import POPOSList from './POPOSList';
import Footer from './Footer'
import { HashRouter as Router, Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import About from './About'

function App() {
  return (
    <Router>
    <div className="App">
      <Title />
      <Route exact path="/" component={POPOSList}/>
      <Route path="/about" component={About} />
      < Footer/>
    </div>
    </Router>
  );
}

export default App;

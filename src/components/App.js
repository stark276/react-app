// src/App.js

import React from 'react';
import './App.css';
import Title from './title/Title';
import POPOSList from './poposlist/POPOSList';
import Footer from './footer/Footer'
import { HashRouter as Router, Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import POPOSDetails from './poposdetails/POPOSDetails'
import About from './About/About'

function App() {
  return (
    <Router>
    <div className="App">
      <Title />
      <Route exact path="/" component={POPOSList}/>
      <Route path="/about" component={About} />
      <Route path="/details/:id" component={POPOSDetails} />
      <Footer/>
    </div>
    </Router>
  );
}

export default App;

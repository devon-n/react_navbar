import React from 'react'
import logo from './logo.svg';
import './App.css';

import Home from './Home'
import Contact from './Contact'
import Projects from './Projects'
import About from './About'

import {Route, Routes, Link, Switch} from 'react-router-dom'
import NavBar from './Navbar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path ='/' component={Home} />
        <Route exact path ='/contact' component={Contact} />
        <Route exact path ='/projects' component={Projects} />
        <Route exact path ='/about' component={About} />
      </Routes>
      
    </div>
  );
}

export default App;

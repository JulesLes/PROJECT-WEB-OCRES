import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navigation from './components/Navbar/Navbar';
import Menu from './components/Navbar/Menu';
import HomePage from './Home/Home.js';
import Settings from './Settings/Settings'

function App() {

  return (
    <Router>
       <div className="App">
    
            <div className="navbar" id="mn_menu">
                <Navigation />
            </div>
            <Switch>
        
                <Route path='/Settings'>
                    <Settings/>
                </Route>
            
                <Route path='/'>
                    <HomePage/>
                </Route>
        
            </Switch>
      </div>
   
    </Router>
  );
}

export default App;

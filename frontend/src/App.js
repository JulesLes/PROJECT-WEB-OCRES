import React from 'react';
import './App.css';
import Navigation from './components/Navbar';
import HomePage from './Home/Home.js';

function App() {

  return (
    <div className="App">
      <Navigation />
      <HomePage />
    </div>
  );
}

export default App;

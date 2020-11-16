import React from 'react';
import './App.css';
import Navigation from './components/Navbar';
import HomePage from './Home/Home.js';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <HomePage />
    </div>
  );
}

export default App;

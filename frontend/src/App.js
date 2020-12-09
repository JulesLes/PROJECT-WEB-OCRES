import React, { Component, createContext } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navigation from './components/Navbar/Navbar';
import Menu from './components/Navbar/Menu';
import HomePage from './Home/Home.js';
import Settings from './Settings/Settings';


class App extends React.Component{

constructor(props){
  super(props);
  this.state = {
    countrySearch:'usa',
    city:'Washington DC',
    newsSearch:'us',
    countryCovid: '182',
  }
}

updateState = (e) => { //Country
  this.setState({
    countrySearch: e
  })
}

updateCity = (e) => { //City
  this.setState({
    city: e
  })
}

updateNews = (e) => { //News
  this.setState({
    newsSearch: e
  })
}

updateCovid = (e) => { //Covid_19
  this.setState({
    countryCovid: e
  })
}

render(){
  return (
    <Router>
       <div className="App">

            <div className="navbar" id="mn_menu">
                <Navigation />
            </div>
            <Switch>

                <Route path='/Settings'>
                    <Settings countryChange={this.updateState} cityChange={this.updateCity} newsChange={this.updateNews} covidChange={this.updateCovid}/>
                </Route>

                <Route path='/'>
                    <HomePage countryData={this.state.countrySearch} cityMeteo={this.state.city} countryNewsSearch={this.state.newsSearch} countryCorona={this.state.countryCovid}/>
                </Route>

            </Switch>
      </div>

    </Router>
  );
}
}

export default App;

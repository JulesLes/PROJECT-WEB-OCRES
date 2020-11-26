import React, { Component } from "react";
import './Home.css';
import widdgetBack from "../image/widget.jpg";
import down from "../image/down-chevron.png";
import homepage  from "../image/WidgetBack.jpg";
import {Link} from 'react-scroll';
import SemaineContainer from '../components/meteo/SemaineContainer';
import {useState, useEffect} from 'react';
import NewsWidget from '../components/News/NewsWidget.js';
import Bourse from '../components/Bourse/Bourse.js';
import Country from '../components/Country/Country.js';
import Covid_19 from '../components/Covid19/Covid_19.js';
import Graph from '../components/Graph/Graph.js';
import Graph2 from '../components/Graph2/Graph2.js'
import ResponsiveContainer from "react-responsive-widget";
import Menu from '../components/Navbar/Menu';



export default function Home() {

        const [ville, setVille] = useState('Washington DC')

        const handleChange = (ville) => {
          setVille(ville)
          console.log(ville)
        }

        useEffect(()=>{
          console.log(ville)
        },[ville])

    return (
      <div className="Home">
        <div className="Page" style={{backgroundImage: `url(${homepage})` }} id="home">
            <div className="navbar" id="mn_menu2">
                <Menu />
            </div>
            <p className="Title">Welcome to the future<br />of Widgets</p>
            <Link activeClass="active" to="widget" spy={true} smooth={true}>
              <img className="butn" src={down}/>
            </Link>
        </div>
        <div className="Widget" style={{backgroundImage: `url(${widdgetBack})` }} id="widget">
                
            <ResponsiveContainer xs="450" md="700" lg="1300">
                <div className="app-row" style={{margin: 0, padding: 0}}>
                    
                    <div className="app-col-xs-12 app-col-md-12 app-col-lg-6" style={{padding: 2}}><Graph /></div>
                    <div className="app-col-xs-12 app-col-md-12 app-col-lg-6" style={{padding: 2}}><Covid_19/></div>
                    <div className="app-col-xs-12 app-col-md-6 app-col-lg-3" style={{padding: 2}}><Bourse /></div>
                    <div className="app-col-xs-12 app-col-md-6 app-col-lg-3" style={{padding: 2}}><Country /></div>
    
                </div>

            </ResponsiveContainer>

            <ResponsiveContainer xs="450" md="700" lg="1300">

                <div className="app-row2" style={{margin: 0, padding: 0}}>

                    <div className="app-col-xs-12 app-col-md-12 app-col-lg-6" style={{padding: 2}}><SemaineContainer ville={ville}/></div>
                    <div className="app-col-xs-12 app-col-md-8 app-col-lg-4" style={{padding: 2}}><NewsWidget/></div>
                    <div className="app-col-xs-12 app-col-md-4 app-col-lg-2" style={{padding: 2}}><Graph2 /></div>

                </div>

            </ResponsiveContainer>
            
        </div>
    </div>
    );
}

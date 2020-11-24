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
            <p className="Title">Welcome to the future<br />of Widgets</p>
            <Link activeClass="active" to="widget" spy={true} smooth={true}>
              <img className="butn" src={down}/>
            </Link>
        </div>
        <div className="Widget" style={{backgroundImage: `url(${widdgetBack})` }} id="widget">

              <div className="haut">
                  <div className="hautGauche">
                      <Covid_19/>
                      <div className="hautBas">
                          <Bourse />
                          <div className="Country">
                              <Country />
                          </div>
                      </div>
                  </div>
                  <div className="droite">
                      <Graph />
                  </div>
              </div>

              <div className="bas">
                  <div className="meteo">
                      <SemaineContainer ville={ville}/>
                  </div>
                  <div className="Actualites">
                      <NewsWidget/>
                  </div>
                  <div className="pin">
                      <Graph2 />
                  </div>
              </div>
      </div>
    </div>
    );
}

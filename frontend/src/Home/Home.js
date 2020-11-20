import React, { Component } from "react";
import './Home.css';
import widdgetBack from "../image/widget.jpg";
import down from "../image/down-chevron.png";
import homepage  from "../image/WidgetBack.jpg";
import {Link} from 'react-scroll';
import Rechercher from '../components/meteo/Rechercher';
import SemaineContainer from '../components/meteo/SemaineContainer';
import {useState, useEffect} from 'react';
import NewsWidget from '../components/News/NewsWidget.js';
import Bourse from '../components/Bourse/Bourse.js'

export default function Home() {

        const [ville, setVille] = useState('Paris')

        const handleChange = (ville) => {
          setVille(ville)
          console.log(ville)
        }

        useEffect(()=>{
          console.log(ville)
        },[ville])

    return (
      <div className="Home">
        <div class="Page" style={{backgroundImage: `url(${homepage})` }} id="home">
            <p className="Title">Welcome to the future<br />of Widgets</p>
            <Link activeClass="active" to="widget" spy={true} smooth={true}>
              <img className="butn" src={down}/>
            </Link>
        </div>
        <div class="Widget" style={{backgroundImage: `url(${widdgetBack})` }} id="widget">
            <Rechercher parentCallback={handleChange}/>
            <SemaineContainer ville={ville}/>
            <NewsWidget/>
        </div>
      </div>
    );
}

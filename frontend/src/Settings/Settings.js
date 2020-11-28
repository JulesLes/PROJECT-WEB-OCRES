import React, { useContext, createContext, useState, useEffect } from "react";
import homepage  from "../image/WidgetBack.jpg";
import Menu from '../components/Navbar/Menu';
import NameForm from './NameForm';
import SelectForm from './SelectForm';
import './Settings.css';
import WeatherWidget from "../image/Settings/WeatherWidget.png";
import CountryWidget from "../image/Settings/CountryWidget.png";
import Covid19Widget from "../image/Settings/Covid19Widget.png";
import NewsWidget from "../image/Settings/NewsWidget.png";
import ResponsiveContainer from "react-responsive-widget";

export default function Settings() {
    
    const [ville, setVille] = useState('Washington DC')

        const handleChange = (ville) => {
          setVille(ville)
          console.log(ville)
        }

        useEffect(()=> {
          console.log(ville)
        },[ville])
    
    return (
        <div className="Settings" id="Settings">

            <div className="navbar" id="mn_menu2">

                <Menu />

            </div>
        
            <div className="Page2" style={{backgroundImage: `url(${homepage})` }}>

                <div className="Settings">

                    <div className="Titre">

                        <h1 className="Title">Settings</h1>

                    </div>

                    <ResponsiveContainer xs="450" md="700" lg="1300">

                        <div className="app-row" style={{margin: 0, padding: 0}}>


                            <div className="app-col-xs-12 app-col-md-6 app-col-lg-6" style={{padding: 2}}>

                                <div className="WeatherWidget">
                                    <img className="image" src={WeatherWidget}/>
                                    <h6>Weather Widget</h6>
                                    <NameForm setVille={setVille}/>
                                </div>

                            </div>

                            <div className="app-col-xs-12 app-col-md-6 app-col-lg-6" style={{padding: 2}}>

                                <div className="CountryWidget">
                                    <img className="image" src={CountryWidget}/>
                                    <h6>Country Widget</h6>
                                    <NameForm />
                                </div>

                            </div>

                        </div>

                        <div className="app-row" style={{margin: 0, padding: 0}}>

                            <div className="app-col-xs-12 app-col-md-6 app-col-lg-6" style={{padding: 2}}>

                                <div className="NewsWidget">
                                    <img className="image" src={NewsWidget}/>
                                    <h6>News Widget</h6>
                                    <NameForm />
                                </div>

                            </div>

                            <div className="app-col-xs-12 app-col-md-6 app-col-lg-6" style={{padding: 2}}>

                                <div className="PieWidget">
                                    <img className="image" src={Covid19Widget}/>
                                    <h6>Pie Widget</h6>
                                    <NameForm />
                                </div>

                            </div>

                        </div>

                        <div className="app-row" style={{margin: 0, padding: 0}}>
                            
                            <div className="app-col-xs-12 app-col-md-12 app-col-lg-12" style={{padding: 2}}>

                                <div className="Covid19Widget">
                                    <img className="image" src={Covid19Widget}/>
                                    <h6>Covid-19 Widget</h6>
                                    <SelectForm />
                                </div>

                            </div>

                        </div>

                    </ResponsiveContainer>

                 </div>

            </div>

        </div>
    );
}

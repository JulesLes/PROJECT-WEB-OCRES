import React, { useContext, createContext, useState, useEffect } from "react";
import homepage  from "../image/WidgetBack.jpg";
import Menu from '../components/Navbar/Menu';
import MeteoForm from './SearchBars/MeteoForm';
import ClassForm from './SearchBars/ClassForm';
import SelectFormNews from './SearchBars/SelectFormNews';
import SelectFormCovid from './SearchBars/SelectFormCovid';
import './Settings.css';
import WeatherWidget from "../image/Settings/WeatherWidget.png";
import CountryWidget from "../image/Settings/CountryWidget.png";
import Covid19Widget from "../image/Settings/Covid19Widget.png";
import NewsWidget from "../image/Settings/NewsWidget.png";
import ResponsiveContainer from "react-responsive-widget";
import CountryForm from './SearchBars/CountryForm';
import { Container, Row, Col } from 'reactstrap';

export default class Settings extends React.Component {

    constructor(props){
      super(props);
      this.state = {

      }
    }

    render(){
        return (
            <div className="Settings" id="Settings">

                {/*Bar de Navigation*/}
                <div className="navbar" id="mn_menu2">
                    <Menu />
                </div>

                {/*Page Settings*/}
                <div className="Page2" style={{backgroundImage: `url(${homepage})` }}>

                    <div className="Settings">

                        <div className="Titre">

                            <h1 className="Title">Settings</h1>

                        </div>

                        <ResponsiveContainer xs="450" md="700" lg="1300">

                            <div className="app-row" style={{margin: 0, padding: 0}}>

                              {/*Affichage de la Searchbar Meteo*/}
                                <div className="app-col-xs-12 app-col-md-6 app-col-lg-6" style={{padding: 2}}>

                                    <div className="WeatherWidget">
                                        <img className="image" src={WeatherWidget}/>
                                        <h6>Weather Widget</h6>
                                      <MeteoForm parentCallback={this.props.cityChange}/>
                                    </div>

                                </div>

                                {/*Affichage de la Searchbar pour un pays*/}
                                <div className="app-col-xs-12 app-col-md-6 app-col-lg-6" style={{padding: 2}}>

                                    <div className="CountryWidget">
                                        <img className="image" src={CountryWidget}/>
                                        <h6>Country Widget</h6>
                                        <CountryForm parentCallback={this.props.countryChange}/>
                                    </div>

                                </div>

                            </div>

                            <div className="app-row" style={{margin: 0, padding: 0}}>

                                {/*Affichage de la Searchbar pour les News*/}
                                <div className="app-col-xs-12 app-col-md-6 app-col-lg-6" style={{padding: 2}}>

                                    <div className="NewsWidget">
                                        <img className="image" src={NewsWidget}/>
                                        <h6>News Widget</h6>
                                        <SelectFormNews parentCallback={this.props.newsChange}/>
                                    </div>

                                </div>

                                {/*Affichage de la Searchbar pour les stats du covid*/}
                                <div className="app-col-xs-12 app-col-md-6 app-col-lg-6" style={{padding: 2}}>

                                    <div className="Covid19Widget">
                                        <img className="image" src={Covid19Widget}/>
                                        <h6>Covid-19 Widget</h6>
                                        <SelectFormCovid parentCallback={this.props.covidChange}/>
                                    </div>

                                </div>

                            </div>

                            <div className="app-row" style={{margin: 0, padding: 0}}>

                                <div className="app-col-xs-12 app-col-md-12 app-col-lg-12" style={{padding: 2}}>

                                    {/*Affichage de la Searchbar pour le graph de la classe*/}
                                    <div className="PieWidget">
                                        <img className="image" src={Covid19Widget}/>
                                        <h6>Class data</h6>
                                              <br/>
                                              <ClassForm />
                                    </div>

                                </div>

                            </div>

                        </ResponsiveContainer>

                     </div>

                </div>

            </div>
        );
    }
}

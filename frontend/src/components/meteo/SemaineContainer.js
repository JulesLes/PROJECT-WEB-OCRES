import React from 'react';
import DayCard from './Daycard';
import MeteoForm from '../../Settings/SearchBars/MeteoForm';
import {useEffect, useState} from 'react';
import './Meteo.css';

export default (props) => {

  const[fullData, setFullData] = useState([])

  //Permet le chargement des données de l'API
  const func = () => {
    const API_URL = "https://api.openweathermap.org/data/2.5/forecast/daily";
    const API_KEY = "4081444b7b90198136fefe6ed4ccf35b";

    //Appel les 3 prochains jours cnt=3
    const weatherURL = `${API_URL}?q=${props.ville}&cnt=3&units=metric&appid=${API_KEY}`

    fetch(weatherURL)
      .then(res => res.json())
      .then(data => {
      setFullData(data.list)
    })
  }

  //Permet la création d'une carte d'un jour de la semaine
  const formatDayCards = () => {
    return fullData.map((reading, index) => <DayCard reading={reading} key={index} />)
  }

  useEffect(() => {
    func()
  },[props.ville])

  return (
    <div className="Semaine">

        {/*Affichage de la ville envoyée*/}
        <h5>{props.ville} weather forecast</h5>
        <br/>
            <div className="row justify-content-center">

              {/*Appel de Daycard.js et des 3 jours de la semaine*/}
              {formatDayCards()}
            </div>
    </div>
  )
}

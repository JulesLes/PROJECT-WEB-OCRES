import React from 'react';
import DayCard from './Daycard';
import NameForm from '../../Settings/SearchBars/NameForm';
import {useEffect, useState} from 'react';
import './Meteo.css';

export default (props) => {

  const[fullData, setFullData] = useState([])

  const func = () => {
    const API_URL = "https://api.openweathermap.org/data/2.5/forecast/daily";
    const API_KEY = "4081444b7b90198136fefe6ed4ccf35b";
    const weatherURL = `${API_URL}?q=${props.ville}&cnt=3&units=metric&appid=${API_KEY}`

    fetch(weatherURL)
      .then(res => res.json())
      .then(data => {
      setFullData(data.list)
    })
  }

  const formatDayCards = () => {
    return fullData.map((reading, index) => <DayCard reading={reading} key={index} />)
  }

  useEffect(() => {
    func()
  },[props.ville])

  return (
    <div className="Semaine">
        <h5>{props.ville} weather forecast</h5>
        <br/>
            <div className="row justify-content-center">
              
              {/*Appel de Daycard.js*/}
              {formatDayCards()}
            </div>
    </div>
  )
}

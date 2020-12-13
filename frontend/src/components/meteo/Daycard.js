import React from 'react';
import dayjs from 'dayjs';
import { Container, Row, Col } from 'reactstrap';
import './Meteo.css';


const DayCard = ({ reading }) => {

  //Régleage de la date
  let newDate = new Date();
  const weekday = reading.dt * 1000
  newDate.setTime(weekday)

  //Chargement de l'icone nuage ou soleil ou ...
  const imgURL = `http://openweathermap.org/img/wn/${reading.weather[0].icon}@2x.png`

  return (

      <div class="Container">

        <div class="Jour">

            {/*affichage format date*/}
            {dayjs(newDate).format('D MMMM')}
            <h3>{dayjs(newDate).format('dddd')}</h3>
            <br/>

            {/*affichage logo soleil ou autre*/}
            <img src={imgURL}></img>
            <br/>
            <br/>

            {/*affichage de la temperature et de la description */}
            <h2>{Math.round(reading.temp.day)} °C </h2>
            <p class="Text">{reading.weather[0].description}</p>

        </div>
    </div>
  )
}

export default DayCard;

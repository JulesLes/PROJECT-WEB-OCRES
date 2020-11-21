import React from 'react';
import dayjs from 'dayjs';
import { Container, Row, Col } from 'reactstrap';
import './Meteo.css';


const DayCard = ({ reading }) => {
  let newDate = new Date();
  const weekday = reading.dt * 1000
  newDate.setTime(weekday)

  const imgURL = `http://openweathermap.org/img/wn/${reading.weather[0].icon}@2x.png`

  return (
      
      <div class="Container">

        <div class="Jour">

            {dayjs(newDate).format('D MMMM')}
            <h3>{dayjs(newDate).format('dddd')}</h3>
            <img src={imgURL}></img>
            <h2>{Math.round(reading.temp.day)} °C </h2>
            <p class="Text">{reading.weather[0].description}</p>

        </div>
    </div>
  )
}

export default DayCard;

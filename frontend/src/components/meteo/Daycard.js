import React from 'react';
import dayjs from 'dayjs'


const DayCard = ({ reading }) => {
  let newDate = new Date();
  const weekday = reading.dt * 1000
  newDate.setTime(weekday)

  const imgURL = `http://openweathermap.org/img/wn/${reading.weather[0].icon}@2x.png`
  console.log(reading)

  return (
    <div className="col-sm-2">
      <div className="card">
        <h3 className="card-title">{dayjs(newDate).format('dddd')}</h3>
        <p className="text-muted">{dayjs(newDate).format('D MMMM')}</p>
        <img src={imgURL}></img>
        <h2>{Math.round(reading.temp.day)} °C</h2>
        <div className="card-body">
        <p className="card-text">{reading.weather[0].description}</p>
        </div>
      </div>
    </div>
  )
}

export default DayCard;

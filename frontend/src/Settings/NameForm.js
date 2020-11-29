import React, { useContext, createContext, useState } from "react";
import {Context} from '../Context';
import './Settings.css';

export default (props) => {

  const [value, setValue] = useState('')
  const {city, setCity} = useContext(Context)

  const {country, setCountry} = useContext(Context)

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleSubmit = (event) => {
    alert('You have submitted : ' + value);
    event.preventDefault();
  }

  const handleClick = (event) => {
    event.stopPropagation()
    setCity(value)
    console.log(value)
    console.log(country)
  }

  return (
      <form onSubmit={handleSubmit}>

          <label>
              <input type="text" placeholder="Saisissez votre recherche" onChange={handleChange} />
          </label>
          <br />

          <input type="submit" value="Submit" onClick={handleClick}/>
      </form>
  );
}

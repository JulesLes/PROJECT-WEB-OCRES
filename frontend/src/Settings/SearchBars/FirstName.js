//import React, { useContext, createContext, useState } from "react";
//import '../Settings.css';
//
//export default (props) => {
//
//  const handleChange = (event) => {
//    setValue(event.target.value)
//  }
//
//  const handleSubmit = (event) => {
//    alert('You have submitted : ' + value);
//    event.preventDefault();
//  }
//
//  const handleClick = (event) => {
//    event.stopPropagation()
//    setCity(value)
//    console.log('Context city from name form')
//    console.log(value)
//    console.log(city)
//  }
//
//  return (
//      <form onSubmit={handleSubmit}>
//          <a className="info">First Name</a>
//          <label>
//              <input type="text" placeholder="Saisissez votre recherche" onChange={handleChange} />
//          </label>
//      </form>
//  );
//}

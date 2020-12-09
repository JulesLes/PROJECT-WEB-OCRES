import React, { useContext, createContext, useState } from "react";
import {Context} from '../Context';
import './Settings.css';

export default class NameForm extends React.Component {

  // const [value, setValue] = useState('')
  // const {city, setCity} = useContext(Context)
  //
  // const handleChange = (event) => {
  //   setValue(event.target.value)
  // }
  //
  // const handleSubmit = (event) => {
  //   alert('You have submitted : ' + value);
  //   event.preventDefault();
  // }
  //
  // const handleClick = (event) => {
  //   event.stopPropagation()
  //   setCity(value)
  //   console.log(value)
  // }

  constructor(props){
    super(props);
    this.state = {
      nom:'Washington DC',
    }
  }

  rechercher(e) {
    this.setState({nom: e.target.value})
  }
render(){
  return (
    <div>
      <input type="text" placeholder="Saisissez votre recherche" onChange={(e) => this.rechercher(e)} value={this.state.nom}/>
      <button type="submit" value="Submit" onClick={() => this.props.parentCallback(this.state.nom)}/>
    </div>
  );
}
}

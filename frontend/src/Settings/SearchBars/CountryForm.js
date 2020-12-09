import React, { useContext, createContext, useState } from "react";
import '../Settings.css';

export default class CountryForm extends React.Component {

  // const [value, setValue] = useState('')
  //
  // const {country, setCountry} = useContext(Context)
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
  //   setCountry(value)
  //   console.log(value)
  //   console.log(country)
  // }
  constructor(props){
    super(props);
    this.state = {
      nom:'',
    }
  }

  rechercher(e) {
    this.setState({nom: e.target.value})
  }

  render() {
  return (
    <div>
      <input type="text" placeholder="Saisissez votre recherche" onChange={(e) => this.rechercher(e)} value={this.state.nom}/>
      <br />
      <input type="submit" value="Submit" onClick={() => this.props.parentCallback(this.state.nom)}/>
    </div>

  );
}
}

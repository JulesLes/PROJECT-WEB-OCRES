import React, { useContext, createContext, useState } from "react";
import '../Settings.css';

export default class NameForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      nom:'',
    }
  }

  rechercher(e) {
    this.setState({nom: e.target.value})
  }
    
render(){
  return (
    <div>
      <input type="text" placeholder="Saisissez votre recherche" onChange={(e) => this.rechercher(e)} value={this.state.nom}/>
      <br />
      <input type="submit" value="Submit" onClick={() => this.props.parentCallback(this.state.nom)}/>
    </div>
  );
}
}

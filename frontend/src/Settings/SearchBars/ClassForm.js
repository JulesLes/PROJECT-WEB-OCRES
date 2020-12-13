import React, { useContext, createContext, useState } from "react";
import '../Settings.css';
import axios from 'axios';
import { ListGroup, Form, } from 'react-bootstrap';
import './ClassForm.css';
import ResponsiveContainer from "react-responsive-widget";

const URL = 'http://localhost:3000/api';

export default class ClassForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      prenom:'',
      nom:'',
      etat:'',
      id:'',
      data:undefined,
    }
      this.stockerEtat = this.stockerEtat.bind(this);
  }

  // Creer un nouvel etudiant dans la BDD
  newStudent(){
      window.location.reload(false);
      return axios.post(URL, {nom: this.state.nom, prenom: this.state.prenom,etat: this.state.etat});
  }

  // Modifier un etudiant dans la BDD
  modifyStudent(){
      window.location.reload(false);
      return axios.put(`http://localhost:3000/api/${this.state.id}`, { nom: this.state.nom, prenom: this.state.prenom,etat: this.state.etat});
  }

  // Supprimer un etudiant dans la BDD
  deleteStudent(){
      window.location.reload(false);
      return axios.delete(`http://localhost:3000/api/${this.state.id}`);
  }

  // Stocker le prenom dans le programme
  stockerPrenom(e) {
    this.setState({prenom: e.target.value});
  }

  // Stocker le nom dans le programme
  stockerNom(e) {
    this.setState({nom: e.target.value});
  }

  // Stocker l'etat sain ou contamine dans le programme
  stockerEtat(e) {
    this.setState({etat: e.target.value});
  }

  // Stocker l'ID dans le programme
  stockerId(e) {
    this.setState({id: e.target.value});
  }

  //Appel le chargement des données de l'API
  componentDidMount() {
      this.loadNews();
  }

  //Permet le chargement des données de l'API
  loadNews() {
      axios.get('http://localhost:3000/api')
          .then(res => {
              const test = res.data;
              this.setState({data: test}, () => {});
              console.log(this.state.data);
          });
  }

  render() {
  return (
    <div>
      <div className="app-row" style={{margin: 0, padding: 0}}>

        <div className="app-col-xs-12 app-col-md-6 app-col-lg-3">

              {/*Searchbar prenom*/}
              <a className="info">First Name</a>
              <input type="text" placeholder="Saisissez votre recherche" onChange={(e) => this.stockerPrenom(e)} value={this.state.prenom}/>

        </div>

        <div className="app-col-xs-12 app-col-md-6 app-col-lg-3">

              {/*Searchbar nom*/}
              <a className="info">LastName</a>
              <input type="text" placeholder="Saisissez votre recherche" onChange={(e) => this.stockerNom(e)} value={this.state.nom}/>

        </div>

        <div className="app-col-xs-12 app-col-md-6 app-col-lg-3">

              {/*Searchbar ID*/}
              <a className="info">ID</a>
              <input type="text" placeholder="Saisissez votre recherche" onChange={(e) => this.stockerId(e)} value={this.state.id}/>

        </div>

        <div className="app-col-xs-12 app-col-md-6 app-col-lg-3">

            {/*Searchbar etat*/}
            <form>
              <a className="info">Statut</a>
              <label>
                <select onChange={(e) =>this.stockerEtat(e)} value={this.state.etat} >
                  <option value="Vide"></option>
                  <option value="1">Confirmed</option>
                  <option value="0">Not Confirmed</option>
                </select>
              </label>
            </form>

        </div>
    </div>

    <div className="app-row" style={{margin: 0, padding: 0}}>

      {/*Bouton creer*/}
      <div className="app-col-xs-12 app-col-md-4 app-col-lg-4">
        <input type="submit" value="Submit" onClick={() => this.newStudent()}/>
      </div>

      {/*Bouton Modifier*/}
      <div className="app-col-xs-12 app-col-md-4 app-col-lg-4">
        <input type="submit" value="Modify" onClick={() => this.modifyStudent()}/>
      </div>

      {/*Bouton Supprimer*/}
      <div className="app-col-xs-12 app-col-md-4 app-col-lg-4">
        <input type="submit" value="Delete" onClick={() => this.deleteStudent()}/>
      </div>
    </div>

<ResponsiveContainer xs="450" md="700" lg="1300">
    <div className="AffichageBDD">

        <div className="app-row" style={{margin: 0, padding: 0}}>
          {this.state.data ? this.state.data.map((element) => (

          <div>

              <div className="app-col-xs-12 app-col-md-6 app-col-lg-3">
                  <div className="test">
                    <b>ID: </b>
                    <span>&nbsp;&nbsp;</span>
                    <p>{element._id} </p>
                    <span>&nbsp;&nbsp;</span>
                  </div>
              </div>
              <div className="app-col-xs-12 app-col-md-6 app-col-lg-3">
                  <div className="test">
                    <p>First name: </p>
                    <span>&nbsp;&nbsp;</span>
                    <p>{element.prenom} </p>
                    <span>&nbsp;&nbsp;</span>
                  </div>
              </div>
              <div className="app-col-xs-12 app-col-md-6 app-col-lg-3">
                  <div className="test">
                    <p>Surname: </p>
                    <span>&nbsp;&nbsp;</span>
                    <p>{element.nom} </p>
                    <span>&nbsp;&nbsp;</span>
                  </div>
                  </div>
              <div className="app-col-xs-12 app-col-md-6 app-col-lg-3">
                  <div className="test">
                      <p>Status: </p>
                      <span>&nbsp;&nbsp;</span>
                      <p>{element.etat} </p>
                    </div>
              </div>
          </div>

        )):""}
  </div>
  </div>
</ResponsiveContainer>
</div>
  );
}
}

import React, {Component} from 'react';
import './Country.css';
import { Container, Row, Col } from 'reactstrap';
import {IntlProvider, FormattedNumber} from 'react-intl';

export default class Country extends Component {
  state = {
      country: null,
      toDisplay:''
  };

  //Permet le chargement des données de l'API
  componentDidMount() {
      var url = `https://restcountries.eu/rest/v2/name/${this.props.pays}?fullText=true`;
      this.loadNews(url);
  }

  loadNews(url) {
      fetch(url)
          .then(response => response.json())
          .then(data => {
              this.setState({country: data});
              this.setState({toDisplay: data[0]})
          });
  }

  render(){
    const {toDisplay} = this.state;
    return (
        <div className="widgetCountry">
            <h5>Country data</h5>
            <Row className="Titre">
                <Col xs="4">
                    <b>Population</b>
                    <br/>
                    
                    {/*Affichage des données avec séparation des nombres*/}
                    <IntlProvider locale='fr'>
                      <FormattedNumber value={toDisplay['population']} />
                    </IntlProvider>
                    <br/>
                    <br/>
        
                    {/*Affichage de la Capitale*/}
                    <b>Capital</b>
                    <br/>
                    <div className="number">{toDisplay['capital']}</div>

                </Col>
                
                {/*Affichage du drapeau*/}
                <Col xs="4">
                    <b>Flag</b>
                    <br/>
                    <img className="image" src={toDisplay['flag']} alt="news img"/>
                    <br/>
                </Col>
        
                {/*Affichage de la Région*/}
                <Col xs="4">
                    <b>Region</b>
                    <br/>
                    <div className="number">{toDisplay['region']}</div>
                    <br/>
        
                    {/*Affichage de la Superficie*/}
                    <b>Area</b>
                    <br/>
                    <IntlProvider locale='fr'>
                      <FormattedNumber value={toDisplay['area']} />
                      <b> Km</b>
                    </IntlProvider>
                </Col>
            </Row>

        </div>
    );
  }
}

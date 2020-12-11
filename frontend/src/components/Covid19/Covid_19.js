import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import newConfirmed  from "../../image/Covid/NewConfirmed.png";
import totalConfirmed  from "../../image/Covid/TotalConfirmed.png";
import totalDeath  from "../../image/Covid/TotalDeath.png";
import totalCovered from "../../image/Covid/TotalRecovered.png";
import './Covid_19.css';
import {IntlProvider, FormattedNumber} from 'react-intl';
import ResponsiveContainer from "react-responsive-widget";

export default class Covid_19 extends React.Component {

  state = {
      Country: null,
      toDisplay: ''
  };

  //Permet le chargement des données de l'API
  componentDidMount() {
      var url = `https://api.covid19api.com/summary`;
      this.loadNews(url);
  }

  loadNews(url) {
      fetch(url)
          .then(response => response.json())
          .then(data => {
              this.setState({Country: data});
              this.setState({toDisplay: data['Countries'][this.props.paysCovid]})//59 France 181 USA
          });
  }

  render(){
    const {toDisplay} = this.state;
    return (
        <div className="widgetCovid">
            <h5>Covid-19</h5>
            <ResponsiveContainer>
                <Row className="Titre">
                    <Col xs="6" sm="3">
        
                        {/*Affichage des nouveaux cas*/}
                        <b>New</b>
                        <br/>
                        <br/>
                        <img className="logo" src={newConfirmed}/>
                        <br/>
                        <br/>
                        <IntlProvider locale='fr'>
                          <FormattedNumber value={toDisplay['NewConfirmed']} />
                        </IntlProvider>
                    </Col>
        
                    <Col xs="6" sm="3">
                        
                        {/*Affichage des cas confirmés total*/}
                        <b>Confirmed</b>
                        <br/>
                        <br/>
                        <img className="logo" src={totalConfirmed}/>
                        <br/>
                        <br/>
                        <IntlProvider locale='fr'>
                          <FormattedNumber value={toDisplay['TotalConfirmed']} />
                        </IntlProvider>
                    </Col>
                    
                        <Col xs="6" sm="3">
        
                        {/*Affichage des personnes décédées*/}
                        <b>Deaths</b>
                        <br/>
                        <br/>
                        <img className="logo" src={totalDeath}/>
                        <br/>
                        <br/>
                        <IntlProvider locale='fr'>
                          <FormattedNumber value={toDisplay['TotalDeaths']} />
                        </IntlProvider>
                    </Col>
        
                    <Col xs="6" sm="3">
                
                        {/*Affichage des personnes guéries*/}
                        <b>Recovered</b>
                        <br/>
                        <br/>
                        <img className="logo" src={totalCovered }/>
                        <br/>
                        <br/>
                        <IntlProvider locale='fr'>
                          <FormattedNumber value={toDisplay['TotalRecovered']} />
                        </IntlProvider>
                    </Col>
                </Row>
            </ResponsiveContainer>
        </div>
    );
  }
}

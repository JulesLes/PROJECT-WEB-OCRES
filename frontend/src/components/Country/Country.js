import React, {Component} from 'react';
import './Country.css';
import { Container, Row, Col } from 'reactstrap';
import {IntlProvider, FormattedNumber} from 'react-intl';

export default class Country extends Component {
  state = {
      country: null,
      toDisplay:''
  };

  componentDidMount() {
      var url = `https://restcountries.eu/rest/v2/name/usa?fullText=true`;
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

  // numberWithSpaces(x) {
  //   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  // }

  render(){
    const {toDisplay} = this.state;
    return (
        <div className="widgetCountry">
            <h5>Country data</h5>
            <Row className="Titre">
                <Col sm="4">
                    <b>Population</b>
                    <br/>
                    <IntlProvider locale='fr'>
                      <FormattedNumber value={toDisplay['population']} />
                    </IntlProvider>
                    <br/>
                    <br/>
                    <b>Capital</b>
                    <br/>
                    <div className="number">{toDisplay['capital']}</div>

                </Col>
                <Col sm="4">
                    <b>Flag</b>
                    <br/>
                    <img className="image" src={toDisplay['flag']} alt="news img"/>
                    <br/>
                </Col>
                <Col sm="4">
                    <b>Region</b>
                    <br/>
                    <div className="number">{toDisplay['region']}</div>
                    <br/>
                    <b>Area</b>
                    <br/>
                    <IntlProvider locale='fr'>
                      <FormattedNumber value={toDisplay['area']} />
                      <a> Km</a>
                    </IntlProvider>
                </Col>
            </Row>

        </div>
    );
  }
}

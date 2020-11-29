import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import newConfirmed  from "../../image/Covid/NewConfirmed.png";
import totalConfirmed  from "../../image/Covid/TotalConfirmed.png";
import totalDeath  from "../../image/Covid/TotalDeath.png";
import totalCovered from "../../image/Covid/TotalRecovered.png";
import './Covid_19.css';
import {IntlProvider, FormattedNumber} from 'react-intl';

export default class Covid_19 extends React.Component {

  state = {
      Country: null,
      toDisplay: ''
  };

  componentDidMount() {
      var url = `https://api.covid19api.com/summary`;
      this.loadNews(url);
  }

  loadNews(url) {
      fetch(url)
          .then(response => response.json())
          .then(data => {
              this.setState({Country: data});
              this.setState({toDisplay: data['Countries'][59]})
          });
  }

  render(){
    const {toDisplay} = this.state;
    return (
        <div className="widgetCovid">
            <h5>Covid-19</h5>
            <Row className="Titre">
                <Col sm="3">
                    <b>New confirmed</b>
                    <br/>
                    <img className="logo" src={newConfirmed}/>
                    <br/>
                    <IntlProvider locale='fr'>
                      <FormattedNumber value={toDisplay['NewConfirmed']} />
                    </IntlProvider>
                </Col>
                <Col sm="3">
                    <b>Total confirmed</b>
                    <br/>
                    <img className="logo" src={totalConfirmed}/>
                    <br/>
                    <IntlProvider locale='fr'>
                      <FormattedNumber value={toDisplay['TotalConfirmed']} />
                    </IntlProvider>
                </Col>
                <Col sm="3">
                    <b>Total deaths</b>
                    <br/>
                    <img className="logo" src={totalDeath}/>
                    <br/>
                    <IntlProvider locale='fr'>
                      <FormattedNumber value={toDisplay['TotalDeaths']} />
                    </IntlProvider>
                </Col>
                <Col sm="3">
                    <b>Total recovered</b>
                    <br/>
                    <img className="logo" src={totalCovered }/>
                    <br/>
                    <IntlProvider locale='fr'>
                      <FormattedNumber value={toDisplay['TotalRecovered']} />
                    </IntlProvider>
                </Col>
            </Row>

        </div>
    );
  }
}

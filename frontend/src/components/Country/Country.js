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

  // numberWithSpaces(x) {
  //   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  // }

  render(){
    const {toDisplay} = this.state;
    return (
        <div className="widgetCountry">
            <h5>Country data</h5>
            <Row className="Titre">
                <Col xs="4">
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
                <Col xs="4">
                    <b>Flag</b>
                    <br/>
                    <img className="image" src={toDisplay['flag']} alt="news img"/>
                    <br/>
                </Col>
                <Col xs="4">
                    <b>Region</b>
                    <br/>
                    <div className="number">{toDisplay['region']}</div>
                    <br/>
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






// import React, {Component} from 'react';
// import './Country.css';
// import { Container, Row, Col } from 'reactstrap';
// import {IntlProvider, FormattedNumber} from 'react-intl';
//
// export default class Country extends Component {
//
//   constructor(props){
//     super(props);
//     this.state = {
//       country: null,
//       toDisplay:''
//     }
//   }
//
//   componentDidMount() {
//       var url = `https://restcountries.eu/rest/v2/name/${this.props.country}?fullText=true`;
//       console.log(this.props.country);
//       this.loadNews(url);
//   }
//
//   loadNews(url) {
//       fetch(url)
//           .then(response => response.json())
//           .then(data => {
//               this.setState({country: data});
//               this.setState({toDisplay: data[0]})
//           });
//   }
//
//   render(){
//     return (
//         <div className="widgetCountry">
//             <h5>Country data</h5>
//             <Row className="Titre">
//                 <Col xs="4">
//                     <b>Population</b>
//                     <br/>
//                     <IntlProvider locale='fr'>
//                       <FormattedNumber value={this.state['population']} />
//                     </IntlProvider>
//                     <br/>
//                     <br/>
//                     <b>Capital</b>
//                     <br/>
//                     <div className="number">{this.state['capital']}</div>
//
//                 </Col>
//                 <Col xs="4">
//                     <b>Flag</b>
//                     <br/>
//                     <img className="image" src={this.state['flag']} alt="news img"/>
//                     <br/>
//                 </Col>
//                 <Col xs="4">
//                     <b>Region</b>
//                     <br/>
//                     <div className="number">{this.state['region']}</div>
//                     <br/>
//                     <b>Area</b>
//                     <br/>
//                     <IntlProvider locale='fr'>
//                       <FormattedNumber value={this.state['area']} />
//                       <b> Km</b>
//                     </IntlProvider>
//                 </Col>
//             </Row>
//
//         </div>
//     );
//   }
// }

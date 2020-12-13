import React, { PureComponent } from 'react';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,} from 'recharts';
import "./Graph.css";
import Moment from 'react-moment';
import {IntlProvider, FormattedNumber, FormattedDate} from 'react-intl';
import moment from 'moment';

//faciliter la lecture des nombres (Permet d'afficher les nombres avec un espace tout les 3)
const DataFormater = (number) => {
    if(number > 1000000000){
      return (number/1000000000).toString() + 'B';
    }else if(number > 1000000){
      return (number/1000000).toString() + 'M';
    }else if(number > 1000){
      return (number/1000).toString() + 'K';
    }else{
      return number.toString();
    }
}

//format de la date
const formatXAxis = (tickItem) => {
  return moment(tickItem).format('DD MMM')
}

export default class Example extends PureComponent {

  // chargement du recharts
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/Lrffmzfc/';

  state = {
      data:[]
  };

  //Appel le chargement des données de l'API
  componentDidMount() {
      var url = `https://api.covidtracking.com/v1/us/daily.json`;
      this.loadNews(url);
  }

  //Permet le chargement des données de l'API
  loadNews(url) {
      fetch(url)
          .then(response => response.json())
          .then(res => {
              this.setState({data: res});
          });
  }

  render() {

    return (
      <div className="widgetGraph">
          <h5>Hospitalizations due to Covid-19</h5>
            <div className="graph" id="grph">
                <ResponsiveContainer width="95%" height={275}>

                      {/*Affichage des données avec Recharts*/}
                      <AreaChart className="test" width={600} height={275} data={this.state.data.reverse()} margin={{ top: 10, right: 30, left: 0, bottom: 0,}}>
                        <XAxis dataKey="date" stroke="#fff"/>
                        <YAxis stroke="#fff" tickFormatter={DataFormater}/>

                        {/*Legende flotante en passant la sourie*/}
                        <Tooltip labelFormatter={() => undefined} formatter={(okay) => [new Intl.NumberFormat('fr').format(okay), undefined]}/>
                        <Area type="monotone" dataKey="hospitalizedCurrently" stroke="rgba(90, 22, 14, 1)" fill="#E53824" />
                      </AreaChart>

                </ResponsiveContainer>
          </div>
      </div>
    );
  }
}

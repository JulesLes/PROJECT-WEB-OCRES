import React, { PureComponent } from 'react';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,} from 'recharts';
import "./Graph.css";
import Moment from 'react-moment';
import {IntlProvider, FormattedNumber, FormattedDate} from 'react-intl';




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

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/Lrffmzfc/';

  state = {
      data:[]
  };

  componentDidMount() {
      var url = `https://api.covidtracking.com/v1/us/daily.json`;
      this.loadNews(url);
  }


  loadNews(url) {
      fetch(url)
          .then(response => response.json())
          .then(res => {
              this.setState({data: res});
          });
  }

  render() {
    // const date = Date(this.state.data.date);
    // const formattedDate = Moment(date).format("LL");
    return (
      <div className="widgetGraph">
          <h5>Hospitalizations due to Covid-19</h5>
            <div className="graph" id="grph">
                <ResponsiveContainer width="95%" height={275}>

                      <AreaChart className="test" width={600} height={275} data={this.state.data.reverse()} margin={{ top: 10, right: 30, left: 0, bottom: 0,}}>
                        <XAxis dataKey="date" stroke="#fff" />
                        <YAxis stroke="#fff" tickFormatter={DataFormater}/>
                        <Tooltip labelFormatter={() => undefined} formatter={(okay) => [new Intl.NumberFormat('fr').format(okay), undefined]} />
                        <Area type="monotone" dataKey="hospitalizedCurrently" stroke="#000" fill="#ffff00" />
                      </AreaChart>

                </ResponsiveContainer>
          </div>
      </div>
    );
  }
}

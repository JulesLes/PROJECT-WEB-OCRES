import axios from 'axios';
import React, { PureComponent } from 'react';
import {ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,} from 'recharts';
import './Graph2.css';

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

const data = [
  {
    name: '2A', CF: 54, NC: 12, amt: 2400,
  },
  {
    name: '2B', CF: 8, NC: 12, amt: 2210,
  },
  {
    name: '4A', CF: 3, NC: 20, amt: 2290,
  },
  {
    name: '4B', CF: 11, NC: 9, amt: 2290,
  },
];


export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/q4eonc12/';

  state = {
      data:[],
      mapDatas: new Map()
      //{'TD3', [1,6]}
    
  };

  componentDidMount() {
      console.log('jsuis passé')
      var url = 'http://localhost:3000/api/';
      this.loadNews(url);
  }


loadNews(url) {
      axios.get(url)
          .then(response => {console.log(response)})
          .then(res => {
              this.setState({data: res});
          });
      
      this.state.data.forEach((elem)=>{
          this.state.mapDatas.has(elem.groupe)?
              elem.etat?this.state.mapDatas.get(elem.groupe)[0]++:this.state.mapDatas.get(elem.groupe)[1]++
          :
          elem.etat?this.state.mapDatas.set(elem.groupe,[1,0]):this.state.mapDatas.set(elem.groupe,[0,1])
      })
      for(const key of this.state.mapDatas.keys()){console.log(key)}
  }

//insertNewStudent() {}
  render() {
    return (
      <div className="widgetGraph2">
        <h5>Class Data</h5>
            <ResponsiveContainer width="95%" height={350}>
              <BarChart width={500} height={300} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5,}}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="NC" stackId="a" fill="#8884d8" />
                  <Bar dataKey="CF" stackId="a" fill="#E53824" />
              </BarChart>
          </ResponsiveContainer>
    </div>
    );
  }
}
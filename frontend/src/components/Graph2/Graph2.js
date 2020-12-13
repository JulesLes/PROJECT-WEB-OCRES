import axios from 'axios';
import React, { PureComponent } from 'react';
import {ResponsiveContainer, PieChart, Pie, Legend,Tooltip} from 'recharts';
import './Graph2.css';

export default class Graph2 extends PureComponent {
  static jsfiddleUrl = '//jsfiddle.net/alidingling/6okmehja/';

  state = {
      data:undefined,
      nbrDeCas: 0,
      nonContamine:0,
  };

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
          });
  }

  //Cacul le nombre de cas positifs et sains au covid
  compter(){
    var nbrDeCasBis = 0;
    for(var i =0; i<this.state.data.length; i++){
      if (this.state.data[i].etat == 1){
        nbrDeCasBis++;
      }
    }
    var somme = this.state.data.length - nbrDeCasBis;
    this.setState({
      nbrDeCas:nbrDeCasBis,
      nonContamine: somme,
    });
  }

  render() {

  let data = [ { name: 'Contamine', value: this.state.nbrDeCas, fill: "#E53824"}, { name: 'Non Contamine', value: this.state.nonContamine, fill: "#0000ff"},];
    return (

      <div className="widgetGraph2" >
      {this.state.data ? this.compter():""}
        <h5>Class Data</h5>
            <ResponsiveContainer width="100%" height={350} >

            {/*Affichage des données en diagramme camenbert avec Recharts*/}
            <PieChart height={300} data={data}>
              <Pie dataKey="value" data={data} fill={data.color} />

              {/*Legende flotante avec la sourie*/}
              <Tooltip labelFormatter={() => undefined} />

              {/*Legende*/}
              <Legend />
            </PieChart>

          </ResponsiveContainer>

    </div>
    );
  }
}

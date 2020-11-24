import React, { PureComponent } from 'react';
import {PieChart, Pie, Sector, Cell, ResponsiveContainer,} from 'recharts';
import './Graph2.css'

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


export default class Graph2 extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/3Leoa7f4/';

  render() {
    return (
      <div className="widgetGraph2">
          <h5>Pie</h5>
            <ResponsiveContainer width="95%" height={300}>
                <PieChart onMouseEnter={this.onPieEnter} margin={{ top: 0, left: 0, right: 0, bottom: 0 }}>
                <Pie
                  data={data}
                  cx={100}
                  cy={100}
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {
                    data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                  }
                </Pie>
                </PieChart>
            </ResponsiveContainer>
          
      </div>
    );
  }
}

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import StockRow from './StockRow.js';
import './Bourse.css';

export default class Bourse extends React.Component {
  render(){
    return (
      <div className="widgetBourse">
        <div className="container">
          <th>Stocks</th>
          <th>Price</th>
          <StockRow ticker="aapl" />
          <StockRow ticker="goog" />
          <StockRow ticker="msft" />
          <StockRow ticker="tsla" />
        </div>
      </div>
    );
  }
}

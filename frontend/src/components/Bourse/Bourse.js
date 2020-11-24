import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import StockRow from './StockRow.js';
import './Bourse.css';

export default class Bourse extends React.Component {
  render(){
    return (
        <div className="widgetBourse">
            <h5>Stock Market</h5>
            <Row className="Titre">
                <Col sm="6">
                    <b>Stocks</b>
                </Col>
                <Col sm="6">
                    <b>Price</b>
                </Col>
            </Row>

            <StockRow ticker="goog" />
            <StockRow ticker="aapl" />
            <StockRow ticker="fb" />
            <StockRow ticker="amzn" />
            <StockRow ticker="msft" />
        </div>
    );
  }
}

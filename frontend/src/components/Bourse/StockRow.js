import React, { Component } from 'react';
import { iex } from './iex.js';
import { Container, Row, Col } from 'reactstrap';
import './Bourse.css';

export default class StockRow extends Component{
    constructor(props) {
        super(props)
        this.state = {
            data:{}
        }
    }

    componentDidMount() {
        const url =
        `${iex.base_url}/stock/${this.props.ticker}/intraday-prices?chartLast=1&token=${iex.api_token}`

        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                    data: data[data.length - 1]
            })
        })
    }

    render() {
        return (
            <Row className="Lignes">
                <Col sm="6">
                    <a>{this.props.ticker}</a>
                </Col>
                <Col sm="6">
                    <a>{this.state.data.close}</a>
                </Col>
            </Row>
        );
    }
}

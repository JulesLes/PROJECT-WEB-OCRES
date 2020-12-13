import React from 'react';
import './Footer.css';
import { Row, Col } from 'reactstrap';
import ResponsiveContainer from "react-responsive-widget";

export default class Footer extends React.Component {

render(){
  return (
      <div className="Footer">
      <ResponsiveContainer width="95%">
        <Row>
        
          {/*Affichage du Footer*/}
          <Col xs="4">
            <a>Mickael Gremy </a>
          </Col>
          <Col xs="4">
            <a> Jules Lestrade</a>
          </Col>
          <Col xs="4">
            <a>Copyright &copy; 2020</a>
          </Col>
        </Row>
      </ResponsiveContainer>
      </div>
    );
  }
}

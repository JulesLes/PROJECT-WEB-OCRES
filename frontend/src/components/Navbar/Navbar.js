import React from 'react';
import './Navbar.css';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import logo from "../../image/Logo.png";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
const Navigation = (props) => {
    //console.log(props);
    return (
      <div className="Navbar">
        <Navbar>
            <Navbar.Brand href="#home">
              <img className="Logo" src={logo}/>
            </Navbar.Brand>
            <Nav className="title">
                <Link activeClass="active" to="Home" spy={true} smooth={true} style={{padding: 0}}>
                  <a>Home</a>
                </Link>
                <Link activeClass="active" to="Settings" style={{padding: 0}}>
                    <a>Settings</a>
                </Link>
            </Nav>
        </Navbar>
      </div>
    )
}

export default Navigation;

import React from 'react';
import './Navbar.css';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import logo from "../../image/Logo.png";
import {Link} from 'react-scroll';

const Navigation = (props) => {
    //console.log(props);
    return (
      <div className="Navbar">
        <Navbar>
            <Navbar.Brand href="#home">
              <img className="Logo" src={logo}/>
            </Navbar.Brand>
            <Nav className="title">
                  <Link activeClass="active" to="home" spy={true} smooth={true} style={{padding: 0}}>
                    <a class="active" href="#home">Home</a>
                  </Link>
                  <Link activeClass="active" to="widget" spy={true} smooth={true} style={{padding: 0}}>
                    <a href="#widget">Widgets</a>
                  </Link>
                  <a href="#settings">Settings</a>
            </Nav>
        </Navbar>
      </div>
    )
}

export default Navigation;

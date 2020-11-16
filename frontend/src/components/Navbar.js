import React from 'react';
import './Navbar.css';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import logo from "../image/Logo.png";

const Navigation = (props) => {
    console.log(props);
    return (
        <Navbar className="Navbar" bg="primary" variant="dark">
            <Navbar.Brand href="#home">
              <img className="Logo" src={logo}/>
            </Navbar.Brand>
            <Nav className="title">
                    <Nav.Link href="/About">Widgets</Nav.Link>
                    <Nav.Link href="/Contact">Settings</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Navigation;

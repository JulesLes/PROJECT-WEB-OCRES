import React from 'react';
import { ButtonGroup } from 'reactstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import './Menu.css';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import logo from "../../image/Logo.png";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

const Menu = (props) => {

    return (

        <div className="btn">

        {/*affichage du menu deroulant quand l'écran est plus petit*/}
            <Dropdown as={ButtonGroup}>
                <Button variant="success" id="btn"><img className="Logo" src={logo}/></Button>

                <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

                <Dropdown.Menu id="menu">
                    <Dropdown.Item>
                        <Link activeClass="active" to="Home" spy={true} smooth={true} style={{padding: 0}}>
                            <a>Home</a>
                        </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Link activeClass="active" to="Settings" style={{padding: 0}}>
                            <a>Settings</a>
                        </Link>
                    </Dropdown.Item>

                </Dropdown.Menu>
            </Dropdown>
        </div>
    )

}

export default Menu;

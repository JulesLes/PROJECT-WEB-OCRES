import React, { Component } from "react";
import homepage  from "../image/WidgetBack.jpg";
import Rechercher from '../components/meteo/Rechercher';
import Menu from '../components/Navbar/Menu';

class Settings extends Component {
  render(){
    return (
        <div className="Settings" id="Settings">
            <div className="navbar" id="mn_menu2">
                <Menu />
            </div>
        <div className="Page" style={{backgroundImage: `url(${homepage})` }}>
            <h1 className="Title">Settings</h1>
        </div>
      </div>
    );
  }
}

export default Settings;

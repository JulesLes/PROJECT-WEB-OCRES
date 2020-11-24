import React, { Component } from "react";
import homepage  from "../image/WidgetBack.jpg";
import Rechercher from '../components/meteo/Rechercher';

class Settings extends Component {
  render(){
    return (
      <div className="Settings" id="Settings">
        <div className="Page" style={{backgroundImage: `url(${homepage})` }}>
            <h1 className="Title">Settings</h1>
        </div>
      </div>
    );
  }
}

export default Settings;

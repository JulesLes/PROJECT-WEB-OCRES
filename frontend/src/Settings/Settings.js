import React, { Component } from "react";
import homepage  from "../image/WidgetBack.jpg";
import Rechercher from '../components/meteo/Rechercher';

export default function Settings() {

    return (
      <div className="Settings" id="settings">
        <div className="Page" style={{backgroundImage: `url(${homepage})` }}>
            <p className="Title">Settings</p>
        </div>
      </div>
    );
}

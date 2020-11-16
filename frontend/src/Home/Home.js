import React, { Component } from "react";
import './Home.css';
import widdgetBack from "../image/widget.jpg";
import down from "../image/down-chevron.png";
import homepage  from "../image/WidgetBack.jpg";
import {Link} from 'react-scroll';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div class="Page" style={{backgroundImage: `url(${homepage})` }} id="home">
            <p className="Title">Welcome to the future<br />of Widgets</p>
            <Link activeClass="active" to="widget" spy={true} smooth={true}>
              <img className="butn" src={down}/>
            </Link>
        </div>
        <div class="Widget" style={{backgroundImage: `url(${widdgetBack})` }} id="widget">
        </div>
      </div>
    );
  }
}

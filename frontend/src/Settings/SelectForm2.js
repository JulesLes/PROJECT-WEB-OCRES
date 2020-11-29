import React from "react";
import './Settings.css';
import ResponsiveContainer from "react-responsive-widget";

class SelectForm2 extends React.Component {

    constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('You have selected : ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <a className="info">Groupe</a>
        <label>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Vide"></option>
            <option value="2A">2A</option>
            <option value="2B">2B</option>
            <option value="4A">4A</option>
            <option value="4B">4B</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SelectForm2;

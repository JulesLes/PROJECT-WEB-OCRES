import React from "react";
import './Settings.css';
import ResponsiveContainer from "react-responsive-widget";

class SelectForm extends React.Component {
  
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
        <label>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Vide"></option>
            <option value="Angleterre">Angleterre</option>
            <option value="Allemagne">Allemagne</option>
            <option value="Chine">Chine</option>
            <option value="Espagne">Espagne</option>
            <option value="Etats-Unis">États-Unis</option>
            <option value="France">France</option>
            <option value="Italie">Italie</option>
            <option value="Japon">Japon</option>
            <option value="Suisse">Suisse</option>
          </select>
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SelectForm;
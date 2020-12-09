import React from "react";
import '../Settings.css';
import ResponsiveContainer from "react-responsive-widget";

class SelectForm3 extends React.Component {

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
        <a className="info">Statut</a>
        <label>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Vide"></option>
            <option value="Confirmed">Confirmed</option>
            <option value="NotConfirmed">Not Confirmed</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SelectForm3;

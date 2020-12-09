import React from "react";
import './Settings.css';
import ResponsiveContainer from "react-responsive-widget";

class SelectFormCovid extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
      nom: '182'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({nom: e.target.value});
  }

  render() {
    return (
      <div>
        <label>
          <select value={this.state.nom} onChange={(e) => this.handleChange(e)} value={this.state.nom}>
            <option value="8">Autralia</option>
            <option value="35">China</option>
            <option value="59">France</option>
            <option value="84">Japan</option>
            <option value="181">United Kingdom</option>
            <option value="182">United States</option>
          </select>
        </label>
        <br />
        <button type="submit" value="Submit" onClick={() => this.props.parentCallback(this.state.nom)}/>
      </div>
    );
  }
}

export default SelectFormCovid;

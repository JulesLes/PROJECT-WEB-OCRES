import React from "react";
import './Settings.css';
import ResponsiveContainer from "react-responsive-widget";

class SelectForm extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
      nom: 'us'
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
            <option value="au">Autralia</option>
            <option value="cn">China</option>
            <option value="fr">France</option>
            <option value="jp">Japan</option>
            <option value="gb">United Kingdom</option>
            <option value="us">United States</option>
          </select>
        </label>
        <br />
        <button type="submit" value="Submit" onClick={() => this.props.parentCallback(this.state.nom)}/>
      </div>
    );
  }
}

export default SelectForm;

import React from "react";
import './Settings.css';

class NameForm extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('You have submitted : ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            
            <label>
                <input type="text" placeholder="Saisissez votre recherche" value={this.state.value} onChange={this.handleChange} />
            </label>
            <br />
            
            <input type="submit" value="Submit" />
        </form>
    );
  }
}

export default NameForm;
import React, { useContext, createContext } from "react";
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
                <input type="text" placeholder="Saisissez votre recherche" onChange={this.handleChange} />
            </label>
            <br />
            
            <input type="submit" value="Submit" onClick={() => this.props.parentCallback(this.state.value)}/>
        </form>
    );
  }
}

export default NameForm;
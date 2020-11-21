import React from 'react';
import './Rechercher.css';

export default class Rechercher extends React.Component {
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
    alert('Le nom a été soumis : ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
                <label>
                   <input type="text" placeholder="Saisissez votre ville" value={this.state.value} onChange={this.handleChange} />
                </label>
              <input type="submit" value="Envoyer" onClick={() => this.props.parentCallback(this.state.value)}/>
      </form>
    )
  }
}

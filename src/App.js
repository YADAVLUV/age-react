import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      birthdate: '',
      age: '',
    };
  }

  calculateAge = () => {
    const birthdate = new Date(this.state.birthdate);
    const today = new Date();
    const age = Math.floor((today - birthdate) / (365.25 * 24 * 60 * 60 * 1000));
    this.setState({ age });
  }

  handleChange = (event) => {
    this.setState({ birthdate: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <h1>Age Calculator</h1>
        <div>
          <label>Enter your birthdate:</label>
          <input
            type="date"
            value={this.state.birthdate}
            onChange={this.handleChange}
          />
        </div>
        <button onClick={this.calculateAge}>Calculate Age</button>
        {this.state.age && <p>Your age is: {this.state.age} years old</p>}
      </div>
    );
  }
}

export default App;

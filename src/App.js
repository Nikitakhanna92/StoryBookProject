import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    persons: []
  }
  componentDidMount() {
    axios.get(`http://localhost:3030/my-service`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div style={{width:'20%',margin:'0 auto',border:'1px solid #fc0'}}>
            <h3>feather example nikita</h3>
          <ul style={{listStyleType: "none"}}>
          { this.state.persons.map(person => <li key={0}>{person}</li>)}
        </ul>
        </div>
      </div>
    );
  }
}

export default App;

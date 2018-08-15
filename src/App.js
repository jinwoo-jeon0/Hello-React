import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hello React</h1>
        </header>
        <p>
          <input type="text" id="id" placeholder="id"/>
          <input type="password" id="password" placeholder="password"/>
          <input type="submit"/>
        </p>
      </div>
    );
  }
}

export default App;

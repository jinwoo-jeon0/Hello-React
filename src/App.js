import React, { Component } from 'react';
import './App.css';

class App extends Component {
  componentDidMount() {
    fetch('/hello-express')
      .then(_ => {
        const reader = _.body.getReader();
        const handle = ({ value, done }) => {
          console.log(value, done);
          if (!done)
            reader.read().then(handle).catch(console.error);
        };
        reader.read().then(handle).catch(console.error);
      });
  }


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

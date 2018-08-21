import React, { Component } from 'react';
import './App.css';

class App extends Component {
  handleSubmit() {
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
        <form onSubmit={this.handleSubmit}>
          <input type="text" id="id" placeholer="id" />
          <input type="password" id="password" placeholder="password" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;

/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> y guardar y recarga.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/


/*
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
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
      </div>
  );

  return (
        <div className="App">
          <h2>Welcome to the Road to Learn React yes</h2>
        </div>
      );

  
      
  
  }
}*/

import React, { Component } from 'react';

import {Button} from './Button';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 1
    }

  }

  handleCount(value) {
    this.setState((prevState) => ({ count: prevState.count + value }));
  }

  render() {


    return (
      <div>
        Current count: {this.state.count}
        <hr />
        <Button sign="+" count={this.state.count} updateCount={this.handleCount.bind(this)} />
        <Button sign="-" count={this.state.count} updateCount={this.handleCount.bind(this)} />
      </div>
    );
  }
}


export default App;
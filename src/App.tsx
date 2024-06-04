import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyTheme from "./global.config";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          <div>
            <p>
              dkasjfk
            </p>
          </div>

        </header>

        <div data-theme={MyTheme.getCurrentTheme()}>
          <div>
            <p>
              dkasjfk
            </p>
          </div>
          <button onClick={() => {
            console.log(MyTheme.getCurrentTheme());
            MyTheme.setTheme("light");
            console.log("theme");
            console.log(MyTheme.getCurrentTheme());
            this.setState({});
          }}>
            testTheme
          </button>
        </div>
      </div>
    );
  }
}

export default App;

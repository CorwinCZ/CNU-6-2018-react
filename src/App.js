import React, { Component } from 'react';
import './App.css';

import Content from './components/content/Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Our testing app</h1>
        </header>

        <Content />
      </div>
    );
  }
}

export default App;

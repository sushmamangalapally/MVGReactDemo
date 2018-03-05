import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation';
import Tiles from './Tiles';
import tilePrices from './tile-prices';

class App extends Component {
  render() {
    const title = "Fall Season";
    return (
      <div className="App">
        <Navigation/>
        <h1>{title}</h1>
        <Tiles />
      </div>
      
    );
  }
}

export default App;

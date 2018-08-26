import React, { Component } from 'react';
import Nav from './Components/Nav';
import Products from './Components/Content-container';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <Nav />
        <Products />
      </div>
    );
  }
}

export default App;

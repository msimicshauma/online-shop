import React, { Component } from 'react';
import Nav from './Components/Nav';
import Products from './Components/Content-container';
import {BrowserRouter, Route} from 'react-router-dom';
import Shipping from './Components/Pages/Shipping';
import About from './Components/Pages/About';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main-container">
          <Nav />
          <Route exact path='/' component={Products}></Route>
          <Route exact path='/shipping' component={Shipping}></Route>
          <Route exact path='/about' component={About}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

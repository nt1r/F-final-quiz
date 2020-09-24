import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Trainee from './components/Trainee';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/trainee" component={Trainee} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

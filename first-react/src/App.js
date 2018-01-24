import React, { Component } from 'react';
import './App.css';

import Button from './Button'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          You guys rule!
        </p>
        <Button text="Actually Dont Click Me" subText="hey hope you had a good day"/>
        <Button text="Hi" subText="yep"/>
        <Button text="Save the Whales" subText="or dont if you're mean"/>
      </div>
    );
  }
}

export default App;
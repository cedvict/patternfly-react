import { Avatar, AvatarProps } from '@patternfly/react-core';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavTest from './Nav';

class myProps implements AvatarProps {
  alt: string = "avatar";
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Avatar src={logo} alt={new myProps().alt} />
          <NavTest />
        </header>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import links from './links';

class App extends Component {
  render() {
    return (
      <div className="App">
        {links.map((link) => {
          return <a href={link.href} key={link.id}>{link.title}</a>
        })}
      </div>
    );
  }
}

export default App;

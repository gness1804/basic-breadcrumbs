import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import links from './links';

class App extends Component {
  render() {
    return (
      <div className="App">
        {links.map((link) => {
          if (links.indexOf(link) === (links.length - 1)) {
            return <span key={link.id}>{link.title}</span>
          } else {
            return (
             <div key={link.id} style={{ display: 'inline-block' }}>
               <a href={link.href} style={{marginRight: 20}}>{link.title}</a>
               <span style={{marginRight: 10}}>&#9654;</span>
            </div> 
            )
          }
        })}
      </div>
    );
  }
}

export default App;

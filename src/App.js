import React, { Component } from 'react';
import './App.css';
import { states } from './states-data.js';
import { Usstate } from './components/usstate/usstate';

class App extends Component {

  constructor() {
    super();
    this.state = {
      usstates: states
    };
  }

render(){
  return (
    <div className="App">
      <h1>US States</h1>
      {
        this.state.usstates.map(state=> (
          <Usstate  name = {state.name} 
          abbr = { state.abbr }
          capital = { state.capital }/>
        ))
      }        
      
    </div>
  );
}
}

export default App;

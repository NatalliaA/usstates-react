import React, { Component } from 'react';
import './App.css';
import { states } from './states-data.js';
import { Usstate } from './components/usstate/usstate';

class App extends Component {
   
    state = {
      usstates: states,
      showAbbr: false,
      showCapital: false
    };
    
  toggleAbbrHandler = ()=> {
    const showAbbrStatus = this.state.showAbbr;
    this.setState({showAbbr: !showAbbrStatus});
  }

  toggleCapitalHandler = ()=> {
    const showCapitalStatus = this.state.showCapital;
    this.setState({showCapital: !showCapitalStatus})
  }

render(){
  return (
    <div className="App">
      <h1>US STATES</h1>
      <button onClick = {this.toggleAbbrHandler}>Abbreviation</button>
      <button onClick = {this.toggleCapitalHandler}>Capital</button>

   {/* if Abbreviation btn clicked show abbr */}
    {this.state.showAbbr ?
     <div className="usstate-list">
     {
       this.state.usstates.map(state=> (
         <Usstate  name = {state.name} 
         abbr = { state.abbr }/>
       ))
     } 
     </div>  
    
    :
    // if Capital btn clicked show capital
     
     this.state.showCapital ?
      <div className="usstate-list">
      {
        this.state.usstates.map(state=> (
          <Usstate  name = {state.name} 
          capital = { state.capital }/>
        ))
      } 
      </div> 

      :

    //  show just state
      <div className="usstate-list">
      {
        this.state.usstates.map(state=> (
          <Usstate  name = {state.name}/>
        ))
      } 
      </div>  
      }     
      
    </div>
  );
}
}

export default App;

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

  toggleAbbrHandler = () => {
    const showAbbrStatus = this.state.showAbbr;
    this.setState({ showAbbr: !showAbbrStatus });
  }

  toggleCapitalHandler = () => {
    const showCapitalStatus = this.state.showCapital;
    this.setState({ showCapital: !showCapitalStatus })
  }

  render() {

    //no button clicked, show just state name
    let usstates = (
      <div>
        {
          this.state.usstates.map(state => {
            return <Usstate name={state.name} />
          })
        }
      </div>
    )

    // if Capital btn clicked show capital    
    if (this.state.showCapital) {
      usstates = (
        <div>
          {
            this.state.usstates.map(state => {
              return <Usstate name={state.name}
                capital={state.capital} />
            })
          }
        </div>
      )
    }

   // if Abbreviation btn clicked show abbr   
   if (this.state.showAbbr) {
     usstates = (
       <div>
         {
           this.state.usstates.map(state => {
             return <Usstate name={state.name}
               abbr={state.abbr} />
           })
         }
       </div>
     )
   }   

    return (
      <div className="App">
        <h1>US STATES</h1>
        <button onClick={this.toggleAbbrHandler}>Abbreviation</button>
        <button onClick={this.toggleCapitalHandler}>Capital</button>

        <div className="usstate-list">
          { usstates }
        </div>


      </div>
    );
  }
}

export default App;

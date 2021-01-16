import React, { Component } from 'react';
import './App.css';
import { states } from './states-data.js';
import { Usstate } from './components/usstate/usstate';

class App extends Component {

  state = {
    usstates: states,
    showAbbr: false,
    showNickname: false,
    showCapital: false,
    showPopulation: false,
    showArea: false
  };

  toggleAbbrHandler = () => {
    const showAbbrStatus = this.state.showAbbr;
    this.setState({
      showAbbr: !showAbbrStatus,
      showNickname: false,
      showCapital: false,
      showPopulation: false,
      showArea: false
    });
  }

  toggleCapitalHandler = () => {
    const showCapitalStatus = this.state.showCapital;
    this.setState({
      showCapital: !showCapitalStatus,
      showAbbr: false,
      showNickname: false,
      showPopulation: false,
      showArea: false
    });
  }

  toggleNicknameHandler = () => {
    const showNicknameStatus = this.state.showNickname;
    this.setState({
      showNickname: !showNicknameStatus,
      showCapital: false,
      showAbbr: false,
      showPopulation: false,
      showArea: false
    });
  }

  togglePopulationHandler = () => {
    const showPopulationStatus = this.state.showPopulation;
    this.setState({
      showPopulation: !showPopulationStatus,
      showNickname: false,
      showCapital: false,
      showAbbr: false,
      showArea: false
    });
  }

  toggleAreaHandler = () => {
    const showAreaStatus = this.state.showArea;
    this.setState({
      showArea: !showAreaStatus,
      showNickname: false,
      showCapital: false,
      showAbbr: false,
      showPopulation: false
    });
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

    // if Nickname btn clicked show nickname   
    if (this.state.showNickname) {
      usstates = (
        <div>
          {
            this.state.usstates.map(state => {
              return <Usstate name={state.name}
                nickname={state.nickname} />
            })
          }
        </div>
      )
    }

    // if Population btn clicked show population   
    if (this.state.showPopulation) {
      usstates = (
        <div>
          {
            this.state.usstates.map(state => {
              return <Usstate name={state.name}
                population={state.population}
                populationRank={state.populationRank} />
            })
          }
        </div>
      )
    }

    // if Area btn clicked show area   
    if (this.state.showArea) {
      usstates = (
        <div>
          {
            this.state.usstates.map(state => {
              return <Usstate name={state.name}
                area={state.area}
                areaRank={state.areaRank} />
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
        <button onClick={this.toggleNicknameHandler}>Nickname</button>
        <button onClick={this.toggleAreaHandler}>Area</button>
        <button onClick={this.togglePopulationHandler}>Population</button>

        <div className="usstate-list">
          {usstates}
        </div>

      </div>
    );
  }
}

export default App;

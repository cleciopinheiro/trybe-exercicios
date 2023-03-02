import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      clickFire: 0,
      clickIce: 0,
      clickEarth: 0
    }
  }

  handleClickFire = () => {
    this.setState((lastNumber) => ({
      clickFire: lastNumber.clickFire + 1,
    }));
  }
  
  handleClickIce = () => {
    this.setState((lastNumber) => ({
      clickIce: lastNumber.clickIce + 1,
    }));
  }
  
  handleClickEarth = () => {
    this.setState((lastNumber) => ({
      clickEarth: lastNumber.clickEarth + 1,
    }));
  }
  render() {
    return (
      <div>
        <button className="fire" onClick={ this.handleClickFire }>{ this.state.clickFire } FOGO</button>
        <button className="ice" onClick={ this.handleClickIce }>{ this.state.clickIce } GELO</button>
        <button className="earth" onClick={ this.handleClickEarth }>{ this.state.clickEarth } EARTH</button>
      </div>
    )
  }
}

export default App;

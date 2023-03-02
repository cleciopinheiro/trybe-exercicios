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

  getButtonColor = (num) => {
    return num % 2 === 0 ? 'purple' : 'black';
  }


  render() {
    const { clickFire, clickIce, clickEarth } = this.state;
    return (
      <div>
        <button className="fire" 
          onClick={ this.handleClickFire }
          style={{ backgroundColor: this.getButtonColor(clickFire) }} >{ clickFire } FOGO</button>

        <button className="ice"
          onClick={ this.handleClickIce }
          style={{ backgroundColor: this.getButtonColor(clickIce) }} >{ clickIce } GELO</button>

        <button className="earth"
         onClick={ this.handleClickEarth }
         style={{ backgroundColor: this.getButtonColor(clickEarth) }} >{ clickEarth } EARTH</button>
      </div>
    )
  }
}

export default App;

import logo from './logo.svg';
import './App.css';
import React from 'react';

function handleClickFire() {
  console.log('FOGO');
}

function handleClickIce() {
  console.log('GELO');
}

function handleClickEarth() {
  console.log('TERRA');
}

class App extends React.Component {
  render() {
    return (
      <div>
        <button className="fire" onClick={ handleClickFire }>FOGO</button>
        <button className="ice" onClick={ handleClickIce }>GELO</button>
        <button className="earth" onClick={ handleClickEarth }>EARTH</button>
      </div>
    )
  }
}

export default App;

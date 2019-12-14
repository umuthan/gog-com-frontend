import React, { Component } from 'react';

import { products } from '../Data/GameOfTheWeek';

class GameOfTheWeek extends Component {

  render() {
    return (
      <div id="game-of-the-week">
        <h1>Game Of The Week</h1>
        { products.map((product)=> (
          <img src={product.image} alt={product.name} key={product.id} />
        )) }
      </div>
    );
  }

}

export default GameOfTheWeek;

import React from 'react';
import './Assets/scss/app.scss';

import { CartProvider } from './Context/Cart';

import Header from './Components/Header';
import Products from './Components/Products';
import GameOfTheWeek from './Components/GameOfTheWeek';

function App() {

  return (
    <CartProvider>
      <Header />
      <div id="content">
        <section className="container">
          <GameOfTheWeek />
          <Products />
        </section>
      </div>
    </CartProvider>
  );
}

export default App;

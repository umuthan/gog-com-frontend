import React, { Component } from 'react';

import Cart from './Cart';

class Header extends Component {

  render() {
    return (
      <header>
        <div className="container">
          <div id="logo">
            <img src={require('../Assets/img/logo.png')} alt="GOG.COM" />
          </div>
          <Cart />
        </div>
      </header>
    );
  }

}

export default Header;

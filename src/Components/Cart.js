/**
 * Gog.com Front End - Cart Component
 * https://github.com/umuthan/gog-com-frontend
 *
 * Author: Umuthan Uyan
 *
 */

import React, { useEffect, useState, useRef } from 'react';

import { useCartDispatch, useCart } from '../Context/Cart';

function Cart(props) {

  const {cart, total} = useCart();
  const dispatch = useCartDispatch();

  /*
  **
  ** Remove selected item from Cart Context
  **
  */

  const removeFromCart = (productID) => {
    dispatch({
      type: 'removeFromCart',
      productID: productID
    })
  }

  /*
  **
  ** Clear Cart function for clearing Cart Context
  **
  */

  const clearCart = () => {
    dispatch({
      type: 'clearCart'
    })
  }

  /*
  **
  ** Cart open and close function for inside and outside click
  **
  */

  const node = useRef();

  const [open, setOpen] = useState(false);

  const handleClick = e => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div ref={node} id="cart">
      <button className={open.toString()} onClick={e => setOpen(!open)}>
        <img src={require('../Assets/img/cart_icon.png')} alt="Cart Icon" />
        <span>{cart.length}</span>
      </button>
      { open && (
        <div id="cart-content">
          { cart.length > 0 ? (
            <>
            <div id="summary">
              <h3>{cart.length} ITEMS IN CART</h3>
              <div id="right-box">
                <h3>{'$ ' + total}</h3>
                <button onClick={() => clearCart()} id="clear-cart">CLEAR CART</button>
              </div>
            </div>
            <ul>
            {cart.map((product) => (
              <li key={product.id}>
              <img src={product.thumbnail} alt={product.name} />
              <div>
                <h3>{product.name}</h3>
                <button className="remove" onClick={() => removeFromCart(product.id)}>Remove</button>
              </div>
              <span className="price">{'$ ' + product.price}</span>
              </li>
            ))}
            </ul>
            </>
          ) : (
            <div id="empty-cart">
              <h3>I feel so lonely :(</h3>
              <h4>Why won't you add some game, here?</h4>
            </div>
          ) }
        </div>
      )}
    </div>
  );

}

export default Cart;

import React from 'react';

import { useCartDispatch, useCart } from '../Context/Cart';

function Cart() {

  const {cart} = useCart();
  const dispatch = useCartDispatch();

  return (
    <div id="cart">
      <button>{cart.length}</button>
      <div id="cart-content">
        <button onClick={() => {
          dispatch({
            type: 'clearCart'
          })
        }} className="">CLEAR CART</button>
      </div>
    </div>
  );

}

export default Cart;

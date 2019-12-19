/**
 * Gog.com Front End - Cart Context
 * https://github.com/umuthan/gog-com-frontend
 *
 * Author: Umuthan Uyan
 *
 */

import React from 'react';

const CartContext = React.createContext();
const CartDispatchContext = React.createContext();

/*
**
** Cart functions like adding an item,
** removing an item, clear all the cart.
**
*/
function cartReducer(state, action) {
  switch (action.type) {
    case 'addToCart': {
      let newCart = state.cart.concat(action.product);
      return {
        cart: newCart,
        total: calculateCartTotal(newCart)
      }
    }
    case 'removeFromCart': {
      let newCart = state.cart.filter(e => e.id !== action.productID);
      return {
        cart: newCart,
        total: calculateCartTotal(newCart)
      }
    }
    case 'clearCart': {
      return {
        cart: [],
        total: 0
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

/*
**
** Calculate total amount of cart
**
*/
function calculateCartTotal(cart) {

  let total = 0;

  cart.map((product) => total = total+product.price);

  return total;

}

/*
**
** Defining Cart provider with default values.
**
*/
function CartProvider({children}) {
  const [state, dispatch] = React.useReducer(cartReducer, {
    cart: [],
    total: 0
  })
  return (
    <CartContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  )
}

/*
**
** useCart function to get Cart context values
** like cart array and total amount of cart
**
*/
function useCart() {
  const context = React.useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

/*
**
** useCartDispatch function for actions in cart
** like adding and item, removeing an item or clearing all the cart
**
*/
function useCartDispatch() {
  const context = React.useContext(CartDispatchContext)
  if (context === undefined) {
    throw new Error('useCartDispatch must be used within a CartProvider')
  }
  return context
}

export { CartProvider, useCart, useCartDispatch, CartContext }

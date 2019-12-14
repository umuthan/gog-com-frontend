import React from 'react'

const CartContext = React.createContext()
const CartDispatchContext = React.createContext()

function cartReducer(state, action) {
  switch (action.type) {
    case 'addToCart': {
      return {
        cart: state.cart.concat(action.product),
        total: 0
      }
    }
    case 'removeFromCart': {
      return {
        cart: [],
        total: 0
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

function useCart() {
  const context = React.useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

function useCartDispatch() {
  const context = React.useContext(CartDispatchContext)
  if (context === undefined) {
    throw new Error('useCartDispatch must be used within a CartProvider')
  }
  return context
}

export { CartProvider, useCart, useCartDispatch, CartContext }

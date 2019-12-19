/**
 * Gog.com Front End - Products Component
 * https://github.com/umuthan/gog-com-frontend
 *
 * Author: Umuthan Uyan
 *
 */

import React from 'react';

import { products } from '../Data/Products';
import { useCart, useCartDispatch } from '../Context/Cart';

import Product from './Product';

function Products() {

    const dispatch = useCartDispatch();
    const {cart} = useCart();

    const addToCart = (product) => {
      dispatch({
        type: 'addToCart',
        product: {
          id : product.id,
          name: product.name,
          thumbnail: product.thumbnail,
          price: product.price
        }
      })
    }

    const inCart = (id) => {
      let isItInCart = false;

      cart.forEach(function(product) {
        if(product.id === id) isItInCart = true;
      })

      return isItInCart;
    }

    return (
      <ul id="products">
      { products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          thumbnail={product.thumbnail}
          price={product.price}
          discount={product.discount}
          owned={product.owned}
          addToCartCallback={addToCart}
          inCart={inCart(product.id)}
        />
      ))}
      </ul>
    );

}

export default Products;

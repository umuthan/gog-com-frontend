import React, { Component } from 'react';

import { useCart, useCartDispatch } from '../Context/Cart';

function Product(props) {

  const dispatch = useCartDispatch();
  const {cart} = useCart();

  function addToCart(product) {}
    let productObject = [
      'id' =
    }
    dispatch({
      cart: product
    })
  }

  const {
    id,
    name,
    thumbnail,
    price,
    discount,
    owned
  } = props;

  return (
    <li className="product">
      <img src={thumbnail} alt={name} />
      <div className={owned === 1 ? "info owned" : "info"}>
        <h2>{name}</h2>
        <div className="price-area">
          { owned === 1 ? (
            <button className="price">OWNED</button>
          ) : (
            <>
            { discount>0 ? (
              <span className="discount">{ '- ' + discount + '%' }</span>
            ) : null }
            <button onClick={() => this.addToCart(p)} className="price">{'$ ' + price}</button>
            </>
          ) }
        </div>
      </div>
    </li>
  );

}

export default Product;

import React, { Component } from 'react';

import { products } from '../Data/Products';

import Product from './Product';

class Products extends Component {

  render() {
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
        />
      ))}
      </ul>
    );
  }

}

export default Products;

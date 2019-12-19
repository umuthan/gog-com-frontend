import React, { Component } from 'react';

class Product extends Component {

  render() {

    const {
      name,
      thumbnail,
      price,
      discount,
      owned,
      inCart
    } = this.props;

    return (
      <li className="product">
        <img src={thumbnail} alt={name} />
        <div className={owned === 1 ? "info owned" : "info"}>
          <h2>{name}</h2>
          <div className="price-area">
            { inCart === true ? (
              <button disabled>IN CART</button>
            ) : (
              owned === 1 ? (
                <button disabled>OWNED</button>
              ) : (
                <>
                { discount>0 ? (
                  <span className="discount">{ '- ' + discount + '%' }</span>
                ) : null }
                  <button onClick={() => this.props.addToCartCallback(this.props)}>{'$ ' + price}</button>
                </>
              )
            ) }
          </div>
        </div>
      </li>
    );

  }

}

export default Product;

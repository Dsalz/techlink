import React from "react";
import { number, string, func } from "prop-types";

import "../css/CartItem.css";

const CartItem = ({ price, image, item, id, modifyQuantity, quantity }) => (
  <article className="cart-item d-flex justify-content-space-between align-items-center black-color">
    <div className="cart-item-product d-flex align-items-center">
      <img src={image} alt="item" />
      <p>{item}</p>
    </div>
    <div className="cart-item-info align-items-center d-flex">
      <div className="d-flex align-items-center">
        <button
          className="pink-btn"
          type="button"
          onClick={() => modifyQuantity(id, quantity - 1)}
        >
          -
        </button>
        {quantity}
        <button
          className="pink-btn"
          type="button"
          onClick={() => modifyQuantity(id, quantity + 1)}
        >
          +
        </button>
      </div>
      <span className="cart-item-price pink-color">${price * quantity}</span>
    </div>
  </article>
);

CartItem.propTypes = {
  price: number.isRequired,
  id: number.isRequired,
  quantity: number.isRequired,
  image: string.isRequired,
  item: number.isRequired,
  modifyQuantity: func.isRequired
};

export default CartItem;

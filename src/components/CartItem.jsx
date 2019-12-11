import React from "react";
import { number, string, func } from "prop-types";

import "../css/CartItem.css";

const CartItem = ({ price, image, item, id, modifyQuantity, quantity }) => (
  <article className="cart-item d-flex justify-content-space-between align-items-center black-color">
    <button
      type="button"
      className="remove-btn"
      onClick={() => modifyQuantity(id, 0)}
    >
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 512.001 512.001"
      >
        <g>
          <g>
            <path
              d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
			L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
			c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
			c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"
            />
          </g>
        </g>
      </svg>
    </button>

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

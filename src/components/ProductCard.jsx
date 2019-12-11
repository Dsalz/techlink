import React from "react";
import { string, number, func } from "prop-types";

// CSS
import "../css/ProductCard.css";

const ProductCard = ({ image, price, item, addToCart }) => {
  return (
    <article className="product-card white-bg shadow black-color">
      <img alt={item} src={image} className="product-card-image" />
      <p className="product-card-item">{item}</p>
      <p className="product-card-price pink-color">${price}</p>
      <button type="button" className="pink-btn" onClick={addToCart}>
        Add to Cart
      </button>
    </article>
  );
};

ProductCard.propTypes = {
  image: string.isRequired,
  price: number.isRequired,
  item: string.isRequired,
  addToCart: func.isRequired
};

export default ProductCard;

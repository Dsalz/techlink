import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import CartItem from "../components/CartItem";

// CSS
import "../css/CartPage.css";

/**
 * @class CartPage
 */
class CartPage extends Component {
  state = {
    cartItems: [],
    totalItems: 0,
    totalCost: 0,
    loading: true
  };

  /**
   * @method componentDidMount
   * @description The componentDidMount lifecycle
   * @returns {undefined}
   */
  componentDidMount() {
    setTimeout(() => {
      const cartItems = localStorage.techlinkItems
        ? JSON.parse(localStorage.techlinkItems)
        : [];
      const totalCost = cartItems.reduce(
        (acc, curVal) => acc + curVal.quantity * curVal.price,
        0
      );
      this.setState({
        cartItems,
        totalCost,
        loading: false
      });
    }, 1000);
  }

  /**
   * @method modifyQuantity
   * @description method for modifying cart item quantity
   * @param {number} id - id of product
   * @param {number} quantity - new item quantity
   * @returns {undefined}
   */
  modifyQuantity = (id, quantity) => {
    let { cartItems } = this.state;
    const chosenItem = cartItems.find(item => item.id === id);
    chosenItem.quantity = quantity;
    if (quantity === 0) {
      cartItems = cartItems.filter(item => item.id !== id);
    }
    const totalItems = cartItems.reduce(
      (acc, curVal) => acc + curVal.quantity,
      0
    );
    const totalCost = cartItems.reduce(
      (acc, curVal) => acc + curVal.quantity * curVal.price,
      0
    );
    localStorage.techlinkItems = JSON.stringify(cartItems);
    localStorage.techlinkItemsTotal = totalItems;
    this.setState({
      cartItems,
      totalItems,
      totalCost
    });
  };

  /**
   * @method clearCart
   * @description method for clearing cart
   * @returns {undefined}
   */
  clearCart = () => {
    const totalItems = 0;
    delete localStorage.techlinkItems;
    localStorage.techlinkItemsTotal = totalItems;

    this.setState({
      cartItems: [],
      totalItems,
      totalCost: 0
    });
  };

  /**
   * @method render
   * @returns {JSX} landing page
   */
  render() {
    const { loading, totalItems, cartItems, totalCost } = this.state;
    return (
      <Fragment>
        <Navbar totalItems={totalItems} />
        <section className="page-header gen-section-padding pink-bg white-color text-align-center">
          <h1>Your Cart</h1>
        </section>
        {loading && <Loader />}
        {!loading && cartItems.length > 0 && (
          <section className="cart-items flex-wrap-wrap gen-section-padding d-flex white-bg">
            {cartItems.map(item => (
              <CartItem
                key={item.id}
                {...item}
                modifyQuantity={this.modifyQuantity}
              />
            ))}
            <div className="cart-total  text-align-center">
              Total: <span className="pink-color">${totalCost}</span>
            </div>
            <button
              onClick={this.clearCart}
              type="button"
              className="clear-cart-btn pink-btn"
            >
              Clear Cart
            </button>
          </section>
        )}
        {!loading && cartItems.length === 0 && (
          <div className="empty-results cart-items d-flex align-items-center justify-content-center">
            <p className="text-align-center">
              Your cart is empty. Head over to the{" "}
              <Link to="/" className="pink-color">
                store
              </Link>{" "}
              to add some items
            </p>
          </div>
        )}
        <Footer />
      </Fragment>
    );
  }
}

export default CartPage;

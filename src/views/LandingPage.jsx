import React, { Fragment, Component } from "react";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";

// CSS
import "../css/LandingPage.css";

/**
 * @class LandingPage
 */
class LandingPage extends Component {
  state = {
    products: [],
    totalItems: 0,
    loading: true
  };

  /**
   * @method componentDidMount
   * @description The componentDidMount lifecycle
   * @returns {undefined}
   */
  componentDidMount() {
    const mockData = [
      {
        item: "Random Item 1",
        price: 20,
        image: "https://placehold.it/100",
        id: 1
      },
      {
        item: "Random Item 2",
        price: 8,
        image: "https://placehold.it/100",
        id: 2
      },
      {
        item: "Random Item 3",
        price: 18,
        image: "https://placehold.it/100",
        id: 3
      },
      {
        item: "Random Item 4",
        price: 15,
        image: "https://placehold.it/100",
        id: 4
      },
      {
        item: "Random Item 5",
        price: 3,
        image: "https://placehold.it/100",
        id: 5
      },
      {
        item: "Random Item 6",
        price: 3,
        image: "https://placehold.it/100",
        id: 6
      }
    ];

    setTimeout(() => {
      this.setState({
        products: mockData,
        loading: false
      });
    }, 1000);
  }

  /**
   * @method addToCart
   * @description method for adding item to cart
   * @param {number} id - id of product
   * @returns {undefined}
   */
  addToCart = id => {
    const { products } = this.state;
    const chosenProduct = products.find(product => product.id === id);
    let items = localStorage.techlinkItems
      ? JSON.parse(localStorage.techlinkItems)
      : [];
    const existingItem = items.find(item => item.id === id);
    if (existingItem) {
      existingItem.quantity += 1;
    }
    items = existingItem
      ? items
      : [...items, { ...chosenProduct, quantity: 1 }];
    localStorage.techlinkItems = JSON.stringify(items);
    const totalItems = items.reduce((acc, curVal) => acc + curVal.quantity, 0);
    localStorage.techlinkItemsTotal = totalItems;
    this.setState({
      totalItems
    });
  };

  /**
   * @method render
   * @returns {JSX} landing page
   */
  render() {
    const { loading, products, totalItems } = this.state;
    return (
      <Fragment>
        <Navbar totalItems={totalItems} />
        <section className="page-header gen-section-padding pink-bg white-color text-align-center">
          <h1>Welcome to the techlink store!</h1>
          <p>Below you&apos;ll find the items we have available</p>
        </section>
        {loading && <Loader />}
        <section className="landing-items flex-wrap-wrap gen-section-padding d-flex white-bg">
          {products.map(product => (
            <ProductCard
              key={product.id}
              {...product}
              addToCart={() => this.addToCart(product.id)}
            />
          ))}
        </section>
        <Footer />
      </Fragment>
    );
  }
}

export default LandingPage;

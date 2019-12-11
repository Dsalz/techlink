import React, { Fragment, Component } from "react";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/**
 * @class NotFoundPage
 */
class NotFoundPage extends Component {
  state = {};

  /**
   * @method render
   * @returns {JSX} not found page
   */
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="not-found-wrapper text-align-center">
          <p>This page does not exist</p>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default NotFoundPage;

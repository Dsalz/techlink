import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Views
import LandingPage from "./views/LandingPage";
import CartPage from "./views/CartPage";
import NotFoundPage from "./views/NotFoundPage";

// Components
import ScrollToTop from "./ScrollToTop";

// CSS
import "./css/App.css";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/cart" component={CartPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  );
};

const appDiv = document.getElementById("app");

render(<App />, appDiv);

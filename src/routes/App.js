import React from "react";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";

import Home from "../pages/Home";
import Cart from "../pages/Cart";

const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/cart" component={Cart} />
    </Switch>
    </BrowserRouter>
  );
};

export default App;

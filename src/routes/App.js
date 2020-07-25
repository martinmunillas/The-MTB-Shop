import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Cart from "../pages/Cart";
import NotFound from "../pages/NotFound";
import Layout from "../components/Layout";

const App = () => {
  return (
    <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/cart' component={Cart} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
    </BrowserRouter>
  );
};

export default App;

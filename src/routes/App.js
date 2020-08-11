import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/Public/Home";
import Cart from "../pages/Public/Cart";
import ProductPage from "../pages/Public/ProductPage";
import NotFound from "../pages/Public/NotFound";
import AdminHome from "../pages/Admin/AdminHome";
import AdminCreateProduct from "../pages/Admin/AdminCreateProduct";
import AdminProductsList from "../pages/Admin/AdminProductsList";
import AdminEditProduct from "../pages/Admin/AdminEditProduct";

import "../assets/styles/utils/Reset.scss";
import PublicRoute from "../components/Public/PublicRoute";
import AdminRoute from "../components/Admin/AdminRoute";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Switch> */}

        <Switch>
          <PublicRoute exact path="/" component={Home} />
          <PublicRoute exact path="/cart" component={Cart} />
          <PublicRoute exact path="/product/:productId" component={ProductPage} />
          <AdminRoute exact path="/admin" component={AdminHome} />
          <AdminRoute exact path="/admin/create-product" component={AdminCreateProduct} />
          <AdminRoute exact path="/admin/product/:productId" component={AdminEditProduct} />
          <AdminRoute exact path="/admin/products" component={AdminProductsList} />
          <PublicRoute component={NotFound} />
        </Switch>
    </BrowserRouter>
  );
};

export default App;

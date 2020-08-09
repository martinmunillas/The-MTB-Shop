import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AdminHome from "../pages/AdminHome";

import '../assets/styles/utils/Reset.scss'

const Admin = () => {
  return (
    <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={AdminHome} />
      </Switch>
    </Layout>
    </BrowserRouter>
  );
};

export default Admin;

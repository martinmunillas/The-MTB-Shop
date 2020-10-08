import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "../../assets/styles/components/Public/Header.scss";


import Menu from './Menu'

const Header = (props) => {
  return (
    <header className="header">
      <div className="headerCont">
      <section className="logo">
        <Link to="/">
          <img src='/static/logo.svg' alt="logo" className="logo_image" />
        </Link>
      </section>
      <section className="menuCont">
        <Menu />
      </section>
      <Link to="/cart" className="cart">
        <img src='/static/whiteCart.svg' alt="cart" className="cart_image" />
        <span className="cartCount">{props.cart.length}</span>
      </Link>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, null)(Header);

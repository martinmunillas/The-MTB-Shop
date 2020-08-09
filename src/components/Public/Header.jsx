import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "../../assets/styles/components/Public/Header.scss";

import logo from "../../assets/static/logo.svg";
import whiteCart from "../../assets/static/whiteCart.svg";

const Header = (props) => {
  return (
    <header className="header">
      <div className="headerCont">
      <section className="logo">
        <Link to="/">
          <img src={logo} alt="logo" className="logo_image" />
        </Link>
      </section>
      <section className="menuCont">
        <nav className="menu">
          <h2 className="menu_item">
            <Link to="/">Home</Link>
          </h2>
          <h2 className="menu_item">
            <a href="">Bike</a>
          </h2>
          <h2 className="menu_item">
            <a href="">Gear</a>
          </h2>
          <h2 className="menu_item">
            <a href="">Contact</a>
          </h2>
        </nav>
      </section>
      <Link to="/cart" className="cart">
        <img src={whiteCart} alt="cart" className="cart_image" />
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

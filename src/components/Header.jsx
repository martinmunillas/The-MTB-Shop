import React from "react";

import "../assets/styles/components/Header.scss";
import logo from "../assets/static/logo.svg";
import whiteCart from "../assets/static/whiteCart.svg";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <section className="logo">
          <img src={logo} alt="logo" className="logo_image" />
        </section>
        <section className="menuCont">
          <nav className="menu">
            <h2 className="menu_item">
              <a href="">Home</a>
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
        <section className="cart">
          <img src={whiteCart} alt="cart" className="cart_image" />
          <a href=""></a>
        </section>
      </header>
    );
  }
}

export default Header;

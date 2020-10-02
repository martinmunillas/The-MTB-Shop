import React from "react";
import { Link } from "react-router-dom";

import "../../assets/styles/components/Public/Menu.scss";
import { connect } from "react-redux";

const Menu = (props) => {
  return (
    <nav className="menu">
      <h2 className="menu_item" name="home">
        <Link to="/">Home</Link>
      </h2>
      <h2 className="menu_item" name="bikes">
        <a href="">Bike</a>
      </h2>
      <h2 className="menu_item" name="gear">
        <a href="">Gear</a>
      </h2>
      <h2 className="menu_item" name="contact">
        <a href="">Contact</a>
      </h2>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    currentPage: state.currentPage,
  };
};

export default connect(mapStateToProps, null)(Menu);

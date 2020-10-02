import React from "react";
import { connect } from "react-redux";

import "../../assets/styles/components/Public/CarouselItem.scss";
import "../../assets/styles/components/Admin/AdminPreviewProduct.scss";

import greyCart from "../../assets/static/greyCart.svg";
const bike = require("../../assets/static/products/bike.svg");

const AdminPreviewProduct = (props) => {
  const {
    name,
    imageSrc,
    price,
    discount,
    exchange,
  } = props;

  return (
    <div className="adminProduct">
        <div className="product_top">
          {discount && (
            <div className="product_top-discount">
              <h2 className="product_top-discountValue">{discount}%</h2>
            </div>
          )}
          <img
            src={greyCart}
            alt="cart"
            className="product_top-cart"
          />
          <img src={bike} alt={name} className="product_top-image" />
        </div>
        <div className="product_bottom">
          <h2 className="product_bottom-name">{name}</h2>
          {discount ? (
            <div className="price">
              <p className="oldPrice">
                ${price} {exchange}
              </p>
              <p className="currentPrice">
                ${(price * (100 - discount)) / 100} {exchange}
              </p>
            </div>
          ) : (
            <div className="price">
              <p className="currentPrice">
                ${price} {exchange}
              </p>
            </div>
          )}
        </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    exchange: state.exchange,
  };
};

export default connect(mapStateToProps, null)(AdminPreviewProduct);

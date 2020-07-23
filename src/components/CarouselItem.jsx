import React from "react";
import { connect } from "react-redux";

import { addToCart } from "../redux/actions";

import "../assets/styles/components/CarouselItem.scss";
import greyCart from "../assets/static/greyCart.svg";
import bike from "../assets/static/products/bike.svg";

const CarouselItem = (props) => {
  const {
    id,
    name,
    description,
    types,
    imageSrc,
    price,
    discount,
    exchange,
  } = props;

  const handleAddToCart = () => {
    props.addToCart({
      id,
      name,
      description,
      types,
      imageSrc,
      price,
      discount,
    });
  };
  return (
    <div className="product">
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
          onClick={handleAddToCart}
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

const mapDispatchToProps = {
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CarouselItem);

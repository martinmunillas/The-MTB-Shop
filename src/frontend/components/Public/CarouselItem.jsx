import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { addToCart } from "../../redux/actions";

import "../../assets/styles/components/Public/CarouselItem.scss";


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

  let amount = 0;

  const handleAddToCart = () => {
    amount++;
    props.addToCart({
      id,
      name,
      description,
      types,
      imageSrc,
      price,
      discount,
      amount,
    });
  };
  return (
    <div className="product">
      <Link to={`product/${id}`}>
        <div className="product_top">
          {discount && (
            <div className="product_top-discount">
              <h2 className="product_top-discountValue">{discount}%</h2>
            </div>
          )}
          <img
            src=''
            alt="cart"
            className="product_top-cart"
            onClick={handleAddToCart}
          />
          <img src='' alt={name} className="product_top-image" />
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
      </Link>
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

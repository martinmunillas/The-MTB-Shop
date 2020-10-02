import React from "react";
import { connect } from "react-redux";

import { addToCart, removeFromCart } from "../../redux/actions";

import "../../assets/styles/components/Public/CartItem.scss";

import bike from "../../assets/static/products/bike.svg";

const CartItem = (props) => {
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

  let { amount } = props;

  const handleRemove = () => {
    props.removeFromCart({ id });
  };

  const handleLessAmount = () => {
    --amount;
    if (amount < 1) {
      props.removeFromCart({ id });
    } else {
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
    }
  };

  const handleMoreAmount = () => {
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
    <div className="cartItem">
      <div className="cartItem_image">
        <img src={bike} alt={name} />
      </div>
      <h2 className="cartItem_name">{name}, Orange, L</h2>{" "}
      {/* Orange and L represents the product options that have to be replaced later */}
      <div className="cartItem_amount">
        Amount {amount}
        <div className="cartItem_amount-buttons">
          <span className="moreAmount" onClick={handleMoreAmount}></span>
          <span className="lessAmount" onClick={handleLessAmount}></span>
        </div>
      </div>
      <div className="cartItem_price">
        <h2>
          Subtotal: $
          {(Math.floor(price * (100 - discount) * amount) / 100).toFixed(2)}{" "}
          {exchange}
        </h2>
      </div>
      <div className="remove" onClick={handleRemove}>
        <p>✖</p>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addToCart,
  removeFromCart,
};

const mapStateToProps = (state) => {
  return {
    exchange: state.exchange,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);

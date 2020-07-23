import React from "react";
import { connect } from 'react-redux'

import { addToCart, removeFromCart } from "../redux/actions";

import "../assets/styles/components/CartItem.scss";
import bike from "../assets/static/products/bike.svg";

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

  let {
    amount,
  } = props

  const handleRemove = () => {
    props.removeFromCart({ id })
  }

  const handleLessAmount = () => {
    --amount;
    if(amount < 1) {
        props.removeFromCart({ id })
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
      <img src={bike} alt="" className="cartItem_image" />
      <h2 className="cartItem_name">{name}</h2>
      <p className="cartItem_amount">Amount {amount}</p>
      <button className="moreAmount" onClick={handleMoreAmount}>
        more
      </button>
      <button className="lessAmount" onClick={handleLessAmount}>
        less
      </button>
      <button className="remove" onClick={handleRemove}>remove</button>
    </div>
  );
};



const mapDispatchToProps = {
    addToCart,
    removeFromCart,
  }  

export default connect(null, mapDispatchToProps)(CartItem);

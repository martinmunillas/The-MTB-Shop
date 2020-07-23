import React from "react";
import { connect } from "react-redux";

import Header from "../components/Header";
import CartItem from '../components/CartItem'

const Cart = (props) => {
    return (
      <>
        <Header />
        {props.cart.length === 0 ? (
            <h2>You haven't add any product to your cart</h2>
        ) : (  
            <div className="cartItems">
            {props.cart.map(item => (
                <CartItem key={item.id} {...item} />
            ))}
        </div>
            )}
      </>
    );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, null)(Cart);
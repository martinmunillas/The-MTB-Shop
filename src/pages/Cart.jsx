import React from "react";
import { connect } from "react-redux";

import CartItem from "../components/CartItem";
import CartCheck from "../components/CartCheck";

import '../assets/styles/pages/Cart.scss'

const Cart = (props) => {
  return (
    <div className="cartPage">
      {props.cart.length === 0 ? (
        <h2 className="emptyCart">You haven't add any product to your cart</h2>
      ) : (
        <>
          <div className="cartItems">
            {props.cart.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
          <div className="cartCheck">
            <CartCheck list={props.cart} nextStep="Proceed to Checkout" />
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, null)(Cart);

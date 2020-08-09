import React from "react";

import "../../assets/styles/components/Public/CartCheck.scss";

const CartCheck = (props) => {
  let totalPrice = 0;

  const getDiscountedPriceForAmount = (price, discount, amount) => {
      let z = Math.floor(price * (100 - discount) * amount) / 100
        return z
  }

  const getTotalPrice = (price) => {
    totalPrice += price;
  };
  return (
    <div className="cartCheckCont">
      <section className="cartCheck_details">
        <section className="cartCheck_details-summary">
          {props.list.map((item) => (
            <div key={item.id} className="cartCheck_details-summaryItem">
              <h2>{item.name}</h2>
              <p>
                {getDiscountedPriceForAmount(item.price, item.discount, item.amount).toFixed(2)}
                {console.log(item.price, item.discount, item.amount)}
              </p>
              {getTotalPrice(getDiscountedPriceForAmount(item.price, item.discount, item.amount))}
            </div>
          ))}
        </section>
        <section className="cartCheck_details-total">
          <hr className="cartCheckSeparator" />
          <div className="cartCheck_details-totalPrice">
            <h2> Total</h2>
            <p>{totalPrice.toFixed(2)}</p>
          </div>
        </section>
      </section>
      <button className="cartCheck_proceed">{props.nextStep}</button>
    </div>
  );
};

export default CartCheck;

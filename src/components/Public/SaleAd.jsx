import React from "react";

import "../../assets/styles/components/Public/SaleAd.scss";
import bike from "../../assets/static/products/bike.svg";

const SaleAd = (props) => {
  const { saleItems, price, exchange } = props;

  let oldPrice = 0;

  const handleAddPrices = y => {
    oldPrice += y
  }

  return (
    <section className="saleAd">
      <div className="saleAd_content">
      <div className="saleAd_content-items">
        {saleItems.map((item) => (
          <>
            <div className="saleItems_item">
              <img src={bike} alt={item.name} className="comboImage" />
              <h2>{item.name}</h2>
            </div>
            {item.id < saleItems.length && <h2 className="moreAd"> + </h2>}
            {handleAddPrices(item.price)}
          </>
        ))}
        </div>
        <div className="comboPrices">
        <p className="oldComboPrice">
          ${oldPrice} {exchange}
        </p>
        <div className="comboPrice">
          ${price} {exchange}
        </div>
      </div>
      </div>
    </section>
  );
};

export default SaleAd;
import React from "react";

import "../../assets/styles/components/Public/SaleAd.scss";

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
        {saleItems.map((item, i) => (
          <React.Fragment key={i}>
            <div className="saleItems_item">
              <img src='' alt={item.name} className="comboImage" />
              <h2>{item.name}</h2>
            </div>
            {item.id < saleItems.length && <h2 className="moreAd"> + </h2>}
            {handleAddPrices(item.price)}
          </React.Fragment>
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

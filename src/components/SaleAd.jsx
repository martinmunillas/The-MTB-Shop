import React from "react";

import '../assets/styles/components/SaleAd.scss'
import bike from "../assets/static/products/bike.svg";

const SaleAd = (props) => {
    return (
      <section className="saleAd">
        <div className="saleAd_content">
          {props.saleItems.map((item) => (
            <div key={item.id}>
            <img src={bike} alt="Item.name"/>
            <h2> + </h2>
            </div>
          ))}
        </div>
      </section>
    );
  }

export default SaleAd;

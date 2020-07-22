import React from "react";

import '../assets/styles/components/SaleAd.scss'

class SaleAd extends React.Component {
  render() {
    return (
      <section className="saleAd">
        <div className="saleAd_content">
          {this.props.saleItems.map((item) => (
            <h2 key={Math.random()}>{item} + </h2>
          ))}
        </div>
      </section>
    );
  }
}

export default SaleAd;

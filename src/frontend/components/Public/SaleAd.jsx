import React from 'react';
import { connect } from 'react-redux';
import '../../assets/styles/components/Public/SaleAd.scss';

const SaleAd = (props) => {
  const { items, comboItems, price, exchange } = props;
  const saleItems = items.filter((item) => comboItems.includes(item.id));

  let oldPrice = saleItems.reduce((ac, cur) => ac + cur.price, 0);

  return (
    <section className='saleAd'>
      <div className='saleAd_content'>
        <div className='saleAd_content-items'>
          {saleItems.map((item, i) => (
            <React.Fragment key={i}>
              <div className='saleItems_item'>
                <img src={item.imageSrc} alt={item.name} className='comboImage' />
                <h2>{item.name}</h2>
              </div>
              {i + 1 < saleItems.length && <h2 className='moreAd'> + </h2>}
            </React.Fragment>
          ))}
        </div>
        <div className='comboPrices'>
          <p className='oldComboPrice'>
            ${oldPrice} {exchange}
          </p>
          <div className='comboPrice'>
            ${price} {exchange}
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

export default connect(mapStateToProps, null)(SaleAd);

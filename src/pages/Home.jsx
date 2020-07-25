import React from "react";
import { connect } from "react-redux";

import SaleAd from "../components/SaleAd";
import CarouselItem from "../components/CarouselItem";
import Carousel from "../components/Carousel";

const Home = (props) => {
  const saleItems = props.items.filter(item => item.discount)

    return (
      <>
        <SaleAd saleItems={props.comboA.items} price={props.comboA.price} exchange={props.exchange} />
        <Carousel header="Sales">
            {saleItems.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
        </Carousel>

        <Carousel header="All Products">
            {props.items.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
        </Carousel>
      </>
    );
  }

const mapStateToProps = (state) => {
  return {
    items: state.items,
    comboA: state.comboA,
    exchange: state.exchange,
  };
};

export default connect(mapStateToProps, null)(Home);

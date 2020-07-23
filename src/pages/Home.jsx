import React from "react";
import { connect } from "react-redux";

import Header from "../components/Header";
import SaleAd from "../components/SaleAd";
import CarouselItem from "../components/CarouselItem";
import Carousel from "../components/Carousel";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Header />
        <Carousel header="Sales">
            {this.props.items.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
        </Carousel>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

export default connect(mapStateToProps, null)(Home);

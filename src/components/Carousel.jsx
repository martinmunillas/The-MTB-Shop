import React from "react";

import "../assets/styles/components/Carousel.scss";

class Carousel extends React.Component {
  render() {
    return (
      <div className="carousel">
        <h1>{this.props.header}</h1>
        <div className="container">{this.props.children}</div>
      </div>
    );
  }
}

export default Carousel;

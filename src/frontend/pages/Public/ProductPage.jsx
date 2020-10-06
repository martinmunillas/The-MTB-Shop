import React from "react";
import { connect } from "react-redux";

import "../../assets/styles/pages/Public/ProductPage.scss";

import { addToCart } from '../../redux/actions'


const ProductContainer = (props) => {
  const { productId } = props.match.params;
  const productData = props.products.filter(
    (product) => product.id == productId
  )[0];

  const {
    id,
    name,
    description,
    types,
    imageSrc,
    price,
    discount,
  } = productData;

  const handleAddToCart = e => {
    e.preventDefault();
    let amount = 5
    props.addToCart({
      id,
      name,
      description,
      types,
      imageSrc,
      price,
      discount,
      amount,
    });
  };

  const handleSelectVariation = (e) => {
    if (e.target.classList.contains("selectedVariation")) {
      e.target.classList.remove("selectedVariation");
    } else {
      e.target.classList.add("selectedVariation");
    }
  };

  return (
    <main className="productPage">
      <section className="mainProduct">
        <div className="mainProduct_image">
          <div className="mainProduct_imageCont">
            <img src='' />
          </div>
        </div>
        <div className="mainProduct_details">
          <h2 className="mainProduct_details-title">{productData.name}</h2>

          <p className="mainProduct_details-price">
            ${productData.price} {props.exchange}
          </p>

          <form
            className="mainProduct_details-options"
            onSubmit={handleAddToCart}
          >
            <ul className="variation">
              <li onClick={handleSelectVariation}>Orange</li>
              <li onClick={handleSelectVariation}>Blue</li>
              <li onClick={handleSelectVariation}>Red</li>
            </ul>
            <ul className="variation">
              <li onClick={handleSelectVariation}>L</li>
              <li onClick={handleSelectVariation}>M</li>
              <li onClick={handleSelectVariation}>S</li>
              <li onClick={handleSelectVariation}>XS</li>
            </ul>
            <div className="amount">
              <p>Amount: </p>
              <input type="number" min="1" max="9" />
            </div>
            <button className="ProductPage_addToCart">
              <img src='' alt="addToCart" className="cart" />
              <h2>Add to Cart</h2>
            </button>
          </form>
        </div>
      </section>
      <section className="descriptionProduct">
        <h2>Product Description:</h2>
        <p className="descriptionProduct_text">{productData.description}</p>
      </section>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.items,
    exchange: state.exchange,
  };
};

const mapDispatchToProps = {
  addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);

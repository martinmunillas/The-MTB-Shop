import React from "react";

import "../../assets/styles/components/Admin/AdminProductItem.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const AdminProductItem = (props) => {
  const { id, name, price, description, exchange } = props;
  return (
    <div className="adminProductItem">
      <Link to={`/admin/product/${id}`}>
        <h2 className="adminProductItem_title">{name}</h2>
        <p className="adminProductItem_description">
          {description.length > 20
            ? description.substr(0, 50) + "..."
            : description}
        </p>
        <h3 className="adminProductItem_price">
          ${price} {exchange}
        </h3>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    exchange: state.exchange,
  };
};

export default connect(mapStateToProps, null)(AdminProductItem);

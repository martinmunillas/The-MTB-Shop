import React from "react";
import { connect } from "react-redux";

import "../../assets/styles/pages/Admin/AdminProductsList.scss";

import AdminProductItem from "../../components/Admin/AdminProductItem";

class AdminProductsList extends React.Component {
  state = {
    products: this.props.products,
  };

  handleSearch = (e) => {
    console.log();
    this.setState({
      products: this.props.products.filter(
        (product) =>
          product.name.toLowerCase().includes(e.target.value) ||
          product.description.toLowerCase().includes(e.target.value) ||
          product.name.includes(e.target.value) ||
          product.description.includes(e.target.value)
      ),
    });
  };

  render() {
    return (
      <div>
        <section className="adminProductListTop">
          <h1 className="adminProductListTop_title">Products List</h1>
          <input
            type="text"
            name="search"
            className="adminProductListTop_search"
            placeholder="Search..."
            onChange={this.handleSearch}
          />
        </section>
        {this.state.products.map((product) => (
          <AdminProductItem key={product.id} {...product} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.items,
  };
};

export default connect(mapStateToProps, null)(AdminProductsList);

import React from "react";
import { connect } from "react-redux";

import { publishProduct } from "../../redux/actions";

import "../../assets/styles/pages/Admin/AdminCreateProduct.scss";

import AdminNewProductForm from "../../components/Admin/AdminNewProductForm";
import AdminPreviewProduct from "../../components/Admin/AdminPreviewProduct";

class AdminCreateProduct extends React.Component {
  state = {
    form: {
      name: "",
      price: 0,
      description: "",
      discount: 0,
    },
  };

  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.publishProduct({
      ...this.state.form,
    });
  };

  render() {
    return (
      <section className="adminCreateProduct">
        <h1>New Product</h1>
        <section className="adminCreateProductCont">
          <div className="adminCreateProduct_preview">
            <AdminPreviewProduct
              name={this.state.form.name || "Bike Model A"}
              price={this.state.form.price || 290}
              discount={this.state.form.discount || null}
            />
          </div>
          <div className="adminCreateProduct_form">
            <AdminNewProductForm
              onChange={this.handleChange}
              formValues={this.state.form}
              onSubmit={this.handleSubmit}
            />
          </div>
        </section>
      </section>
    );
  }
}

const mapDispatchtoProps = {
  publishProduct,
};

export default connect(null, mapDispatchtoProps)(AdminCreateProduct);

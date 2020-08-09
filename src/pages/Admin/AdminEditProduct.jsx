import React from "react";
import { connect } from "react-redux";


import { editProduct } from "../../redux/actions";

import "../../assets/styles/pages/Admin/AdminCreateProduct.scss";

import AdminNewProductForm from "../../components/Admin/AdminNewProductForm";
import AdminPreviewProduct from "../../components/Admin/AdminPreviewProduct";

class AdminEditProduct extends React.Component {
  constructor(props) {
    super(props);
    const { productId } = this.props.match.params
    const product = props.products.filter(product => product.id == productId)[0]
    this.state = {
      form: {
        name: product.name,
        price: product.price,
        description: product.description,
        discount: product.discount,
        id: product.id,
      },
    };
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
      this.props.editProduct({
          ...this.state.form,
        });
    };
    
    render() {
        const { id, name, description, price, discount } = this.props.products[0]
        return (
            <section className="adminCreateProduct">
        <h1>Edit {name}</h1>
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

const mapStatetoProps = (state) => {
    return {
        products: state.items
    }
}

const mapDispatchtoProps = {
  editProduct,
};

export default connect(mapStatetoProps, mapDispatchtoProps)(AdminEditProduct);

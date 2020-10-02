import React from "react";

import '../../assets/styles/components/Admin/AdminNewProductForm.scss'

const AdminNewProductForm = (props) => {
  return (
    <form className="form" onSubmit={props.onSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        className="name"
        onChange={props.onChange}
        value={props.formValues.name}
      />
      <label>Price</label>
      <input
        type="number"
        name="price"
        className="name"
        onChange={props.onChange}
        value={props.formValues.price}
      />
      <label>Description</label>
      <textarea
        name="description"
        className="name"
        onChange={props.onChange}
        value={props.formValues.description}
      />
      <label>Discount (percentage)</label>
      <input
        type="number"
        name="discount"
        className="name"
        onChange={props.onChange}
        value={props.formValues.discount}
      />
      <label>Photos</label>
      <input type="file" name="photo" id="" />
      <button type="submit">Publish</button>
    </form>
  );
};

export default AdminNewProductForm;

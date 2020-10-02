import React from "react";

import "../../assets/styles/components/Admin/AdminMenu.scss";
import { Link } from "react-router-dom";

const AdminMenu = () => {
  return (
    <div className="adminMenuCont">
      <div className="adminMenu">
        <nav className="adminMenu_menu">
          <Link to="/">
            <ul className="adminMenu_item" id="home">
              Home
            </ul>
          </Link>
            <ul className="adminMenu_item" id="products">
              Products
              <Link to="/admin/products">
                <li className="adminMenu_subItem" id="adminMenuSelected">All Products</li>
              </Link>
              <Link to="/admin/create-product">
                <li className="adminMenu_subItem">Create New Product</li>
              </Link>
            </ul>
          <Link to="/admin/">
            <ul className="adminMenu_item">Ads</ul>
          </Link>
          <Link to="/admin/">
            <ul className="adminMenu_item">Customize</ul>
          </Link>
          <ul className="adminMenu_item">Settings</ul>
        </nav>
      </div>
    </div>
  );
};

export default AdminMenu;

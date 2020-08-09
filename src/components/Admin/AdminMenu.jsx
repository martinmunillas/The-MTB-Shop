import React from "react";

import "../../assets/styles/components/Admin/AdminMenu.scss";
import { Link } from "react-router-dom";

const AdminMenu = () => {
  return (
    <div className="adminMenuCont">
      <div className="adminMenu">
        <nav className="adminMenu_menu">
          <Link to="/">
            <li className="adminMenu_item" id="home">
              Home
            </li>
          </Link>
          <Link to="/admin/products">
            <li className="adminMenu_item">Products</li>
          </Link>
          <Link to="/admin/create-product">
            <li className="adminMenu_item">Ads</li>
          </Link>
          <Link to="/admin/">
            <li className="adminMenu_item">Customize</li>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default AdminMenu;

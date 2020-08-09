import React from "react";

import "../../assets/styles/components/Admin/AdminHeader.scss";

import logo from "../../assets/static/logo.svg";

const AdminHeader = () => {
  return (
    <div className="adminHeaderCont">
      <header className="adminHeader">
        <img src={logo} alt="" />
      </header>
    </div>
  );
};

export default AdminHeader;

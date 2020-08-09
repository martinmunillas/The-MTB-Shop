import React from "react";

import "../../assets/styles/components/Admin/AdminLayout.scss";

import AdminMenu from "./AdminMenu";
import AdminHeader from "./AdminHeader";

const AdminLayout = (props) => {
  return (
    <>
      <main className="adminLayout">
        <AdminHeader />
        <div className="adminMain">
          <AdminMenu />
          <section className="adminMain_Content">{props.children}</section>
        </div>
      </main>
    </>
  );
};

export default AdminLayout;

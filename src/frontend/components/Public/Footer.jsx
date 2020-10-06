import React from "react";

import "../../assets/styles/components/Public/Footer.scss";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="footerCont">
        <section className="logo">
            <img src='' alt="logo" className="logo_image" />
        </section>
        <p className="design">Designed and Developed by Martin Munilla</p>
      </div>
    </footer>
  );
};

export default Footer;

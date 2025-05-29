import React from "react";
import "./partner.css";
import Header from "../pages/Header/header";
import Footer from "../pages/Footer/footer";

function Partners() {
  return (
    <div>
      <Header />

      <div className="partner-main-wrapper">
        <h2>Bizning hamkorlar</h2>
        <div className="partner-first-wrapper">
          <img src="./src/assets/frame1.svg" alt="" />
          <img src="./src/assets/Frame2.svg" alt="" />
          <img src="./src/assets/Frame3.svg" alt="" />
          <img src="./src/assets/Frame4.svg" alt="" />
        </div>
        <div className="partner-second-wrapper">
          <img src="./src/assets/Frame5.svg" alt="" />
          <img src="./src/assets/Frame6.svg" alt="" />
          <img src="./src/assets/Frame7.svg" alt="" />
          <img src="./src/assets/Frame8.svg" alt="" />
        </div>
        <div className="partner-third-wrapper">
          <img src="./src/assets/Frame9.svg" alt="" />
          <img src="./src/assets/Frame10.svg" alt="" />
          <img src="./src/assets/letfly.svg" alt="" />
          <img src="./src/assets/frame1.svg" alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Partners;

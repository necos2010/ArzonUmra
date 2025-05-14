import React from "react";
import "./tickets.css";
import { Link } from "react-router-dom";
import Header from "../pages/Header/header";
import Footer from "../pages/Footer/footer";
import PriceList from "./PriceList";
import CityList from "./CityList";
import TicketFilter from "./TicketFilter";
import TourCard from "./TourCard/TourCards";
import TourData from "./TourData/TourData";

function Tickets() {
  return (
    <div className="conteiner">
      <Header />
      <div className="banner">
        <img src="./src/assets/plane.svg" alt="" />
      </div>
      <div className="banner-responsive">
        <img src="./src/assets/small-plane.svg" alt="" />
      </div>
      <TicketFilter />
      <TourCard />
      <TourData />
      <CityList />
      <Footer />
    </div>
  );
}

export default Tickets;

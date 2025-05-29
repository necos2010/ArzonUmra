import React from "react";
import Header from "../pages/Header/header";
import TourGrid from "../pages/TourGrid/tourgrid";
import Carousel from "../pages/Carousel/UmraCarousel";
import Rewiev from "../pages/Rewiev/rewiev";
import Footer from "../pages/Footer/footer";
import Tours from "../pages/Tours/tours";
import tourData from "../Data/cards";

function MainPage() {
  return (
    <div>
      <Header />
      <Carousel />
      <TourGrid />
      <Tours tours={tourData} withSlider={true} withConditionals={false} />

      <Rewiev />
      <Footer />
    </div>
  );
}

export default MainPage;

import React, { useState } from "react";
import Header from "../pages/Header/header";
import UmraCarousel from "../pages/Carousel/UmraCarousel";
import Footer from "../pages/Footer/footer";
import Tours from "../pages/Tours/tours";
import tourData from "../Data/cards";
import "./UmraPucks.css";

function UmraPucks() {
  const [avia, setAvia] = useState("");
  const [tourType, setTourType] = useState("");
  const [firms, setFirms] = useState("");
  const [hotelDistance, setHotelDistance] = useState("");
  const [showMore, setShowMore] = useState(false);

  const extraTours = tourData.filter(
    (tour) => tour.id === 10 || tour.id === 11 || tour.id === 12
  );

  const baseFilteredTours = tourData.filter((tour) => {
    return (
      (avia === "" || tour.airlineLogos.some((logo) => logo.includes(avia))) &&
      (tourType === "" || tour.classType.toLowerCase().includes(tourType)) &&
      (firms === "" ||
        tour.airlineLogos.some((logo) => logo.includes(firms))) &&
      (hotelDistance === "" || tour.hotelDistance === hotelDistance)
    );
  });

  const displayedTours = showMore
    ? [...baseFilteredTours, ...extraTours]
    : baseFilteredTours;

  return (
    <div>
      <Header />
      <h2 className="UmraPucks-h2">UMRA TO'PLAMLARI</h2>
      <div className="Umrapucks-fragment">
        <UmraCarousel />
      </div>

      <div className="dropdown-container">
        <select
          className="dropdown"
          value={avia}
          onChange={(e) => setAvia(e.target.value)}
        >
          <option value="">Avia Kompaniyalar</option>
          <option value="SAT">SAT Airlines</option>
          <option value="uzbairways">Uzbekistan Airways</option>
          <option value="turkish">Turkish Airlines</option>
        </select>

        <select
          className="dropdown"
          value={tourType}
          onChange={(e) => setTourType(e.target.value)}
        >
          <option value="">To’plam Turi</option>
          <option value="economy">Economy</option>
          <option value="standard">Standard</option>
          <option value="comfort">Comfort</option>
          <option value="vip">Vip</option>
          <option value="lux">Lux</option>
        </select>

        <select
          className="dropdown"
          value={firms}
          onChange={(e) => setFirms(e.target.value)}
        >
          <option value="">Tur Firmalar</option>
          <option value="risola">Risola</option>
          <option value="centrum">Centrum</option>
        </select>

        <select
          className="dropdown"
          value={hotelDistance}
          onChange={(e) => setHotelDistance(e.target.value)}
        >
          <option value="">2 Haramdan Mehmonxona Masofasi</option>
          <option value="5km">5 km</option>
          <option value="10km">10 km</option>
        </select>
      </div>

      {displayedTours.length > 0 ? (
        <Tours
          tours={displayedTours}
          withSlider={false}
          withConditionals={false}
        />
      ) : (
        <p className="no-results">Hech narsa topilmadi</p>
      )}

      <button
        className="more-show"
        onClick={() => setShowMore((prev) => !prev)}
      >
        {showMore ? "Yopish" : "Ko'proq ko'rsatish"}
      </button>

      <Footer />
    </div>
  );
}

export default UmraPucks;

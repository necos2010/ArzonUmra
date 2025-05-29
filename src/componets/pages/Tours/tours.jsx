import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./tour.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function Tours({
  tours = [],
  isLoading = false,
  error = null,
  withConditionals = true,
  withSlider = false,
}) {
  if (withConditionals) {
    if (isLoading)
      return <div className="loading-spinner">Loading tours...</div>;
    if (error)
      return <div className="error-message">Error: {error.message}</div>;
    if (!tours || tours.length === 0) return <p>No tours available</p>;
  }

  return (
    <div className="main-tours-wrapper">
      {withSlider ? (
        <Swiper
          spaceBetween={20}
          slidesPerView={1.1}
          navigation
          modules={[Navigation]}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.3 },
            1024: { slidesPerView: 3.3 },
          }}
        >
          {tours.map((tour) => (
            <SwiperSlide key={tour.id}>
              <div className="tour-card">
                <div className="card-header">
                  {tour.airlineLogos?.map((logo, index) => (
                    <img key={index} src={logo} alt="Airline logo" />
                  ))}
                </div>
                <img
                  className="Overlay"
                  src={tour.overlayImage}
                  alt="Overlay"
                />
                <h3>{tour.classType}</h3>
                <div className="card-info">
                  {tour.additionalInfo?.map((imgSrc, index) => (
                    <img key={index} src={imgSrc} alt="Additional info" />
                  ))}
                </div>
                <div className="cards-info-button">
                  <p>
                    from <span>{tour.price}$</span>
                  </p>
                  <Link to={`econom`}>More</Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="cards-wrapper">
          {tours.map((tour) => (
            <div key={tour.id} className="tour-card">
              <div className="card-header">
                {tour.airlineLogos?.map((logo, index) => (
                  <img key={index} src={logo} alt="Airline logo" />
                ))}
              </div>
              <img className="Overlay" src={tour.overlayImage} alt="Overlay" />
              <h3>{tour.classType}</h3>
              <div className="card-info">
                {tour.additionalInfo?.map((imgSrc, index) => (
                  <img key={index} src={imgSrc} alt="Additional info" />
                ))}
              </div>
              <div className="cards-info-button">
                <p>
                  from <span>{tour.price}$</span>
                </p>
                <Link to={`econom`}>More</Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Tours;

import React, { useRef } from "react";
import "./TourCards.css";
import tourData from "../../Data/TourCard";

function TourCards() {
  const scrollRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    const slider = scrollRef.current;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
    scrollRef.current.classList.remove("active");
  };

  const handleMouseUp = () => {
    isDown = false;
    scrollRef.current.classList.remove("active");
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const slider = scrollRef.current;
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // чувствительность
    slider.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      className="tour-scroll-container"
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {tourData.map((tour) => (
        <div key={tour.id} className="tour-cards">
          <img src={tour.imageUrl} alt={tour.title} className="tour-image" />
          <div className="tour-info">
            <h2>{tour.title}</h2>
            <p>{tour.description}</p>
            <a href="#">{tour.linkText}</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TourCards;

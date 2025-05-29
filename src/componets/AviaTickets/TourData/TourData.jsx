import React, { useRef } from "react";
import "./TourData.css";
import TourDatas from "../../Data/TourDatas";

function TourData() {
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
    const walk = (x - startX) * 2; // Чувствительность
    slider.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="tour-data-wrapper">
      <h2>MAXSUS TAKLIFLAR</h2>
      <div className="tour-scroll-outer">
        <div
          className="tour-scrolll-container"
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {TourDatas.map((data) => (
            <div key={data.id} className="TourData">
              <img
                src={data.imageUrl}
                alt={data.title}
                className="TourData-img"
              />
              <span className="TourData-price">{data.title}</span>
              <div className="TourData-info">
                <h2>{data.header}</h2>
                <p>{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TourData;

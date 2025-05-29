import React from "react";
import cities from "../Data/cites";
import "./CityList.css";

const CityList = () => {
  return (
    <div className="city-list-container">
      <h1 className="city-list-title">MASHXUR YO'NALISHLAR</h1>
      <div className="city-list-grid">
        {cities.map((city) => (
          <div key={city.id} className="city-list-card">
            <img
              src={city.flag}
              alt={`${city.country} flag`}
              className="city-list-flag"
            />
            <div className="city-list-info">
              <h3 className="city-list-city-name">{city.city}</h3>
              <p className="city-list-country-name">{city.country}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityList;

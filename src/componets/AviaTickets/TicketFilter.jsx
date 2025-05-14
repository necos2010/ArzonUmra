import React from "react";
import "./TicketFilter.css";

const TicketFilter = () => {
  return (
    <div className="filter-container">
      <input
        type="text"
        placeholder="Qayerdan"
        className="filter-input left-rounded"
      />

      <div className="filter-input swap-field">
        <span className="swap-icon">⇄</span>
        <input type="text" placeholder="Qayerga" />
      </div>

      <div className="filter-input icon-input">
        <span className="calendar-icon"></span>
        <input type="date" placeholder="Ketish" />
      </div>

      <div className="filter-input icon-input">
        <span className="calendar-icon"></span>
        <input type="date" placeholder="Qaytish" />
      </div>

      <div className="filter-input select-field">
        <select>
          <option>Klass</option>
          <option>Ekonom</option>
          <option>Biznes</option>
        </select>
      </div>

      <button className="filter-button right-rounded">Chiptani Topish</button>
    </div>
  );
};

export default TicketFilter;

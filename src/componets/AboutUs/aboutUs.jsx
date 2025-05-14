import React, { useState } from "react";
import Header from "../pages/Header/header";
import Footer from "../pages/Footer/footer";
import TourGrid from "../pages/TourGrid/tourgrid";
import { Link, NavLink } from "react-router-dom";

import "./aboutus.css";
import StatsPanel from "./StatsPanel/StatsPanel";

function AboutUs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionItems = [
    {
      title: "Maqsadimiz",
      content:
        "        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quibusdam iure eum dolorem error. Voluptate illo libero accusamus ad exercitationem.",
    },
    {
      title: "Avzalliklarimiz",
      content:
        "        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut corrupti incidunt cum? Deleniti, perspiciatis veniam? Minima debitis harum quidem, id odio tempore molestiae error, adipisci assumenda, ratione quo! Nulla suscipit laboriosam eligendi explicabo sed incidunt?",
    },
    {
      title: "Tariximiz",
      content:
        "        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut corrupti incidunt cum? Deleniti, perspiciatis veniam? Minima debitis harum quidem, id odio tempore molestiae error, adipisci assumenda, ratione quo! Nulla suscipit laboriosam eligendi explicabo sed incidunt?",
    },
  ];

  return (
    <div className="aboutus">
      <Header />
      <div>
        <div className="aboutus-img-container">
          <img
            className="aboutus-img"
            src="./src/assets/collective.svg"
            alt=""
          />
        </div>
        <div className="aboutus-text-main-wrapper">
          <div className="aboutus-first-wrapper">
            <div className="aboutus-text">
              <h3>Biz haqimizda</h3>
              <p>
                Ravshan Odil — O’zbekistondagi birinchi raqamli "Arzon umra
                biletlar" nomli loyiha asoschisi. Biz bu faoliyatimizni ijtimoiy
                tarmoqlar orqali boshladik. Barcha sifatli turfirmalarning
                paketlarini taqdim qilib bordik. Ko’pchilik bizdan turpaketlar
                va biletlar xarid qilib, bizning xizmatimizdan foydalangan holda
                ibodatlarini emin-erkin, mamnun holda ado etishdi.
              </p>
            </div>

            <div className="aboutus-second-wrapper">
              <div className="accordion">
                {accordionItems.map((item, index) => (
                  <div key={index} className="accordion-item">
                    <button
                      className="accordion-header"
                      onClick={() => toggleAccordion(index)}
                    >
                      {item.title}
                      <span>{openIndex === index ? "-" : "+     "}</span>
                    </button>
                    {openIndex === index && (
                      <div className="accordion-content">{item.content}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <StatsPanel />
        <div className="aboutus-parters">
          <Link to="/partners">Bizning hamkorlarimiz</Link>
          <TourGrid />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;

import React from "react";
// css
import "./App.css";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// pages
import MainPage from "./componets/MainPage/mainPage";
import Partners from "./componets/BizningHamkorlar/partners";
import AboutUs from "./componets/AboutUs/aboutUs";

// react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoReview from "./componets/VideoReview/videoReview";
import BreadCrumbs from "./componets/pages/BreadCrumbs";
import Econom from "./componets/Ekonom/econom";
import UmraPucks from "./componets/UmraPucks/UmraPucks";
import Tours from "./componets/pages/Tours/tours";
import Tickets from "./componets/AviaTickets/tickets";

function App() {
  return (
    <div className="conteiner">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/UmraPucks" element={<UmraPucks />} />
          <Route path="/econom" element={<Econom />} />
          <Route path="/UmraPucks/econom" element={<Econom />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/video-sharklar" element={<VideoReview />} />
          <Route path="/AviaTickets" element={<Tickets />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

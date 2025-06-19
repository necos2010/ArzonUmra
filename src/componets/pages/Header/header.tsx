import { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Modal from "../modal";

function Header() {
const [openModal, setOpenModal] = useState<boolean>(false);
const [menuOpen, setMenuOpen] = useState<boolean>(false);


  return (
    <div>
      <header className="header">
        <div className="header-logo-wrapper">
          <div className="logo">
            <img src="./src/assets/Main-logo.svg" alt="Main Logo" />
            <span className="ashan-odil">ashan odil</span>
          </div>
          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            <img src="./src/assets/burger.svg" alt="menu icon" />
          </div>
        </div>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <Link to="/" className="link">
            ASOSIY
          </Link>
          <Link to="/UmraPucks" className="link">
            UMRA TOPLAMLARI
          </Link>
          <Link to="/AviaTickets" className="link">
            AVIA CHIPTALAR
          </Link>
          <Link to="/aboutus" className="link">
            BIZ HAQIMIZDA
          </Link>
          <Link to="/partners" className="link">
            BIZNING HAMKORLAR
          </Link>
          <Link to="/video-sharklar" className="link">
            VIDEO SHARKLAR
          </Link>

          <button
            className="header-button mobile-only"
            onClick={() => setOpenModal(true)}
          >
            Boglanish
          </button>
        </nav>

        <button
          className="header-button desktop-only"
          onClick={() => setOpenModal(true)}
        >
          Boglanish
        </button>
      </header>

      {openModal && <Modal closeModal={setOpenModal} />}
    </div>
  );
}

export default Header;

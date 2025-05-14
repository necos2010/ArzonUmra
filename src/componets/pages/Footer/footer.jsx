import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-first-wrapper">
        <img src="./src/assets/rashanodil.svg" alt="" />

        <div className="location-wrapper">
          <div>
            <img src="./src/assets/location.svg" alt="" />
            <h4>Muxbir ko'chasi 3А, 100000, Тоshkent, Toshkent</h4>
          </div>
          <div>
            <img src="./src/assets/sms.svg" alt="" />
            <h4>ravshanodil2017@gmail.com</h4>
          </div>
          <div>
            <img src="./src/assets/call.svg" alt="" />
            <h4>+998883174774</h4>
          </div>
        </div>
      </div>

      <div className="footer-second-wrapper">
        <h2>Xarita</h2>
        <div>
          <p>ASOSIY</p>
          <p>UMRA TOPLAMLARI</p>
          <p>BIZ HAQIMIZDA</p>
          <p>BIZNING HAMKORLAR</p>
        </div>
      </div>

      <div className="footer-third-wrapper">
        <h2>BIZNI KUZATIB YUBORING</h2>
        <div className="app-wrapper">
          <img src="./src/assets/facebook.svg" alt="" />
          <img src="./src/assets/instagram.svg" alt="" />
          <img src="./src/assets/youtube.svg" alt="" />
          <img src="./src/assets/telegram.svg" alt="" />
        </div>
      </div>

      <div className="footer-fourth-wrapper">
        <h2>TO'LOV USULARI</h2>
        <div className="payment-logos">
          <img src="./src/assets/clikc.svg" alt="" />
          <img src="./src/assets/payme.svg" alt="" />
          <img src="./src/assets/humo.svg" alt="" />
          <img src="./src/assets/uzcard.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;

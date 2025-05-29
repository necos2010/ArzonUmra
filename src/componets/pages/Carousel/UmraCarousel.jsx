import React from "react";
import { Carousel } from "react-bootstrap";
import "./UmraCarousel.css";

const UmraCarousel = () => {
  return (
    <div className="umra-carousel">
      <Carousel>
        <Carousel.Item>
          <div className="umra-carousel__slide umra-carousel__slide--1">
            <div className="umra-carousel__text-content">
              <img
                className="umra-carousel__sat-logo"
                src="./src/assets/SAT.svg"
                alt=""
              />
              <h3>Arzon Umra to'plamlari</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <button>Batafsil</button>
            </div>
            <img
              src="./src/assets/Kaaba-img.svg"
              alt="Kaaba"
              className="umra-carousel__image"
            />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="umra-carousel__slide umra-carousel__slide--2">
            <div className="umra-carousel__text-content">
              <img
                className="umra-carousel__sat-logo"
                src="./src/assets/SAT.svg"
                alt=""
              />
              <h3>Arzon Umra to'plamlari</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <button>Batafsil</button>
            </div>
            <img
              src="./src/assets/Overlay.svg"
              alt="Kaaba"
              className="umra-carousel__image"
            />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="umra-carousel__slide umra-carousel__slide--3">
            <div className="umra-carousel__text-content">
              <img
                className="umra-carousel__sat-logo"
                src="./src/assets/SAT.svg"
                alt=""
              />
              <h3>Arzon Umra to'plamlari</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <button>Batafsil</button>
            </div>
            <img
              src="./src/assets/Overlay1.svg"
              alt="Kaaba"
              className="umra-carousel__image"
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default UmraCarousel;

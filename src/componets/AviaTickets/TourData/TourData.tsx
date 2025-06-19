import { useRef, useState, MouseEvent } from "react";
import "./TourData.css";
import TourDatas from "../../Data/TourDatas";

interface TourDataItem {
  id: number;
  title: string;
  header: string;
  description: string;
  imageUrl: string;
}

function TourData() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;

    setIsDown(true);
    scrollRef.current.classList.add("active");

    const slider = scrollRef.current;
    setStartX(e.pageX - slider.offsetLeft);
    setScrollLeft(slider.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
    if (scrollRef.current) scrollRef.current.classList.remove("active");
  };

  const handleMouseUp = () => {
    setIsDown(false);
    if (scrollRef.current) scrollRef.current.classList.remove("active");
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDown || !scrollRef.current) return;

    e.preventDefault();

    const slider = scrollRef.current;
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // sensitivity
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
          {TourDatas.map((data: TourDataItem) => (
            <div key={data.id} className="TourData">
              <img src={data.imageUrl} alt={data.title} className="TourData-img" />
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

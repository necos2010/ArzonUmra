import { useRef, useState, MouseEvent } from "react";
import "./TourCards.css";
import tourData from "../../Data/TourCard";

// Define the type for a single tour item (adjust properties as per your data)
interface Tour {
  id: string | number;
  imageUrl: string;
  title: string;
  description: string;
  linkText: string;
}

const TourCards: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Convert these to state so React keeps track and re-renders if needed
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;

    setIsDown(true);
    scrollRef.current.classList.add("active");

    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
    if (scrollRef.current) {
      scrollRef.current.classList.remove("active");
    }
  };

  const handleMouseUp = () => {
    setIsDown(false);
    if (scrollRef.current) {
      scrollRef.current.classList.remove("active");
    }
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDown || !scrollRef.current) return;
    e.preventDefault();

    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // чувствительность
    scrollRef.current.scrollLeft = scrollLeft - walk;
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
      {tourData.map((tour: Tour) => (
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
};

export default TourCards;

import { useEffect, useRef } from "react";
import "./rewiev.css";

// Define the type for each review item
interface Review {
  name: string;
  img: string;
  text: string;
}

const reviews: Review[] = [
  {
    name: "Abdul Aziz Al-Azhariy",
    img: "./src/assets/aziz.svg",
    text: "Ravshan Akamdan Bilet Visalar Olib Doimiy Safar Qilib Turaman. Ishlari Tez Va Sifatli !",
  },
  {
    name: "Azamat",
    img: "./src/assets/azamat.svg",
    text: "Assalomu Aleykum RavshanOdil Oka Baraka Topsinla Arzon Narhga Umraga Paket Qilib Berdila.",
  },
  {
    name: "Hojiakbar",
    img: "./src/assets/review-img.png",
    text: "Ravshan Odil Biletlarning Eng Dolzarb Narhlarini Qo‘ygani Ko‘pchilikka Qulaylik Bo‘lgan.",
  },
  {
    name: "Madina",
    img: "./src/assets/review-img.png",
    text: "Men Ravshan Odildan ikkinchi bor foydalanmoqdaman. Hammasi juda qulay va tez bo'ldi.",
  },
  {
    name: "Shahzod",
    img: "./src/assets/review-img.png",
    text: "Yordam kerak bo‘lsa, ular har doim tez javob berishadi. Juda samimiy va professionallar.",
  },
  {
    name: "Dilnoza",
    img: "./src/assets/review-img.png",
    text: "O‘tgan safar ota-onam uchun ham yordam berishdi. Ham narxi qulay, ham xizmat zo‘r.",
  },
  {
    name: "Jamshid",
    img: "./src/assets/review-img.png",
    text: "Hamma hujjatlar joyida, to‘g‘ri tayyorlanadi. Ishonchli xizmat ko‘rsatishadi!",
  },
];

// Add explicit prop types to the ReviewCard component
const ReviewCard: React.FC<Review> = ({ name, img, text }) => (
  <div className="rewiev">
    <div className="rewiev-info">
      <img src={img} alt={name} />
      <h4 className="rewiev-name">{name}</h4>
    </div>
    <p>{text}</p>
  </div>
);

const Rewiev: React.FC = () => {
  // Define ref type explicitly as HTMLDivElement or null
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1; // auto scroll
      }
    }, 30); // speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="review-main-wrapper">
      <h2 className="rewiev-h2">FIKR VA MULOHAZALAR</h2>
      <div className="scroll-container" ref={scrollRef}>
        {reviews.map((rev, idx) => (
          <ReviewCard key={idx} {...rev} />
        ))}
      </div>
    </div>
  );
};

export default Rewiev;

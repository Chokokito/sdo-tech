import { FileBox } from "lucide-react";
import React from "react";
export default function Card({ children, content, icon }) {
  const cardRef = React.useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;
    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    cardRef.current.style.transform =
      "perspective(600px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      ref={cardRef}
      className="bg-white/10 backdrop-blur-lg border border-black/20 rounded-3xl md:w-[250px] md:h-[400px] flex flex-col items-start justify-baseline p-6 transition-transform duration-300"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ willChange: "transform" }}
    >
      <h1 className="poppins-semibold text-black/80 text-left text-lg mb-2">
        {children}
      </h1>
      <p className="w-full overflow-hidden text-ellipsis ">{content}</p>
    </div>
  );
}

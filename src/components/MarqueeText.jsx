import React from 'react';
import '../styles/MarqueeText.css';

const texts = [
  "INDOOR SIGNS",
  "VEHICLE WRAPS",
  "PRINT MEDIA",
  "OUTDOOR SIGNS",
  "CHANNEL LETTERS",
  "PYLON SIGNS",
];

const MarqueeText = () => {
  return (
    <div className="marquee-container bg-orange-500 py-8 overflow-hidden">
      <div className="marquee-track">
        <div className="marquee-content">
          {texts.map((text, index) => (
            <span key={index} className="marquee-item text-white text-4xl font-bold mx-8">
              {text} 
            </span>
          ))}
        </div>
        <div className="marquee-content">
          {texts.map((text, index) => (
            <span key={`dup-${index}`} className="marquee-item text-white text-4xl font-bold mx-8">
              {text} 
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeText;
